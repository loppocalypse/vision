"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in";
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  threshold?: number; // 0 to 1
}

export default function Reveal({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  duration = 800,
  threshold = 0.1
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop tracking to keep it visible as you scroll past
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { 
        threshold,
        rootMargin: "0px 0px -40px 0px" // triggers slightly before entering the full viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-in-up": return "opacity-0 translate-y-8";
        case "fade-in-left": return "opacity-0 -translate-x-8";
        case "fade-in-right": return "opacity-0 translate-x-8";
        case "scale-in": return "opacity-0 scale-95";
        default: return "opacity-0";
      }
    } else {
      switch (animation) {
        case "fade-in-up": return "opacity-100 translate-y-0";
        case "fade-in-left": return "opacity-100 translate-x-0";
        case "fade-in-right": return "opacity-100 translate-x-0";
        case "scale-in": return "opacity-100 scale-100";
        default: return "opacity-100";
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
}
