"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { CheckCircle2, Award, Users, Heart } from "lucide-react";

export default function AboutUs() {
  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
  };

  const values = [
    {
      title: "Family-Owned & Local",
      desc: "Deeply rooted in the Northern Virginia community, treating every client like neighbors and partners.",
      icon: <Users className="w-6 h-6 text-accent" />
    },
    {
      title: "Uncompromising Quality",
      desc: "Using premium materials and master craftsmanship to build extensions and rooms that stand the test of time.",
      icon: <Award className="w-6 h-6 text-accent" />
    },
    {
      title: "Complete Transparency",
      desc: "No hidden charges. Detailed itemized estimates and schedules so you are always in control.",
      icon: <CheckCircle2 className="w-6 h-6 text-accent" />
    },
    {
      title: "Client-Centric Philosophy",
      desc: "Active listening, collaborative design iterations, and a single point of contact from start to finish.",
      icon: <Heart className="w-6 h-6 text-accent" />
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
              Our Story
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mt-4 tracking-tight">
              About Vision Custom Build + Remodel
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-300 mt-3 max-w-xl mx-auto font-light">
              Crafting premium spaces and building lifetime trust in the DMV community for over 15 years.
            </p>
          </div>
        </section>

        {/* Section 1: Detailed Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Image */}
              <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                <Image
                  src="/images/hero-bg.png"
                  alt="Vision Custom Build finished remodeling project"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Right Column: Text block */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <h2 className="font-heading text-3xl font-bold text-primary tracking-tight">
                  Over a Decade of Inspired Renovations
                </h2>
                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                  Vision Custom Build + Remodel began with a straightforward mission: to provide homeowners in Northern Virginia with an honest, premium, and stress-free solution to building and remodeling. Over the past 15 years, we have grown from a local contractor team into an award-winning design-build company.
                </p>
                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                  As a family-owned and operated firm, we appreciate that your home is your sanctuary. Whether we are redesigning a kitchen for family gatherings, modernizing a master bathroom, or expanding your living area with a custom home addition, we coordinate each step with absolute precision and premium materials.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleBookNow}
                    className="px-6 py-3 bg-accent text-primary hover:bg-primary hover:text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md"
                  >
                    Discuss Your Vision
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Values Grid */}
        <section className="py-20 bg-bg-light border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
                Core Foundations
              </span>
              <h2 className="font-heading text-3xl font-bold text-primary mt-4 tracking-tight">
                Our Core Philosophies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((val, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  <div className="bg-bg-light p-3 rounded-2xl w-14 h-14 flex items-center justify-center shrink-0 border border-gray-50">
                    {val.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-primary tracking-wide mb-2">
                      {val.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                </div>
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
