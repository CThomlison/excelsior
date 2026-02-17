"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/data/heroes";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentPanelProps {
  hero: Hero;
}

type ViewSection = "stats" | "lore" | "tips";

export function ContentPanel({ hero }: ContentPanelProps) {
  const [activeSection, setActiveSection] = useState<ViewSection>("stats");

  const sections: { id: ViewSection; label: string; icon: any }[] = [
    { id: "stats", label: "Stats", icon: LucideIcons.BarChart2 },
    { id: "lore", label: "Lore", icon: LucideIcons.BookOpen },
    { id: "tips", label: "Tips", icon: LucideIcons.Lightbulb },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Striker': return LucideIcons.Swords;
      case 'Defender': return LucideIcons.Shield;
      case 'Support': return LucideIcons.Heart;
      default: return LucideIcons.Zap;
    }
  };

  const RoleIcon = getRoleIcon(hero.role);

  // Convert numeric difficulty to Letter Grade
  const getDifficultyGrade = (level: number) => {
     if (level === 1) return "C";
     if (level === 2) return "A";
     return "S+";
  }

  const difficultyGrade = getDifficultyGrade(hero.difficulty);

  // Dynamic colors based on role
  const roleColor =
    hero.role === 'Striker' ? "text-orange-500" :
    hero.role === 'Defender' ? "text-blue-500" :
    hero.role === 'Support' ? "text-emerald-500" : "text-purple-500";

  const roleBg =
    hero.role === 'Striker' ? "bg-orange-500" :
    hero.role === 'Defender' ? "bg-blue-500" :
    hero.role === 'Support' ? "bg-emerald-500" : "bg-purple-500";

  return (
    <div className="flex flex-col h-full bg-white rounded-[40px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden group">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />
      <div className={cn("absolute top-0 left-0 w-full h-2", roleBg)} />

      {/* Inner Padding */}
      <div className="flex flex-col h-full p-8 relative z-10">

        {/* 1. HEADER - Streetwear/Urban Magazine Style */}
        <div className="shrink-0 pb-10 relative @container">

          {/* Top Metadata Row */}
          <div className="flex items-center justify-between mb-4">
             {/* Role Badge - Minimalist Tag with Icon */}
             <div className="flex items-center gap-2">
                <div className={cn("w-5 h-5 rounded-md flex items-center justify-center text-white text-[10px]", roleBg)}>
                    <RoleIcon size={12} strokeWidth={3} />
                </div>
                <span className={cn("text-xs font-black uppercase tracking-widest", roleColor)}>
                   {hero.role.toUpperCase()}
                </span>
             </div>
          </div>

          {/* Hero Name - Responsive Size */}
          <div className="relative w-full">
             {/* Updated Typography: Tighter, bolder, more impact */}
             <h1 className="text-[22cqw] leading-[0.8] font-black font-['Outfit'] uppercase text-slate-900 tracking-tighter mix-blend-darken -ml-[0.05em] whitespace-nowrap origin-left">
               {hero.name}
             </h1>

             {/* Title - Cleaner, no line, technical aesthetic */}
             <div className="mt-2 flex items-center gap-2 w-full pl-1 opacity-80">
                <span className="text-slate-300 font-black tracking-tighter">///</span>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis">
                   {hero.title}
                </h2>
             </div>
          </div>

          {/* Large Faded Watermark Icon behind text - REMOVED */}
        </div>

        {/* 2. TABS - Clean Underline Nav */}
        <div className="flex border-b border-slate-100 mb-8 px-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                "flex-1 pb-4 text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative hover:text-slate-600",
                activeSection === section.id
                  ? "text-slate-900"
                  : "text-slate-400"
              )}
            >
              <div className="flex items-center justify-center gap-2">
                 <section.icon size={14} className={cn("transition-all duration-300", activeSection === section.id ? "opacity-100 scale-110" : "opacity-50 scale-90")} />
                 {section.label}
              </div>

              {/* Active Line - Animated */}
              {activeSection === section.id && (
                 <motion.div
                    layoutId="active-line"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-900"
                 />
              )}
            </button>
          ))}
        </div>

        {/* 3. CONTENT AREA */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-4 mask-image-b">
          <AnimatePresence mode="wait">

             {/* STATS */}
             {activeSection === "stats" && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6 px-1"
                >
                   {/* Stats List */}
                   <CleanStat label="Power" value={hero.stats.power} color="bg-red-500" />
                   <CleanStat label="Speed" value={hero.stats.speed} color="bg-yellow-400" />
                   <CleanStat label="Durability" value={hero.stats.durability} color="bg-blue-500" />
                   <CleanStat label="Control" value={hero.stats.control} color="bg-purple-500" />

                   {/* Difficulty integrated as a standard stat */}
                   <CleanStat label="Difficulty" value={difficultyGrade} color="bg-slate-800" />
                </motion.div>
             )}

             {/* LORE */}
             {activeSection === "lore" && (
                <motion.div
                  key="lore"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="relative space-y-4"
                >
                   <div className="text-[10px] font-mono font-bold text-slate-300 uppercase mb-2">
                      // BIOGRAPHICAL_DATA_LOG
                   </div>
                   <p className="text-slate-600 leading-loose text-sm font-medium font-sans">
                     {hero.lore}
                   </p>

                   <div className="pt-6 border-t border-slate-100 mt-6">
                      <div className="flex items-center gap-2 mb-3">
                         <div className="w-1 h-4 bg-cyan-500" />
                         <span className="text-xs font-black uppercase tracking-widest text-slate-900">Affiliation</span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                         <span className="px-3 py-1 bg-slate-100 rounded-md text-[10px] font-bold uppercase text-slate-500">Zaun</span>
                         <span className="px-3 py-1 bg-slate-100 rounded-md text-[10px] font-bold uppercase text-slate-500">Firelights</span>
                      </div>
                   </div>
                </motion.div>
             )}

             {/* TIPS */}
             {activeSection === "tips" && (
                <motion.div
                  key="tips"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between mb-4">
                     <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">Combat Guide</h3>
                     <LucideIcons.Crosshair size={14} className="text-slate-300" />
                  </div>

                  {hero.tips.map((tip, i) => (
                    <div key={i} className="group relative pl-6 pb-2">
                      {/* Decorative Line */}
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-100 group-hover:bg-cyan-400 transition-colors" />

                      {/* Number */}
                      <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-white border-2 border-slate-200 group-hover:border-cyan-400 transition-colors z-10" />

                      <p className="text-slate-600 text-sm leading-relaxed font-medium group-hover:text-slate-900 transition-colors">
                        {tip}
                      </p>
                    </div>
                  ))}
                </motion.div>
             )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Clean Stat Component - Minimalist Bar
function CleanStat({ label, value, color, percent }: { label: string, value: string, color: string, percent?: number }) {
  const getPercent = (grade: string) => {
     if (grade.includes("S+")) return 100;
     if (grade.includes("S")) return 90;
     if (grade.includes("A")) return 80;
     if (grade.includes("B")) return 60;
     if (grade.includes("C")) return 50;
     if (grade.includes("D")) return 30;
     return 20;
  }

  const width = percent ?? getPercent(value);

  return (
    <div className="group">
      <div className="flex justify-between items-end mb-2">
         <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">{label}</span>

         <div className={cn(
            "text-sm font-black font-mono transition-colors",
            value.includes("S") ? "text-cyan-600" : "text-slate-700"
         )}>
            {value}
         </div>
      </div>

      {/* Sleek Minimalist Track */}
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
         <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${width}%` }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={cn("h-full rounded-full relative", color)}
         />
      </div>
    </div>
  )
}
