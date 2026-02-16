export interface Skill {
  key: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Hero {
  id: string;
  name: string;
  role: "Damage" | "Tank" | "Support";
  difficulty: 1 | 2 | 3;
  description: string;
  lore: string;
  tips: string[];
  portraitUrl: string;
  fullArtUrl: string;
  robloxUrl: string; // New field for the 3D model
  skills: Skill[];
}

export const HEROES: Hero[] = [
  {
    id: "neon-striker",
    name: "Velocity",
    role: "Damage",
    difficulty: 3,
    description: "A high-speed skirmisher who uses kinetic energy to zap enemies.",
    lore: "Born in the neon-lit slums of sector 7, Velocity learned to harness the city's overflowing power grid. Now she runs circles around the corporate security forces, a blur of blue lightning and rebellious spirit.",
    tips: ["Use your dash to dodge enemy fire.", "Your ultimate resets on elimination.", "Keep moving to build up charge."],
    portraitUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
    fullArtUrl: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=1000",
    robloxUrl: "https://images.unsplash.com/photo-1635492491273-455af7728453?auto=format&fit=crop&q=80&w=800",
    skills: [
      { key: "LMB", name: "Pulse Fire", description: "Fire rapid energy bolts.", iconName: "Zap" },
      { key: "RMB", name: "Dash", description: "Quickly dash in movement direction.", iconName: "Move" },
      { key: "Q", name: "Overload", description: "Increase fire rate and movement speed.", iconName: "Activity" },
      { key: "E", name: "Static Field", description: "Create a slowing field.", iconName: "Circle" },
      { key: "R", name: "Lightning Storm", description: "Unleash a massive electrical storm.", iconName: "CloudLightning" }
    ]
  },
  {
    id: "iron-clad",
    name: "Bastion",
    role: "Tank",
    difficulty: 1,
    description: "A heavily armored juggernaut capable of absorbing massive damage.",
    lore: "Forged from the wreckage of an ancient war machine, Bastion serves as the unyielding shield of the innocent. His plating is nigh-impenetrable, and his resolve is even stronger.",
    tips: ["Block incoming damage with your shield.", "Protect your teammates.", "Initiate fights with your charge."],
    portraitUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
    fullArtUrl: "https://images.unsplash.com/photo-1626240098317-09d949479360?auto=format&fit=crop&q=80&w=1000",
    robloxUrl: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?auto=format&fit=crop&q=80&w=800",
    skills: [
      { key: "LMB", name: "Hammer Swing", description: "Swing your massive hammer.", iconName: "Hammer" },
      { key: "RMB", name: "Shield Up", description: "Raise your shield to block attacks.", iconName: "Shield" },
      { key: "Q", name: "Charge", description: "Charge forward, pinning enemies.", iconName: "ArrowRight" },
      { key: "E", name: "Earthshatter", description: "Stun enemies in front of you.", iconName: "Minimize2" },
      { key: "R", name: "Fortress", description: "Become temporarily invulnerable.", iconName: "Box" }
    ]
  },
  {
    id: "mystic-weaver",
    name: "Aura",
    role: "Support",
    difficulty: 2,
    description: "A mystical healer who weaves life energy to sustain allies.",
    lore: "Aura is the last guardian of the verdant sanctuary. She uses ancient magic to mend wounds and protect life, ensuring balance is maintained in a chaotic world.",
    tips: ["Keep your healing beam on low-health allies.", "Use your sleep dart to disable threats.", "Stay behind your tank."],
    portraitUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    fullArtUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
    robloxUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    skills: [
      { key: "LMB", name: "Heal Beam", description: "Channel healing energy to an ally.", iconName: "Heart" },
      { key: "RMB", name: "Damage Boost", description: "Amplify an ally's damage.", iconName: "TrendingUp" },
      { key: "Q", name: "Sleep Dart", description: "Put an enemy to sleep.", iconName: "Moon" },
      { key: "E", name: "Revive", description: "Bring a fallen ally back to life.", iconName: "RefreshCw" },
      { key: "R", name: "Transcendence", description: "Rapidly heal all nearby allies.", iconName: "Sun" }
    ]
  }
];
