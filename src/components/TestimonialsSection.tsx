"use client";

import { Star, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface GoogleReview {
  id: number;
  author: string;
  initials: string;
  avatarBg: string;
  date: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  isLocalGuide?: boolean;
}

const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

export default function TestimonialsSection() {
  const reviews: GoogleReview[] = [
    {
      id: 1,
      author: "Morgan Bernard",
      initials: "MB",
      avatarBg: "bg-blue-600",
      date: "2 months ago",
      role: "New Construction Client",
      location: "Ashburn, VA",
      rating: 5,
      isLocalGuide: true,
      text: "Our journey to build our new home turned out to be an incredible stroke of luck. We connected with Carol and the amazing team at Vision Custom Build—and that changed everything. From our very first meeting, Carol shifted our entire perspective. We quickly realized we were working with someone who was honest, transparent, and truly listened to what we wanted."
    },
    {
      id: 2,
      author: "Austin Cooper",
      initials: "AC",
      avatarBg: "bg-emerald-600",
      date: "3 months ago",
      role: "Master Bath Remodel",
      location: "Arlington, VA",
      rating: 5,
      text: "Carol worked wonders on our master bathroom renovation. Her ability to balance our desire for a luxurious feel with practical features was impressive. The team maintained a high standard of professionalism and ensured that everything was completed to our satisfaction. Extremely attentive to our feedback."
    },
    {
      id: 3,
      author: "Samuel Parker",
      initials: "SP",
      avatarBg: "bg-amber-600",
      date: "1 month ago",
      role: "Modern Home Office",
      location: "McLean, VA",
      rating: 5,
      isLocalGuide: true,
      text: "Gigi brought our vision for a modern home office to life in ways we never imagined. Her creativity and ability to maximize the space were incredible. The project was managed seamlessly, with clear communication and regular updates. Gigi went above and beyond to ensure we were happy with the design and execution."
    },
    {
      id: 4,
      author: "Allie Zoe",
      initials: "AZ",
      avatarBg: "bg-indigo-600",
      date: "4 weeks ago",
      role: "Living Room Addition",
      location: "Fairfax, VA",
      rating: 5,
      text: "Working with Homer was an absolute delight! We wanted to expand and redesign our living room, and Homer made the entire process feel effortless. He took our ideas and turned them into a cohesive design plan that matched our style perfectly. The project was completed on time, and the workmanship was outstanding."
    },
    {
      id: 5,
      author: "Briley Irvin",
      initials: "BI",
      avatarBg: "bg-rose-600",
      date: "2 weeks ago",
      role: "Basement Transformation",
      location: "Sterling, VA",
      rating: 5,
      text: "Taylor was amazing to work with during our basement remodel. She had creative ideas that transformed an underutilized space into a functional and stylish area for our family. The project timeline was clear, and the team adhered to it perfectly. Combines innovative design with complete practicality."
    },
    {
      id: 6,
      author: "Daniel Sterling",
      initials: "DS",
      avatarBg: "bg-purple-600",
      date: "5 days ago",
      role: "Gourmet Kitchen Build",
      location: "Great Falls, VA",
      rating: 5,
      isLocalGuide: true,
      text: "Absolute craftsmanship from start to finish. We did an open-concept kitchen and dining remodel with structural load-bearing changes. The carpentry was flawless, schedules were met exactly, and clean-up was performed daily. Worth every penny to work with a team of this caliber."
    }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden" id="testimonials">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(238,77,56,0.08),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <Reveal animation="fade-in-up" className="max-w-2xl">
            <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full inline-block mb-4">
              Client Feedback
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Google Maps Reviews
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-300 mt-2 font-light">
              We take pride in turning visions into reality. Read verified stories of how we deliver high-craftsmanship remodeling solutions in Northern Virginia.
            </p>
          </Reveal>

          {/* Google Summary Badge */}
          <Reveal animation="scale-in" delay={150} className="shrink-0">
            <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-3xl p-6 flex items-center space-x-6">
              <div className="bg-white p-3.5 rounded-2xl flex items-center justify-center shadow-lg">
                <GoogleIcon className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-heading text-2xl font-bold text-white">5.0</span>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-sans text-xs text-gray-400 mt-1 font-light">
                  Based on 47 Google reviews
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] font-bold uppercase tracking-wider text-accent hover:text-white flex items-center mt-2 transition-colors group"
                >
                  View on Google Maps
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bento Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Reveal
              key={review.id}
              animation="fade-in-up"
              delay={(index % 3) * 120}
              className="h-full flex flex-col"
            >
              <div className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm p-6 sm:p-8 rounded-3xl hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 flex flex-col justify-between h-full group relative">
                
                {/* Google G watermark corner */}
                <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-60 transition-opacity">
                  <GoogleIcon className="w-4.5 h-4.5" />
                </div>

                <div>
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-5 text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-sm text-gray-200 leading-relaxed font-light mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Profile Card Footer */}
                <div className="flex items-center space-x-4 pt-5 border-t border-white/[0.05] mt-auto">
                  <div className={`w-11 h-11 rounded-full ${review.avatarBg} flex items-center justify-center text-white font-heading font-bold text-sm shadow-md`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h4 className="font-heading text-sm font-bold text-white tracking-wide">
                        {review.author}
                      </h4>
                      {review.isLocalGuide && (
                        <span className="text-[9px] bg-accent/20 text-accent font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-md">
                          Guide
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-[11px] text-gray-400 mt-0.5 font-light">
                      {review.role} • {review.location}
                    </p>
                    <span className="font-sans text-[10px] text-gray-500 font-light block mt-0.5">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
