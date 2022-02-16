/* DEVELOPER HIRUWA
Don't copy this i take action for you
👿👿👿👿👿👿👿
T-Rex v.1.0 public 👿
*/


const Trex = require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: config.TIME })

if (config.WORKTYPE == 'public') {
  


Trex.addrex({pattern: config.MEN, fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

  if (config.BTN == 'txt') {
    
    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/cd6032c65c27e0510ddad.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `
 
 ╭────────────────
 │ ⎝🛡️ ALPHA 🛡️⎠
 ╰────────────────
 ╭────────────────
 │ Hello ▷ Dear
 │
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   My Bot Work as
 │🖲️ `+Config.WORKTYPE+` 🖲️
 │
 ╰────────────────
 ╭────────────────
 │       🖲️  BOT  🖲️ 
 │        ──────────
 │
 │▷ .alpha
 │▷ .alive
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │    🖲️  Sticker 🖲️ 
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │     🖲️ Uploder 🖲️
 │
 │▷ .uploadp [ reply a photo ]
 │▷ .uploadv [ reply a video ]
 │
 │Upload Your photo or video
 │to Telegraph & Give you link
 │ 
 │warn : you can upload less than 
 │       5mb source
 ╰────────────────
 ╭────────────────
 │ 🖲️ Text To Img 🖲️ 
 │
 │▷ .attppack
 │▷ .ffpack
 │▷ .ttp { text }
 │▷ .dttp { text }
 │▷ .trumpsay { text }
 │▷ .changesay { text }
 │▷ .animesay { text }
 │▷ .meme { text }
 │▷ .carbon { text }
 │
 ╰────────────────
 ╭────────────────
 │  🖲️ Downloader 🖲️
 │
 │▷ .video { vid link }
 │▷ .mp4 { vid name }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
 ╭────────────────
 │     🖲️ Groups 🖲️ 
 │
 │▷ .grp
 │▷ .rules
 │▷ .info
 │▷ .tagadmin
 │▷ .report
 │▷ .gname {change group n}
 │▷ .dis on { disapearing }
 │▷ .dis off { for owner }
 │▷ .warn1 [ for owner ]
 │▷ .warn2 [ for owner ]
 │▷ .warn3 [ for owner ]
 │▷ .warn4 [ for owner ]
 │▷ .tagall  [ for owner ]
 │▷ .ban [ for owner ]
 │▷ .add [ for owner ]
 │▷ .promote [ for owner ]
 │▷ .demote [ for owner ]
 │▷ .invite [ for owner ]
 │▷ .kickme [ for owner ]
 │
 │    use .admin Cmd for
 │      other commands
 │
 ╰────────────────
 ╭────────────────
 │ 🖲️ Software Store 🖲️
 │
 │▷ .Softstore
 │ 
 │   By Achi Bro lk      
 │
 ╰────────────────
 ╭────────────────
 │  🖲️ For owner 🖲️
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │      Alpha BOT
 ╰────────────────
 ╭────────────────
 │   🖲️ Search 🖲️ 
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │🖲️ Media Editor🖲️
 │
 │▷ .xmedia
 │▷ .tblend
 │▷ .ocr
 │▷ .mp3 { vid to aud }
 │▷ .photo { stic to 4to }
 │▷ .ffmpeg { fade in:0:30 }
 │▷ .removebg
 │▷ .spdf
 │▷ .unaudio { mp3 to file }
 │▷ .unvoice { mp3 to voice }
 │
 ╰────────────────
 ╭────────────────
 │    🖲️ Random 🖲️
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       🖲️ Fun 🖲️ 
 │
 │▷ .gm
 │▷ .agm
 │▷ .gn
 │▷ .agn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      🖲️ Other 🖲️ 
 │
 │▷ .ss { link }
 │▷ .afk { bot is online }
 │▷ .short { link }
 │▷ .wame { get user link }
 │▷ .currency
 │▷ .trt { en si }
 │▷ .notes
 │▷ .save
 │▷ .deleteNotes
 │▷ .covid
 ╰────────────────
 
          🖲️ POWERD BY 🖲️
          ⎝🛡️ ALPHA 🛡️⎠
     🖲️       Achiya        🖲️

 
`,quoted: message.data}) 
    
}

}));

