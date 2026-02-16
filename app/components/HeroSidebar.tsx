"use client";

import { motion } from "framer-motion";
import { Hero } from "@/data/heroes";
import { cn } from "@/lib/utils";

interface HeroSidebarProps {
  heroes: Hero[];
  selectedHeroId: string;
  onSelect: (hero: Hero) => void;
}

export function HeroSidebar({ heroes, selectedHeroId, onSelect }: HeroSidebarProps) {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto w-full h-full p-2 scrollbar-none snap-y items-center justify-start">
      {heroes.map((hero, i) => {
        const isSelected = hero.id === selectedHeroId;

        return (
          <motion.button
            key={hero.id}
            onClick={() => onSelect(hero)}
            initial={{ scale: 0.8, x: 20 }}
            animate={{ scale: isSelected ? 1.1 : 1, x: 0 }}
            whileHover={{ scale: 1.2, x: -10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
              "relative w-16 h-16 md:w-20 md:h-20 rounded-[24px] border-[4px] transition-all shrink-0 snap-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] group overflow-hidden bg-slate-800",
              isSelected
                ? "border-cyan-400 z-10 scale-110 shadow-[0_8px_0_rgba(0,0,0,0.4)] rotate-3"
                : "border-slate-700 hover:border-slate-500 opacity-80 hover:opacity-100 hover:rotate-2"
            )}
          >
             <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden rounded-[20px]">
               <img
                 src={hero.portraitUrl}
                 alt={hero.name}
                 className={cn(
                    "w-full h-full object-cover transition-transform duration-300",
                    isSelected ? "scale-110 grayscale-0" : "scale-100 grayscale-[0.8] hover:grayscale-0"
                 )}
               />

               {/* Selection Glow */}
               {isSelected && (
                 <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/50 to-transparent mix-blend-overlay" />
               )}
             </div>

             {/* Small Tooltip on Hover */}
             <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-lg border-2 border-slate-700 whitespace-nowrap shadow-lg z-50">
               {hero.name}
             </div>
          </motion.button>
        );
      })}
    </div>
  );
}
