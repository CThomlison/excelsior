"use client";

import { motion } from "framer-motion";
import { Hero } from "@/data/heroes";
import { useState } from "react";
import * as LucideIcons from "lucide-react";

interface SkillBarProps {
  hero: Hero;
}

export function SkillBar({ hero }: SkillBarProps) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Dynamic Popover for Skill Info */}
      <motion.div
        key={activeSkill}
        initial={{ y: 20, opacity: 0, scale: 0.9 }}
        animate={{ y: activeSkill ? 0 : 20, opacity: activeSkill ? 1 : 0, scale: activeSkill ? 1 : 0.9 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute bottom-28 md:bottom-32 bg-slate-900/90 backdrop-blur-xl border-4 border-slate-700 p-6 rounded-[2rem] w-80 md:w-96 text-center shadow-2xl pointer-events-none z-50 origin-bottom"
        style={{ pointerEvents: activeSkill ? "auto" : "none" }}
      >
        {activeSkill && (() => {
           const skill = hero.skills.find(s => s.name === activeSkill);
           return skill ? (
             <>
               <h3 className="text-xl md:text-2xl font-black text-cyan-400 uppercase font-[Fredoka] mb-2 tracking-wide drop-shadow-md">{skill.name}</h3>
               <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">{skill.description}</p>
               <div className="mt-4 flex justify-center gap-2">
                 <span className="text-[10px] font-bold bg-slate-800 text-slate-400 px-3 py-1 rounded-full uppercase tracking-wider">
                    Key: <span className="text-white">{skill.key}</span>
                 </span>
                 <span className="text-[10px] font-bold bg-slate-800 text-slate-400 px-3 py-1 rounded-full uppercase tracking-wider">
                    CD: <span className="text-white">{Math.floor(Math.random() * 12 + 4)}s</span>
                 </span>
               </div>
               {/* Arrow */}
               <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-900 rotate-45 border-b-4 border-r-4 border-slate-700" />
             </>
           ) : null;
        })()}
      </motion.div>

      {/* Dock Container */}
      <div className="flex items-end gap-3 md:gap-6 px-6 py-4 bg-white/10 backdrop-blur-lg rounded-[2.5rem] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        {hero.skills.map((skill, i) => {
          const Icon = (LucideIcons as any)[skill.iconName] || LucideIcons.Zap;
          const isActive = activeSkill === skill.name;

          return (
            <motion.button
              key={skill.key}
              onHoverStart={() => setActiveSkill(skill.name)}
              onHoverEnd={() => setActiveSkill(null)}
              onClick={() => setActiveSkill(isActive ? null : skill.name)}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -10, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: i * 0.05 }}
              className={`relative w-14 h-14 md:w-20 md:h-20 rounded-[1.5rem] flex items-center justify-center border-[4px] shadow-[0_6px_0_rgba(0,0,0,0.2)] transition-colors group ${isActive ? 'bg-cyan-500 border-cyan-300 shadow-[0_8px_0_rgba(0,100,200,0.4)] z-10' : 'bg-slate-800 border-slate-600 hover:bg-slate-700'}`}
            >
              <div className="text-white drop-shadow-md relative z-10">
                 <Icon size={32} strokeWidth={2.5} />
              </div>

              {/* Hotkey Badge */}
              <div className="absolute -top-3 -right-3 w-7 h-7 bg-white text-slate-900 font-black rounded-full flex items-center justify-center border-2 border-slate-300 text-xs shadow-sm z-20 group-hover:scale-110 transition-transform">
                 {skill.key}
              </div>

              {/* Shine effect */}
              <div className="absolute top-2 left-2 w-4 h-2 bg-white/20 rounded-full blur-[1px]" />
            </motion.button>
          )
        })}
      </div>
    </div>
  );
}
