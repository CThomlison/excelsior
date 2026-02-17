export interface Skill {
  key: "LMB" | "RMB" | "Q" | "R" | "SPC";
  name: string;
  description: string;
  iconName: string; // We'll use this to pick an icon from Lucide
  cooldown?: string;
  type?: string; // e.g., "Active", "Passive", "Ultimate"
}

export interface Hero {
  id: string;
  name: string;
  title: string; // Subtitle/tagline
  role: "Striker" | "Defender" | "Controller" | "Support"; // Made up roles for Sparkball
  difficulty: number; // 1-3
  description: string;
  portraitUrl: string;
  fullArtUrl: string;
  robloxUrl: string; // 3D model or center display image
  skills: Skill[];
  lore: string;
  videoUrl: string;
  tips: string[];
  stats: {
    power: string;
    speed: string;
    durability: string;
    control: string;
  };
}

export const HEROES: Hero[] = [
  {
    id: "ignis",
    name: "Ignis",
    title: "The Plasma Brawler",
    role: "Striker",
    difficulty: 1,
    description: "A high-octane striker who uses plasma-infused gauntlets to punch through defenses.",
    portraitUrl: "https://images.unsplash.com/photo-1711662171213-4141abec218f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY3liZXJwdW5rJTIwd2FycmlvciUyMHBvcnRyYWl0JTIwY2hhcmFjdGVyfGVufDF8fHx8MTc3MTE5MDg1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullArtUrl: "/Character-Art-Example.png",
    robloxUrl: "/roblox-example-model.png",
    skills: [
      { key: "LMB", name: "Plasma Punch", description: "Deliver a quick series of punches that deal damage in a cone.", iconName: "HandMetal", type: "Active" },
      { key: "RMB", name: "Rocket Dash", description: "Dash forward, knocking back enemies in your path.", iconName: "Rocket", type: "Active" },
      { key: "Q", name: "Overheat", description: "Ignite your gauntlets, dealing bonus burn damage on hit for 5s.", iconName: "Flame", type: "Active" },
      { key: "SPC", name: "Jump Jet", description: "Launch into the air to gain high ground.", iconName: "ArrowUp", type: "Active" },
      { key: "R", name: "Meteor Strike", description: "Crash down from the sky, dealing massive AoE damage.", iconName: "Meteor", type: "Ultimate" },
    ],
    lore: "Ignis was once a factory worker in the lower sectors of Neo-Veridia. After an industrial accident fused his arms with experimental plasma cutters, he turned to the underground arena circuit. His fighting style is raw, aggressive, and flashy—perfect for the Pro League.",
    videoUrl: "https://www.youtube.com/watch?v=dummy1",
    tips: [
      "Use Rocket Dash to close the gap or escape dangerous situations.",
      "Meteor Strike is best used when enemies are clustered together.",
      "Activate Overheat before engaging in a brawl for maximum damage output."
    ],
    stats: {
      power: "S+",
      speed: "A",
      durability: "B",
      control: "C"
    }
  },
  {
    id: "cyber-monk",
    name: "Zenith",
    title: "The Silicon Monk",
    role: "Support",
    difficulty: 3,
    description: "A cybernetic monk who manipulates energy fields to protect allies and disrupt foes.",
    portraitUrl: "https://images.unsplash.com/photo-1752958895370-c69ac9b63573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMG1lY2glMjBzb2xkaWVyJTIwcG9ydHJhaXQlMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzcxMTkwODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullArtUrl: "/Character-Art-Example.png",
    robloxUrl: "/roblox-example-model.png",
    skills: [
      { key: "LMB", name: "Energy Orb", description: "Fire a precise orb of energy that heals allies or damages enemies.", iconName: "CircleDot", type: "Active" },
      { key: "RMB", name: "Barrier Field", description: "Project a shield in front of you that blocks projectiles.", iconName: "Shield", type: "Active" },
      { key: "Q", name: "Harmony Link", description: "Tether to an ally, sharing health regeneration.", iconName: "Link", type: "Active" },
      { key: "SPC", name: "Levitate", description: "Hover above the ground, moving faster and ignoring terrain.", iconName: "Wind", type: "Active" },
      { key: "R", name: "Transcendence", description: "Become invulnerable and heal all nearby allies rapidly.", iconName: "Sun", type: "Ultimate" },
    ],
    lore: "Zenith is the last of the Silicon Monks, a sect dedicated to finding the ghost in the machine. He joined Sparkball not for glory, but to demonstrate the harmony between flesh and steel.",
    videoUrl: "https://www.youtube.com/watch?v=dummy2",
    tips: [
      "Keep Harmony Link on your main tank to keep them alive.",
      "Use Barrier Field to block ultimate abilities from enemies like Ignis.",
      "Levitate allows you to position yourself safely on high ledges."
    ],
    stats: {
      power: "C",
      speed: "B",
      durability: "A",
      control: "S+"
    }
  },
  {
    id: "void-stalker",
    name: "Nyx",
    title: "Void Stalker",
    role: "Controller",
    difficulty: 2,
    description: "An alien entity that warps space and time to confuse and isolate targets.",
    portraitUrl: "https://images.unsplash.com/photo-1637715925533-4c33bd22908e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGllbiUyMG1vbnN0ZXIlMjBjcmVhdHVyZSUyMHBvcnRyYWl0JTIwY2hhcmFjdGVyfGVufDF8fHx8MTc3MTE5MDg1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullArtUrl: "/Character-Art-Example.png",
    robloxUrl: "/roblox-example-model.png",
    skills: [
      { key: "LMB", name: "Void Bolt", description: "Fire a bolt of dark energy that slows enemies.", iconName: "Zap", type: "Active" },
      { key: "RMB", name: "Phase Shift", description: "Become untargetable for a short duration.", iconName: "Ghost", type: "Active" },
      { key: "Q", name: "Gravity Well", description: "Create a black hole that pulls enemies toward its center.", iconName: "Disc", type: "Active" },
      { key: "SPC", name: "Warp", description: "Teleport a short distance.", iconName: "Move", type: "Active" },
      { key: "R", name: "Event Horizon", description: "Trap enemies in a massive sphere where time is frozen.", iconName: "Globe", type: "Ultimate" },
    ],
    lore: "Nyx hails from the darker corners of the galaxy. Its motives are unknown, but it seems to feed on the chaotic energy of the Sparkball arena.",
    videoUrl: "https://www.youtube.com/watch?v=dummy3",
    tips: [
      "Combine Gravity Well with teammate ultimates for team wipes.",
      "Save Phase Shift to dodge high-damage abilities.",
      "Warp can be used to engage or disengage unexpected angles."
    ],
    stats: {
      power: "B",
      speed: "S",
      durability: "C",
      control: "A"
    }
  },
  {
    id: "arcane-sorc",
    name: "Aura",
    title: "Crystal Sorceress",
    role: "Defender",
    difficulty: 2,
    description: "A mystic defender who uses arcane barriers and magical constructs.",
    portraitUrl: "https://images.unsplash.com/photo-1691485757379-5c396fb2e05d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnZSUyMHNvcmNlcmVyJTIwcG9ydHJhaXQlMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzcxMTkwODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullArtUrl: "/Character-Art-Example.png",
    robloxUrl: "/roblox-example-model.png",
    skills: [
      { key: "LMB", name: "Arcane Missile", description: "Launch magical missiles that track targets slightly.", iconName: "Sparkles", type: "Active" },
      { key: "RMB", name: "Crystal Wall", description: "Summon a destructible wall of crystal.", iconName: "Square", type: "Active" },
      { key: "Q", name: "Polymorph", description: "Transform an enemy into a harmless critter for 2s.", iconName: "Rabbit", type: "Active" },
      { key: "SPC", name: "Glide", description: "Slow fall speed while in the air.", iconName: "Feather", type: "Passive" },
      { key: "R", name: "Crystal Spire", description: "Summon a massive spire that pulses damage and slows enemies.", iconName: "TowerControl", type: "Ultimate" },
    ],
    lore: "Aura is a scholar from the Crystal Isles. She entered the league to fund her research into the ancient ley lines that power the Sparkball arenas.",
    videoUrl: "https://www.youtube.com/watch?v=dummy4",
    tips: [
      "Use Crystal Wall to block choke points.",
      "Polymorph the enemy carry to take them out of the fight instantly.",
      "Crystal Spire provides excellent area denial."
    ],
    stats: {
      power: "C",
      speed: "B",
      durability: "S",
      control: "A"
    }
  }
];
