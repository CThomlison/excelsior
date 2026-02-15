import { useState } from "react";
import { HeroList } from "./components/HeroList";
import { HeroDetail } from "./components/HeroDetail";
import { HEROES, Hero } from "../data/heroes";

export default function App() {
  const [selectedHero, setSelectedHero] = useState<Hero>(HEROES[0]);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-indigo-950 text-white font-[Rubik]">
      {/* Magical Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Sidebar / List */}
      <div className="relative z-10 flex flex-col md:flex-row h-full w-full">
        <HeroList 
          heroes={HEROES} 
          selectedHeroId={selectedHero.id} 
          onSelectHero={setSelectedHero} 
        />

        {/* Main Detail Area */}
        <div className="flex-1 relative overflow-hidden">
          <HeroDetail hero={selectedHero} />
        </div>
      </div>
    </div>
  );
}
