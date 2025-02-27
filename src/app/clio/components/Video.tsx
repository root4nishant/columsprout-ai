"use client";
import Section from "@/components/custom/reusables/Section";
import React, { useState, useEffect, useRef } from "react";

// Import the new TwoStepAnimation component
import Animation from "../animation/Animation";
import AnimationSteffanieClio from "../animation/Animation2";

const VideoWithMessages = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer to autoplay video when in view
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
      <div className="relative h-auto items-start justify-start overflow-hidden rounded-md">
        <video
          ref={videoRef}
          className="w-auto object-cover"
          src={
            isInView
              ? "https://storage.googleapis.com/cs-website-assets/clio/clio-hero-dd.webm"
              : undefined
          }
          autoPlay={isInView}
          loop
          muted
          width={400}
          height={400}
        />

        {/* Overlay your two-step animation on top of the video */}
        <div className="absolute lg:bottom-12 md:bottom-5 bottom-5 lg:left-5 md:left-3 left-2 z-10">
          <Animation />
        </div>
        <div className="absolute lg:bottom-12 md:bottom-5 bottom-5 lg:right-5 md:right-3 right-2 z-10">
          <AnimationSteffanieClio />
        </div>
        <div className="absolute bottom-0 rounded-md lg:h-60 h-20 w-full bg-gradient-to-t from-black to-transparent text-white flex justify-between">
          <div className="absolute  bottom-0 flex justify-between w-full  lg:p-4 p-2 lg:text-[14px] text-[8px]">
            <div className="text-left flex justify-end w-full">
              <span>Brandon&apos;s Customer Success Manager</span>
            </div>
            <div className="text-right flex justify-end w-full">
              <span>Steffanie&apos;s Shopping Assistant</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VideoWithMessages;