Trex.addrex({pattern: config.MEN, fromMe: true, desc: 'it send bot menu'}, (async (message, match) => {

  if (config.BTN == 'txt') {
    
    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/cd6032c65c27e0510ddad.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `
  ╭────────────────
 │ ⎝🛡️ ALPHA 🛡️⎠
 ╰────────────────
 ╭────────────────
 │ Hello ▷ Dear
 │
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   My Bot Work as
 │🖲️ `+Config.WORKTYPE+` 🖲️
 │
 ╰────────────────
 ╭────────────────
 │       🖲️  BOT  🖲️ 
 │        ──────────
 │
 │▷ .alpha
 │▷ .alive
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │    🖲️  Sticker 🖲️ 
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │     🖲️ Uploder 🖲️
 │
 │▷ .uploadp [ reply a photo ]
 │▷ .uploadv [ reply a video ]
 │
 │Upload Your photo or video
 │to Telegraph & Give you link
 │ 
 │warn : you can upload less than 
 │       5mb source
 ╰────────────────
 ╭────────────────
 │ 🖲️ Text To Img 🖲️ 
 │
 │▷ .attppack
 │▷ .ffpack
 │▷ .ttp { text }
 │▷ .dttp { text }
 │▷ .trumpsay { text }
 │▷ .changesay { text }
 │▷ .animesay { text }
 │▷ .meme { text }
 │▷ .carbon { text }
 │
 ╰────────────────
 ╭────────────────
 │  🖲️ Downloader 🖲️
 │
 │▷ .video { vid link }
 │▷ .mp4 { vid name }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
 ╭────────────────
 │     🖲️ Groups 🖲️ 
 │
 │▷ .grp
 │▷ .rules
 │▷ .info
 │▷ .tagadmin
 │▷ .report
 │▷ .gname {change group n}
 │▷ .dis on { disapearing }
 │▷ .dis off { for owner }
 │▷ .warn1 [ for owner ]
 │▷ .warn2 [ for owner ]
 │▷ .warn3 [ for owner ]
 │▷ .warn4 [ for owner ]
 │▷ .tagall  [ for owner ]
 │▷ .ban [ for owner ]
 │▷ .add [ for owner ]
 │▷ .promote [ for owner ]
 │▷ .demote [ for owner ]
 │▷ .invite [ for owner ]
 │▷ .kickme [ for owner ]
 │
 │    use .admin Cmd for
 │      other commands
 │
 ╰────────────────
 ╭────────────────
 │ 🖲️ Software Store 🖲️
 │
 │▷ .Softstore
 │ 
 │   By Achi Bro lk      
 │
 ╰────────────────
 ╭────────────────
 │  🖲️ For owner 🖲️
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │      Alpha BOT
 ╰────────────────
 ╭────────────────
 │   🖲️ Search 🖲️ 
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │🖲️ Media Editor🖲️
 │
 │▷ .xmedia
 │▷ .tblend
 │▷ .ocr
 │▷ .mp3 { vid to aud }
 │▷ .photo { stic to 4to }
 │▷ .ffmpeg { fade in:0:30 }
 │▷ .removebg
 │▷ .spdf
 │▷ .unaudio { mp3 to file }
 │▷ .unvoice { mp3 to voice }
 │
 ╰────────────────
 ╭────────────────
 │    🖲️ Random 🖲️
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       🖲️ Fun 🖲️ 
 │
 │▷ .gm
 │▷ .agm
 │▷ .gn
 │▷ .agn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      🖲️ Other 🖲️ 
 │
 │▷ .ss { link }
 │▷ .afk { bot is online }
 │▷ .short { link }
 │▷ .wame { get user link }
 │▷ .currency
 │▷ .trt { en si }
 │▷ .notes
 │▷ .save
 │▷ .deleteNotes
 │▷ .covid
 ╰────────────────
 
          🖲️ POWERD BY 🖲️
          ⎝🛡️ ALPHA 🛡️⎠
     🖲️       Achiya        🖲️
 
 
`,quoted: message.data}) 

}
  
}));
    
}

  
  
