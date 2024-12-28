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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_30_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDczLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNixcbiAgICAgICAgMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDY3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTjU5STdVak9RaGJQZzMwS3Boc1lMOHE2MmYvQXZmRjBXN0FOcXd5OHg4RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTYwMDA1NzA2NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkxRDUxMUI2REZFRUJDNUQ0MUMyQ0NCNDYzQzhDMjA0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzYzOTQxNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNjAwMDU3MDY3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEQyQTNCRUE3RjY4ODNEN0I2NEJFNzlGOEU4NEQzMEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNjM5NDE3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE2MDAwNTcwNjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFRUNCNTc4ODQyNDUxMjhBNDg5NTFDNDc3NERENDBCNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2Mzk0MjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTYwMDA1NzA2NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc5QTJDNkQ2QzIyQTBGMTJEODE0NTdENTlDODRFOEIxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzYzOTQyMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPMmpuNlFFQ1I1U2RhemF1U1JxT19nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBlZmQyZTIxLWM5MjQtNDdmOC05YmZkLWVkOTQwZTUzNzI4N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICA2OCxcbiAgICAgIDIwNCxcbiAgICAgIDE1NixcbiAgICAgIDIwOCxcbiAgICAgIDEyOSxcbiAgICAgIDIyNSxcbiAgICAgIDIyOCxcbiAgICAgIDE5MyxcbiAgICAgIDIwNCxcbiAgICAgIDU3LFxuICAgICAgMjUzLFxuICAgICAgNTksXG4gICAgICAyMjYsXG4gICAgICAxMDAsXG4gICAgICAxMTksXG4gICAgICAxNyxcbiAgICAgIDQ5LFxuICAgICAgMjYsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICA3MCxcbiAgICAgIDIyLFxuICAgICAgNDMsXG4gICAgICAxNDAsXG4gICAgICAxMCxcbiAgICAgIDIxOSxcbiAgICAgIDE5NSxcbiAgICAgIDIwMyxcbiAgICAgIDI5LFxuICAgICAgMTQ0LFxuICAgICAgNzUsXG4gICAgICAxNDksXG4gICAgICAxMzgsXG4gICAgICAxMjUsXG4gICAgICAyOCxcbiAgICAgIDIwNyxcbiAgICAgIDExMixcbiAgICAgIDY4LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNks2Sko0QUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNjAwMDU3MDY3MToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTAzMTk4MzY4OTc0Nzc6MTRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiZGpiYWJ1dmxvZ3NcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZmN0aFlROC9uVXVnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm54NytUcE1Bd0NzMStralF0TWhSUld6dmVXdFg5RUcyRjljYTVZSWVXUU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidXBjbHE3OGVSa3Z3Ym13V1k5UzRMdjhnbnhSQTNxaFRkVW1PMkt2eWVIYlkvUngxblZYbEpMTTFtTkltSk0xUVJoSkFCd09SejhaczA2YWh0cWJDREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYXZTb3oyUENqcExHL3pxTStnOHAxSFp2V3ptd01GeFY1MnoyeEZFeWlNT0NiY2F2SzB5eXh2bEVpSWRRMC9FYm16VFBhMS9WR3M3L0RlUHFRdEhkQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MDAwNTcwNjcxOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzYzOTQxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUxWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTFaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZTZxWUhKMHNOMEFxTDhzQlBiRjlKVGR5UDBLLzdwc0pzOHFObklkdGNIZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NzAzMzg5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNjM5NDE2MjkxXCJ9Igp9"  // PUT your SESSION_ID 


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
