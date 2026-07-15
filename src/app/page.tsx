"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Check, ClipboardList, PenTool, Gem, ShieldCheck, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";

export default function Home() {
  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
  };

  const services = [
    {
      title: "Kitchen Remodeling",
      desc: "Turn your kitchen into a luxurious culinary haven with bespoke cabinets, custom marble counter islands, and state-of-the-art designs.",
      image: "/images/kitchen.png",
      anchor: "/services#kitchen"
    },
    {
      title: "Bathroom Remodeling",
      desc: "Create a serene, spa-like experience in your master bathroom with walk-in double showers, standalone tubs, and floating custom vanities.",
      image: "/images/bathroom.png",
      anchor: "/services#bathroom"
    },
    {
      title: "Home Additions",
      desc: "Expand your square footage with seamless home extensions, sunrooms, and structures that perfectly complement your current architecture.",
      image: "/images/addition.png",
      anchor: "/services#addition"
    }
  ];

  const benefits = [
    {
      title: "Free In-Home Consultation",
      desc: "We visit your space to discuss design layouts, budgets, and scheduling parameters at no upfront cost."
    },
    {
      title: "One Point of Contact",
      desc: "A dedicated project lead manages your build from initial architectural concepts to final paint inspects."
    },
    {
      title: "Industry-Leading Warranty",
      desc: "We guarantee our structural workmanship and premium material selections for complete peace of mind."
    },
    {
      title: "Premium Quality Materials",
      desc: "We partner with top-tier suppliers to obtain solid woods, natural stone slabs, and commercial hardware."
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Dream",
      desc: "Envision your ideal space, and let us help bring that vision to life with our creative design consultations."
    },
    {
      num: "02",
      title: "Consultation",
      desc: "We map out structural possibilities, inspect dimensions, and outline a realistic project budget framework."
    },
    {
      num: "03",
      title: "Budget & Design",
      desc: "Our architects draft detailed blueprints and material specifications that match your financial expectations."
    },
    {
      num: "04",
      title: "Material Selection",
      desc: "Choose from our curated collection of tiles, stones, colors, and textures guided by our design team."
    },
    {
      num: "05",
      title: "Build",
      desc: "Our master carpenters and builders coordinate trades, maintain high cleanliness, and handle scheduling with precision."
    },
    {
      num: "06",
      title: "Enjoy",
      desc: "Walk through your finished home, verify details, review warranties, and step into your beautifully transformed space."
    }
  ];

  const blogPosts = [
    {
      title: "5 Kitchen Remodeling Trends Shaping Northern Virginia in 2026",
      desc: "Discover the material palettes, smart tech integration, and layouts currently preferred by Fairfax and Arlington homeowners.",
      date: "June 24, 2026",
      readTime: "5 min read",
      image: "/images/kitchen.png",
      url: "/blog/trends-2026"
    },
    {
      title: "Understanding the Permitting & HOA Approvals Process in Fairfax County",
      desc: "A practical guide to navigating local building permits, setback rules, and historic district restrictions for home additions.",
      date: "May 18, 2026",
      readTime: "8 min read",
      image: "/images/addition.png",
      url: "/blog/permitting-guide"
    },
    {
      title: "How to Budget for a Luxury Master Bathroom Renovation",
      desc: "Breakdowns of plumbing shifts, tile costs, double vanities, and smart shower fixtures so you can plan with financial confidence.",
      date: "April 11, 2026",
      readTime: "6 min read",
      image: "/images/bathroom.png",
      url: "/blog/bathroom-budgeting"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Dark Tint Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.png"
              alt="Vision Custom Build luxury interior design"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary/75 md:bg-primary/70"></div>
            {/* Visual bottom transition gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-light to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-16 md:mt-24">
            <span className="text-accent text-xs sm:text-sm font-bold uppercase tracking-widest bg-accent/20 border border-accent/30 px-4 py-2 rounded-full inline-block mb-6 animate-fade-in">
              Fairfax County&apos;s Premier Home Builder
            </span>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              Build + Remodel with <br className="hidden sm:inline" />
              <span className="text-accent">the Best in Virginia</span>
            </h1>
            
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
              At Vision Custom Build + Remodel, we believe your dream home is within reach. 
              For over 15 years, our expert designers and craftsmen have brought custom visions to life with exceptional quality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleBookNow}
                className="w-full sm:w-auto px-8 py-4 bg-accent-green text-primary font-bold uppercase tracking-wider rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg text-sm border-2 border-accent-green hover:border-white"
              >
                Book Free Consultation
              </button>
              <Link
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-primary transition-all text-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Services Grid */}
        <section className="py-24 bg-bg-light" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
                What We Do
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary mt-4 tracking-tight">
                Our Expertise in Home Transformation
              </h2>
              <p className="font-sans text-sm text-gray-500 mt-2 max-w-xl mx-auto font-light">
                Tailored architectural drafts, top-tier selections, and flawless carpentry executions for your home remodeling needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Service Image */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-primary tracking-wide mb-3">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed font-light mb-6">
                      {service.desc}
                    </p>
                  </div>
                  <Link
                    href={service.anchor}
                    className="flex items-center text-xs font-bold uppercase text-accent tracking-widest hover:text-primary transition-colors group"
                  >
                    Learn Details 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Benefits (About Intro) */}
        <section className="py-24 bg-white border-y border-gray-100" id="benefits">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Heading & Paragraph */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-full self-start">
                  Why Choose Us
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                  Benefits of Vision Custom Build + Remodel
                </h2>
                <p className="font-sans text-base text-gray-600 leading-relaxed font-light">
                  In building and remodeling over 15 years, we are a family-owned and operated business rooted in Fairfax’s vibrant community. Our story began with a simple idea: to provide homeowners with a trusted partner for their remodeling dreams.
                </p>
                <p className="font-sans text-sm text-gray-500 leading-relaxed font-light italic border-l-2 border-accent pl-4">
                  &ldquo;We take pride in turning visions into reality, building lasting relationships through quality, transparency, and dedication.&rdquo;
                </p>
                
                <div className="pt-4">
                  <button
                    onClick={handleBookNow}
                    className="px-6 py-3.5 bg-primary text-white hover:bg-accent-green hover:text-primary text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 border border-transparent hover:border-accent-green"
                  >
                    Consult Our Designers
                  </button>
                </div>
              </div>

              {/* Right Column: Grid of value indicators */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => {
                  const icons = [
                    <ClipboardList key="c" className="w-8 h-8 text-accent" />,
                    <PenTool key="p" className="w-8 h-8 text-accent" />,
                    <ShieldCheck key="s" className="w-8 h-8 text-accent" />,
                    <Gem key="g" className="w-8 h-8 text-accent" />
                  ];
                  return (
                    <div
                      key={index}
                      className="p-6 bg-bg-light/40 border border-gray-100 rounded-3xl flex flex-col space-y-4 hover:border-accent/40 transition-colors"
                    >
                      <div className="bg-white p-3 rounded-2xl w-14 h-14 flex items-center justify-center shadow-sm border border-gray-50">
                        {icons[index % icons.length]}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-primary tracking-wide">
                        {benefit.title}
                      </h3>
                      <p className="font-sans text-sm text-gray-500 leading-relaxed font-light">
                        {benefit.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Filterable Portfolio Grid */}
        <PortfolioGrid />

        {/* Section 5: Remodeling Process */}
        <section className="py-24 bg-primary text-white relative overflow-hidden" id="process">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(238,77,56,0.06),transparent_50%)]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
                Our Method
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                Our Remodeling Process
              </h2>
              <p className="font-sans text-sm text-gray-300 mt-2 max-w-xl mx-auto font-light">
                Our step-by-step approach ensures a smooth journey from concept to completion, bringing your vision to life with expert precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative p-8 bg-bg-dark/30 border border-white/10 rounded-3xl hover:border-accent/40 transition-colors duration-300"
                >
                  {/* Large watermarked step number */}
                  <span className="absolute -top-7 left-6 font-heading text-6xl font-black text-accent/15 tracking-tight text-stroke-accent">
                    {step.num}
                  </span>
                  
                  <div className="pt-4">
                    <h3 className="font-heading text-xl font-bold text-white tracking-wide mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Recent Blog Posts */}
        <section className="py-24 bg-white" id="blog">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
                  Learning Center
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary mt-4 tracking-tight">
                  Recent Blog Posts
                </h2>
              </div>
              <Link
                href="/blog"
                className="mt-4 sm:mt-0 inline-flex items-center text-xs font-bold uppercase text-accent tracking-widest hover:text-primary transition-colors group"
              >
                See All Articles
                <ArrowRight className="w-4.5 h-4.5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
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
                      <Link href={post.url}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed font-light mb-6">
                      {post.desc}
                    </p>
                  </div>
                  <Link
                    href={post.url}
                    className="inline-flex items-center text-xs font-bold uppercase text-primary hover:text-accent transition-colors"
                  >
                    Read Article 
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Testimonials */}
        <TestimonialsSection />

        {/* Section 8: Areas We Serve */}
        <section className="py-24 bg-bg-light border-b border-gray-100" id="areas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
                Service Locations
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary mt-4 tracking-tight">
                Areas We Serve
              </h2>
              <p className="font-sans text-sm text-gray-500 mt-2 max-w-xl mx-auto font-light">
                Providing top-tier design-build and remodeling solutions across Northern Virginia, Maryland, and Washington, D.C.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Virginia Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center mb-6 text-primary">
                  <div className="bg-primary/5 p-3 rounded-2xl mr-3">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-wide">Virginia</h3>
                </div>
                <ul className="space-y-3 font-sans text-sm font-light text-gray-600">
                  {["Alexandria", "Arlington", "Fairfax", "McLean", "Great Falls", "Vienna", "Sterling", "Leesburg"].map((city) => (
                    <li key={city} className="flex items-center">
                      <Check className="w-4 h-4 text-accent mr-2.5 shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>

              {/* D.C. Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center mb-6 text-primary">
                  <div className="bg-primary/5 p-3 rounded-2xl mr-3">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-wide">Washington, D.C.</h3>
                </div>
                <ul className="space-y-3 font-sans text-sm font-light text-gray-600">
                  {["Georgetown", "Logan Circle", "Capitol Hill", "Adams Morgan", "Woodley Park", "Columbia Heights", "Mount Vernon"].map((city) => (
                    <li key={city} className="flex items-center">
                      <Check className="w-4 h-4 text-accent mr-2.5 shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Maryland Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center mb-6 text-primary">
                  <div className="bg-primary/5 p-3 rounded-2xl mr-3">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-wide">Maryland</h3>
                </div>
                <ul className="space-y-3 font-sans text-sm font-light text-gray-600">
                  {["Chevy Chase", "Bethesda", "Potomac", "Silver Spring", "South Kensington", "Rockville", "Forest Glen"].map((city) => (
                    <li key={city} className="flex items-center">
                      <Check className="w-4 h-4 text-accent mr-2.5 shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ Accordions */}
        <FAQSection />
      </main>

      <Footer />
      <BookingModal />
    </>
  );
}
