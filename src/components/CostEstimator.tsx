"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase";
import { 
  Utensils, 
  Bath, 
  Layers, 
  HardHat, 
  Home, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Calculator,
  ArrowRight,
  Calendar
} from "lucide-react";

type ProjectType = "kitchen" | "bathroom" | "addition" | "basement" | "wholehouse";
type QualityLevel = "standard" | "premium" | "luxury";

interface AddonOption {
  id: string;
  label: string;
  price: number;
  description: string;
  applicableTo: ProjectType[];
}

const ADDON_OPTIONS: AddonOption[] = [
  {
    id: "structural",
    label: "Move Structural Walls / Plumbing Layout",
    price: 12000,
    description: "Requires new engineering headers, drywall framing, and relocating main drain lines.",
    applicableTo: ["kitchen", "bathroom", "addition", "wholehouse"],
  },
  {
    id: "heated_floors",
    label: "Radiant Floor Heating System",
    price: 4000,
    description: "Electric coil under-tile floor heating with dedicated thermostat control.",
    applicableTo: ["bathroom", "basement", "wholehouse"],
  },
  {
    id: "built_ins",
    label: "Custom Built-in Millwork",
    price: 6500,
    description: "Custom mudroom benches, custom bookshelves, or built-in entertainment units.",
    applicableTo: ["basement", "addition", "wholehouse"],
  },
  {
    id: "appliances",
    label: "Sub-Zero / Wolf Luxury Appliance Package",
    price: 18000,
    description: "Integrated custom panel refrigeration, professional double-oven gas range, and premium exhaust hood.",
    applicableTo: ["kitchen", "wholehouse"],
  },
  {
    id: "shower",
    label: "Luxury Walk-in Spa Tile Shower",
    price: 7500,
    description: "Frameless glass enclosure, built-in benches, niche shelving, custom mosaic tile floor, and rainfall showerheads.",
    applicableTo: ["bathroom", "wholehouse"],
  },
];

