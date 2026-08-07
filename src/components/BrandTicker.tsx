"use client";

import React from "react";
import Image from "next/image";

const brands = [
  { name: "Conestoga Tile", logo: "/ticker/ConestogaTile.jpg" },
  { name: "Cambria", logo: "/ticker/cambria.jpg" },
  { name: "Crestwood", logo: "/ticker/crestwood.jpg" },
  { name: "Daltile", logo: "/ticker/daltile.jpg" },
  { name: "Decora", logo: "/ticker/decora.jpg" },
  { name: "Fabuwood", logo: "/ticker/fabuwood.jpg" },
  { name: "Home Depot", logo: "/ticker/homedepot.jpg" },
  { name: "Jamie", logo: "/ticker/jamie.jpg" },
  { name: "Kemper", logo: "/ticker/kemper.jpg" },
  { name: "KraftMaid", logo: "/ticker/kraftmaid.jpg" },
  { name: "Merola Tile", logo: "/ticker/merolatile.jpg" },
  { name: "MSI", logo: "/ticker/msi.jpg" },
  { name: "Silestone", logo: "/ticker/silestone.jpg" },
  { name: "Top Knobs", logo: "/ticker/topknobs.jpg" }
];

export default function BrandTicker() {
  // Duplicate array to enable seamless infinite scroll loop
  const doubleBrands = [...brands, ...brands];

  return (
    <section className="py-10 bg-bg-light overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400">
            Premium Materials & Trusted Brands We Partner With
          </p>
        </div>

        {/* Left and Right Fade Overlays */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-8 sm:before:w-14 before:bg-gradient-to-r before:from-bg-light before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-8 sm:after:w-14 after:bg-gradient-to-l after:from-bg-light after:to-transparent">

          {/* Moving Track */}
          <div className="flex animate-infinite-scroll py-4 items-center gap-10 sm:gap-14">
            {doubleBrands.map((brand, index) => (
              <div
                key={index}
                className="relative w-28 sm:w-36 h-12 flex-shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} partner brand logo`}
                  fill
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
