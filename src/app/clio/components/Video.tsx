"use client";
import Section from "@/components/custom/reusables/Section";
import React, { useState, useEffect, useRef } from "react";

const VideoWithMessages = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    {
      id: 1,
      text: "Brandon: Exchange Order Items - Received white covers instead of blue.",
      position: "left",
    },
    {
      id: 2,
      text: "Steffanie: Browsing Puffer Jacket.",
      position: "right",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages.length]);

  const videoRef = useRef(null);
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
      <div className="relative lg:h-[90vh] items-start justify-start overflow-hidden rounded-md">
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

        <div className=" rounded-md ">
          {messages.map(
            (message, index) =>
              currentMessage === index && (
                <div
                  key={message.id}
                  className={`absolute md:w-[300px] w-[170px] shadow-lg lg:shadow-gray-500 shadow-gray-500 z-10 ${
                    message.position === "left"
                      ? "lg:left-10 left-2"
                      : "lg:right-10 right-2"
                  } lg:bottom-20 bottom-12 bg-white/50 text-[0.5rem] lg:text-[0.8rem] text-black lg:p-4 p-2 rounded-md transition-transform ease-in-out  duration-100`}
                >
                  <p className="font-bold text-primary-dark">
                    {message.text.split(":")[0]}
                  </p>
                  <p>{message.text.split(":")[1]}</p>
                </div>
              )
          )}
          <div className="absolute bottom-0 rounded-md lg:h-60 h-20 w-full bg-gradient-to-t from-black to-transparent text-white flex justify-between">
            <div className="absolute  bottom-0 flex justify-between w-full  lg:p-4 p-2 lg:text-[0.9rem] text-[0.7rem]">
              <span>Brandon&apos;s Customer Success Manager</span>
              <span>Steffanie&apos;s Shopping Assistant</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VideoWithMessages;
