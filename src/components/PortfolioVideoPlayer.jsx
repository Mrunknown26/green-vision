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

// Phones and tablets never grant unmuted autoplay before the first tap.
function isTouchDevice() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

// Guards against re-entrancy when the gesture came from the player itself.
function currentContainerContains(container, target) {
  return !!container && target instanceof Node && container.contains(target);
}

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
  const pendingPlayRef = useRef(false);
  const isOnScreenRef = useRef(false);
  const mutedFallbackRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
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

  // Play unmuted, always. If the browser blocks unmuted autoplay we stay
  // paused on the first frame rather than starting the clip without sound.
  const playWithSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    setIsMuted(false);

    const playPromise = video.play();
    if (playPromise === undefined) return;

    playPromise
      .then(() => {
        pendingPlayRef.current = false;
      })
      .catch(() => {
        // Blocked until the page has been interacted with — remember that this
        // clip still wants to play, and pick it up on the first user gesture.
        video.pause();
        pendingPlayRef.current = true;

        // On touch devices that gesture may never come before the clip scrolls
        // past, and there is no way to get sound without one. Start muted so it
        // still autoplays, then restore sound on the first touch.
        if (!isTouchDevice()) return;
        video.muted = true;
        setIsMuted(true);
        video
          .play()
          .then(() => {
            mutedFallbackRef.current = true;
          })
          .catch(() => {});
      });
  }, []);

  // Autoplay while the video is on screen, pause it once it leaves.
  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          // Tall, full-bleed clips may never reach a high ratio, so also treat
          // "fills a good chunk of the viewport" as being on screen.
          const fillsViewport =
            typeof window !== 'undefined' &&
            entry.intersectionRect.height >= window.innerHeight * 0.5;
          const onScreen =
            entry.isIntersecting &&
            (entry.intersectionRatio >= 0.5 || fillsViewport);

          isOnScreenRef.current = onScreen;

          if (onScreen) {
            if (video.paused) playWithSound();
          } else {
            pendingPlayRef.current = false;
            if (!video.paused) video.pause();
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px',
      }
    );

    observer.observe(currentContainer);

    return () => {
      observer.disconnect();
    };
  }, [item.id, playWithSound]);

  // First user gesture anywhere on the page unblocks sound — start the clip
  // then, so its very first playback is never a muted one.
  useEffect(() => {
    const resumeWithSound = (event) => {
      const video = videoRef.current;
      if (!video) return;
      if (!pendingPlayRef.current && !mutedFallbackRef.current) return;
      // A gesture on the player itself is handled by its own click toggle.
      if (currentContainerContains(containerRef.current, event.target)) return;

      // Already rolling, just muted — give it its sound back.
      if (mutedFallbackRef.current) {
        mutedFallbackRef.current = false;
        pendingPlayRef.current = false;
        video.muted = false;
        setIsMuted(false);
        return;
      }

      if (!isOnScreenRef.current || !video.paused) return;
      playWithSound();
    };

    const events = ['pointerdown', 'keydown', 'touchstart'];
    events.forEach((name) => window.addEventListener(name, resumeWithSound));

    return () => {
      events.forEach((name) => window.removeEventListener(name, resumeWithSound));
    };
  }, [playWithSound]);

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

      // First tap on a clip that fell back to muted autoplay turns sound on
      // rather than stopping it.
      if (!video.paused && mutedFallbackRef.current) {
        mutedFallbackRef.current = false;
        video.muted = false;
        setIsMuted(false);
        return;
      }

      if (video.paused) {
        pendingPlayRef.current = false;
        video.muted = false;
        setIsMuted(false);
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
              console.warn('Unmuted playback was blocked by the browser:', err);
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
    mutedFallbackRef.current = false;
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
        playsInline
        webkit-playsinline="true"
        muted={isMuted}
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
        {/* Media fragment makes the browser paint the clip's own first frame as
            the poster, instead of a thumbnail supplied on the item object. */}
        <source src={`${item.src}#t=0.1`} type="video/mp4" />
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
