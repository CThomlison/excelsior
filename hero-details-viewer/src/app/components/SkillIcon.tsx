import * as LucideIcons from "lucide-react";
import { cn } from "../../lib/utils";
import { Skill } from "../../data/heroes";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SkillIconProps {
  skill: Skill;
  isSelected?: boolean;
  onClick?: () => void;
}

export function SkillIcon({ skill, isSelected, onClick }: SkillIconProps) {
  const Icon = (LucideIcons as any)[skill.iconName] as LucideIcons.LucideIcon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group z-10">
      <motion.button
        className={cn(
          "w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 rounded-3xl shadow-lg border-4",
          isSelected 
            ? "bg-gradient-to-br from-purple-500 to-pink-500 border-white ring-4 ring-purple-500/30 scale-110" 
            : "bg-indigo-900/60 border-indigo-700/50 hover:border-pink-400 hover:bg-indigo-800"
        )}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute top-1 right-2 text-[10px] font-bold text-white/80 font-[Fredoka] drop-shadow-md">
          {skill.key}
        </div>
        {Icon ? (
          <Icon 
            className={cn(
              "w-8 h-8 transition-colors drop-shadow-md",
              isSelected ? "text-white" : "text-indigo-200 group-hover:text-white"
            )} 
            strokeWidth={2.5}
          />
        ) : <div className="w-8 h-8 bg-indigo-600 rounded-full" />}
      </motion.button>
      
      {/* Cartoon-style Tooltip */}
      <AnimatePresence>
        {isHovered && !isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-white text-indigo-900 border-2 border-indigo-200 p-3 rounded-2xl shadow-xl z-50 pointer-events-none"
          >
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-indigo-200 rotate-45 transform" />
            <div className="font-black text-purple-600 mb-1 font-[Fredoka] text-lg leading-none">{skill.name}</div>
            <div className="text-indigo-900/80 text-xs font-medium leading-snug">{skill.description}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
