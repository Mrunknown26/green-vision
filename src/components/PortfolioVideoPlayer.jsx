'use client';

import { useEffect, useRef, useState } from 'react';

export default function PortfolioVideoPlayer({ item, isActive, onPlay, onPause }) {
  const videoRef = useRef(null);
  // The source is attached only once the clip reaches the viewport. Without
  // this, iOS starts fetching every clip on the page at load and the first tap
  // sits there buffering behind them.
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          const played = video.play();
          if (played) played.catch(() => {});
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Another clip took over playback — stand down.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || isActive || video.paused) return;
    video.pause();
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? item.src : undefined}
      // poster={item.thumbSrc}
      autoPlay
      controls
      controlsList="nodownload"
      playsInline
      muted
      loop
      preload="none"
      aria-label={item.alt}
      style={{ aspectRatio: `${item.aspectRatio || 16 / 9}` }}
      className="w-full h-full object-contain bg-zinc-950 block"
      onPlay={() => onPlay?.(item.id, videoRef.current)}
      onPause={() => onPause?.(item.id)}
    />
  );
}
