"use client";
import Section from "@/components/custom/reusables/Section";
import React, { useEffect, useRef, useState } from "react";
import Animation from "../animation/Animation";
import AnimatedText from "./TextAnimation";

const VideoWithMessages = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentVideoRef = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }
    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  return (
    <Section>
      {/* Parent container can be full width, 
          and we keep it auto-height so it expands with the video */}
      <div className="relative w-full h-auto items-start justify-start overflow-hidden rounded-md">
        <video
          ref={videoRef}
          // Make the video responsive: fill parent width, auto height
          className="w-full h-auto object-cover"
          src={
            isInView
              ? "https://storage.googleapis.com/cs-website-assets/tabi/tabi-hero-dd.webm"
              : undefined
          }
          autoPlay={isInView}
          loop
          muted
        />
        {/* Overlay container with responsive spacing */}
        <div className="absolute lg:top-6 top-2 lg:left-6 left-2 flex flex-col gap-2">
          <AnimatedText />
          <Animation />
        </div>
      </div>
    </Section>
  );
};

export default VideoWithMessages;
