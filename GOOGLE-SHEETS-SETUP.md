# Google Sheets API Setup Guide

Your app is now configured to fetch hero data from Google Sheets! Follow these steps to ensure everything works.

## ✅ Checklist

### 1. **Make Your Sheet Publicly Accessible**

The Google Sheets API with an API key requires the sheet to be publicly accessible.

**Steps:**
1. Open your Google Sheet
2. Click **"Share"** button (top right)
3. Under "General access", select **"Anyone with the link"**
4. Set permission to **"Viewer"**
5. Click **"Done"**

### 2. **Verify Tab Names**

Your spreadsheet must have **exactly** these two tabs:

- ✅ `Heroes` (capital H)
- ✅ `Skills` (capital S)

Tab names are case-sensitive!

### 3. **Check Your Sheet Structure**

#### **Heroes Tab** - First row must be headers:
```
id | name | role | difficulty | description | portraitUrl | fullArtUrl | robloxUrl | lore | videoUrl | tip1 | tip2 | tip3
```

#### **Skills Tab** - First row must be headers:
```
hero_id | key | name | description | iconName | cooldown
```

### 4. **Verify API Key**

Your API key should:
- ✅ Have **Google Sheets API** enabled
- ✅ Not have IP or domain restrictions (or include localhost)
- ✅ Be active (not expired or disabled)

**Check in Google Cloud Console:**
1. Go to: https://console.cloud.google.com/apis/credentials
2. Find your API key (stored in .env.local)
3. Click "Edit"
4. Make sure "Google Sheets API" is in the list of enabled APIs

### 5. **Test the API Directly**

Open this URL in your browser (replace with your actual values):

```
https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/Heroes?key=YOUR_API_KEY
```

**Expected Result:**
- ✅ You should see JSON data with your heroes
- ❌ If you see an error, the sheet isn't publicly accessible or the API key is invalid

## 🐛 Troubleshooting

### Error: "Failed to fetch Heroes tab"

**Possible causes:**
1. **Sheet not public** - Follow step 1 above
2. **Wrong tab name** - Must be exactly "Heroes" (capital H)
3. **API key restrictions** - Check Google Cloud Console

### Error: "Failed to fetch Skills tab"

**Possible causes:**
1. **Wrong tab name** - Must be exactly "Skills" (capital S)
2. Sheet not public (same as Heroes)

### Error: "No heroes found"

**Possible causes:**
1. Sheet is empty (no data rows)
2. Headers don't match expected format
3. First row must be headers, data starts from row 2

## 📝 Example Data Format

### Heroes Tab:
```csv
id,name,role,difficulty,description,portraitUrl,fullArtUrl,robloxUrl,lore,videoUrl,tip1,tip2,tip3
ignis,Ignis,Striker,1,A high-octane striker,https://...,/Character-Art-Example.png,/roblox-example-model.png,"Born in fire...",https://youtube.com/...,Use dash wisely,Watch cooldowns,Stay aggressive
```

### Skills Tab:
```csv
hero_id,key,name,description,iconName,cooldown
ignis,LMB,Plasma Punch,Quick punches in a cone,HandMetal,
ignis,RMB,Rocket Dash,Dash forward,Rocket,8s
ignis,Q,Overheat,Bonus burn damage,Flame,12s
ignis,SPC,Jump Jet,Launch into air,ArrowUp,6s
ignis,R,Meteor Strike,Massive AoE damage,Meteor,90s
```

## 🔄 After Making Changes

1. Refresh your browser at http://localhost:3000
2. The app will automatically fetch the latest data from your sheet
3. No need to restart the dev server

## 📚 Current Configuration

Your `.env.local` file should have:
```
GOOGLE_SHEETS_API_KEY=your_api_key_here
GOOGLE_SHEETS_SHEET_ID=your_sheet_id_here
```

**IMPORTANT:** Never commit your .env.local file to git!
