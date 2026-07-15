"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  desc: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "5 Kitchen Remodeling Trends Shaping Northern Virginia in 2026",
      desc: "Discover the material palettes, smart tech integration, and layouts currently preferred by Fairfax and Arlington homeowners for luxury kitchens.",
      category: "Kitchen Remodeling",
      date: "June 24, 2026",
      readTime: "5 min read",
      image: "/images/kitchen.png",
      slug: "trends-2026"
    },
    {
      id: 2,
      title: "Understanding the Permitting & HOA Approvals Process in Fairfax County",
      desc: "A practical guide to navigating local building permits, setback rules, and historic district restrictions for custom home additions.",
      category: "Home Additions",
      date: "May 18, 2026",
      readTime: "8 min read",
      image: "/images/addition.png",
      slug: "permitting-guide"
    },
    {
      id: 3,
      title: "How to Budget for a Luxury Master Bathroom Renovation",
      desc: "Breakdowns of plumbing shifts, tile costs, double vanities, and smart shower fixtures so you can plan your master bath with financial confidence.",
      category: "Bathroom Remodeling",
      date: "April 11, 2026",
      readTime: "6 min read",
      image: "/images/bathroom.png",
      slug: "bathroom-budgeting"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="pt-24 flex-1">
        {/* Banner Section */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(238,77,56,0.08),transparent_50%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
              Design Center
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mt-4 tracking-tight">
              Remodeling Advice &amp; Guides
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-300 mt-3 max-w-xl mx-auto font-light">
              Expert articles to guide you through planning, budgeting, and selecting materials for your home builds.
            </p>
          </div>
        </section>

        {/* Blog Posts Archive Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col justify-between bg-bg-light/40 border border-gray-100 rounded-3xl p-5 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    {/* Post Image */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    {/* Category Label */}
                    <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                      {post.category}
                    </span>
                    {/* Date / Read time */}
                    <div className="flex items-center space-x-3 text-xs text-gray-400 font-sans mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    {/* Title */}
                    <h3 className="font-heading text-base font-bold text-primary group-hover:text-accent transition-colors tracking-wide leading-snug mb-3">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed font-light mb-6">
                      {post.desc}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold uppercase text-primary hover:text-accent transition-colors"
                  >
                    Read Full Guide 
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal />
    </>
  );
}
