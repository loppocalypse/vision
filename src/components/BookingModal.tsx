"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import BookingCalendar from "./BookingCalendar";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking-modal", handleOpen);
    
    // Support hash navigations
    const handleHashChange = () => {
      if (
        window.location.hash === "#booking-calendar" ||
        window.location.hash === "#jotformcontent"
      ) {
        setIsOpen(true);
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Check on mount

    return () => {
      window.removeEventListener("open-booking-modal", handleOpen);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    // Clear hash if current matches modal triggers
    if (
      window.location.hash === "#booking-calendar" ||
      window.location.hash === "#jotformcontent"
    ) {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in" onClick={handleClose}>
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button overlay */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 flex items-center justify-center w-9 h-9 bg-primary/5 hover:bg-primary/10 text-primary hover:text-black rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Close booking calendar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Calendar Wrapper */}
        <div className="max-h-[90vh] overflow-y-auto">
          <BookingCalendar />
        </div>
      </div>
    </div>
  );
}
