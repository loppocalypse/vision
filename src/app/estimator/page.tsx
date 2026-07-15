"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import CostEstimator from "@/components/CostEstimator";
import { Calculator } from "lucide-react";

export default function EstimatorPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 flex-1 bg-primary">
        {/* Banner Section */}
        <section className="bg-primary text-white py-16 relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(238,77,56,0.08),transparent_50%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full inline-flex items-center">
              <Calculator className="w-3.5 h-3.5 mr-1 text-accent" />
              Budget Tool
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mt-4 tracking-tight">
              Project Cost Estimator
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-300 mt-3 max-w-xl mx-auto font-light">
              Get an instant cost estimate range for your Northern Virginia custom addition or home remodel.
            </p>
          </div>
        </section>

        {/* Estimator Interface Section */}
        <section className="py-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(165,210,132,0.05),transparent_40%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <CostEstimator />
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal />
    </>
  );
}
