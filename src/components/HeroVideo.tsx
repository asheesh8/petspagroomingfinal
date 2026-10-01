"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Immersive hero background video with a seamless loop:
 * near the end of each 8s pass we crossfade to the video's own last frame,
 * quietly rewind, then fade back in — no jarring restart.
 * Falls back to the poster image when autoplay is blocked or data-saver is on.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [holding, setHolding] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    const tick = () => {
      if (video.duration && video.currentTime > video.duration - 0.45) {
        setHolding(true);
        window.setTimeout(() => {
          video.currentTime = 0.01;
          video.play().catch(() => {});
          window.setTimeout(() => setHolding(false), 350);
        }, 900);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    const onPlaying = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    video.addEventListener("playing", onPlaying);
    video.play().catch(() => setHolding(true));
    return () => {
      video.removeEventListener("playing", onPlaying);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        muted
        playsInline
        autoPlay
        preload="auto"
        poster="/images/hero-poster.jpg"
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          holding ? "opacity-0" : "opacity-100"
        }`}
        style={{ objectPosition: "center 38%" }}
      >
        <source src="/hero-groom.webm" type="video/webm" />
        <source src="/hero-groom.mp4" type="video/mp4" />
      </video>
      {/* hold frame shown during the crossfade gap — a plain img so it is ready the instant the video fades */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-lastframe.jpg"
        alt=""
        aria-hidden
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          holding ? "opacity-100" : "opacity-0"
        }`}
        style={{ objectPosition: "center 38%" }}
      />
      {/* readability + brand wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-plum-ink/60 via-plum-ink/35 to-plum-ink/75" />
    </div>
  );
}