else if (config.WORKTYPE == 'private' ) {
  
  
    Trex.addrex({pattern: config.MEN, fromMe: true, desc: 'it send bot menu'}, (async (message, match) => {
      
    if (config.BTN == 'txt') {
    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/cd6032c65c27e0510ddad.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: config.TIME }).split(' ')[1]

    var wish = ''
     

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `
  ╭────────────────
 │ ⎝🛡️ ALPHA 🛡️⎠
 ╰────────────────
 ╭────────────────
 │ Hello ▷ Dear
 │
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   My Bot Work as
 │🖲️ `+Config.WORKTYPE+` 🖲️
 │
 ╰────────────────
 ╭────────────────
 │       🖲️  BOT  🖲️ 
 │        ──────────
 │
 │▷ .alpha
 │▷ .alive
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │    🖲️  Sticker 🖲️ 
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │     🖲️ Uploder 🖲️
 │
 │▷ .uploadp [ reply a photo ]
 │▷ .uploadv [ reply a video ]
 │
 │Upload Your photo or video
 │to Telegraph & Give you link
 │ 
 │warn : you can upload less than 
 │       5mb source
 ╰────────────────
 ╭────────────────
 │ 🖲️ Text To Img 🖲️ 
 │
 │▷ .attppack
 │▷ .ffpack
 │▷ .ttp { text }
 │▷ .dttp { text }
 │▷ .trumpsay { text }
 │▷ .changesay { text }
 │▷ .animesay { text }
 │▷ .meme { text }
 │▷ .carbon { text }
 │
 ╰────────────────
 ╭────────────────
 │  🖲️ Downloader 🖲️
 │
 │▷ .video { vid link }
 │▷ .mp4 { vid name }
 │▷ .down { status down }
 │▷ .song { song name }
 │▷ .fsong { song name }
 │▷ .play { song name }
 │▷ .img { name }
 │▷ .fb { link }
 │▷ .tiktok { link }
 │▷ .insta { link }
 │▷ .spotify { link }
 │
 ╰────────────────
 ╭────────────────
 │     🖲️ Groups 🖲️ 
 │
 │▷ .grp
 │▷ .rules
 │▷ .info
 │▷ .tagadmin
 │▷ .report
 │▷ .gname {change group n}
 │▷ .dis on { disapearing }
 │▷ .dis off { for owner }
 │▷ .warn1 [ for owner ]
 │▷ .warn2 [ for owner ]
 │▷ .warn3 [ for owner ]
 │▷ .warn4 [ for owner ]
 │▷ .tagall  [ for owner ]
 │▷ .ban [ for owner ]
 │▷ .add [ for owner ]
 │▷ .promote [ for owner ]
 │▷ .demote [ for owner ]
 │▷ .invite [ for owner ]
 │▷ .kickme [ for owner ]
 │
 │    use .admin Cmd for
 │      other commands
 │
 ╰────────────────
 ╭────────────────
 │ 🖲️ Software Store 🖲️
 │
 │▷ .Softstore
 │ 
 │   By Achi Bro lk      
 │
 ╰────────────────
 ╭────────────────
 │  🖲️ For owner 🖲️
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │      Alpha BOT
 ╰────────────────
 ╭────────────────
 │   🖲️ Search 🖲️ 
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │🖲️ Media Editor🖲️
 │
 │▷ .xmedia
 │▷ .tblend
 │▷ .ocr
 │▷ .mp3 { vid to aud }
 │▷ .photo { stic to 4to }
 │▷ .ffmpeg { fade in:0:30 }
 │▷ .removebg
 │▷ .spdf
 │▷ .unaudio { mp3 to file }
 │▷ .unvoice { mp3 to voice }
 │
 ╰────────────────
 ╭────────────────
 │    🖲️ Random 🖲️
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       🖲️ Fun 🖲️ 
 │
 │▷ .gm
 │▷ .agm
 │▷ .gn
 │▷ .agn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      🖲️ Other 🖲️ 
 │
 │▷ .ss { link }
 │▷ .afk { bot is online }
 │▷ .short { link }
 │▷ .wame { get user link }
 │▷ .currency
 │▷ .trt { en si }
 │▷ .notes
 │▷ .save
 │▷ .deleteNotes
 │▷ .covid
 ╰────────────────
 
          🖲️ POWERD BY 🖲️
          ⎝🛡️ ALPHA 🛡️⎠
     🖲️       Achiya        🖲️
 
 
`,quoted: message.data}) 
      
}

}));
}
