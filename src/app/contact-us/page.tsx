"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import BookingCalendar from "@/components/BookingCalendar";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  const contactDetails = [
    {
      title: "Phone Number",
      value: "703-997-9717",
      desc: "Call or text for immediate scheduling support.",
      href: "tel:703-997-9717",
      icon: <Phone className="w-6 h-6 text-accent" />
    },
    {
      title: "Email Address",
      value: "info@visioncustom.com",
      desc: "Send us project details, blueprints, or RFP documents.",
      href: "mailto:info@visioncustom.com",
      icon: <Mail className="w-6 h-6 text-accent" />
    },
    {
      title: "Service Area Base",
      value: "Fairfax, Virginia",
      desc: "Proudly serving Northern Virginia, D.C., and Southern Maryland.",
      href: "#areas",
      icon: <MapPin className="w-6 h-6 text-accent" />
    },
    {
      title: "Business Hours",
      value: "Mon - Fri: 8 AM - 6 PM",
      desc: "Closed weekends & major holidays.",
      href: "#",
      icon: <Clock className="w-6 h-6 text-accent" />
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
              Connect With Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mt-4 tracking-tight">
              Contact Our Build Team
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-300 mt-3 max-w-xl mx-auto font-light">
              Submit your request online or connect with our project managers directly by phone.
            </p>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Side: Contact Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div className="mb-8">
                  <h2 className="font-heading text-2xl font-bold text-primary tracking-tight">
                    Get in Touch
                  </h2>
                  <p className="font-sans text-sm text-gray-500 mt-1 font-light leading-relaxed">
                    Have questions about an upcoming home remodel or custom addition? We look forward to hearing from you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {contactDetails.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="p-6 bg-bg-light/40 border border-gray-100 rounded-3xl flex items-start space-x-5 hover:border-accent/40 transition-colors duration-200"
                    >
                      <div className="bg-white p-3 rounded-2xl w-14 h-14 flex items-center justify-center shrink-0 shadow-sm border border-gray-50">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-bold text-primary tracking-wide">
                          {item.title}
                        </h3>
                        <p className="font-heading text-base font-bold text-accent mt-0.5 not-italic">
                          {item.value}
                        </p>
                        <p className="font-sans text-xs text-gray-400 mt-1 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Side: Inline Booking Calendar */}
              <div className="lg:col-span-7">
                <BookingCalendar />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal />
    </>
  );
}
