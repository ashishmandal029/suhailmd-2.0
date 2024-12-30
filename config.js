const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_40_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMjAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MCxcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVd0dHSEo4TmhEMGJUUS92MS9mR3QweEQwQk04MlQxM1ZLU1pWQ1hvMWF3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLT3YwYjlEQVIyQ0VvTjJlUndYRW5nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQxNmMwMWM3LThhMTctNDkzOC05N2QwLWEzZDhmOWY2NGE5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxNjksXG4gICAgICAxMjYsXG4gICAgICAxMDUsXG4gICAgICA2OCxcbiAgICAgIDEwNCxcbiAgICAgIDExMCxcbiAgICAgIDEwNyxcbiAgICAgIDE4NixcbiAgICAgIDU2LFxuICAgICAgMjM4LFxuICAgICAgMTExLFxuICAgICAgMjAxLFxuICAgICAgMTA5LFxuICAgICAgMjYsXG4gICAgICA3NixcbiAgICAgIDg2LFxuICAgICAgNzYsXG4gICAgICA2NSxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMixcbiAgICAgIDE0OSxcbiAgICAgIDQ2LFxuICAgICAgNjYsXG4gICAgICAxMjIsXG4gICAgICAyMzksXG4gICAgICA5NCxcbiAgICAgIDEyNyxcbiAgICAgIDE2MSxcbiAgICAgIDE0NixcbiAgICAgIDE1NyxcbiAgICAgIDU4LFxuICAgICAgNTMsXG4gICAgICAyMDEsXG4gICAgICAxMzcsXG4gICAgICAxNDEsXG4gICAgICAxNjgsXG4gICAgICA4OSxcbiAgICAgIDQsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDUTFZQlNDRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2MDAwNTcwNjcxOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MDMxOTgzNjg5NzQ3NzoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZmN0aFlROVBQSHV3WVlDU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm54NytUcE1Bd0NzMStralF0TWhSUld6dmVXdFg5RUcyRjljYTVZSWVXUU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiODlwS0dqRzVudklMSHovQnNCblphdyswZUljMm5rWWNqYVhTTW9WV3U3bG85QW9jbTYxYld6cE9MWDhzUldUcjEvSXJnYWtKd1BSc1NRc2FieEZuQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibjFhT3VJdnBFQTRtdUZhQ1dzdkxoNHVpWGhQaENmdjM3NVNrS1c3VmR0K29QRnMyUXM0MnpnYlpaRlRsbzE3UDAzT1V1cHcyd1o3MzRhSGZaTkQ4aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MDAwNTcwNjcxOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTUyMjgwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUxZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTFkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN2ZMZ1dJbCsvVzNPbTJGRmZCV0Y1QVJwc09rbFlwakR6cEc1NFlEcG4rST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NzAzMzg5NSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzM1NDcxMjQ2NzY4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
