"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do I contact Vision Custom Build + Remodel for an estimate?",
      answer: "You can reach us directly by calling 703-997-9717, emailing info@visioncustom.com, or clicking any of our 'Book Now' buttons to fill out our consult request form. We will reach out within 24 hours to schedule your visit."
    },
    {
      question: "Where do I start with my remodeling or new home project?",
      answer: "The process begins with our complimentary in-home consultation. One of our remodeling experts will visit your space to hear your goals, evaluate structural requirements, and discuss approximate budget targets."
    },
    {
      question: "Do I get a written estimate from Vision Custom Build + Remodel?",
      answer: "Absolutely. Following our concept consultation and preliminary design, we prepare a transparent, itemized written estimate detailing scope of work, material allowances, permits, and timeline parameters."
    },
    {
      question: "Do you handle major remodeling projects?",
      answer: "Yes, we specialize in major transformations. Our portfolio spans luxury kitchen remodels, complete master bath overhauls, custom basement builds, structured home additions, and ground-up new custom home constructions."
    },
    {
      question: "When can you begin my project?",
      answer: "Start times depend on scope, design approval, material lead times, and municipal permitting. Typically, small-to-medium remodels begin within 4 to 6 weeks of contract signing, while additions may require longer design-permitting phases."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-full">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            Answers to your Vision Custom Build + Remodel questions. Find out more about our process, estimates, and schedules.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-300 ${
                  isOpen 
                    ? "border-accent/40 bg-bg-light/30 shadow-md shadow-accent/5" 
                    : "border-gray-200 hover:border-accent/20 hover:bg-bg-light/10"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-bold text-primary tracking-wide">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 text-accent bg-accent/10 p-1.5 rounded-full">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 border-t border-gray-100" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 font-sans text-sm text-gray-600 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
