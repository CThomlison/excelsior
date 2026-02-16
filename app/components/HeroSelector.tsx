"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/data/heroes";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSelectorProps {
  heroes: Hero[];
  selectedHero: Hero;
  onSelect: (hero: Hero) => void;
}

export function HeroSelector({ heroes, selectedHero, onSelect }: HeroSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative font-['Outfit'] w-full max-w-[280px]">
      {/* Trigger Button - Clean "Roblox" White PILL with Dark Text */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex items-center justify-between gap-4 w-full bg-white text-slate-900 font-bold px-5 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all border border-slate-200 z-50 group hover:shadow-lg hover:border-slate-300"
      >
        <span className="relative flex items-center gap-3 z-10">
          {/* Status Indicator - Dark Pulse for contrast */}
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900 animate-pulse" />
          <span className="uppercase tracking-wide text-sm font-['Teko'] text-lg">Select Star</span>
        </span>
        <ChevronDown size={20} className={cn("transition-transform duration-300 text-slate-400 z-10 group-hover:text-slate-900", isOpen && "rotate-180")} />
      </motion.button>

      {/* Dropdown List - Light Mode Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden z-40 flex flex-col max-h-[400px]"
          >
            <div className="p-3 bg-slate-50 border-b border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center select-none">
              Available Roster
            </div>

            <div className="overflow-y-auto p-2 space-y-1 custom-scrollbar">
              {heroes.map((hero) => (
                <button
                  key={hero.id}
                  onClick={() => {
                    onSelect(hero);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 w-full p-2 rounded-xl transition-all group/item text-left relative overflow-hidden",
                    selectedHero.id === hero.id
                      ? "bg-slate-100 border border-slate-200"
                      : "hover:bg-slate-50 border border-transparent"
                  )}
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-200 overflow-hidden shrink-0 border border-slate-200 relative group-hover/item:border-slate-300 transition-colors">
                    <img
                      src={hero.portraitUrl}
                      alt={hero.name}
                      className="w-full h-full object-cover group-hover/item:scale-110 transition-transform"
                    />
                  </div>

                  <div className="flex flex-col flex-1 min-w-0">
                    <span className={cn(
                      "font-bold font-['Teko'] uppercase text-xl leading-none transition-colors truncate",
                      selectedHero.id === hero.id
                        ? "text-slate-900"
                        : "text-slate-600 group-hover/item:text-slate-900"
                    )}>
                      {hero.name}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide group-hover/item:text-slate-500 transition-colors">
                      {hero.role}
                    </span>
                  </div>

                  {selectedHero.id === hero.id && (
                    <motion.div layoutId="check" className="text-slate-900">
                       <Check size={16} />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
