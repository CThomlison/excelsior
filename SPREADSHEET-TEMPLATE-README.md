# Hero Data Spreadsheet Templates

## Overview
Two CSV template files for managing hero data in Google Sheets.

## Files Created
1. **template-heroes.csv** - Hero information
2. **template-skills.csv** - Hero skills/abilities

## Google Sheets Setup

### 1. Create a new Google Spreadsheet
- Go to Google Sheets
- Create a new spreadsheet
- Name it something like "Excelsior Hero Data"

### 2. Import the Heroes Tab
- Create a tab named **"Heroes"**
- File → Import → Upload → Select `template-heroes.csv`
- Import location: "Replace current sheet" or "Insert new sheet"

### 3. Import the Skills Tab
- Create a new tab named **"Skills"**
- File → Import → Upload → Select `template-skills.csv`
- Import location: "Insert new sheet"

## Column Descriptions

### Heroes Tab
| Column | Description | Example |
|--------|-------------|---------|
| id | Unique identifier (lowercase, no spaces) | `ignis` |
| name | Display name | `Ignis` |
| role | Character role | `Striker`, `Support`, `Defender`, `Controller` |
| difficulty | Difficulty rating 1-3 | `1` |
| description | Short character description | `A high-octane striker...` |
| portraitUrl | URL to portrait image (sidebar) | `https://...` or `/portraits/ignis.png` |
| fullArtUrl | URL to background character art | `/Character-Art-Example.png` |
| robloxUrl | URL to 3D model/front image | `/roblox-example-model.png` |
| lore | Character backstory/lore | `Ignis was once a factory worker...` |
| videoUrl | YouTube video URL | `https://www.youtube.com/watch?v=...` |
| tip1, tip2, tip3 | Gameplay tips (3 columns) | `Use Rocket Dash to close the gap...` |

### Skills Tab
| Column | Description | Example |
|--------|-------------|---------|
| hero_id | Hero ID (matches Heroes.id) | `ignis` |
| key | Keyboard key binding | `LMB`, `RMB`, `Q`, `R`, `SPC` |
| name | Skill name | `Plasma Punch` |
| description | Skill description | `Deliver a quick series of punches...` |
| iconName | Lucide icon name | `HandMetal`, `Rocket`, `Flame` |
| cooldown | Cooldown time (optional) | `8s`, `12s`, `90s` |

## Icon Names Reference
Common Lucide icons you can use:
- **Combat**: `Sword`, `Shield`, `Zap`, `Flame`, `Rocket`, `Target`
- **Movement**: `Move`, `Wind`, `ArrowUp`, `CircleDot`
- **Abilities**: `Sparkles`, `Heart`, `Link`, `Ghost`, `Circle`
- **Actions**: `HandMetal`, `Hammer`, `Box`, `Disc`

Full icon list: https://lucide.dev/icons/

## Tips for Managing Data

1. **Hero IDs**: Keep them lowercase, use hyphens for spaces
   - Good: `cyber-monk`, `void-stalker`
   - Bad: `Cyber Monk`, `void_stalker`

2. **Skills**: Each hero should have exactly 5 skills (LMB, RMB, Q, SPC, R)

3. **Images**:
   - Upload images to `/public` folder
   - Reference as `/image-name.png`
   - Or use full URLs for external images

4. **Tips**: Can add more tip columns (tip4, tip5, etc.) if needed

5. **Roles**: Stick to these 4 roles for consistency:
   - `Striker` (DPS/Damage)
   - `Support` (Healer/Buffer)
   - `Defender` (Tank/Protection)
   - `Controller` (Crowd Control/Utility)

## Next Steps

After filling out your spreadsheet:
1. Get the Google Sheet ID from the URL
2. Update `.env.local` with `GOOGLE_SHEETS_SHEET_ID`
3. Set up Google Sheets API permissions
4. Connect the app to fetch data from your sheet
