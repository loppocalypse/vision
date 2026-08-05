"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Music,
  MoreVertical,
  Sparkles,
  Signal,
  Wifi,
  Battery
} from "lucide-react";
import Reveal from "./Reveal";

export default function PhoneVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1284);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showPlayStateOverlay, setShowPlayStateOverlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("1:10 PM");

  const videoRef = useRef<HTMLVideoElement>(null);

  // Update current time to look like a real phone status bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Update video progress bar
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => { });
      setIsPlaying(true);
    }

    // Trigger overlay icon animation
    setShowPlayStateOverlay(true);
    setTimeout(() => setShowPlayStateOverlay(false), 6000);
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering play/pause
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const handleFollowToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Premium Text & Follow Details */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <Reveal animation="fade-in" delay={100}>
              <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full self-start">
                Vision In Action
              </span>
            </Reveal>

            <Reveal animation="fade-in-up" delay={200}>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-[1.15]">
                Watch Our Craftsmanship <br className="hidden sm:inline" />
                Come to Life in Real-Time
              </h2>
            </Reveal>

            <Reveal animation="fade-in-up" delay={350}>
              <p className="font-sans text-base text-gray-600 leading-relaxed font-light">
                We believe in complete transparency and capturing the beauty of our transformations. Follow us on Instagram to get daily updates, behind-the-scenes walkthroughs, before-and-after reels, and design inspiration straight from our luxury project sites across Northern Virginia.
              </p>
            </Reveal>

            <Reveal animation="fade-in-up" delay={450}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="bg-accent/10 p-2.5 rounded-xl">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-primary">Daily Project Highlights</h4>
                    <p className="font-sans text-xs text-gray-500 font-light">See our carpenters and designers hard at work.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3.5">
                  <div className="bg-accent/10 p-2.5 rounded-xl">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-primary">Design Material Sourcing</h4>
                    <p className="font-sans text-xs text-gray-500 font-light">Join us as we handpick marble slabs and custom fixtures.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal animation="fade-in-up" delay={550} className="pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-all shadow-md text-sm border border-transparent"
              >
                Follow @VisionCustomBuild
              </a>
            </Reveal>
          </div>

          {/* Right Column: Premium iPhone Instagram Reel Player */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <Reveal animation="scale-in" delay={300}>
              {/* iPhone Outer Chassis */}
              <div className="relative mx-auto w-[330px] h-[660px] bg-slate-900 rounded-[52px] border-[12px] border-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden ring-1 ring-white/10 select-none">

                {/* iPhone Dynamic Island / Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 flex items-center justify-between px-3.5 ring-1 ring-white/5">
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-950 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60 blur-[0.5px]"></div>
                  </div>
                  <div className="w-10 h-1 bg-neutral-900 rounded-full"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-950/80 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-green-500/40"></div>
                  </div>
                </div>

                {/* iPhone Top Status Bar */}
                <div className="absolute top-0 inset-x-0 h-12 flex justify-between items-center px-8 text-[11px] font-semibold text-white z-30 select-none pointer-events-none">
                  <span>{currentTime}</span>
                  <div className="flex items-center space-x-1.5">
                    <Signal className="w-3 h-3 text-white fill-white" />
                    <Wifi className="w-3 h-3 text-white" />
                    <Battery className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* iPhone Screen Container */}
                <div
                  onClick={handlePlayPause}
                  className="relative w-full h-full bg-black cursor-pointer group/screen overflow-hidden"
                >
                  {/* The Video Element */}
                  <video
                    ref={videoRef}
                    src="/vision-video-1.mp4"
                    className="w-full h-full object-cover"
                    loop
                    muted={isMuted}
                    autoPlay
                    playsInline
                  />

                  {/* Top Header Dark Overlay */}
                  <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-20"></div>

                  {/* Bottom Content Dark Overlay */}
                  <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-20"></div>

                  {/* Diagonal Glass Reflection Flare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>

                  {/* Floating Play/Pause Action Overlay Animation */}
                  {showPlayStateOverlay && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 animate-ping duration-300">
                      <div className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white">
                        {isPlaying ? <Play className="w-8 h-8 fill-white" /> : <Pause className="w-8 h-8 fill-white" />}
                      </div>
                    </div>
                  )}

                  {/* Reels Floating Overlay Buttons (Right Side) */}
                  <div className="absolute right-3.5 bottom-20 flex flex-col items-center space-y-5 z-30">
                    {/* Like / Heart Button */}
                    <button
                      onClick={handleLikeToggle}
                      className="flex flex-col items-center space-y-1 group/btn"
                    >
                      <div className={`p-2.5 rounded-full transition-transform active:scale-90 ${isLiked ? "bg-red-500/20 text-red-500" : "bg-black/40 backdrop-blur-sm border border-white/10 text-white hover:bg-black/60"}`}>
                        <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500" : ""}`} />
                      </div>
                      <span className="text-[10px] font-bold text-white shadow-sm">{likeCount}</span>
                    </button>

                    {/* Comments Button */}
                    <div className="flex flex-col items-center space-y-1">
                      <div className="p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white hover:bg-black/60 active:scale-95 transition-all">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-white shadow-sm">42</span>
                    </div>

                    {/* Share Button */}
                    <div className="flex flex-col items-center space-y-1">
                      <div className="p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white hover:bg-black/60 active:scale-95 transition-all">
                        <Send className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-white shadow-sm">18</span>
                    </div>

                    {/* Bookmark / Save Button */}
                    <button
                      onClick={handleSaveToggle}
                      className="flex flex-col items-center"
                    >
                      <div className={`p-2.5 rounded-full transition-transform active:scale-90 ${isSaved ? "bg-amber-500/20 text-amber-500" : "bg-black/40 backdrop-blur-sm border border-white/10 text-white hover:bg-black/60"}`}>
                        <Bookmark className={`w-5 h-5 ${isSaved ? "fill-amber-500" : ""}`} />
                      </div>
                    </button>

                    {/* Options Button */}
                    <div className="p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white hover:bg-black/60">
                      <MoreVertical className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Text and Caption Details (Bottom Left) */}
                  <div className="absolute left-4 right-16 bottom-6 z-30 flex flex-col space-y-3.5 text-white select-none">

                    {/* User profile & follow button */}
                    <div className="flex items-center space-x-2">
                      <div className="relative w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-white/10">
                        <Image
                          src="/images/logo.png"
                          alt="Vision Custom Build Logo"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-xs font-bold tracking-wide">visioncustombuild</span>
                      <button
                        onClick={handleFollowToggle}
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md transition-all ${isFollowing ? "bg-white/15 text-white border border-white/10" : "bg-white text-black border border-transparent hover:bg-accent-green hover:text-primary"}`}
                      >
                        {isFollowing ? "Following" : "Follow"}
                      </button>
                    </div>

                    {/* Reel Caption */}
                    <p className="text-[11px] font-light leading-relaxed text-gray-200 line-clamp-3">
                      Modern basement remodeling in progress! 🛠️ Installing premium solid countertops and hand-constructed cabinets. Stay tuned for the final result. <span className="font-semibold text-accent-green">#basementremodel #custombuild</span>
                    </p>

                    {/* Audio track label */}
                    <div className="flex items-center space-x-1.5 text-[9px] text-gray-300">
                      <Music className="w-3 h-3 animate-spin duration-3000 shrink-0" />
                      <span className="truncate">Original audio • visioncustombuild</span>
                    </div>
                  </div>

                  {/* Volume Control Icon (Top Right) */}
                  <button
                    onClick={handleMuteToggle}
                    className="absolute top-14 right-4 z-30 p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white hover:bg-black/60 active:scale-95 transition-all"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  {/* Simulated Instagram Reels Progress Bar */}
                  <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white/20 z-30">
                    <div
                      className="h-full bg-white transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* iPhone Home Indicator bar */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/60 rounded-full z-40"></div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