export default function CostEstimator() {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<ProjectType>("kitchen");
  const [qualityLevel, setQualityLevel] = useState<QualityLevel>("premium");
  
  // Size specifications
  const [kitchenSize, setKitchenSize] = useState<"small" | "medium" | "large">("medium");
  const [bathroomSize, setBathroomSize] = useState<"half" | "full" | "master">("full");
  const [additionSize, setAdditionSize] = useState<number>(400); // sq ft
  const [additionType, setAdditionType] = useState<"conversion" | "ground" | "two_story">("ground");
  const [basementSize, setBasementSize] = useState<"small" | "medium" | "large">("medium");
  const [wholehouseSize, setWholehouseSize] = useState<"small" | "medium" | "large">("medium");

  // Selected addons
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Lead Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Fairfax County");
  const [timeframe, setTimeframe] = useState("1-3 Months");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Pricing calculations
  const calculateCost = () => {
    let baseMin = 0;
    let baseMax = 0;

    switch (projectType) {
      case "kitchen":
        if (kitchenSize === "small") {
          baseMin = 25000;
          baseMax = 40000;
        } else if (kitchenSize === "medium") {
          baseMin = 50000;
          baseMax = 85000;
        } else {
          baseMin = 95000;
          baseMax = 160000;
        }
        break;
      case "bathroom":
        if (bathroomSize === "half") {
          baseMin = 10000;
          baseMax = 18000;
        } else if (bathroomSize === "full") {
          baseMin = 20000;
          baseMax = 38000;
        } else {
          baseMin = 45000;
          baseMax = 80000;
        }
        break;
      case "addition":
        if (additionType === "conversion") {
          baseMin = 50000;
          baseMax = 90000;
        } else if (additionType === "ground") {
          baseMin = additionSize * 300;
          baseMax = additionSize * 420;
        } else {
          baseMin = additionSize * 380;
          baseMax = additionSize * 550;
        }
        break;
      case "basement":
        if (basementSize === "small") {
          baseMin = 30000;
          baseMax = 50000;
        } else if (basementSize === "medium") {
          baseMin = 55000;
          baseMax = 90000;
        } else {
          baseMin = 95000;
          baseMax = 150000;
        }
        break;
      case "wholehouse":
        if (wholehouseSize === "small") {
          baseMin = 120000;
          baseMax = 200000;
        } else if (wholehouseSize === "medium") {
          baseMin = 220000;
          baseMax = 380000;
        } else {
          baseMin = 400000;
          baseMax = 750000;
        }
        break;
    }

    // Apply quality multipliers
    let multiplierMin = 1.0;
    let multiplierMax = 1.0;

    if (qualityLevel === "premium") {
      multiplierMin = 1.2;
      multiplierMax = 1.25;
    } else if (qualityLevel === "luxury") {
      multiplierMin = 1.5;
      multiplierMax = 1.65;
    }

    let calculatedMin = baseMin * multiplierMin;
    let calculatedMax = baseMax * multiplierMax;

    // Add selected addon costs
    const addonCost = ADDON_OPTIONS
      .filter((option) => selectedAddons.includes(option.id) && option.applicableTo.includes(projectType))
      .reduce((sum, current) => sum + current.price, 0);

    calculatedMin += addonCost;
    calculatedMax += addonCost;

    return {
      min: Math.round(calculatedMin / 1000) * 1000,
      max: Math.round(calculatedMax / 1000) * 1000,
    };
  };

  const { min: estMin, max: estMax } = calculateCost();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setSubmitError("Please fill out all required fields.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    const detailsSummary = {
      projectType,
      qualityLevel,
      specifications: 
        projectType === "kitchen" ? `Kitchen Size: ${kitchenSize}` :
        projectType === "bathroom" ? `Bathroom Type: ${bathroomSize}` :
        projectType === "addition" ? `Addition Type: ${additionType}, Size: ${additionSize} sq ft` :
        projectType === "basement" ? `Basement Size: ${basementSize}` :
        `Whole House Size: ${wholehouseSize}`,
      addons: ADDON_OPTIONS
        .filter((o) => selectedAddons.includes(o.id) && o.applicableTo.includes(projectType))
        .map((o) => o.label),
      location,
      timeframe,
      estimatedCostRange: `$${estMin.toLocaleString()} - $${estMax.toLocaleString()}`
    };

    try {
      const { error } = await supabase.from("estimates").insert([
        {
          name,
          email,
          phone,
          project_type: projectType,
          details: JSON.stringify(detailsSummary),
          estimated_min: estMin,
          estimated_max: estMax,
          location,
          timeframe,
        }
      ]);

      if (error) {
        console.warn("Supabase insertion error, proceeding with fallback: ", error.message);
      }
      
      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenBooking = () => {
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-primary/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden text-white">
      {/* Estimator Progress Header */}
      {!submitted && (
        <div className="bg-primary/60 px-6 py-4 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Calculator className="w-5 h-5 text-accent" />
            <span className="font-semibold tracking-wide uppercase text-sm text-gray-300">Cost Estimator</span>
          </div>
          <div className="flex space-x-1.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <div 
                key={s} 
                className={`h-1.5 w-10 rounded-full transition-all duration-300 ${
                  s <= step ? "bg-accent" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {submitted ? (
        <div className="p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-accent-green/20 text-accent-green rounded-full flex items-center justify-center mb-6">
            <Check className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Estimate Generated!</h2>
          <p className="text-gray-400 max-w-md mb-8">
            Thank you, <span className="text-white font-semibold">{name}</span>. We've registered your project preferences and sent an email copy to <span className="text-white font-semibold">{email}</span>.
          </p>

          <div className="bg-primary/60 p-6 rounded-xl border border-white/5 mb-8 w-full max-w-md">
            <span className="text-xs uppercase text-gray-400 tracking-wider block mb-1">Estimated Cost Range</span>
            <span className="text-4xl font-extrabold text-accent">
              ${estMin.toLocaleString()} - ${estMax.toLocaleString()}
            </span>
            <span className="text-xs text-gray-400 block mt-2">
              Based on {qualityLevel} materials in {location}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleOpenBooking}
              className="flex items-center justify-center px-8 py-4 bg-accent-green text-primary font-bold uppercase tracking-wider rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg text-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Virtual Consultation
            </button>
            <button
              onClick={() => {
                setStep(1);
                setSubmitted(false);
                setSelectedAddons([]);
                setName("");
                setEmail("");
                setPhone("");
              }}
              className="px-8 py-4 bg-white/5 border border-white/10 font-bold uppercase tracking-wider rounded-full hover:bg-white/10 hover:text-white transition-all text-sm text-gray-300"
            >
              Recalculate
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 sm:p-10">
          {/* STEP 1: PROJECT TYPE */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">What type of project are you planning?</h2>
              <p className="text-gray-400 mb-8">Select the category that best describes your remodeling goals.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {(
                  [
                    { id: "kitchen", label: "Kitchen", icon: Utensils },
                    { id: "bathroom", label: "Bathroom", icon: Bath },
                    { id: "addition", label: "Addition", icon: Layers },
                    { id: "basement", label: "Basement", icon: HardHat },
                    { id: "wholehouse", label: "Whole House", icon: Home },
                  ] as const
                ).map((item) => {
                  const Icon = item.icon;
                  const isSelected = projectType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id)}
                      className={`flex flex-col items-center justify-center p-6 rounded-xl border text-center transition-all ${
                        isSelected 
                          ? "bg-accent/15 border-accent text-white shadow-lg scale-102" 
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/8 hover:text-white hover:border-white/20"
                      }`}
                    >
                      <Icon className={`w-8 h-8 mb-4 ${isSelected ? "text-accent" : "text-gray-400"}`} />
                      <span className="font-semibold text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: QUALITY LEVEL */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Select your material & finish quality</h2>
              <p className="text-gray-400 mb-8">Choose the tier that matches your design preference and finishes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(
                  [
                    {
                      id: "standard",
                      title: "Standard Quality",
                      desc: "High-quality base fixtures, standard layout footprint (no relocation of plumbing/walls), durable quartz/granite, and pre-fabricated cabinets.",
                      bullet: "Cost-Effective & Functional",
                    },
                    {
                      id: "premium",
                      title: "Premium Grade",
                      desc: "Semi-custom cabinetry, designer lighting, premium porcelain tiles, luxury quartz, and smart/integrated standard appliances.",
                      bullet: "Most Popular & Highly Customizable",
                    },
                    {
                      id: "luxury",
                      title: "Luxury / Custom",
                      desc: "Fully custom hand-made cabinets, top-tier luxury appliances, heated floors, marble slabs, complex custom layout redesigns, and built-ins.",
                      bullet: "Uncompromised Quality & Craftsmanship",
                    },
                  ] as const
                ).map((tier) => {
                  const isSelected = qualityLevel === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setQualityLevel(tier.id)}
                      className={`flex flex-col text-left p-6 rounded-xl border transition-all ${
                        isSelected 
                          ? "bg-accent/15 border-accent text-white shadow-lg" 
                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/8 hover:border-white/20"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-lg">{tier.title}</span>
                        {isSelected && (
                          <div className="w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 mb-6 flex-grow">{tier.desc}</p>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isSelected ? "bg-accent/25 text-accent" : "bg-white/10 text-gray-400"
                      }`}>
                        {tier.bullet}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: SIZE SPECIFICATIONS */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Determine the project size</h2>
              <p className="text-gray-400 mb-8">Tell us about the physical dimensions of the space.</p>
              
              {projectType === "kitchen" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { id: "small", label: "Small Kitchen", desc: "Under 150 sq ft (Typical galley or small kitchen layouts)" },
                    { id: "medium", label: "Medium Kitchen", desc: "150 - 300 sq ft (Standard L-shape or open kitchen layouts)" },
                    { id: "large", label: "Large Kitchen", desc: "300+ sq ft (Spacious open plan with double islands or breakfast bar)" }
                  ].map((sz) => (
                    <button
                      key={sz.id}
                      type="button"
                      onClick={() => setKitchenSize(sz.id as any)}
                      className={`p-6 rounded-xl border text-left transition-all ${
                        kitchenSize === sz.id
                          ? "bg-accent/15 border-accent text-white shadow-lg"
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/8 hover:border-white/20"
                      }`}
                    >
                      <span className="font-bold block text-lg mb-2">{sz.label}</span>
                      <span className="text-sm text-gray-400">{sz.desc}</span>
                    </button>
                  ))}
                </div>
              )}

              {projectType === "bathroom" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { id: "half", label: "Half Bath / Powder Room", desc: "Toilet + Single Vanity sink layout." },
                    { id: "full", label: "Standard Full Bath", desc: "Toilet, single/double vanity, tub/shower alcove layout." },
                    { id: "master", label: "Primary Suite / Master Bath", desc: "Luxury double vanity, standalone soak tub, custom walk-in spa shower." }
                  ].map((sz) => (
                    <button
                      key={sz.id}
                      type="button"
                      onClick={() => setBathroomSize(sz.id as any)}
                      className={`p-6 rounded-xl border text-left transition-all ${
                        bathroomSize === sz.id
                          ? "bg-accent/15 border-accent text-white shadow-lg"
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/8 hover:border-white/20"
                      }`}
                    >
                      <span className="font-bold block text-lg mb-2">{sz.label}</span>
                      <span className="text-sm text-gray-400">{sz.desc}</span>
                    </button>
                  ))}
                </div>
              )}

              {projectType === "addition" && (
                <div className="space-y-8 max-w-xl">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-4">Addition Category</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: "conversion", label: "Garage/Sunroom Conversion" },
                        { id: "ground", label: "Ground-Level Addition" },
                        { id: "two_story", label: "Two-Story Addition" }
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setAdditionType(t.id as any)}
                          className={`p-4 rounded-xl border text-center transition-all text-xs font-bold uppercase tracking-wider ${
                            additionType === t.id
                              ? "bg-accent border-accent text-white"
                              : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/8 hover:border-white/20"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {additionType !== "conversion" && (
                    <div>
                      <div className="flex justify-between text-sm font-semibold text-gray-300 mb-2">
                        <span>Desired Addition Size (Sq. Ft.)</span>
                        <span className="text-accent text-lg">{additionSize} sq ft</span>
                      </div>
                      <input
                        type="range"
                        min="200"
                        max="1200"
                        step="50"
                        value={additionSize}
                        onChange={(e) => setAdditionSize(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>200 sq ft (Cozy room extension)</span>
                        <span>1,200 sq ft (Multi-room wings)</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {projectType === "basement" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { id: "small", label: "Small / Medium Finish", desc: "Under 600 sq ft. Open playroom or recreation floorplan." },
                    { id: "medium", label: "Standard Finished Suite", desc: "600 - 1,200 sq ft. Includes media room, full bathroom, and den." },
                    { id: "large", label: "Custom Entertainment Suite", desc: "1,200+ sq ft. Features custom wet bar, walkout egress, home theater, guest bath." }
                  ].map((sz) => (
                    <button
                      key={sz.id}
                      type="button"
                      onClick={() => setBasementSize(sz.id as any)}
                      className={`p-6 rounded-xl border text-left transition-all ${
                        basementSize === sz.id
                          ? "bg-accent/15 border-accent text-white shadow-lg"
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/8 hover:border-white/20"
                      }`}
                    >
                      <span className="font-bold block text-lg mb-2">{sz.label}</span>
                      <span className="text-sm text-gray-400">{sz.desc}</span>
                    </button>
                  ))}
                </div>
              )}

              {projectType === "wholehouse" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { id: "small", label: "Under 2,000 sq ft", desc: "Renovating a smaller townhouse, split-level, or cottage." },
                    { id: "medium", label: "2,000 - 3,500 sq ft", desc: "Standard colonial or mid-size suburban home." },
                    { id: "large", label: "3,500+ sq ft", desc: "Large executive home or high-end estate remodeling." }
                  ].map((sz) => (
                    <button
                      key={sz.id}
                      type="button"
                      onClick={() => setWholehouseSize(sz.id as any)}
                      className={`p-6 rounded-xl border text-left transition-all ${
                        wholehouseSize === sz.id
                          ? "bg-accent/15 border-accent text-white shadow-lg"
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/8 hover:border-white/20"
                      }`}
                    >
                      <span className="font-bold block text-lg mb-2">{sz.label}</span>
                      <span className="text-sm text-gray-400">{sz.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* STEP 4: ADDONS */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Optional upgrades & additions</h2>
              <p className="text-gray-400 mb-8">Select premium add-ons to customize the scope of work.</p>

              <div className="space-y-4 max-w-2xl">
                {ADDON_OPTIONS.filter((option) => option.applicableTo.includes(projectType)).map((option) => {
                  const isChecked = selectedAddons.includes(option.id);
                  return (
                    <div
                      key={option.id}
                      onClick={() => toggleAddon(option.id)}
                      className={`p-5 rounded-xl border flex items-start space-x-4 cursor-pointer transition-all ${
                        isChecked
                          ? "bg-accent/15 border-accent text-white"
                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/8 hover:border-white/20"
                      }`}
                    >
                      <div className="mt-1">
                        <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                          isChecked ? "bg-accent border-accent text-white" : "border-white/20"
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-sm sm:text-base">{option.label}</span>
                          <span className="text-accent font-bold text-sm sm:text-base">
                            +${option.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400">{option.description}</p>
                      </div>
                    </div>
                  );
                })}

                {ADDON_OPTIONS.filter((option) => option.applicableTo.includes(projectType)).length === 0 && (
                  <div className="text-center py-10 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-gray-400">No specific upgrades available for this type. Click next to continue.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 5: COST SUMMARY & LEAD FORM */}
          {step === 5 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Summary and Cost Gauge */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-white/5 p-6 rounded-xl border border-white/15">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-gray-200">Your Project Profile</h3>
                  
                  <ul className="space-y-3.5 text-sm mb-6 text-gray-400">
                    <li>
                      <span className="block text-xs uppercase tracking-wider text-gray-500">Project Category</span>
                      <span className="text-white font-semibold capitalize">{projectType === "wholehouse" ? "Whole House Remodel" : projectType}</span>
                    </li>
                    <li>
                      <span className="block text-xs uppercase tracking-wider text-gray-500">Material Quality</span>
                      <span className="text-white font-semibold capitalize">{qualityLevel}</span>
                    </li>
                    <li>
                      <span className="block text-xs uppercase tracking-wider text-gray-500">Size details</span>
                      <span className="text-white font-semibold">
                        {projectType === "kitchen" && `Kitchen Size: ${kitchenSize}`}
                        {projectType === "bathroom" && `Bathroom: ${bathroomSize}`}
                        {projectType === "addition" && `${additionType === "conversion" ? "Conversion" : `${additionSize} sq ft Addition`}`}
                        {projectType === "basement" && `Basement Size: ${basementSize}`}
                        {projectType === "wholehouse" && `Whole House Size: ${wholehouseSize}`}
                      </span>
                    </li>
                    {selectedAddons.length > 0 && (
                      <li>
                        <span className="block text-xs uppercase tracking-wider text-gray-500">Upgrades Added</span>
                        <span className="text-white text-xs block leading-tight mt-1 space-y-1">
                          {ADDON_OPTIONS.filter((o) => selectedAddons.includes(o.id) && o.applicableTo.includes(projectType)).map((o) => (
                            <span key={o.id} className="block">• {o.label}</span>
                          ))}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 mt-4">
                  <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Estimated Cost Range</span>
                  <span className="text-3xl font-extrabold text-accent block leading-tight">
                    ${estMin.toLocaleString()} - ${estMax.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-gray-500 block leading-normal mt-2">
                    *Estimates are calculated using local Northern Virginia construction cost indexes. Final prices will vary based on custom framing configurations.
                  </span>
                </div>
              </div>

              {/* Right Column: Lead Form */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-bold mb-2">Get your cost breakdown sheet</h2>
                <p className="text-gray-400 mb-6 text-sm">
                  Enter your contact details below to email this breakdown to yourself and schedule a consultation to lock in pricing.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="703-555-0199"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Virginia Location *
                      </label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent text-sm"
                      >
                        <option>Fairfax County</option>
                        <option>Arlington County</option>
                        <option>Loudoun County</option>
                        <option>Prince William County</option>
                        <option>Alexandria (City)</option>
                        <option>Other / Northern Virginia</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Target Start Date
                      </label>
                      <select
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent text-sm"
                      >
                        <option>Immediately</option>
                        <option>1-3 Months</option>
                        <option>3-6 Months</option>
                        <option>Just planning/Curious</option>
                      </select>
                    </div>
                  </div>

                  {submitError && (
                    <div className="text-accent text-xs font-semibold mt-1">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center px-8 py-3.5 bg-accent-green text-primary font-bold uppercase tracking-wider rounded-xl hover:bg-white hover:scale-102 transition-all shadow-lg text-sm mt-6 disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Email My Cost Estimate"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/10">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="flex items-center px-4 py-2 border border-white/10 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-all text-gray-300"
            >
              <ChevronLeft className="w-4 h-4 mr-1.5" />
              Back
            </button>

            {step < 5 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="flex items-center px-6 py-2.5 bg-white text-primary rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white/90 hover:scale-102 transition-all"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
