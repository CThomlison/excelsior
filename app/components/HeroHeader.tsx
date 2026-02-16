"use client";

import { motion } from "framer-motion";
import { Hero } from "@/data/heroes";

interface HeroHeaderProps {
  hero: Hero;
}

export function HeroHeader({ hero }: HeroHeaderProps) {
  return (
    <div className="flex flex-col gap-2 mt-4 md:mt-8">
      {/* Role Pill */}
      <motion.div
        key={hero.role}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="self-start px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 font-black text-sm uppercase tracking-wider border-2 border-cyan-500 shadow-[0_4px_0_rgba(0,0,0,0.5)]"
      >
        {hero.role}
      </motion.div>

      {/* Hero Name */}
      <motion.h1
        key={hero.name}
        initial={{ scale: 0.8, opacity: 0, x: -50 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-6xl md:text-8xl font-black font-[Fredoka] text-white tracking-tight drop-shadow-[0_8px_0_rgba(0,0,0,0.4)] md:drop-shadow-[0_12px_0_rgba(0,0,0,0.4)] uppercase stroke-black stroke-[3px]"
        style={{ WebkitTextStroke: "2px black" }}
      >
        {hero.name}
      </motion.h1>

      {/* Difficulty Meter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 mt-2 bg-slate-900/40 p-2 rounded-xl backdrop-blur-sm self-start"
      >
        <span className="text-xs font-bold text-slate-300 uppercase px-1">Difficulty</span>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((i) => (
             <div
               key={i}
               className={`w-3 h-3 rounded-full border-2 border-black transition-colors ${i <= hero.difficulty ? 'bg-orange-500 shadow-[0_2px_0_rgba(0,0,0,0.5)]' : 'bg-slate-700'}`}
             />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
