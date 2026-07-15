"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  bulletIntro: string;
  bullets: string[];
  image: string;
}

export default function Services() {
  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
  };

  const services: ServiceItem[] = [
    {
      id: "kitchen",
      title: "Kitchen Remodeling",
      subtitle: "The Culinary Heart of Your Home",
      desc: "Our award-winning kitchen designs blend state-of-the-art utility with luxury aesthetics. Whether you require a full open-concept layout change, dual-island spaces, custom cabinet construction, or high-end solid marble slabs, we execute every detail with absolute precision.",
      bulletIntro: "Our kitchen remodels feature:",
      bullets: [
        "Bespoke solid-wood custom cabinetry",
        "Quartz, marble, and granite countertops & backsplashes",
        "Premium smart appliance integrations",
        "Open-concept structural layout transformations",
        "Curated accent, task, and recessed LED layout schemes"
      ],
      image: "/images/kitchen.png"
    },
    {
      id: "bathroom",
      title: "Bathroom Remodeling",
      subtitle: "Your Private Spa Retreat",
      desc: "Reimagine your master bathroom into a serene personal spa. We specialize in custom wet rooms, curbless walk-in steam showers, standalone soaking tubs, custom double vanities with premium quartz tops, and underfloor radiant heating grids.",
      bulletIntro: "Our bathroom renovations include:",
      bullets: [
        "Curbless entry double showers with frameless enclosures",
        "High-end freestanding soaking tubs and brass fixtures",
        "Custom solid wood vanities with integrated backlit mirrors",
        "Heated tile floors and digital shower systems",
        "Premium stone, mosaic, and marble tiling installations"
      ],
      image: "/images/bathroom.png"
    },
    {
      id: "addition",
      title: "Home Additions",
      subtitle: "Expand Your Living Spaces Seamlessly",
      desc: "Need more room? Avoid the hassle of moving by expanding your footprint. We construct top-tier family sunrooms, second-story expansions, attached master suite wings, and in-law suites that match the historic lines of your current house.",
      bulletIntro: "Our structural additions offer:",
      bullets: [
        "Architectural plans matching existing roof and exterior lines",
        "Slab, crawlspace, or basement structural foundations",
        "Permit processing and historic district HOA management",
        "Energy-efficient insulation, windows, and climate control",
        "Sunrooms, master suites, and garage integrations"
      ],
      image: "/images/addition.png"
    },
    {
      id: "basement",
      title: "Basement Remodeling",
      subtitle: "Maximize Your Lower-Level Space",
      desc: "We turn cold, unfinished basements into dry, warm, and highly usable family spaces. From private home theaters and workout gyms to wet bars, custom kitchens, and extra guest suites, the possibilities are unlimited.",
      bulletIntro: "Our basement builds feature:",
      bullets: [
        "Premium walk-out exterior door and window escapes",
        "Custom home bars, cellars, and mini kitchens",
        "Acoustically soundproofed theater and media rooms",
        "Professional moisture barriers and dry-core flooring",
        "Extra guest bedrooms and luxury walk-in bathrooms"
      ],
      image: "/images/hero-bg.png"
    },
    {
      id: "outdoor",
      title: "Outdoor Living",
      subtitle: "Extend Your Style Beyond Walls",
      desc: "Create an outdoor oasis perfect for entertaining. We design and install low-maintenance composite decks, stone paver patios, complete outdoor kitchens with built-in grills, fire pits, custom pavilions, and outdoor fireplaces.",
      bulletIntro: "Our outdoor living projects include:",
      bullets: [
        "Multi-level Trex composite custom decking",
        "Flagstone, travertine, and paver patios",
        "Outdoor kitchens with stone countertops and stainless appliances",
        "Gas fire pits, masonry fireplaces, and pavilions",
        "Under-deck ceiling drainage systems and landscape lighting"
      ],
      image: "/images/addition.png"
    },
    {
      id: "indoor",
      title: "Indoor Living & Wine Cellars",
      subtitle: "Custom Tailored Lifestyle Touches",
      desc: "From custom mudrooms and home offices with built-in bookshelves to climate-controlled wine cellars, we craft detailed custom millwork and built-ins that elevate the convenience and aesthetic value of your daily living spaces.",
      bulletIntro: "Our lifestyle solutions provide:",
      bullets: [
        "Climate-controlled custom glass wine displays",
        "Home offices with bespoke shelving and desks",
        "Functional mudrooms with custom storage cubbies",
        "Elegant wainscoting, crown molding, and fireplace mantels",
        "Hidden secret doors and storage closets"
      ],
      image: "/images/kitchen.png"
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
              Our Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mt-4 tracking-tight">
              Remodeling Services in Northern Virginia
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-300 mt-3 max-w-xl mx-auto font-light">
              Providing luxury kitchen, bath, addition, basement, and custom build solutions tailored to your unique requirements.
            </p>
          </div>
        </section>

        {/* Services Detail List */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-28"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl bg-gray-100 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text Details Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <span className="text-accent text-xs font-bold uppercase tracking-widest">
                        {service.subtitle}
                      </span>
                      <h2 className="font-heading text-3xl font-bold text-primary mt-1 tracking-tight">
                        {service.title}
                      </h2>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                      {service.desc}
                    </p>

                    <div>
                      <h3 className="font-heading text-sm font-bold text-primary mb-3">
                        {service.bulletIntro}
                      </h3>
                      <ul className="grid grid-cols-1 gap-2 font-sans text-sm text-gray-500 font-light">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-3 font-bold">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex items-center space-x-4">
                      <button
                        onClick={handleBookNow}
                        className="px-6 py-3 bg-primary text-white hover:bg-accent hover:text-primary text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md flex items-center"
                      >
                        Book This Service 
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal />
    </>
  );
}
