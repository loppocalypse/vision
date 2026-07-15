"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "About Us", url: "/about-us" },
    { label: "Services", url: "/services" },
    { label: "Portfolio", url: "/portfolios" },
    { label: "Cost Estimator", url: "/estimator" },
    { label: "Blog", url: "/blog" },
    { label: "FAQ", url: "/faq" },
    { label: "Contact Us", url: "/contact-us" },
  ];

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${!isHomePage || isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 text-primary border-b border-gray-100/80"
          : "bg-transparent py-5 text-white"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Vision Custom Build + Remodel Logo"
                width={200}
                height={52}
                className="h-10 sm:h-12 w-auto transition-all duration-300"
                style={{
                  filter: !isHomePage || isScrolled ? "none" : "invert(1) hue-rotate(180deg)"
                }}
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.url;
                return (
                  <Link
                    key={link.label}
                    href={link.url}
                    className={`font-sans text-sm font-medium tracking-wide transition-all hover:text-accent relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform ${isActive
                      ? "text-accent after:scale-x-100"
                      : !isHomePage || isScrolled
                        ? "text-primary"
                        : "text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Contact Info */}
            <div className="hidden md:flex items-center space-x-5">
              {/* Phone */}
              <a
                href="tel:703-997-9717"
                className={`flex items-center text-sm font-semibold transition-all hover:text-accent ${!isHomePage || isScrolled ? "text-primary" : "text-white"
                  }`}
              >
                <Phone className="w-4 h-4 mr-2 text-accent" />
                +1 (703)-997-9717
              </a>

              <button
                onClick={handleBookNow}
                className="px-5 py-2.5 bg-accent-green border-2 border-accent-green text-primary hover:bg-transparent hover:text-accent-green rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-102"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden space-x-3">
              <a
                href="tel:+1 (703)-997-9717"
                className={`p-2 rounded-full border transition-all ${!isHomePage || isScrolled
                  ? "border-primary/20 text-primary hover:text-accent"
                  : "border-white/20 text-white hover:text-accent"
                  }`}
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all ${!isHomePage || isScrolled ? "text-primary" : "text-white"
                  }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-30 md:hidden bg-primary/98 flex flex-col justify-center px-6 py-20 transition-all duration-500 ease-in-out transform ${isMobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                key={link.label}
                href={link.url}
                className={`font-sans text-2xl font-semibold tracking-wide transition-all ${isActive ? "text-accent" : "text-white hover:text-accent"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-12 flex flex-col items-center space-y-6 text-center">
          <a
            href="tel:703-997-9717"
            className="flex items-center text-lg font-bold text-white hover:text-accent transition-all"
          >
            <Phone className="w-5 h-5 mr-2 text-accent" />
            703-997-9717
          </a>
          <button
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              handleBookNow(e);
            }}
            className="w-full max-w-xs px-8 py-4 bg-accent-green text-primary font-bold uppercase tracking-wider rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg text-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
