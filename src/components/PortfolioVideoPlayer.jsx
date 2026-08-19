'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Film,
  Sparkles,
} from 'lucide-react';

export default function PortfolioVideoPlayer({
  item,
  index,
  isActive,
  onPlay,
  onPause,
  onExpandLightbox,
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(item.aspectRatio || (16 / 9));
  const controlsTimeoutRef = useRef(null);

  // Sync if this video is no longer the active playing video
  useEffect(() => {
    if (!isActive && isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  // Viewport visibility detection (IntersectionObserver)
  // If the video is not visible on screen, it automatically stops/pauses
  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
              if (onPause) onPause(item.id);
            }
          }
        });
      },
      {
        threshold: [0, 0.2, 0.5],
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(currentContainer);

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [item.id, onPause]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handlePlayToggle = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      const video = videoRef.current;
      if (!video) return;

      if (video.paused) {
        if (onPlay) {
          onPlay(item.id, video);
        }
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.warn('Playback error or interrupted, retrying muted:', err);
              // Fallback to muted playback if browser blocks unmuted play
              video.muted = true;
              setIsMuted(true);
              video.play().then(() => setIsPlaying(true)).catch((e) => console.error('Final play attempt failed:', e));
            });
        }
      } else {
        video.pause();
        setIsPlaying(false);
        if (onPause) {
          onPause(item.id);
        }
      }
    },
    [item.id, onPlay, onPause]
  );

  const handleMuteToggle = useCallback((e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const current = video.currentTime;
    const total = video.duration || 1;
    setCurrentTime(current);
    setProgress((current / total) * 100);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration || 0);
    if (video.videoWidth && video.videoHeight) {
      setAspectRatio(video.videoWidth / video.videoHeight);
    }
    setIsLoaded(true);
  }, []);

  const handleSeek = useCallback((e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * (video.duration || 0);
    video.currentTime = seekTime;
    setProgress(pos * 100);
  }, []);

  const handleFullscreenToggle = useCallback((e) => {
    if (e) e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch((err) => console.warn(err));
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => console.warn(err));
      }
    }
  }, []);

  const formatTime = (secs) => {
    if (isNaN(secs) || secs === 0) return '0:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ aspectRatio: `${aspectRatio}` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (isPlaying) setShowControls(false);
      }}
      className="relative w-full bg-zinc-950 overflow-hidden group select-none cursor-pointer"
      onClick={handlePlayToggle}
    >
      {/* Video Element (Full Width Matching Image Width) */}
      <video
        ref={videoRef}
        poster={item.thumbSrc}
        playsInline
        webkit-playsinline="true"
        muted={isMuted}
        defaultMuted
        loop
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => {
          setIsPlaying(true);
          if (onPlay) onPlay(item.id, videoRef.current);
        }}
        onPause={() => {
          setIsPlaying(false);
          if (onPause) onPause(item.id);
        }}
        className="w-full h-full object-contain bg-zinc-950 block"
      >
        <source src={item.src} type="video/mp4" />
      </video>

      {/* Center Big Play/Pause Button (Visible when paused or briefly on hover) */}
      <AnimatePresence>
        {(!isPlaying || showControls) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <button
              type="button"
              onClick={handlePlayToggle}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/70 backdrop-blur-md border border-brand-lime/40 text-brand-lime flex items-center justify-center shadow-2xl hover:scale-110 hover:border-brand-lime hover:bg-brand-lime hover:text-black transition-all duration-300 group/btn"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 sm:w-9 sm:h-9 fill-current" />
              ) : (
                <Play className="w-7 h-7 sm:w-9 sm:h-9 ml-1 fill-current" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Control Bar */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-0 inset-x-0 z-30 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2"
          >
            {/* Scrubber / Progress Bar */}
            <div
              onClick={handleSeek}
              className="relative w-full h-2 bg-white/20 hover:h-3 rounded-full cursor-pointer transition-all duration-200 group/scrub"
            >
              <div
                className="absolute top-0 left-0 h-full bg-brand-lime rounded-full transition-[width] duration-100 relative"
                style={{ width: `${progress}%` }}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover/scrub:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="flex items-center justify-between text-white text-xs sm:text-sm pt-1">
              <div className="flex items-center gap-3">
                {/* Play/Pause Mini Toggle */}
                <button
                  type="button"
                  onClick={handlePlayToggle}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/90 hover:text-brand-lime transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  )}
                </button>

                {/* Mute / Unmute */}
                <button
                  type="button"
                  onClick={handleMuteToggle}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/90 hover:text-brand-lime transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                {/* Expand / Lightbox Button */}
                {onExpandLightbox && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onExpandLightbox(index);
                    }}
                    title="View in Lightbox"
                    aria-label="View in Lightbox"
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white/90 hover:text-brand-lime transition-colors sm:flex items-center gap-1 text-[11px] font-mono"
                  >
                    <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
