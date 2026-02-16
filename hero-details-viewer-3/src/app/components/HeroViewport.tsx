import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hero, Skill } from "../../data/heroes";
import * as LucideIcons from "lucide-react";
import { cn } from "../../lib/utils";
// Importing the specific assets requested by the user
import robloxModel from "figma:asset/bd2579aadf9c441d15869d99eacf8d721c8fea86.png";
import characterArt from "figma:asset/6392ff9882bca4af63e42e98266b83e116690511.png";
import skillIcon from "figma:asset/ec45bfd78d7c78a944dce9f7f94924216e02f366.png";

interface HeroViewportProps {
  hero: Hero;
}

export function HeroViewport({ hero }: HeroViewportProps) {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  // Mapped keys for display as requested
  const DISPLAY_KEYS = ["LMB", "RMB", "Q", "SPC", "R"];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none overflow-hidden">
      
      {/* Background Shapes - Vivid & Playful for Roblox style */}
      <motion.div
        key={hero.id + "-shape"}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.8 }}
        className="absolute z-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-200/60 to-purple-200/60 rounded-full blur-[60px] mix-blend-multiply"
      />
      
      {/* Floor Disc - Anime/Game Style - Light Mode */}
      <motion.div
        key={hero.id + "-base"}
        initial={{ opacity: 0, scale: 0, rotateX: 60 }}
        animate={{ opacity: 1, scale: 1, rotateX: 60 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-[5%] w-[400px] h-[400px] border-[4px] border-white/60 bg-white/20 rounded-full z-0 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        style={{ transform: "rotateX(60deg)" }}
      >
         <div className="w-[350px] h-[350px] border-[2px] border-dashed border-slate-400/30 rounded-full animate-spin-slow" />
      </motion.div>

      {/* Main Container - CENTERED (No more offsets) */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        
        {/* Layer 1: Background Art (Transparent Behind) */}
        <motion.div
          key={hero.id + "-bg"}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center z-0"
        >
           <img 
             src={characterArt} 
             alt="Background Art" 
             className="h-[95vh] w-auto object-contain mix-blend-normal opacity-40 mask-image-gradient grayscale-[0.2]"
             style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.05))" }}
           />
        </motion.div>

        {/* Layer 2: 3D Model Foreground (Roblox Model) */}
        <motion.div
          key={hero.id + "-fg"}
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -50, opacity: 0, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="relative z-20 flex justify-center items-center" // Centered properly
        >
          {/* Crisp, pop-out look for the model */}
          <img 
             src={robloxModel} 
             alt="Character Model" 
             className="h-[72vh] w-auto object-contain hover:scale-[1.05] transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing pointer-events-auto filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          />
        </motion.div>
      </div>

      {/* SKILLS HOTBAR OVERLAY - Redesigned: "Floating Cards" */}
      <div className="absolute bottom-10 left-0 right-0 z-50 pointer-events-auto flex flex-col items-center justify-end px-4">
         
         {/* Tooltip Popup Area - Same logic, new position/style */}
         <div className="absolute bottom-[110px] left-1/2 -translate-x-1/2 w-full max-w-md flex justify-center perspective-[1000px] pointer-events-none">
           <AnimatePresence mode="wait">
             {hoveredSkill && (
               <motion.div
                 key={hoveredSkill.key}
                 initial={{ opacity: 0, y: 20, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
                 className="bg-white/95 backdrop-blur-2xl text-slate-900 p-5 rounded-2xl border border-white/50 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] w-full relative overflow-hidden pointer-events-auto"
               >
                 {/* Decorative Glow */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl -z-10" />
                 
                 <div className="flex items-start gap-4">
                    {/* Spell Icon in Tooltip */}
                    <div className="w-12 h-12 bg-slate-50 rounded-xl overflow-hidden shadow-sm shrink-0 border border-slate-100 ring-1 ring-slate-200">
                        <img src={skillIcon} alt={hoveredSkill.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                       <h4 className="text-xl font-black font-['Outfit'] uppercase leading-none text-slate-900 tracking-tight">{hoveredSkill.name}</h4>
                       <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-[10px] font-bold text-white bg-slate-900 px-1.5 py-0.5 rounded uppercase tracking-widest">
                             {hoveredSkill.type || "Active"}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                             Cooldown: 12s
                          </span>
                       </div>
                    </div>
                 </div>
                 
                 <p className="text-sm text-slate-600 leading-relaxed font-medium mt-4 border-t border-slate-100 pt-3">
                   {hoveredSkill.description}
                 </p>
                 
               </motion.div>
             )}
           </AnimatePresence>
         </div>

         {/* Hotbar - DECONSTRUCTED: No container, just floating cards */}
         <div className="flex items-end gap-3 md:gap-5 pb-2">
             {hero.skills.map((skill, index) => {
               const displayKey = DISPLAY_KEYS[index] || skill.key;
               const isActive = hoveredSkill?.name === skill.name; // Use name as unique ID since we are masking keys

               return (
                 <motion.button
                   key={index} // Index is stable here
                   onMouseEnter={() => setHoveredSkill({ ...skill, key: displayKey })} // Pass the display key to tooltip
                   onMouseLeave={() => setHoveredSkill(null)}
                   onClick={() => setHoveredSkill({ ...skill, key: displayKey })}
                   animate={{ 
                      y: isActive ? -20 : 0,
                      scale: isActive ? 1.1 : 1,
                   }}
                   whileHover={{ y: -20, scale: 1.1 }}
                   whileTap={{ scale: 0.95 }}
                   className={cn(
                     "relative group/skill flex flex-col items-center transition-all duration-300",
                     // No grayscale, clean look
                   )}
                 >
                    {/* The Card */}
                    <div className={cn(
                       "relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 border-[3px]",
                       isActive 
                         ? "border-cyan-400 shadow-[0_20px_40px_rgba(6,182,212,0.25)] ring-4 ring-cyan-400/20" 
                         : "border-white hover:border-cyan-100"
                    )}>
                        <img 
                          src={skillIcon}
                          alt={skill.name}
                          className="w-full h-full object-cover" 
                        />
                        
                        {/* Hover Overlay */}
                        <div className={cn(
                           "absolute inset-0 bg-cyan-400/20 mix-blend-overlay transition-opacity",
                           isActive ? "opacity-100" : "opacity-0"
                        )} />
                    </div>

                    {/* Keybind Tag - Floating separated below */}
                    <div className={cn(
                       "absolute -bottom-4 bg-slate-900 text-white text-[10px] font-bold font-mono py-0.5 px-2 rounded-md shadow-sm transition-all duration-300 border border-slate-800 z-20",
                       isActive ? "bg-cyan-500 border-cyan-400 scale-110" : ""
                    )}>
                       {displayKey}
                    </div>

                    {/* Connection Line (Decorative) */}
                    <div className={cn(
                       "absolute -bottom-8 w-[1px] h-4 bg-slate-300 transition-all opacity-0",
                       isActive ? "opacity-100 h-6" : ""
                    )} />

                 </motion.button>
               );
             })}
         </div>
      </div>

    </div>
  );
}
