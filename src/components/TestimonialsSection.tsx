"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  author: string;
  date: string;
  text: string;
  role: string;
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      author: "Morgan Bernard",
      date: "April 2025",
      role: "New Construction Client",
      text: "Our journey to build our new home turned out to be an incredible stroke of luck. Initially, we found ourselves on a path that led to disappointment and frustration. But after doing some research and reaching out, we happened to connect with Carol and the amazing team at Vision Custom Build—and that changed everything. From our very first meeting, Carol shifted our entire perspective. We quickly realized we were working with someone who was honest, transparent, and truly listened to what we wanted in our dream home. The entire experience was smooth and stress-free from start to finish."
    },
    {
      author: "Austin Cooper",
      date: "January 2025",
      role: "Master Bath Remodel",
      text: "Carol worked wonders on our master bathroom renovation. Her ability to balance our desire for a luxurious feel with practical features was impressive. The team maintained a high standard of professionalism and ensured that everything was completed to our satisfaction. Carol was attentive to our feedback throughout the process, making adjustments where necessary."
    },
    {
      author: "Samuel Parker",
      date: "January 2025",
      role: "Modern Home Office",
      text: "Gigi brought our vision for a modern home office to life in ways we never imagined. Her creativity and ability to maximize the space were incredible. The project was managed seamlessly, with clear communication and regular updates. Gigi went above and beyond to ensure we were happy with the design and execution. The end result is functional yet stylish."
    },
    {
      author: "Allie Zoe",
      date: "January 2025",
      role: "Living Room Addition",
      text: "Working with Homer was an absolute delight! We wanted to expand and redesign our living room, and Homer made the entire process feel effortless. He took our ideas and turned them into a cohesive design plan that matched our style perfectly. The project was completed on time, and the team's workmanship was outstanding. Homer kept us informed throughout and was always available to answer questions."
    },
    {
      author: "Briley Irvin",
      date: "January 2025",
      role: "Basement Transformation",
      text: "Taylor was amazing to work with during our basement remodel. She had creative ideas that transformed an underutilized space into a functional and stylish area for our family. The project timeline was clear, and the team adhered to it perfectly, completing everything as promised. Taylor's ability to combine innovative design with practicality truly impressed us."
    }
  ];

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, testimonials.length]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden" id="testimonials">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(238,77,56,0.08),transparent_50%)]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Trusted by Countless Homeowners
          </h2>
          <p className="font-sans text-sm text-gray-300 mt-2 max-w-xl mx-auto font-light">
            Read stories of how we turn design plans into high-craftsmanship realities in Northern Virginia.
          </p>
        </div>

        {/* Carousel Window */}
        <div className="relative bg-bg-dark/40 border border-accent/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl backdrop-blur-sm">
          {/* Quote icon watermark */}
          <Quote className="absolute right-8 bottom-8 w-24 h-24 text-accent/5 pointer-events-none" />

          {/* Testimonial Content Wrapper */}
          <div
            className={`transition-opacity duration-300 flex flex-col justify-between h-full ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Stars */}
            <div className="flex items-center space-x-1 mb-6 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Review text */}
            <blockquote className="font-sans text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed font-light italic mb-8">
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </blockquote>

            {/* Reviewer Details */}
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <cite className="font-heading text-lg font-bold text-accent not-italic tracking-wide">
                  {testimonials[activeIndex].author}
                </cite>
                <p className="text-xs text-gray-400 mt-0.5 font-light">
                  {testimonials[activeIndex].role}
                </p>
              </div>
              <span className="text-xs text-gray-400 font-sans mt-2 sm:mt-0 font-light">
                {testimonials[activeIndex].date}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 bg-accent text-primary hover:bg-white rounded-full transition-all shadow-lg hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleBookNow}
              className="px-6 py-2.5 bg-white text-primary hover:bg-accent hover:text-primary rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg hidden sm:block"
            >
              Request Consultation
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-accent text-primary hover:bg-white rounded-full transition-all shadow-lg hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index !== activeIndex) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(index);
                    setIsAnimating(false);
                  }, 300);
                }
              }}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-accent" : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
