"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import PortfolioGrid from "@/components/PortfolioGrid";
import Image from "next/image";

export default function Portfolios() {
  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
  };

  return (
    <>
      <Navbar />

      <main className="pt-24 flex-1">
        {/* Banner Section */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(238,77,56,0.08),transparent_50%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
              Our Gallery
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mt-4 tracking-tight">
              Our Remodeling Portfolio
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-300 mt-3 max-w-xl mx-auto font-light">
              Explore actual finished projects showing our carpentry, marble styling, and home additions in Northern Virginia.
            </p>
          </div>
        </section>

        {/* Portfolio Grid component */}
        <PortfolioGrid />

        {/* Call to Action banner */}
        <section className="py-20 bg-primary text-white relative overflow-hidden border-t border-accent/15">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Craft Your Custom Vision?
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-300 mt-4 max-w-xl mx-auto font-light leading-relaxed">
              We provide free, transparent in-home consultations across Fairfax County, Arlington, and Alexandria. Plan your dream space today.
            </p>
            <div className="mt-8">
              <button
                onClick={handleBookNow}
                className="px-8 py-4 bg-accent text-primary hover:bg-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-lg hover:scale-105"
              >
                Schedule Free Estimate
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal />
    </>
  );
}
