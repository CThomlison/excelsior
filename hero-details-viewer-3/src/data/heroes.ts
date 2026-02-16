import { Hero } from "./heroes";

export interface Skill {
  key: string;
  name: string;
  iconName: string; // Lucide icon name
  description: string;
  type: string; // Added spell type
}

export interface HeroStats {
  strength: string; // S+, A, B, C, D
  speed: string;
  durability: string;
  control: string;
  wildcard: string;
}

export interface Hero {
  id: string;
  name: string;
  title: string;
  role: "Striker" | "Defender" | "Support" | "Controller"; 
  difficulty: number; // 1-3
  description: string;
  portraitUrl: string;
  fullArtUrl: string;
  robloxUrl: string;
  stats: HeroStats;
  skills: Skill[];
  lore: string;
  tips: string[];
}

export const HEROES: Hero[] = [
  {
    id: "h1",
    name: "Jinx",
    title: "The Loose Cannon",
    role: "Striker",
    difficulty: 2,
    description: "A manic criminal who thrives on chaos and explosions.",
    portraitUrl: "https://images.unsplash.com/photo-1620553755288-038c227575d3?q=80&w=200&auto=format&fit=crop", 
    fullArtUrl: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop", 
    robloxUrl: "https://images.unsplash.com/photo-1560264020-f56f45c85d7b?q=80&w=800&auto=format&fit=crop", 
    stats: {
      strength: "A",
      speed: "S",
      durability: "C",
      control: "B",
      wildcard: "S+"
    },
    skills: [
      { key: "P", name: "Get Excited!", iconName: "Zap", description: "Massive movement speed boost whenever she scores a takedown or destroys a structure.", type: "Passive" },
      { key: "Q", name: "Switcheroo!", iconName: "RefreshCw", description: "Swaps between Pow-Pow (minigun) for speed and Fishbones (rocket launcher) for damage.", type: "Toggle" },
      { key: "W", name: "Zap!", iconName: "ZapOff", description: "Fires a shock blast that slows and reveals the first enemy hit.", type: "Line Skillshot" },
      { key: "E", name: "Flame Chompers!", iconName: "Bomb", description: "Tosses out snare grenades that root enemies who walk over them.", type: "Location Target" },
      { key: "R", name: "Super Mega Death Rocket!", iconName: "Rocket", description: "Fires a global rocket that deals damage based on missing health.", type: "Global Skillshot" }
    ],
    lore: "Jinx is a manic criminal from Zaun, who lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx despises boredom, and gleefully brings her own chaotic brand of pandemonium wherever she goes.",
    tips: ["Use Fishbones to poke enemies from a safe distance.", "Chain your crowd control with your team for guaranteed hits.", "Keep an eye on low health enemies across the map for your ultimate."]
  },
  {
    id: "h2",
    name: "Vi",
    title: "The Piltover Enforcer",
    role: "Defender",
    difficulty: 1,
    description: "A Piltover enforcer who solves problems with her massive hextech gauntlets.",
    portraitUrl: "https://images.unsplash.com/photo-1542259659-4ab64f175786?q=80&w=200&auto=format&fit=crop",
    fullArtUrl: "https://images.unsplash.com/photo-1636955760762-c16e7a2b9d29?q=80&w=1200&auto=format&fit=crop",
    robloxUrl: "https://images.unsplash.com/photo-1616781290637-234235e155df?q=80&w=800&auto=format&fit=crop",
    stats: {
      strength: "S",
      speed: "B",
      durability: "A",
      control: "A",
      wildcard: "B"
    },
    skills: [
      { key: "P", name: "Blast Shield", iconName: "Shield", description: "Generates a shield when hitting an enemy with an ability.", type: "Passive" },
      { key: "Q", name: "Vault Breaker", iconName: "Move", description: "Charges up a punch that dashes forward, knocking back enemies.", type: "Charge / Dash" },
      { key: "W", name: "Denting Blows", iconName: "Hammer", description: "Every 3rd hit breaks armor and grants attack speed.", type: "Passive" },
      { key: "E", name: "Relentless Force", iconName: "Activity", description: "Causes her next attack to blast through the target, damaging enemies behind them.", type: "Auto-Attack Reset" },
      { key: "R", name: "Cease and Desist", iconName: "Target", description: "Chases down an enemy, knocking them up and slamming them into the ground.", type: "Unit Target" }
    ],
    lore: "Once a criminal from the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with only a very loose respect for authority figures. Growing up alone, she developed finely honed survival instincts as well as a wickedly abrasive sense of humor. Now working with the Wardens of Piltover to keep the peace, she wields mighty hextech gauntlets that can punch through bank vaults.",
    tips: ["Charge your Vault Breaker fully to chase down fleeing enemies.", "Focus on the enemy carry with your ultimate.", "Your passive shield is a lifesaver in 1v1 duels."]
  },
  {
    id: "h3",
    name: "Ekko",
    title: "The Boy Who Shattered Time",
    role: "Striker",
    difficulty: 3,
    description: "A boy who shattered time to make the perfect moment.",
    portraitUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    fullArtUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    robloxUrl: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=800&auto=format&fit=crop",
    stats: {
      strength: "B",
      speed: "S+",
      durability: "D",
      control: "A",
      wildcard: "S"
    },
    skills: [
      { key: "P", name: "Z-Drive Resonance", iconName: "Hourglass", description: "Every third attack deals bonus damage and steals speed.", type: "Passive" },
      { key: "Q", name: "Timewinder", iconName: "Disc", description: "Throws a device that slows and returns to him.", type: "Line Skillshot" },
      { key: "W", name: "Parallel Convergence", iconName: "CircleDot", description: "Creates a field that slows enemies or stuns them if Ekko enters it.", type: "Location Target" },
      { key: "E", name: "Phase Dive", iconName: "ArrowRight", description: "Dashes and then blinks to a target for a powerful hit.", type: "Dash / Blink" },
      { key: "R", name: "Chronobreak", iconName: "Rewind", description: "Rewinds time to where he was 4 seconds ago, healing and dealing massive damage.", type: "Self-Cast" }
    ],
    lore: "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this freedom, when there's a threat to his friends, he'll do anything to defend them.",
    tips: ["Use your ultimate to escape bad situations or surprise enemies with burst damage.", "Predict enemy movement with Parallel Convergence.", "Hit and run with your passive speed boost."]
  },
  {
    id: "h4",
    name: "Caitlyn",
    title: "The Sheriff of Piltover",
    role: "Striker",
    difficulty: 1,
    description: "Piltover's finest peacekeeper with a sniper rifle.",
    portraitUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    fullArtUrl: "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?q=80&w=1200&auto=format&fit=crop",
    robloxUrl: "https://images.unsplash.com/photo-1515405295579-ba7b454989ab?q=80&w=800&auto=format&fit=crop",
    stats: {
      strength: "B",
      speed: "C",
      durability: "D",
      control: "B",
      wildcard: "A"
    },
    skills: [
      { key: "P", name: "Headshot", iconName: "Crosshair", description: "Every few attacks deals massive bonus damage.", type: "Passive" },
      { key: "Q", name: "Piltover Peacemaker", iconName: "ArrowUp", description: "Fires a piercing shot that widens on hit.", type: "Line Skillshot" },
      { key: "W", name: "Yordle Snap Trap", iconName: "AlertTriangle", description: "Sets traps that immobilize enemies.", type: "Location Target" },
      { key: "E", name: "90 Caliber Net", iconName: "Minimize", description: "Fires a net to slow enemies and recoil backwards.", type: "Line Skillshot" },
      { key: "R", name: "Ace in the Hole", iconName: "Target", description: "Locks onto an enemy for a perfect shot that can be blocked by allies.", type: "Unit Target" }
    ],
    lore: "Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn's most powerful weapon is her superior intellect.",
    tips: ["Place traps in brush or narrow choke points.", "Use your net to create distance from melee attackers.", "Save your ultimate to finish off low health targets who think they've escaped."]
  }
];
