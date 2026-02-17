import { NextResponse } from 'next/server';
import { Hero, Skill } from '@/data/heroes';

const SHEET_ID = process.env.GOOGLE_SHEETS_SHEET_ID;
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

interface HeroRow {
  id: string;
  name: string;
  role: string;
  difficulty: string;
  description: string;
  portraitUrl: string;
  fullArtUrl: string;
  robloxUrl: string;
  lore: string;
  videoUrl: string;
  tip1: string;
  tip2: string;
  tip3: string;
}

interface SkillRow {
  hero_id: string;
  key: string;
  name: string;
  description: string;
  iconName: string;
  cooldown?: string;
}

export async function GET() {
  try {
    if (!SHEET_ID || !API_KEY) {
      return NextResponse.json(
        { error: 'Missing Google Sheets configuration' },
        { status: 500 }
      );
    }

    // Fetch Heroes tab
    const heroesUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Heroes?key=${API_KEY}`;
    const heroesResponse = await fetch(heroesUrl);

    if (!heroesResponse.ok) {
      const errorBody = await heroesResponse.text();
      console.error('Google Sheets API Error:', errorBody);
      throw new Error(`Failed to fetch Heroes tab. Status: ${heroesResponse.status}. Make sure: 1) Sheet is shared as "Anyone with the link can view", 2) Tab is named exactly "Heroes", 3) API key is valid`);
    }

    const heroesData = await heroesResponse.json();
    const heroesRows = heroesData.values as string[][];

    // Fetch Skills tab
    const skillsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Skills?key=${API_KEY}`;
    const skillsResponse = await fetch(skillsUrl);

    if (!skillsResponse.ok) {
      const errorBody = await skillsResponse.text();
      console.error('Google Sheets API Error (Skills):', errorBody);
      throw new Error(`Failed to fetch Skills tab. Status: ${skillsResponse.status}. Make sure tab is named exactly "Skills"`);
    }

    const skillsData = await skillsResponse.json();
    const skillsRows = skillsData.values as string[][];

    // Parse Heroes (skip header row)
    const heroesMap = new Map<string, HeroRow>();
    const heroHeaders = heroesRows[0];

    for (let i = 1; i < heroesRows.length; i++) {
      const row = heroesRows[i];
      const hero: any = {};

      heroHeaders.forEach((header, index) => {
        hero[header] = row[index] || '';
      });

      heroesMap.set(hero.id, hero);
    }

    // Parse Skills (skip header row)
    const skillsMap = new Map<string, SkillRow[]>();
    const skillHeaders = skillsRows[0];

    for (let i = 1; i < skillsRows.length; i++) {
      const row = skillsRows[i];
      const skill: any = {};

      skillHeaders.forEach((header, index) => {
        skill[header] = row[index] || '';
      });

      if (!skillsMap.has(skill.hero_id)) {
        skillsMap.set(skill.hero_id, []);
      }
      skillsMap.get(skill.hero_id)!.push(skill);
    }

    // Combine Heroes and Skills
    const heroes: Hero[] = [];

    heroesMap.forEach((heroData, heroId) => {
      const skills = skillsMap.get(heroId) || [];

      const hero: Hero = {
        id: heroData.id,
        name: heroData.name,
        title: (heroData as any).title || `The ${heroData.role}`,
        role: heroData.role as any,
        difficulty: parseInt(heroData.difficulty) || 1,
        description: heroData.description,
        portraitUrl: heroData.portraitUrl,
        fullArtUrl: heroData.fullArtUrl,
        robloxUrl: heroData.robloxUrl,
        lore: heroData.lore,
        videoUrl: heroData.videoUrl,
        tips: [
          heroData.tip1,
          heroData.tip2,
          heroData.tip3,
        ].filter(tip => tip && tip.trim()),
        skills: skills.map(skill => ({
          key: skill.key as any,
          name: skill.name,
          description: skill.description,
          iconName: skill.iconName,
          cooldown: skill.cooldown,
          type: (skill as any).type || 'Active',
        })),
        stats: {
          power: (heroData as any).power || 'B',
          speed: (heroData as any).speed || 'B',
          durability: (heroData as any).durability || 'B',
          control: (heroData as any).control || 'B',
        },
      };

      heroes.push(hero);
    });

    return NextResponse.json(heroes);
  } catch (error) {
    console.error('Error fetching heroes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch heroes data', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
