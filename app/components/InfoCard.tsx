"use client";

import { motion } from "framer-motion";
import { Hero } from "@/data/heroes";
import * as LucideIcons from "lucide-react";

interface InfoCardProps {
  hero: Hero;
  onClose: () => void;
}

export function InfoCard({ hero, onClose }: InfoCardProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="relative mt-4 bg-slate-900/95 backdrop-blur-2xl text-slate-100 rounded-[2rem] p-6 shadow-2xl border-4 border-slate-700 w-full max-w-[400px] overflow-hidden origin-top z-50 pointer-events-auto"
    >
      <div className="flex items-center justify-between border-b-2 border-slate-700 pb-4 mb-4">
        <h2 className="text-2xl font-black font-[Fredoka] uppercase tracking-wide text-cyan-300 drop-shadow-md">
           DATA LOG
        </h2>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors border-2 border-slate-600"
        >
           <LucideIcons.X size={16} className="text-slate-300" />
        </button>
      </div>

      <div className="space-y-6 max-h-[60vh] overflow-y-auto scrollbar-thin pr-2 pb-4">

        {/* Lore Section */}
        <section>
          <div className="flex items-center gap-2 mb-2 text-orange-400 font-bold uppercase text-xs tracking-wider">
            <LucideIcons.Scroll size={14} />
            <span>Backstory</span>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 relative">
            <LucideIcons.Quote size={20} className="absolute top-2 left-2 text-slate-600 opacity-20" />
            <p className="text-sm italic text-slate-300 leading-relaxed font-serif pl-4 border-l-2 border-orange-500/50">
              &ldquo;{hero.lore}&rdquo;
            </p>
          </div>
        </section>

        {/* Description */}
        <section>
          <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold uppercase text-xs tracking-wider">
            <LucideIcons.User size={14} />
            <span>Identity</span>
          </div>
          <p className="text-sm text-slate-300 leading-6 bg-slate-800/30 p-3 rounded-lg border border-slate-700/30">
            {hero.description}
          </p>
        </section>

        {/* Tips */}
        <section>
          <div className="flex items-center gap-2 mb-3 text-green-400 font-bold uppercase text-xs tracking-wider">
            <LucideIcons.Lightbulb size={14} />
            <span>Combat Tips</span>
          </div>
          <div className="grid gap-3">
             {hero.tips.map((tip, i) => (
               <div key={i} className="flex items-start gap-3 bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-sm hover:border-slate-500 transition-colors group">
                 <div className="bg-slate-700 text-slate-300 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                   {i + 1}
                 </div>
                 <p className="text-xs text-slate-400 font-medium leading-5 pt-0.5 group-hover:text-slate-200 transition-colors">
                   {tip}
                 </p>
               </div>
             ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
