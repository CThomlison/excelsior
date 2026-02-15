import { motion } from "motion/react";
import { Hero } from "../../data/heroes";
import { cn } from "../../lib/utils";

interface HeroListProps {
  heroes: Hero[];
  selectedHeroId: string | null;
  onSelectHero: (hero: Hero) => void;
}

export function HeroList({ heroes, selectedHeroId, onSelectHero }: HeroListProps) {
  return (
    <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto p-4 md:h-full md:w-72 lg:w-80 bg-indigo-950/40 backdrop-blur-md border-b md:border-r border-indigo-500/20 scrollbar-thin scrollbar-thumb-indigo-500/50 scrollbar-track-transparent">
      <motion.div 
        className="flex md:flex-col gap-3 min-w-max md:min-w-0 pb-4 md:pb-0"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08
            }
          }
        }}
      >
        {heroes.map((hero) => (
          <motion.button
            key={hero.id}
            variants={{
              hidden: { opacity: 0, x: -20, scale: 0.9 },
              visible: { opacity: 1, x: 0, scale: 1 }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectHero(hero)}
            className={cn(
              "group relative flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 w-full text-left overflow-hidden",
              selectedHeroId === hero.id 
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/20 border-2 border-purple-400/50" 
                : "bg-indigo-900/30 hover:bg-indigo-800/50 border-2 border-indigo-800/50 hover:border-indigo-600"
            )}
          >
            <div className={cn(
              "relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-4 transition-colors shadow-md shrink-0",
              selectedHeroId === hero.id ? "border-white" : "border-indigo-900 group-hover:border-indigo-400"
            )}>
              <img 
                src={hero.portraitUrl} 
                alt={hero.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="flex flex-col z-10 min-w-0">
              <span className={cn(
                "font-[Fredoka] font-bold text-xl md:text-2xl tracking-wide truncate w-full",
                selectedHeroId === hero.id ? "text-white drop-shadow-md" : "text-indigo-200 group-hover:text-white"
              )}>
                {hero.name}
              </span>
              <span className={cn(
                "text-xs font-[Rubik] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit mt-1",
                 selectedHeroId === hero.id 
                  ? "bg-white/20 text-white" 
                  : "bg-indigo-950/50 text-indigo-400 group-hover:text-indigo-200"
              )}>
                {hero.role}
              </span>
            </div>
            
            {/* Sparkle effect on selection */}
            {selectedHeroId === hero.id && (
              <motion.div
                layoutId="hero-sparkle"
                className="absolute inset-0 bg-white/5 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
