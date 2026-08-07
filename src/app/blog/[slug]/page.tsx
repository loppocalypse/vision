"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Calendar, Clock, ArrowLeft, ArrowRight, ExternalLink, HelpCircle, Shield, Award } from "lucide-react";

interface Article {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
}

const ARTICLES: Record<string, Article> = {
  "mclean-luxury-additions": {
    title: "Luxury Residential Additions in McLean: Maximizing Estate Space and Value",
    category: "Home Additions",
    date: "July 12, 2026",
    readTime: "7 min read",
    image: "/images/addition.png",
    content: (
      <>
        <p className="lead text-lg text-gray-700 leading-relaxed font-sans mb-6 font-light">
          McLean is synonymous with elite Northern Virginia living. Characterized by expansive custom-built estates, rolling wood buffers near the Potomac, and historically significant properties, it attracts high-income families who value the neighborhood's prestige, privacy, and outstanding school systems. 
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          For affluent McLean homeowners, when a family grows or lifestyle needs change, relocating is rarely the preferred option. High transaction costs, limited real estate inventory, and strong neighborhood ties mean that homeowners typically choose to modify, renovate, or add square footage to their existing luxury properties. 
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">Why Custom Additions and Remodels Dominate McLean</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          In McLean's high-value zip codes (such as 22101 and 22102), land value represents a significant portion of a property's total equity. Extending the home’s layout or adding a vertical wing leverages this underlying land equity, allowing homeowners to preserve their meticulously curated outdoor buffers and local connections.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Many estates, especially those situated near historic boundaries like the <a href="https://www.fairfaxcounty.gov/parks/historic-sites/salona" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center font-semibold">Salona Homestead <ExternalLink className="w-3 h-3 ml-0.5" /></a>, require careful, historically sensitive design integration. Home additions in these sectors are built using custom-tinted brick veneer, natural slate roofing shingles, and premium copper flashing details to respect and mirror the neighborhood's classic heritage architecture.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">Popular Custom Additions in McLean Estates</h3>
        <div className="space-y-6 my-8">
          <div className="bg-bg-light/60 border-l-4 border-accent p-5 rounded-r-xl">
            <h4 className="font-bold text-primary mb-1">1. Multi-Generational Guest Wings &amp; In-Law Suites</h4>
            <p className="text-sm text-gray-600">
              Affluent families are increasingly building custom suites featuring private entrances, boutique kitchenettes, spa-style walk-in showers, and integrated smart home zoning. These wings offer guests or parents total independence while remaining connected to the main house.
            </p>
          </div>
          <div className="bg-bg-light/60 border-l-4 border-accent p-5 rounded-r-xl">
            <h4 className="font-bold text-primary mb-1">2. Custom Garage Suites &amp; Collector Carriage Houses</h4>
            <p className="text-sm text-gray-600">
              To store collector car portfolios or provide dedicated workshop bays, homeowners build multi-car carriage houses. These detached or semi-attached structures feature heavy-timber trusses, custom epoxy flooring, and second-floor executive offices or gym space.
            </p>
          </div>
          <div className="bg-bg-light/60 border-l-4 border-accent p-5 rounded-r-xl">
            <h4 className="font-bold text-primary mb-1">3. Glass Sunrooms &amp; Outdoor Kitchen Pavilions</h4>
            <p className="text-sm text-gray-600">
              Blending indoor comfort with outdoor living, custom glass-enclosed sunrooms feature insulated glass ceilings, radiant heated limestone flooring, and automated folding glass walls that open onto custom decks and pools.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">Grounding in the McLean Community Context</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Successful additions do not just align with structural blueprints—they blend into community life. Homeowners planning estates near Chain Bridge Road or Old Dominion Drive often spend weekend mornings discussing architectural choices at local community anchors like the classic <a href="https://mcleancommunitycenter.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center font-semibold">McLean Community Center <ExternalLink className="w-3 h-3 ml-0.5" /></a> or coordinating designer meetings over breakfast at the historic **McLean Landmark Diner**.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Furthermore, protecting old-growth oak trees and mature landscaping—reminiscent of the beautiful natural buffers surrounding local spots like **Clemyjontri Park**—is key during heavy framing and foundation excavation. Homeowners work with arborists and local structural engineers to safeguard roots while mapping out addition perimeters.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">Zoning, Permitting, and Local Authority Regulations</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Before breaking ground on an addition in McLean, approvals from the <a href="https://www.fairfaxcounty.gov/landdevelopment/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center font-semibold">Fairfax County Land Development Services <ExternalLink className="w-3 h-3 ml-0.5" /></a> are required. Navigating setback requirements, lot coverage limits, and storm water management controls is highly technical. Working with a design-build firm that manages structural engineering and permit reviews simultaneously avoids common delays, ensuring that your home addition process runs smoothly.
        </p>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-12 space-y-4">
          <div className="flex items-center space-x-2.5 text-accent font-bold">
            <Award className="w-5 h-5" />
            <span>Ready to Expand Your Estate?</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our specialized design-build team handles architectural design, historic HOA alignments, permitting approvals, and high-fidelity construction for luxury home additions in McLean.
          </p>
          <div className="pt-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal"))}
              className="inline-flex items-center px-6 py-3 bg-primary text-white hover:bg-accent rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Consult Our Lead Estimator
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </>
    )
  },
  "trends-2026": {
    title: "5 Kitchen Remodeling Trends Shaping Northern Virginia in 2026",
    category: "Kitchen Remodeling",
    date: "June 24, 2026",
    readTime: "5 min read",
    image: "/images/kitchen.png",
    content: (
      <>
        <p className="lead text-lg text-gray-700 leading-relaxed font-sans mb-6 font-light">
          The kitchen is no longer just a cooking area—it is the central command station, dining theater, and social hub of modern Northern Virginia homes.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          As we progress through 2026, kitchen designs in Fairfax, Arlington, and Loudoun counties have shifted away from standard layouts. Homeowners are embracing customized material palettes, smart tech integration, and layouts designed to conceal the busy aspects of cooking while presenting a clean, minimalist front.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">1. Double Kitchen Islands</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          For larger open-concept layouts, a single kitchen island is no longer sufficient. Homeowners are opting for double islands: one dedicated to food prep (housing the sink, dishwasher, and waste disposals) and the other serving as an entertainment and casual dining counter with custom stool seating.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">2. Warm Woods and Earthy Tones</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          The trend of the stark, all-white kitchen is subsiding. Today's luxury kitchens feature warm wood finishes like white oak, walnut, and cherry cabinets, balanced by organic colors like olive green, sandy beige, and soft plaster textures.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">3. Hidden Butler Pantries (Sculleries)</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Northern Virginia hosts a lot of gatherings. To keep the main kitchen pristine, layouts now incorporate a hidden walk-in pantry or prep scullery behind custom cabinet panels. This is where small appliances (coffee maker, toaster, microwave) and prep activities are located out of sight.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">4. Ceiling-Height Stone Slab Backsplashes</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Traditional subway tiles are being replaced by continuous slab backsplashes. Extending the matching countertop quartz or marble slab straight up the wall to the range hood or ceiling creates a bold, seamless visual focal point.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">5. Smart Connected Appliance Hubs</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Built-in refrigeration panels, induction cooktops with integrated venting, and steam ovens controlled by tablet apps are standard. Appliances are selected for high performance and clean integration into the surrounding cabinetry.
        </p>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-12 space-y-4">
          <div className="flex items-center space-x-2.5 text-accent font-bold">
            <Award className="w-5 h-5" />
            <span>Ready for a Kitchen Transformation?</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our interior design and construction specialists can translate these premium trends into a functional, beautiful space custom-tailored to your lifestyle.
          </p>
          <div className="pt-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal"))}
              className="inline-flex items-center px-6 py-3 bg-primary text-white hover:bg-accent rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Consult Our Kitchen Designer
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </>
    )
  },
  "permitting-guide": {
    title: "Understanding the Permitting & HOA Approvals Process in Fairfax County",
    category: "Home Additions",
    date: "May 18, 2026",
    readTime: "8 min read",
    image: "/images/addition.png",
    content: (
      <>
        <p className="lead text-lg text-gray-700 leading-relaxed font-sans mb-6 font-light">
          Adding space to your home is an exciting milestone, but navigating local zoning, building permits, and Homeowners Association (HOA) approvals can feel overwhelming.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          In Fairfax County, municipal guidelines are strictly enforced. Standard setbacks, lot coverage percentages, and utility easements must be addressed before structural framing can begin. Here is a practical guide to obtaining the proper approvals.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">Step 1: Analyzing Setback and Lot Coverage Rules</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Every residential parcel in Fairfax County is bound by a specific zoning classification (such as R-1, R-2, or R-3). These rules dictate how close your home addition can stand to your property lines (front, side, and rear setbacks) and what percentage of your total lot area can be built over.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">Step 2: Preparing Construction Documents for Permits</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          To apply for a building permit, you must submit a comprehensive package to <a href="https://www.fairfaxcounty.gov/landdevelopment/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center font-semibold">Fairfax County Land Development Services <ExternalLink className="w-3 h-3 ml-0.5" /></a>. This package includes certified boundary surveys, foundation engineering plans, framing elevations, and electrical/plumbing diagrams.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">Step 3: Aligning with HOA Architectural Review Committees</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          If your neighborhood is governed by an HOA (which is common across McLean, Oakton, and Reston), you must submit a separate design review application. HOAs typically inspect cosmetic consistency: exterior siding colors, shingles, window shapes, and lighting fixtures. Submitting your HOA packet early is crucial to prevent scheduling delays.
        </p>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-12 space-y-4">
          <div className="flex items-center space-x-2.5 text-accent font-bold">
            <Shield className="w-5 h-5" />
            <span>We Manage Permitting For You</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            From boundary surveys and zoning variances to direct HOA submissions and county inspections, our design-build workflow covers all regulatory steps seamlessly.
          </p>
          <div className="pt-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal"))}
              className="inline-flex items-center px-6 py-3 bg-primary text-white hover:bg-accent rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Learn More in a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </>
    )
  },
  "bathroom-budgeting": {
    title: "How to Budget for a Luxury Master Bathroom Renovation",
    category: "Bathroom Remodeling",
    date: "April 11, 2026",
    readTime: "6 min read",
    image: "/images/bathroom.png",
    content: (
      <>
        <p className="lead text-lg text-gray-700 leading-relaxed font-sans mb-6 font-light">
          A primary suite bathroom is one of the highest-yield home remodeling projects, adding daily comfort and significant equity to your home.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          However, because bathrooms combine intensive plumbing, electrical installations, tile layouts, and water-resistance requirements, budgets can grow quickly if unplanned. Here is how to structure your luxury master bath budget.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">1. Plumbing Layout Shifts</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          The single largest cost factor is whether you keep the existing plumbing locations or move fixtures. Shifting a toilet drain or primary shower drain requires cutting concrete subfloors or structural joists, adding labor and permitting complexity. Keep fixtures in place if you want to optimize your budget for premium materials.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">2. Premium Tile and Waterproofing</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Tile selection shapes the visual aesthetic. Luxury walk-in spa showers feature large-format porcelain or marble slabs, floor-to-ceiling tiling, and custom mosaic shower niches. Ensure your builder uses premium waterproofing systems (such as Schluter-Kerdiboard panels) to prevent leaks.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">3. Custom Vanities and Fixtures</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Custom double vanities with quartz countertops, undermount sinks, and designer faucets serve as the focal point. Incorporating luxury features like custom vanity mirror backlighting, smart defogging systems, and drawer outlet hubs improves functionality.
        </p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4 font-heading">4. Smart Shower &amp; Tub Upgrades</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Consider allocating budget to features like steam generator kits, digital shower interfaces that pre-set water temperatures, heated floors, and a standalone soaking tub for a spa-like feel.
        </p>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-12 space-y-4">
          <div className="flex items-center space-x-2.5 text-accent font-bold">
            <Award className="w-5 h-5" />
            <span>Ready to Design Your Master Bath?</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our interior design and construction specialists will help you select fixtures, tile patterns, and layouts that fit your design preferences.
          </p>
          <div className="pt-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal"))}
              className="inline-flex items-center px-6 py-3 bg-primary text-white hover:bg-accent rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Speak to Our Bathroom Designer
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </>
    )
  }
};

export default function BlogPostDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const article = ARTICLES[slug];

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="pt-24 flex-1 bg-white min-h-screen flex flex-col items-center justify-center font-sans">
          <h1 className="text-2xl font-bold text-primary mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-accent hover:underline font-bold text-sm">
            Return to Design Center
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-24 flex-1 bg-white min-h-screen">
        {/* Banner Section */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(238,77,56,0.08),transparent_50%)]"></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
            <Link
              href="/blog"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Design Center
            </Link>

            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-4 inline-block">
                {article.category}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mt-2 text-white">
                {article.title}
              </h1>
              <div className="flex items-center space-x-4 text-xs text-gray-300 font-sans mt-6">
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-accent" />
                  {article.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-accent" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Featured Image */}
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden mb-12 bg-gray-100 shadow-md">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Content Container */}
            <div className="font-sans text-base text-gray-600 leading-relaxed space-y-6 max-w-3xl mx-auto">
              {article.content}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal />
    </>
  );
}
