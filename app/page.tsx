"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/data/heroes";
import { HeroSelector } from "./components/HeroSelector";
import { HeroViewport } from "./components/HeroViewport";
import { ContentPanel } from "./components/ContentPanel";

export default function App() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const response = await fetch('/api/heroes');

        if (!response.ok) {
          throw new Error('Failed to fetch heroes');
        }

        const data = await response.json();
        setHeroes(data);

        if (data.length > 0) {
          setSelectedHero(data[0]);
        }
      } catch (err) {
        console.error('Error fetching heroes:', err);
        setError(err instanceof Error ? err.message : 'Failed to load heroes');
      } finally {
        setLoading(false);
      }
    }

    fetchHeroes();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-xl font-['Outfit'] font-bold text-slate-900">Loading Heroes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center max-w-md p-8 bg-red-50 border-2 border-red-200 rounded-2xl">
          <p className="text-2xl font-['Outfit'] font-bold text-red-600 mb-4">Error Loading Heroes</p>
          <p className="text-slate-600">{error}</p>
          <p className="text-sm text-slate-500 mt-4">Make sure your Google Sheet is publicly accessible and has the correct tab names (Heroes, Skills).</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-cyan-400 hover:bg-cyan-500 text-white font-bold rounded-full transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!selectedHero || heroes.length === 0) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#F8FAFC]">
        <p className="text-xl font-['Outfit'] font-bold text-slate-900">No heroes found</p>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden font-['Outfit'] select-none flex flex-col md:flex-row bg-[#F8FAFC]">

      {/* GLOBAL BACKGROUND - Light Mode */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Soft Organic Blobs - Pastel & Bright */}
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-200/40 rounded-full blur-[120px] mix-blend-multiply"
          />
          <motion.div
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-pink-200/30 rounded-full blur-[100px] mix-blend-multiply"
          />

          {/* Grid Pattern REMOVED per request */}
      </div>

      {/* LEFT COLUMN: Structural only, no background, but with PADDING to create negative space */}
      {/* Reduced width from 450px to 380px (~15% reduction) */}
      <div className="relative z-20 w-full md:w-[380px] shrink-0 h-full flex flex-col pointer-events-auto p-6 md:pr-0">
        <ContentPanel hero={selectedHero} />
      </div>

      {/* RIGHT COLUMN: WORLD & ART */}
      <div className="relative z-10 flex-1 h-full flex flex-col relative">

        {/* HERO SELECTOR - Floating Top Right */}
        <div className="absolute top-6 right-6 z-30 w-80">
          <HeroSelector
            heroes={heroes}
            selectedHero={selectedHero}
            onSelect={setSelectedHero}
          />
        </div>

        {/* VIEWPORT */}
        <div className="flex-1 w-full h-full flex items-center justify-center pointer-events-none relative z-10">
           <HeroViewport hero={selectedHero} />
        </div>

      </div>

    </div>
  );
}
