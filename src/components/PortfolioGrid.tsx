"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  tag: "kitchen" | "bathroom" | "addition" | "basement";
  image: string;
  location: string;
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<"all" | "kitchen" | "bathroom" | "addition">("all");

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Ashburn – Kitchen Project",
      category: "Indoor Living • Kitchen",
      tag: "kitchen",
      image: "/images/kitchen.png",
      location: "Ashburn, VA"
    },
    {
      id: 2,
      title: "Arlington – Modern Master Bath",
      category: "Indoor Living • Bathroom",
      tag: "bathroom",
      image: "/images/bathroom.png",
      location: "Arlington, VA"
    },
    {
      id: 3,
      title: "Great Falls – Glass Sunroom Addition",
      category: "Outdoor Living • Addition",
      tag: "addition",
      image: "/images/addition.png",
      location: "Great Falls, VA"
    },
    {
      id: 4,
      title: "Leesburg – Gourmet Kitchen Project",
      category: "Indoor Living • Kitchen",
      tag: "kitchen",
      image: "/images/kitchen.png",
      location: "Leesburg, VA"
    },
    {
      id: 5,
      title: "McLean – Elegant Bathroom Remodel",
      category: "Indoor Living • Bathroom",
      tag: "bathroom",
      image: "/images/bathroom.png",
      location: "McLean, VA"
    },
    {
      id: 6,
      title: "Vienna – Open Plan Kitchen Space",
      category: "Indoor Living • Kitchen",
      tag: "kitchen",
      image: "/images/kitchen.png",
      location: "Vienna, VA"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.tag === activeFilter);

  const filterTabs = [
    { label: "All Projects", value: "all" as const },
    { label: "Kitchens", value: "kitchen" as const },
    { label: "Bathrooms", value: "bathroom" as const },
    { label: "Additions", value: "addition" as const },
  ];

  return (
    <section className="py-24 bg-bg-light" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <Reveal animation="fade-in-up" delay={0}>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-full">
              Featured Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary mt-4 tracking-tight">
              Crafting Inspired Spaces
            </h2>
            <p className="font-sans text-sm text-gray-500 mt-2 max-w-xl mx-auto font-light">
              Explore how Vision Custom Build + Remodel turns dreams into reality, delivering stunning transformations with unmatched craftsmanship.
            </p>
          </div>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal animation="fade-in" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeFilter === tab.value
                    ? "bg-primary border-primary text-white shadow-md shadow-primary/10"
                    : "bg-white border-gray-200 text-gray-600 hover:border-accent hover:text-accent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} animation="fade-in-up" delay={(index % 3) * 120} className="h-full flex flex-col">
              <div
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Visual Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-accent text-xs font-bold uppercase tracking-widest">
                        {project.location}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-white mt-1 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-300 mt-1 font-light italic">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom text panel */}
                <div className="p-6 border-t border-gray-50 flex items-center justify-between flex-1">
                  <div>
                    <h4 className="font-heading text-sm font-bold text-primary tracking-wide">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-light mt-0.5">
                      {project.category}
                    </p>
                  </div>
                  <div className="text-accent group-hover:translate-x-1.5 transition-transform duration-300">
                    <MoveRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
