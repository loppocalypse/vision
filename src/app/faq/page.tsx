"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function FAQ() {
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
              Support Center
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mt-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-300 mt-3 max-w-xl mx-auto font-light">
              Find answers to questions about our licensing, estimations, scheduling, and warranty conditions.
            </p>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <FAQSection />

        {/* Contact Block */}
        <section className="py-20 bg-bg-light border-t border-gray-100">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h2 className="font-heading text-2xl font-bold text-primary tracking-tight">
              Still Have Questions?
            </h2>
            <p className="font-sans text-sm text-gray-500 mt-2 font-light leading-relaxed">
              Our support team is available Monday through Friday to discuss details about your building project. Call us directly or drop an email.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:703-997-9717"
                className="w-full sm:w-auto px-6 py-3 bg-primary text-white hover:bg-accent hover:text-primary text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call 703-997-9717
              </a>
              <button
                onClick={handleBookNow}
                className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-200 text-gray-700 hover:border-accent hover:text-accent text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300"
              >
                Submit Form Online
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
