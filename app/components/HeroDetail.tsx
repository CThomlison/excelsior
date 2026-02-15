"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Hero } from "@/data/heroes";
import { cn } from "@/lib/utils";
import { SkillIcon } from "./SkillIcon";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface HeroDetailProps {
  hero: Hero;
}

export function HeroDetail({ hero }: HeroDetailProps) {
  const [activeTab, setActiveTab] = useState<"skills" | "tips" | "lore" | "spotlight">("skills");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Reset selected skill when hero changes
  if (hero.id !== selectedSkill && selectedSkill && !hero.skills.find(s => s.name === selectedSkill)) {
      setSelectedSkill(null);
  }

  return (
    <div className="flex-1 w-full h-full relative overflow-hidden bg-indigo-950 text-white font-[Rubik]">
      {/* Magical Background Particles/Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950" />
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />

        {/* Soft overlay pattern or noise could go here */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row p-6 md:p-12 gap-8 md:gap-16 items-center md:items-start justify-center overflow-y-auto">

        {/* Left Column: Character Art & Title */}
        <motion.div
          key={hero.id + "-art"}
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="flex-1 flex flex-col items-center md:items-start space-y-6 max-w-lg"
        >
           <div className="relative group w-full">
              {/* Magical Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-t from-purple-500 to-cyan-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>

              <motion.img
                src={hero.fullArtUrl}
                alt={hero.name}
                className="relative rounded-[2rem] shadow-2xl border-4 border-white/20 w-full max-h-[55vh] object-cover object-top"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
           </div>

           <div className="text-center md:text-left space-y-3 w-full">
             <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white font-[Fredoka] drop-shadow-[0_4px_0_rgba(76,29,149,1)] leading-[0.9]">
               {hero.name}
             </h1>

             <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
               <span className="px-4 py-1.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-bold rounded-full shadow-lg transform -skew-x-6 border-2 border-white/20 font-[Fredoka]">
                 {hero.role}
               </span>
               <div className="flex gap-1.5 bg-black/20 p-2 rounded-full backdrop-blur-sm border border-white/10">
                 {[...Array(3)].map((_, i) => (
                   <motion.div
                     key={i}
                     className={cn(
                       "w-3 h-3 rounded-full shadow-inner",
                       i < hero.difficulty ? "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" : "bg-gray-700"
                     )}
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ delay: i * 0.1 }}
                   />
                 ))}
               </div>
             </div>

             <p className="text-indigo-100 text-lg md:text-xl font-medium leading-relaxed max-w-md drop-shadow-sm font-[Rubik]">
               {hero.description}
             </p>
           </div>
        </motion.div>

        {/* Right Column: Interactive Details */}
        <div className="flex-1 w-full max-w-2xl flex flex-col space-y-6 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden ring-1 ring-white/30">

          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-black/20 rounded-full w-fit mx-auto md:mx-0 overflow-x-auto max-w-full">
            {["skills", "tips", "lore", "spotlight"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={cn(
                  "px-5 py-2 text-sm md:text-base font-bold rounded-full transition-all duration-300 font-[Fredoka] capitalize",
                  activeTab === tab
                    ? "bg-white text-indigo-900 shadow-lg scale-105"
                    : "text-indigo-200 hover:text-white hover:bg-white/10"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="min-h-[420px] relative">
            <AnimatePresence mode="wait">
              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-5 gap-3 md:gap-4 justify-items-center py-4">
                    {hero.skills.map((skill) => (
                      <SkillIcon
                        key={skill.key}
                        skill={skill as any}
                        isSelected={selectedSkill === skill.name}
                        onClick={() => setSelectedSkill(skill.name === selectedSkill ? null : skill.name)}
                      />
                    ))}
                  </div>

                  <div className="bg-indigo-900/40 p-6 rounded-3xl border-2 border-indigo-500/30 relative min-h-[180px] flex flex-col justify-center">
                    {selectedSkill ? (
                      <motion.div
                        key={selectedSkill}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-3"
                      >
                        {(() => {
                          const skill = hero.skills.find(s => s.name === selectedSkill);
                          if (!skill) return null;
                          return (
                            <>
                              <div className="flex items-center gap-3">
                                <h3 className="text-3xl font-black text-white font-[Fredoka] tracking-wide drop-shadow-md">
                                  {skill.name}
                                </h3>
                                <span className="text-xs font-bold bg-purple-500 text-white px-2 py-1 rounded-lg shadow-sm">
                                  {skill.key}
                                </span>
                              </div>
                              <p className="text-indigo-100 leading-relaxed text-lg font-medium">
                                {skill.description}
                              </p>
                            </>
                          );
                        })()}
                      </motion.div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-indigo-300/60 font-medium text-lg text-center gap-2">
                        <span className="text-4xl">👆</span>
                        Tap a skill to see what it does!
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "tips" && (
                <motion.div
                  key="tips"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-pink-300 font-[Fredoka] border-b-2 border-pink-500/20 pb-2 mb-4">
                    Top Strategies
                  </h3>
                  <ul className="space-y-3">
                    {hero.tips.map((tip, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-4 p-4 bg-indigo-900/30 border-2 border-indigo-500/20 rounded-2xl hover:bg-indigo-800/40 hover:border-pink-400/50 transition-all cursor-default"
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white font-bold font-[Fredoka] shrink-0 shadow-lg">
                          {idx + 1}
                        </span>
                        <span className="text-indigo-100 text-lg font-medium">{tip}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === "lore" && (
                <motion.div
                  key="lore"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-indigo-900/30 p-8 rounded-3xl border-2 border-indigo-500/20 h-full flex items-center"
                >
                  <p className="text-indigo-100 text-xl leading-loose font-medium font-[Rubik] italic text-center">
                    "{hero.lore}"
                  </p>
                </motion.div>
              )}

              {activeTab === "spotlight" && (
                <motion.div
                  key="spotlight"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="w-full aspect-video rounded-3xl overflow-hidden border-4 border-indigo-300/20 shadow-2xl bg-black relative group"
                >
                  <ReactPlayer
                    url={hero.videoUrl}
                    width="100%"
                    height="100%"
                    controls={true}
                    light={true}
                    playing={false}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 }
                      }
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
