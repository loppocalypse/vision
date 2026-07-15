"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const mainLinks = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about-us" },
    { label: "View Our Portfolio", url: "/portfolios" },
    { label: "Our Remodeling Services", url: "/services" },
    { label: "Request a Free Estimate", url: "/contact-us" },
  ];

  const serviceLinks = [
    { label: "Kitchen Remodeling", url: "/services#kitchen" },
    { label: "Bathroom Remodeling", url: "/services#bathroom" },
    { label: "Basement Remodeling", url: "/services#basement" },
    { label: "Home Addition", url: "/services#addition" },
    { label: "Outdoor Living", url: "/services#outdoor" },
    { label: "Indoor Living", url: "/services#indoor" },
  ];

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
  };

  return (
    <footer className="bg-primary text-white border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Branding & Intro */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Vision Custom Build + Remodel Logo"
                width={200}
                height={52}
                className="h-10 sm:h-12 w-auto transition-all duration-300"
                style={{
                  filter: "invert(1) hue-rotate(180deg)"
                }}
                priority
              />
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed font-sans font-light">
              At Vision Custom Build + Remodel, we bring your vision to life through exceptional craftsmanship and a commitment to personalized, inspired design. Crafting spaces you&apos;ll love, with passion and precision.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-accent tracking-wide mb-6 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3 font-sans text-sm font-light">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-50"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-accent tracking-wide mb-6 uppercase">
              Services
            </h3>
            <ul className="space-y-3 font-sans text-sm font-light">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-50"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Estimate */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="font-heading text-lg font-bold text-accent tracking-wide mb-6 uppercase">
                Contact Us
              </h3>
              <ul className="space-y-4 font-sans text-sm font-light">
                <li className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-accent shrink-0 mt-0.5" />
                  <span>Vision Custom Build & Remodel 9512 Main St #20, Fairfax, VA 22031</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-accent shrink-0" />
                  <a href="tel:+1 (703)-997-9717" className="hover:text-accent transition-colors">
                    +1 (703)-997-9717
                  </a>
                </li>
                <li className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-accent shrink-0" />
                  <a href="mailto:info@visioncustom.com" className="hover:text-accent transition-colors">
                    info@visioncustom.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <button
                onClick={handleBookNow}
                className="w-full py-3 bg-accent text-primary hover:bg-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md"
              >
                Request Free Estimate
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between font-sans text-xs text-gray-400 font-light">
          <p className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Vision Custom Build + Remodel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span>Licensed &amp; Insured in Virginia</span>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
