/* Copyright (C) 2021 T REX
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HIRUWA - TREX
උස්සන්නද ආවෙ අම්මට හුකෝගන්නෙ නැතුව පල පොන්නයා 😂👿
*/

const Trex = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const hrs = new Date().getHours({ timeZone: Config.TIME })
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('_trex');


if (Config.WORKTYPE == 'public') {
        
if (Config.BTN == 'btn') {

Trex.addrex({pattern: 'trex', fromMe: false}, (async (message, match) => {
// T-REX LIST👿
        var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'
    
    const rows = [
        {title: '👿 ALL MENU 👿', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │❰🍁🔱  T Rex BOT  🔱🍁❱
 ╰────────────────
 ╭────────────────
 │ Hello ▷ Dear
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   My Bot Work as
 │👿 `+Config.WORKTYPE+` 👿
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 BOT 👿🍁
 │        ──────────
 │
 │▷ .trex
 │▷ .alive
 │▷ .atrex [ advance menu ]
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │     🍁👿 Sticker 👿🍁
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │ 🍁👿 Text To Img 👿🍁
 │
 │▷ .rlpack
 │▷ .attppack
 │▷ .tlpack
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
 │  🍁👿 Downloader 👿🍁
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
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
 │     🍁👿 Groups 👿🍁
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
 │🍁👿 ONLINE STORE 👿🍁
 │
 │▷ .online store
 │ 
 │ 👿 T-REX ONLINE 👿
 │     SHOPPING
 │
 │ ONLY SRI LANKAN 
 │    VISITORS.
 │
 ╰────────────────
 ╭────────────────
 │  🍁👿 For owner 👿🍁
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │      T-REX BOT
 ╰────────────────
 ╭────────────────
 │    🍁👿 Search 👿🍁
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .mod { app name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │🍁👿 Media Editor👿🍁
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
 │    🍁👿 Random 👿🍁
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 Fun 👿🍁
 │
 │▷ .rex { hi }
 │▷ .gm
 │▷ .tgm
 │▷ .gn
 │▷ .tgn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      🍁👿 Other 👿🍁
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
 
         👿 POWERD BY 👿
  ❰🍁🔱  T Rex BOT  🔱🍁❱
  
       👿       Hiruwa        👿
` , rowId:"rowid1"},
        {title: '👿 ADVANCE MENU 👿', description:`▷▷▷▷▷▷\n\n\n
╔═══════════════════════╗

           ❰🍁🔱  T Rex BOT  🔱🍁❱

═════════════════════════

*🍁 Command:* °.xmedia°

*➢ Description:* °A plugin that have 25 media tools.°

*🍁 Command:* °.admin°

*➢ Description:* °To get the admin command list°

*🍁 Command:* °.trex°

*➢ Description:*°all commands°

*🍁 Command* °.rlpack°

*➢ Description:* °T-REX LOGO COLLECTION 01°

*🍁 Command:* °.lovepack°

*➢ Description:* °Send Love message to gf/bf.°

*🍁 Command;* °.grp°

*➢ Description:* °Send Groups list°

*🍁 Command:* °.warn1,.warn2,.warn3,.warn4

*➢ Description:* °Send Group Warm msg. Admin only Command°

*🍁 Command:* °.rules°

*➢ Description: * °Send Group Rules°

*🍁 Command:* °.rex°

*➢ Description:* °Chat with AI bot.°

*🍁 Command:* °.switch°

*➢ Description:* °Turn on/off chat bot.

⌨️ Example: To turn on AI chat, *.switch CHAT_BOT:true*

To turn on AI chat, *.switch CHAT_BOT:false*

(This is a only admin command)°

*🍁 Command:* °.anime°

*➢ Description:* °Send Different type ANIME images . විවිදාකාර ඇනිම් පින්තූර ඔබ වෙත එවයි..°

*🍁 Command:* °.antispam°

*➢ Description:* °This command for any emergency situation about any kind of WhatsApp SPAM in Group°

*🍁 Command:* °.mp3°

*➢ Description:* °Convert mp4 into mp3.°

*🍁 Command:* °.photo°

*➢ Description:* °🍁➢ Convert sticker into an image.°

*🍁 Command:* °.ffmpeg°

*➢ Description:* °Apply ffmpeg filter to a video

⌨️ Example: .ffmpeg fade=in:0:30°

*🍁 Command:* °.gn°

*➢ Description:* °Send Gn wish with image.°

*🍁 Command:* °.gm°

*➢ Description:* °Send Gm wish with image.°

*🍁 Command:* °.info°

*➢ Description:* °Show chat details°

*🍁 Command:* °.covid°

*➢ Description:* °Check information about Covid-19 of countries.

Example : .covid Sri Lanka°

*🍁 Command:* °.meme°

*➢ Description:* °The photos you replied to are memes.°

*🍁 Command:* °.movie°

*➢ Description:* °Movies වල විස්තර ලබාදීම.°

*🍁 Command:* °.notes°

*➢ Description:* °Show your notes.°

*🍁 Command:* °.save°

*➢ Description:* °Reply *.save* to a message or type *.save <your_note>*°

*🍁 Command:* °.deleteNotes°

*➢ Description:* °Clear your all notes.°

*🍁 Command:* °.ocr°

*➢ Description:* °Scan your picture into text.°

*🍁 Command:* °.removebg°

*➢ Description:* °Removing background of image.°

*🍁 Command:* °.report°

*➢ Description:* °Report someone in the group to admins.°

*🍁 Command:* °.fsong°

*➢ Description:* °Uploading file type songs.°

*🍁 Command:* °.song°

*➢ Description:* °Uploading mp3 type songs.°

*🍁 Command:* °.video°

*➢ Description:* °Downloading videos from YouTube°

*🍁 Command:* °.insta°

*➢ Description:* °🍁➢ ❰🍁🔱  T Rex BOT  🔱🍁❱ Download instagram videos.°

*🍁 Command:* °.fb°

*➢ Description:* °🍁➢ ❰🍁🔱  T Rex BOT  🔱🍁❱ Download Facebook videos.°

*🍁 Command:* °.trt°

*➢ Description:* °It translates with Google Translator. You must mention any message.°

*⌨️ Example:* °.trt en si (From English to Sinhala)°

*🍁 Command:* °.spdf°

*➢ Description:* °Converts a Site into PDF°

*🍁 Command:* °.quote°

*➢ Description:* °It Sends Random Quote°

*🍁 Command:* °.currency°

*➢ Description:* °To convert currencies.°

*🍁 Command:* °.tts°

*➢ Description:* °It translates words into voice messages.°

*🍁 Command:* °.yt°

*➢ Description:* °Searchng videos on YouTube.°

*🍁 Command:* °.wiki°

*➢ Description:* °Search Wikipedia.°

*🍁 Command:* °.img°

*➢ Description:* °Downloading google images.°

*🍁 Command:* °.wame°

*➢ Description:* °Get a link to the user chat.°

*🍁 Command:* °.github°

*➢ Description:* °Stalk github profiles of given username.

⌨️ Example: .github TRex°

*🍁 Command:* °.tk°

*➢ Description:* °Stalk tiktok profile to a given username.

⌨️ Example: .tK hiruwa66°

*🍁 Command:* °.ss°

*➢ Description:* °Take screenshot of given links°

*🍁 Command:* °.mod°

*➢ Description:* °Search modded apk in Moddroid site.°

*🍁 Command:* °.spoti°

*➢ Description:* °Search songs from spotify.°

*🍁 Command:* °.animesay°

*➢ Description:* °🍁➢ Write text on anime girl s paper°

*🍁 Command:* °.changesay°

*➢ Description:* °Weite chaged my mind themed memes°

*🍁 Command:* °.trumpsay°

*➢ Description:* °🍁➢ Write text on Trump Twitter°

*🍁 Command:* °.spotify°

*➢ Description:* °Download spotify songs.°

*🍁 Command:* °.sticker°

*➢ Description:* °Make stickers to your images. Reply to an image.°

*🍁 Command:* °.sticvid°

*➢ Description:* °🍁➢ Converts animated stickers to video.°

*🍁 Command:* °.alive°

*➢ Description:* °Check bot online or not°

*🍁 Command:* °.version°

*➢ Description:* °Check version of bot.°

*🍁 Command:* °.tagadmin°

*➢ Description:* °Tag all group admins.°

*🍁 Command:* °.tblend°

*➢ Description:* °Applies the selected TBlend effect to videos.°

*🍁 Command:* °.carbon°

*➢ Description:* °Convert text into Carbon effect°

*🍁 Command:* °.tgm°

*➢ Description:* °it sends good morning text message°

*🍁 Command:* °.tgn°

*➢ Description:* °it sends good night text message°

*🍁 Command:* °.ttp°

*➢ Description:* °Make text image°

*🍁 Command:* °.attp°

*➢ Description:* °Make animated text stickers in Rainbow theme°

*🍁 Command:* °.unaudio°

*➢ Description:* °Converts sound recording to an audio File.°

*🍁 Command:* °.unvoice°

*➢ Description:* °Convert mp3 into a WA voice message°

*🍁 Command:* °.vid2°

*➢ Description:* °Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... .°

*🍁 Command:* °.weather°

*➢ Description:* °Check weather.°

*🍁 Command:* °.speedtest°

*➢ Description:* °Check download and upload speed°

*🍁 Command:* °.ping°

*➢ Description:* °Your ping.°

*🍁 Command:* °.short°

*➢ Description:* °Shorten link.°
`, rowId:"rowid3"},
        {title: '👿 LOGO PACK 01 👿', description: `▷▷▷▷▷▷\n\n\n
╔══════════════════════
║❌ 🍁*REX LOGO PACK 1*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.phub*
╠══➢ 📛 Dec: *Send pornhub logo*
╠═➢ 🍁 Ex: *.phub T-Rex/Hiruwa*
║
╠═➢ 🍁 Cmd: *.stone*
╠══➢ 📛 Dec: *Send stone like logo*
╠═➢ 🍁Ex: *.stone T-REX/Hiruwa*
║
╠═➢ 🍁Cmd: *.glitch*
╠══➢ 📛 Dec: *Send glitch logo*
╠═➢ 🍁 Ex: *.glitch T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.space*
╠══➢ 📛 Dec: *Send space logo*
╠═➢ 🍁Ex: *.space T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.blood*
╠══➢ 📛 Dec: *Send blood hor logo*
╠═➢ 🍁Ex: *.blood T-REX*
║
╠═➢ 🍁Cmd: *.blackpink*
╠══➢ 📛 Dec: *Send bpink logo*
╠═➢ 🍁Ex: *.blackpink T-REX*
║
╠═➢ 🍁Cmd: *.wall*
╠══➢ 📛 Dec: *Send wall art logo*
╠═➢ 🍁Ex: *.wall T-Rex*
║
╠═➢ 🍁Cmd: *.coding*
╠══➢📛 Dec: *Send coding logo*
╠═➢ 🍁 Ex: *.coding T-REX*
║
╠═➢ 🍁Cmd: .*.sand1*
╠══➢ 📛  Dec: *Send sand writting*
╠═➢ 🍁 Ex: *.sand1 T-REX*
║
╠═➢ 🍁Cmd: *.sand2*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand2 T-REX
║
╠═➢ 🍁Cmd: *.sand3*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand3 T-REX
║
╠═➢ 🍁Cmd: *.beach*
╠══➢ 📛 Dec: *Send beach logo*
╠═➢ 🍁Ex: *.beach T-REX
║
╠═➢ 🍁Cmd: *.gradient*
╠══➢ 📛  Dec: *Send logo*
╠═➢ 🍁 Ex: *.gradient T-REX*
║
╠═➢ 🍁Cmd: *.luxury*
╠══➢ 📛  Dec: *Send luxury logo*
╠═➢ 🍁 Ex: *.luxury T-REX*
║
╠═➢ 🍁Cmd: *.sky*
╠══➢ 📛  Dec: *Send sky logo*
╠═➢ 🍁 Ex: *.sky T-REX*
║
╠═➢ 🍁Cmd: *.winter*
╠══➢ 📛  Dec: *Send winter logo*
╠═➢ 🍁 Ex: *.winter T-REX
║
╠═➢ 🍁Cmd: *.christmas*
╠══➢ 📛  Dec: *Send xmas logo*
╠═➢ 🍁 Ex: *.christmas T-REX*
║
╠═➢ 🍁Cmd: *.neon*
╠══➢ 📛  Dec: *Send neon logo*
╠═➢ 🍁 Ex: *.neon T-REX*
║
╠═➢ 🍁Cmd: *.king*
╠══➢ 📛  Dec: *Send king logo*
╠═➢ 🍁 Ex: *.king T-REX*
║
╠═➢ 🍁Cmd: *.glue*
╠══➢ 📛  Dec: *Send Glue logo*
╠═➢ 🍁 Ex: *.glue T-REX*
║
║      ╔═🍁 T-REX BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════
`, rowId:"rowid4"},
        {title: '👿 FF PACK 👿', description:`▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ❰🍁🔱  T Rex BOT  🔱🍁❱  
║         ║🍁╚FF PACK╝🍁║
║
╠═➢ 🍁.ff9       ❴your text❵
║send fiee fire logo
╠═➢ 🍁.ff10      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff11      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff12      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff13      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff14      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff15      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff16      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff17      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff18       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff19       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff20       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff21       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff22       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff23       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff24       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff25       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff26       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff27       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff28       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff29       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff30       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff31       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff32       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff33       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff34       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff35       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff36       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff37       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff38       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff39       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff41       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff42       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff43       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff44       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff45       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff46       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff47       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff48       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff49       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff50       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff51       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff52       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff53       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff54       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff55       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff56       ❴your text❵
║send free fire logo
║
║
║▷Creator: HIRUSHA
║
║ ❰🍁🔱  T Rex BOT  🔱🍁❱  
╚═════════════════════╝
`, rowId:"rowid5"},
        {title: '👿 LOGO PACK 02 👿', description: `▷▷▷▷▷▷\n\n\n
╔══════════════════════
║❌ 🍁*REX LOGO PACK 2*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.wel*
╠══➢ 📛 Dec: *Send welcome logo*
╠═➢ 🍁 Ex: *.wel T-Rex/Hiruwa*
║
╠═➢ 🍁 Cmd: *.bye*
╠══➢ 📛 Dec: *Send bye logo*
╠═➢ 🍁Ex: *.bye T-REX/Hiruwa*
║
╠═➢ 🍁Cmd: *.marvel*
╠══➢ 📛 Dec: *Send marve logo*
╠═➢ 🍁 Ex: *.marvel T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.2marvel*
╠══➢ 📛 Dec: *Send marvel logo*
╠═➢ 🍁Ex: *.2marvel T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.wolf*
╠══➢ 📛 Dec: *Send wolf logo*
╠═➢ 🍁Ex: *.wolf T-REX/HIRUWA*
║
╠═➢ 🍁Cmd: *.lava*
╠══➢ 📛 Dec: *Send lava logo*
╠═➢ 🍁Ex: *.lava T-REX*
║
╠═➢ 🍁Cmd: *.xmas*
╠══➢ 📛 Dec: *Send xmas logo*
╠═➢ 🍁Ex: *.xmas T-Rex*
║
╠═➢ 🍁Cmd: *.round*
╠══➢📛 Dec: *Send round logo*
╠═➢ 🍁 Ex: *.round { image url }*
║
╠═➢ 🍁Cmd: .*.quot*
╠══➢ 📛  Dec: *Send quote logo*
╠═➢ 🍁 Ex: *.quot T-REX*
║
╠═➢ 🍁Cmd: *.harta*
╠══➢ 📛 Dec: *Send harta logo*
╠═➢ 🍁Ex: *.harta T-REX
║
╠═➢ 🍁Cmd: *.1917*
╠══➢ 📛 Dec: *Send 1917 logo*
╠═➢ 🍁Ex: *.1917 T-REX
║
╠═➢ 🍁Cmd: *.minion*
╠══➢ 📛 Dec: *Send minion logo*
╠═➢ 🍁Ex: *.minion T-REX
║
╠═➢ 🍁Cmd: *.holo*
╠══➢ 📛  Dec: *Send holo logo*
╠═➢ 🍁 Ex: *.holo T-REX*
║
╠═➢ 🍁Cmd: *.metalp*
╠══➢ 📛  Dec: *Send metalp logo*
╠═➢ 🍁 Ex: *.metalp T-REX*
║
╠═➢ 🍁Cmd: *.avengers*
╠══➢ 📛  Dec: *Send avengers logo*
╠═➢ 🍁 Ex: *.avengers T-REX*
║
╠═➢ 🍁Cmd: *.halloween*
╠══➢ 📛  Dec: *Send halloween logo*
╠═➢ 🍁 Ex: *.halloween T-REX
║
╠═➢ 🍁Cmd: *.horror*
╠══➢ 📛  Dec: *Send horror logo*
╠═➢ 🍁 Ex: *.horror T-REX*
║
╠═➢ 🍁Cmd: *.glossyc*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyc T-REX*
║
╠═➢ 🍁Cmd: *.deluxe*
╠══➢ 📛  Dec: *Send deluxe logo*
╠═➢ 🍁 Ex: *.deluxe T-REX*
║
╠═➢ 🍁Cmd: *.glossyb*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyb T-REX*
║
╠═➢ 🍁Cmd: *.joker*
╠══➢ 📛  Dec: *Send joker logo*
╠═➢ 🍁 Ex: *.joker T-REX*
║
║      ╔═🍁 T-REX BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════
`, rowId:"rowid6"},
        {title: '👿 ATTP PACK 👿', description: `▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ❰🍁🔱  T Rex BOT  🔱🍁❱  
║        ║🍁╚ATTP PACK╝🍁║
║
╠═➢ 🍁.01attp      ❴your text❵
║send fiee fire logo
╠═➢ 🍁.02attp      ❴your text❵
║send Text logo
╠═➢ 🍁.03attp      ❴your text❵
║send Text logo
╠═➢ 🍁.04attp      ❴your text❵
║send Text logo
╠═➢ 🍁.05attp      ❴your text❵
║send Text logo
╠═➢ 🍁.06attp      ❴your text❵
║send Text logo
╠═➢ 🍁.07attp      ❴your text❵
║send Text logo
╠═➢ 🍁.08attp      ❴your text❵
║send Text logo
╠═➢ 🍁.09attp      ❴your text❵
║send Text logo
╠═➢ 🍁.10attp       ❴your text❵
║send Text logo
╠═➢ 🍁.11attp       ❴your text❵
║send Text logo
╠═➢ 🍁.12attp       ❴your text❵
║send Text logo
╠═➢ 🍁.13attp       ❴your text❵
║send Text logo
╠═➢ 🍁.14attp       ❴your text❵
║send Text logo
╠═➢ 🍁.15attp       ❴your text❵
║send Text logo
╠═➢ 🍁.16attp       ❴your text❵
║send Text logo
╠═➢ 🍁.17attp       ❴your text❵
║send Text logo
╠═➢ 🍁.18attp       ❴your text❵
║send Text logo
╠═➢ 🍁.19attp       ❴your text❵
║send Text logo
╠═➢ 🍁.20attp       ❴your text❵
║send Text logo
╠═➢ 🍁.21attp       ❴your text❵
║send Text logo
╠═➢ 🍁.22attp       ❴your text❵
║send Text logo
╠═➢ 🍁.23attp       ❴your text❵
║send Text logo
╠═➢ 🍁.24attp       ❴your text❵
║send Text logo
╠═➢ 🍁.25attp       ❴your text❵
║send Text logo
╠═➢ 🍁.26attp       ❴your text❵
║send Text logo
╠═➢ 🍁.27attp       ❴your text❵
║send Text logo
╠═➢ 🍁.28attp       ❴your text❵
║send Text logo
╠═➢ 🍁.29attp       ❴your text❵
║send Text logo
╠═➢ 🍁.30attp       ❴your text❵
║send Text logo
╠═➢ 🍁.31attp       ❴your text❵
║send Text logo
╠═➢ 🍁.32attp       ❴your text❵
║send Text logo
╠═➢ 🍁.33attp       ❴your text❵
║send Text logo
╠═➢ 🍁.34attp       ❴your text❵
║send Text logo
╠═➢ 🍁.35attp       ❴your text❵
║send Text logo
╠═➢ 🍁.36attp       ❴your text❵
║send Text logo
╠═➢ 🍁.37attp       ❴your text❵
║send Text logo
╠═➢ 🍁.38attp       ❴your text❵
║send Text logo
╠═➢ 🍁.39attp       ❴your text❵
║send Text logo
╠═➢ 🍁.40attp       ❴your text❵
║send Text logo
║
║▷Creator: HIRUSHA
║
║ ❰🍁🔱  T Rex BOT  🔱🍁❱  
╚═════════════════════╝

`, rowId:"rowid20"},
        {title: '👿 DOWNLOADER 👿', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │  🍁👿 Downloader 👿🍁
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
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
`, rowId:"rowid9"},
        {title: '👿 ABOUT T-REX BOT 👿', description:`▷▷▷▷▷▷\n\n\n
🍁 Developer : Hiruwa
🍁 Bot             : T-REX V 3.0.0 
🍁 Language : Sinhala & English
🍁 Sponcer Team : PEARL TEAM
🍁 Develop language : Node js
🍁 Developer no : wa.me/+94788306130
`, rowId:"rowid2"}
       ]
       
       const sections = [{title: "👿 T-REX Command Panel 👿", rows: rows}]
       
       const button = {
        buttonText: 'Click Me▷',
        description: "👿 T-REX ALL COMMAND 👿",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
        
    Trex.addrex({pattern: 'trex', fromMe: true, dontaddCommandList:true}, (async (message, match) => {
// T-REX LIST

var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    const rows = [
        {title: '👿 ALL MENU 👿', description: `▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │❰🍁🔱  T Rex BOT  🔱🍁❱
 ╰────────────────
 ╭────────────────
 │ Hello ▷ Dear
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   My Bot Work as
 │👿 `+Config.WORKTYPE+` 👿
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 BOT 👿🍁
 │        ──────────
 │
 │▷ .trex
 │▷ .alive
 │▷ .atrex [ advance menu ]
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │     🍁👿 Sticker 👿🍁
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │ 🍁👿 Text To Img 👿🍁
 │
 │▷ .rlpack
 │▷ .attppack
 │▷ .tlpack
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
 │  🍁👿 Downloader 👿🍁
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
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
 │     🍁👿 Groups 👿🍁
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
 │🍁👿 ONLINE STORE 👿🍁
 │
 │▷ .online store
 │ 
 │ 👿 T-REX ONLINE 👿
 │     SHOPPING
 │
 │ ONLY SRI LANKAN 
 │    VISITORS.
 │
 ╰────────────────
 ╭────────────────
 │  🍁👿 For owner 👿🍁
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │      T-REX BOT
 ╰────────────────
 ╭────────────────
 │    🍁👿 Search 👿🍁
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .mod { app name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │🍁👿 Media Editor👿🍁
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
 │    🍁👿 Random 👿🍁
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 Fun 👿🍁
 │
 │▷ .rex { hi }
 │▷ .gm
 │▷ .tgm
 │▷ .gn
 │▷ .tgn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      🍁👿 Other 👿🍁
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
 
         👿 POWERD BY 👿
  ❰🍁🔱  T Rex BOT  🔱🍁❱
  
       👿       Hiruwa        👿
` , rowId:"rowid1"},
        {title: '👿 ADVANCE MENU 👿', description: `▷▷▷▷▷▷\n\n\n
╔═══════════════════════╗

           ❰🍁🔱  T Rex BOT  🔱🍁❱

═════════════════════════

*🍁 Command:* °.xmedia°

*➢ Description:* °A plugin that have 25 media tools.°

*🍁 Command:* °.admin°

*➢ Description:* °To get the admin command list°

*🍁 Command:* °.trex°

*➢ Description:*°all commands°

*🍁 Command* °.rlpack°

*➢ Description:* °T-REX LOGO COLLECTION 01°

*🍁 Command:* °.lovepack°

*➢ Description:* °Send Love message to gf/bf.°

*🍁 Command;* °.grp°

*➢ Description:* °Send Groups list°

*🍁 Command:* °.warn1,.warn2,.warn3,.warn4

*➢ Description:* °Send Group Warm msg. Admin only Command°

*🍁 Command:* °.rules°

*➢ Description: * °Send Group Rules°

*🍁 Command:* °.rex°

*➢ Description:* °Chat with AI bot.°

*🍁 Command:* °.switch°

*➢ Description:* °Turn on/off chat bot.

⌨️ Example: To turn on AI chat, *.switch CHAT_BOT:true*

To turn on AI chat, *.switch CHAT_BOT:false*

(This is a only admin command)°

*🍁 Command:* °.anime°

*➢ Description:* °Send Different type ANIME images . විවිදාකාර ඇනිම් පින්තූර ඔබ වෙත එවයි..°

*🍁 Command:* °.antispam°

*➢ Description:* °This command for any emergency situation about any kind of WhatsApp SPAM in Group°

*🍁 Command:* °.mp3°

*➢ Description:* °Convert mp4 into mp3.°

*🍁 Command:* °.photo°

*➢ Description:* °🍁➢ Convert sticker into an image.°

*🍁 Command:* °.ffmpeg°

*➢ Description:* °Apply ffmpeg filter to a video

⌨️ Example: .ffmpeg fade=in:0:30°

*🍁 Command:* °.gn°

*➢ Description:* °Send Gn wish with image.°

*🍁 Command:* °.gm°

*➢ Description:* °Send Gm wish with image.°

*🍁 Command:* °.info°

*➢ Description:* °Show chat details°

*🍁 Command:* °.covid°

*➢ Description:* °Check information about Covid-19 of countries.

Example : .covid Sri Lanka°

*🍁 Command:* °.meme°

*➢ Description:* °The photos you replied to are memes.°

*🍁 Command:* °.movie°

*➢ Description:* °Movies වල විස්තර ලබාදීම.°

*🍁 Command:* °.notes°

*➢ Description:* °Show your notes.°

*🍁 Command:* °.save°

*➢ Description:* °Reply *.save* to a message or type *.save <your_note>*°

*🍁 Command:* °.deleteNotes°

*➢ Description:* °Clear your all notes.°

*🍁 Command:* °.ocr°

*➢ Description:* °Scan your picture into text.°

*🍁 Command:* °.removebg°

*➢ Description:* °Removing background of image.°

*🍁 Command:* °.report°

*➢ Description:* °Report someone in the group to admins.°

*🍁 Command:* °.fsong°

*➢ Description:* °Uploading file type songs.°

*🍁 Command:* °.song°

*➢ Description:* °Uploading mp3 type songs.°

*🍁 Command:* °.video°

*➢ Description:* °Downloading videos from YouTube°

*🍁 Command:* °.insta°

*➢ Description:* °🍁➢ ❰🍁🔱  T Rex BOT  🔱🍁❱ Download instagram videos.°

*🍁 Command:* °.fb°

*➢ Description:* °🍁➢ ❰🍁🔱  T Rex BOT  🔱🍁❱ Download Facebook videos.°

*🍁 Command:* °.trt°

*➢ Description:* °It translates with Google Translator. You must mention any message.°

*⌨️ Example:* °.trt en si (From English to Sinhala)°

*🍁 Command:* °.spdf°

*➢ Description:* °Converts a Site into PDF°

*🍁 Command:* °.quote°

*➢ Description:* °It Sends Random Quote°

*🍁 Command:* °.currency°

*➢ Description:* °To convert currencies.°

*🍁 Command:* °.tts°

*➢ Description:* °It translates words into voice messages.°

*🍁 Command:* °.yt°

*➢ Description:* °Searchng videos on YouTube.°

*🍁 Command:* °.wiki°

*➢ Description:* °Search Wikipedia.°

*🍁 Command:* °.img°

*➢ Description:* °Downloading google images.°

*🍁 Command:* °.wame°

*➢ Description:* °Get a link to the user chat.°

*🍁 Command:* °.github°

*➢ Description:* °Stalk github profiles of given username.

⌨️ Example: .github TRex°

*🍁 Command:* °.tk°

*➢ Description:* °Stalk tiktok profile to a given username.

⌨️ Example: .tK hiruwa66°

*🍁 Command:* °.ss°

*➢ Description:* °Take screenshot of given links°

*🍁 Command:* °.mod°

*➢ Description:* °Search modded apk in Moddroid site.°

*🍁 Command:* °.spoti°

*➢ Description:* °Search songs from spotify.°

*🍁 Command:* °.animesay°

*➢ Description:* °🍁➢ Write text on anime girl s paper°

*🍁 Command:* °.changesay°

*➢ Description:* °Weite chaged my mind themed memes°

*🍁 Command:* °.trumpsay°

*➢ Description:* °🍁➢ Write text on Trump Twitter°

*🍁 Command:* °.spotify°

*➢ Description:* °Download spotify songs.°

*🍁 Command:* °.sticker°

*➢ Description:* °Make stickers to your images. Reply to an image.°

*🍁 Command:* °.sticvid°

*➢ Description:* °🍁➢ Converts animated stickers to video.°

*🍁 Command:* °.alive°

*➢ Description:* °Check bot online or not°

*🍁 Command:* °.version°

*➢ Description:* °Check version of bot.°

*🍁 Command:* °.tagadmin°

*➢ Description:* °Tag all group admins.°

*🍁 Command:* °.tblend°

*➢ Description:* °Applies the selected TBlend effect to videos.°

*🍁 Command:* °.carbon°

*➢ Description:* °Convert text into Carbon effect°

*🍁 Command:* °.tgm°

*➢ Description:* °it sends good morning text message°

*🍁 Command:* °.tgn°

*➢ Description:* °it sends good night text message°

*🍁 Command:* °.ttp°

*➢ Description:* °Make text image°

*🍁 Command:* °.attp°

*➢ Description:* °Make animated text stickers in Rainbow theme°

*🍁 Command:* °.unaudio°

*➢ Description:* °Converts sound recording to an audio File.°

*🍁 Command:* °.unvoice°

*➢ Description:* °Convert mp3 into a WA voice message°

*🍁 Command:* °.vid2°

*➢ Description:* °Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... .°

*🍁 Command:* °.weather°

*➢ Description:* °Check weather.°

*🍁 Command:* °.speedtest°

*➢ Description:* °Check download and upload speed°

*🍁 Command:* °.ping°

*➢ Description:* °Your ping.°

*🍁 Command:* °.short°

*➢ Description:* °Shorten link.°
`, rowId:"rowid3"},
        {title: '👿 LOGO PACK 01 👿', description:`▷▷▷▷▷▷▷\n\n\n
╔══════════════════════
║❌ 🍁*REX LOGO PACK 1*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.phub*
╠══➢ 📛 Dec: *Send pornhub logo*
╠═➢ 🍁 Ex: *.phub T-Rex/Hiruwa*
║
╠═➢ 🍁 Cmd: *.stone*
╠══➢ 📛 Dec: *Send stone like logo*
╠═➢ 🍁Ex: *.stone T-REX/Hiruwa*
║
╠═➢ 🍁Cmd: *.glitch*
╠══➢ 📛 Dec: *Send glitch logo*
╠═➢ 🍁 Ex: *.glitch T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.space*
╠══➢ 📛 Dec: *Send space logo*
╠═➢ 🍁Ex: *.space T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.blood*
╠══➢ 📛 Dec: *Send blood hor logo*
╠═➢ 🍁Ex: *.blood T-REX*
║
╠═➢ 🍁Cmd: *.blackpink*
╠══➢ 📛 Dec: *Send bpink logo*
╠═➢ 🍁Ex: *.blackpink T-REX*
║
╠═➢ 🍁Cmd: *.wall*
╠══➢ 📛 Dec: *Send wall art logo*
╠═➢ 🍁Ex: *.wall T-Rex*
║
╠═➢ 🍁Cmd: *.coding*
╠══➢📛 Dec: *Send coding logo*
╠═➢ 🍁 Ex: *.coding T-REX*
║
╠═➢ 🍁Cmd: .*.sand1*
╠══➢ 📛  Dec: *Send sand writting*
╠═➢ 🍁 Ex: *.sand1 T-REX*
║
╠═➢ 🍁Cmd: *.sand2*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand2 T-REX
║
╠═➢ 🍁Cmd: *.sand3*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand3 T-REX
║
╠═➢ 🍁Cmd: *.beach*
╠══➢ 📛 Dec: *Send beach logo*
╠═➢ 🍁Ex: *.beach T-REX
║
╠═➢ 🍁Cmd: *.gradient*
╠══➢ 📛  Dec: *Send logo*
╠═➢ 🍁 Ex: *.gradient T-REX*
║
╠═➢ 🍁Cmd: *.luxury*
╠══➢ 📛  Dec: *Send luxury logo*
╠═➢ 🍁 Ex: *.luxury T-REX*
║
╠═➢ 🍁Cmd: *.sky*
╠══➢ 📛  Dec: *Send sky logo*
╠═➢ 🍁 Ex: *.sky T-REX*
║
╠═➢ 🍁Cmd: *.winter*
╠══➢ 📛  Dec: *Send winter logo*
╠═➢ 🍁 Ex: *.winter T-REX
║
╠═➢ 🍁Cmd: *.christmas*
╠══➢ 📛  Dec: *Send xmas logo*
╠═➢ 🍁 Ex: *.christmas T-REX*
║
╠═➢ 🍁Cmd: *.neon*
╠══➢ 📛  Dec: *Send neon logo*
╠═➢ 🍁 Ex: *.neon T-REX*
║
╠═➢ 🍁Cmd: *.king*
╠══➢ 📛  Dec: *Send king logo*
╠═➢ 🍁 Ex: *.king T-REX*
║
╠═➢ 🍁Cmd: *.glue*
╠══➢ 📛  Dec: *Send Glue logo*
╠═➢ 🍁 Ex: *.glue T-REX*
║
║      ╔═🍁 T-REX BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════
`, rowId:"rowid4"},
        {title: '👿 FF PACK 👿', description: `▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ❰🍁🔱  T Rex BOT  🔱🍁❱  
║         ║🍁╚FF PACK╝🍁║
║
╠═➢ 🍁.ff9       ❴your text❵
║send fiee fire logo
╠═➢ 🍁.ff10      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff11      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff12      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff13      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff14      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff15      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff16      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff17      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff18       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff19       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff20       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff21       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff22       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff23       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff24       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff25       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff26       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff27       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff28       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff29       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff30       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff31       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff32       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff33       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff34       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff35       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff36       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff37       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff38       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff39       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff41       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff42       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff43       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff44       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff45       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff46       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff47       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff48       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff49       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff50       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff51       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff52       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff53       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff54       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff55       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff56       ❴your text❵
║send free fire logo
║
║
║▷Creator: HIRUSHA
║
║ ❰🍁🔱  T Rex BOT  🔱🍁❱  
╚═════════════════════╝
`, rowId:"rowid5"},
        {title: '👿 LOGO PACK 02 👿', description:`▷▷▷▷▷▷\n\n\n
╔══════════════════════
║❌ 🍁*REX LOGO PACK 1*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.wel*
╠══➢ 📛 Dec: *Send welcome logo*
╠═➢ 🍁 Ex: *.wel T-Rex/Hiruwa*
║
╠═➢ 🍁 Cmd: *.bye*
╠══➢ 📛 Dec: *Send bye logo*
╠═➢ 🍁Ex: *.bye T-REX/Hiruwa*
║
╠═➢ 🍁Cmd: *.marvel*
╠══➢ 📛 Dec: *Send marve logo*
╠═➢ 🍁 Ex: *.marvel T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.2marvel*
╠══➢ 📛 Dec: *Send marvel logo*
╠═➢ 🍁Ex: *.2marvel T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.wolf*
╠══➢ 📛 Dec: *Send wolf logo*
╠═➢ 🍁Ex: *.wolf T-REX/HIRUWA*
║
╠═➢ 🍁Cmd: *.lava*
╠══➢ 📛 Dec: *Send lava logo*
╠═➢ 🍁Ex: *.lava T-REX*
║
╠═➢ 🍁Cmd: *.xmas*
╠══➢ 📛 Dec: *Send xmas logo*
╠═➢ 🍁Ex: *.xmas T-Rex*
║
╠═➢ 🍁Cmd: *.round*
╠══➢📛 Dec: *Send round logo*
╠═➢ 🍁 Ex: *.round { image url }*
║
╠═➢ 🍁Cmd: .*.quot*
╠══➢ 📛  Dec: *Send quote logo*
╠═➢ 🍁 Ex: *.quot T-REX*
║
╠═➢ 🍁Cmd: *.harta*
╠══➢ 📛 Dec: *Send harta logo*
╠═➢ 🍁Ex: *.harta T-REX
║
╠═➢ 🍁Cmd: *.1917*
╠══➢ 📛 Dec: *Send 1917 logo*
╠═➢ 🍁Ex: *.1917 T-REX
║
╠═➢ 🍁Cmd: *.minion*
╠══➢ 📛 Dec: *Send minion logo*
╠═➢ 🍁Ex: *.minion T-REX
║
╠═➢ 🍁Cmd: *.holo*
╠══➢ 📛  Dec: *Send holo logo*
╠═➢ 🍁 Ex: *.holo T-REX*
║
╠═➢ 🍁Cmd: *.metalp*
╠══➢ 📛  Dec: *Send metalp logo*
╠═➢ 🍁 Ex: *.metalp T-REX*
║
╠═➢ 🍁Cmd: *.avengers*
╠══➢ 📛  Dec: *Send avengers logo*
╠═➢ 🍁 Ex: *.avengers T-REX*
║
╠═➢ 🍁Cmd: *.halloween*
╠══➢ 📛  Dec: *Send halloween logo*
╠═➢ 🍁 Ex: *.halloween T-REX
║
╠═➢ 🍁Cmd: *.horror*
╠══➢ 📛  Dec: *Send horror logo*
╠═➢ 🍁 Ex: *.horror T-REX*
║
╠═➢ 🍁Cmd: *.glossyc*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyc T-REX*
║
╠═➢ 🍁Cmd: *.deluxe*
╠══➢ 📛  Dec: *Send deluxe logo*
╠═➢ 🍁 Ex: *.deluxe T-REX*
║
╠═➢ 🍁Cmd: *.glossyb*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyb T-REX*
║
╠═➢ 🍁Cmd: *.joker*
╠══➢ 📛  Dec: *Send joker logo*
╠═➢ 🍁 Ex: *.joker T-REX*
║
║      ╔═🍁 T-REX BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════
`, rowId:"rowid6"},
        {title: '👿 ATTP PACK 👿', description: `▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ❰🍁🔱  T Rex BOT  🔱🍁❱  
║        ║🍁╚ATTP PACK╝🍁║
║
╠═➢ 🍁.01attp      ❴your text❵
║send fiee fire logo
╠═➢ 🍁.02attp      ❴your text❵
║send Text logo
╠═➢ 🍁.03attp      ❴your text❵
║send Text logo
╠═➢ 🍁.04attp      ❴your text❵
║send Text logo
╠═➢ 🍁.05attp      ❴your text❵
║send Text logo
╠═➢ 🍁.06attp      ❴your text❵
║send Text logo
╠═➢ 🍁.07attp      ❴your text❵
║send Text logo
╠═➢ 🍁.08attp      ❴your text❵
║send Text logo
╠═➢ 🍁.09attp      ❴your text❵
║send Text logo
╠═➢ 🍁.10attp       ❴your text❵
║send Text logo
╠═➢ 🍁.11attp       ❴your text❵
║send Text logo
╠═➢ 🍁.12attp       ❴your text❵
║send Text logo
╠═➢ 🍁.13attp       ❴your text❵
║send Text logo
╠═➢ 🍁.14attp       ❴your text❵
║send Text logo
╠═➢ 🍁.15attp       ❴your text❵
║send Text logo
╠═➢ 🍁.16attp       ❴your text❵
║send Text logo
╠═➢ 🍁.17attp       ❴your text❵
║send Text logo
╠═➢ 🍁.18attp       ❴your text❵
║send Text logo
╠═➢ 🍁.19attp       ❴your text❵
║send Text logo
╠═➢ 🍁.20attp       ❴your text❵
║send Text logo
╠═➢ 🍁.21attp       ❴your text❵
║send Text logo
╠═➢ 🍁.22attp       ❴your text❵
║send Text logo
╠═➢ 🍁.23attp       ❴your text❵
║send Text logo
╠═➢ 🍁.24attp       ❴your text❵
║send Text logo
╠═➢ 🍁.25attp       ❴your text❵
║send Text logo
╠═➢ 🍁.26attp       ❴your text❵
║send Text logo
╠═➢ 🍁.27attp       ❴your text❵
║send Text logo
╠═➢ 🍁.28attp       ❴your text❵
║send Text logo
╠═➢ 🍁.29attp       ❴your text❵
║send Text logo
╠═➢ 🍁.30attp       ❴your text❵
║send Text logo
╠═➢ 🍁.31attp       ❴your text❵
║send Text logo
╠═➢ 🍁.32attp       ❴your text❵
║send Text logo
╠═➢ 🍁.33attp       ❴your text❵
║send Text logo
╠═➢ 🍁.34attp       ❴your text❵
║send Text logo
╠═➢ 🍁.35attp       ❴your text❵
║send Text logo
╠═➢ 🍁.36attp       ❴your text❵
║send Text logo
╠═➢ 🍁.37attp       ❴your text❵
║send Text logo
╠═➢ 🍁.38attp       ❴your text❵
║send Text logo
╠═➢ 🍁.39attp       ❴your text❵
║send Text logo
╠═➢ 🍁.40attp       ❴your text❵
║send Text logo
║
║▷Creator: HIRUSHA
║
║ ❰🍁🔱  T Rex BOT  🔱🍁❱  
╚═════════════════════╝

`, rowId:"rowid20"},
        {title: '👿 DOWNLOADER 👿', description:`▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │  🍁👿 Downloader 👿🍁
 │
 │▷ .video { vid link }
 │▷ .vid2 { vid link }
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
`, rowId:"rowid8"},
        {title: '👿 ABOUT T-REX BOT 👿', description: `▷▷▷▷▷▷\n\n\n
🍁 Developer : Hiruwa
🍁 Bot             : T-REX V 3.0.0 
🍁 Language : Sinhala & English
🍁 Sponcer Team : PEARL TEAM
🍁 Develop language : Node js
🍁 Developer no : wa.me/+94788306130
`, rowId:"rowid9"},
        {title: '👿 ADMIN PANEL 👿', description: `▷▷▷▷▷▷\n\n\n
❰🍁🔱  T Rex BOT  🔱🍁❱\n\n🍁 COMMAND: *.ban*\nℹ️ DESCRIPTION: Remove someone from the group. Mention the message or tag a person to use command.\n\n🍁 COMMAND: *.add*\nℹ️ DESCRIPTION: Adds someone to the group.\n\n🍁 COMMAND: *.mute*\nℹ️ DESCRIPTION: Mute group chat. Messages can only be sent by admin. \n\n🍁 COMMAND: *.unmute*\nℹ️ DESCRIPTION: Remove group chat mute. Anyone can send a message.\n\n🍁 COMMAND: *.clear*\nℹ️ DESCRIPTION: Clearing chat.\n\n🍁 COMMAND: *.name*\nℹ️ DESCRIPTION: Change group name. \n\n🍁 COMMAND: *.promote*\nℹ️ DESCRIPTION: Promoting members to admin.\n\n🍁 COMMAND: *.demote*\nℹ️ DESCRIPTION: Demoting admins.\n\n🍁 COMMAND: *.myplugin*\nℹ️ DESCRIPTION: To view the current plugin list from ❰🍁🔱  T Rex BOT  🔱🍁❱.\n\n🍁 COMMAND: *.plug*\nℹ️ DESCRIPTION: Install external plugins.\n\n🍁 COMMAND: *.unplug*\nℹ️ DESCRIPTION: Removes the plugin.\n\n🍁 COMMAND: *.invite*\nℹ️ DESCRIPTION: Provides group invitation link.\n\n🍁 COMMAND: *.afk*\nℹ️ DESCRIPTION: It turns bot bot AFK - Away From Keyboard.\n\n🍁 COMMAND: *.restart*\n➢ DESCRIPTION: Restart the bot.\n\n🍁 COMMAND: *.shutdown*\n➢ DESCRIPTION: Shutdown the Bot.\n\n🍁 COMMAND: *.setvar*\n➢ DESCRIPTION: Change heroku config vars.\n\n🍁 COMMAND: *.getvar*\n➢ DESCRIPTION: Get heroku config var.\n\n🍁 COMMAND: *.speedtest*\n➢ DESCRIPTION:Check download and upload speed.\n\n🍁 COMMAND: *.filter*\nℹ️ DESCRIPTION: It adds filters. If someone writes your filter word, it sends the answer. If you write a .filter it will show your list of filters.\n\n🍁 COMMAND: *.stop*\nℹ️ DESCRIPTION: Stops the filters you added earlier.\n\n🍁 COMMAND: *.welcome*\nℹ️ DESCRIPTION: It sets the welcome message.\n\n🍁 COMMAND: *.goodbye*\nℹ️ DESCRIPTION: Sets the goodbye  message.\n\n🍁 COMMAND: *.kickme*\nℹ️ DESCRIPTION: It removes the bot from the group that provided the command.\n\n🍁 COMMAND: *.pp*\nℹ️ DESCRIPTION: The photo you mention mentions the bot profile photo.\n\n🍁 COMMAND: *.block*\nℹ️ DESCRIPTION: Block tagged user.\n\n🍁 COMMAND: *.unblock*\nℹ️ DESCRIPTION: Unblock tagged user.\n\n🍁 COMMAND: *.jid*\nℹ️ DESCRIPTION: Giving user JID.\n\n🍁 COMMAND *.tagall*\nℹ️ DESCRIPTION: Tag everyone in group.\n\n🍁 COMMAND: *.up*\nℹ️ DESCRIPTION: Check for updates.\n\n🍁 COMMAND: *.uptrex*\nℹ️ DESCRIPTION: To update your bot.\n\n🍁 COMMAND: *.dyno*\nℹ️ DESCRIPTION: Showing heroku dyno hours.\n\n🍁 COMMAND: *.sysd*\nℹ️ DESCRIPTION: Show system properties.\n\n🍁 COMMAND: *.scam*\nℹ️ DESCRIPTION: Scam actions for 5min.\n\n🍁 COMMAND: *.antilink*\nℹ️ DESCRIPTION: Anti link on Ex: .antilink on/off\n\n🍁 COMMAND: *.antibad*\nℹ️ DESCRIPTION: Remove bad word users Ex: .antibad on/off\n\n🍁 COMMAND: *.chatbot*\nℹ️DESCRIPTION: Auto chat on Ex: .chatbot on/off\n👿 Command: .voice on/off\n▷ Description: Activate and deactivate voice chat\n\n👿 Command: .public ▷ Description: set bot as public\n\n 👿 Command: .private\n▷ Description: Set your bot as private\n\n*⚠️ The above command only works for Admin, Bot and SUDO numbers.\n\n❰🍁🔱  T Rex BOT  🔱🍁❱*
`, rowId:"rowid10"},
        {title: '👿 Work Type PUBLIC 👿', description: "▷▷▷▷▷▷\n\n\n Type .public to public mode ▷", rowId:"rowid9"},
        {title: '👿 Work Type PRIVATE 👿', description:"▷▷▷▷▷▷\n\n\n Type .private to private mode ▷", rowId:"rowid2"}
       ]
       
       const sections = [{title: "👿 T-REX Command Panel 👿", rows: rows}]
       
       const button = {
        buttonText: 'Click Me▷',
        description: "👿 T-REX COMMAND PANEL 👿",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage, {quoted: message.data })
    
    }));
        
}
}

else if (Config.WORKTYPE == 'private') {
        
if (Config.BTN == 'btn') {
        
Trex.addrex({pattern: 'trex', fromMe: true, dontaddCommandList:true}, (async (message, match) => {
// T-REX LIST

var time = new Date().toLocaleString('HI', { timeZone: Config.TIME }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    const rows = [
        {title: '👿 ALL MENU 👿', description: `▷▷▷▷▷~\n\n\n
 ╭────────────────
 │❰🍁🔱  T Rex BOT  🔱🍁❱
 ╰────────────────
 ╭────────────────
 │ Hello ▷ Dear
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   My Bot Work as
 │👿 `+Config.WORKTYPE+` 👿
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 BOT 👿🍁
 │        ──────────
 │
 │▷ .trex
 │▷ .alive
 │▷ .atrex [ advance menu ]
 │▷ .admin [ for owner ]
 │▷ .version
 │
 ╰────────────────
 ╭────────────────
 │     🍁👿 Sticker 👿🍁
 │
 │▷ .attp { text }
 │▷ .sticker
 │▷ .sticvid
 │
 ╰────────────────
 ╭────────────────
 │ 🍁👿 Text To Img 👿🍁
 │
 │▷ .rlpack
 │▷ .attppack
 │▷ .tlpack
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
 │  🍁👿 Downloader 👿🍁
 │
 │▷ .video { vid link }
 │▷ .down { status down }
 │▷ .vid2 { vid link }
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
 │     🍁👿 Groups 👿🍁
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
 │🍁👿 ONLINE STORE 👿🍁
 │
 │▷ .online store
 │ 
 │ 👿 T-REX ONLINE 👿
 │     SHOPPING
 │
 │ ONLY SRI LANKAN 
 │    VISITORS.
 │
 ╰────────────────
 ╭────────────────
 │  🍁👿 For owner 👿🍁
 │
 │▷ .name { change name }
 │▷ .pp { cha profilr pic}
 │▷ .bio { change bio }
 │
 │  Now you can change 
 │    your whatsapp 
 │ name,profile pic,bio
 │      easy with
 │      T-REX BOT
 ╰────────────────
 ╭────────────────
 │    🍁👿 Search 👿🍁
 │
 │▷ .yt { text }
 │▷ .spoti { text }
 │▷ .tk { name }
 │▷ .wiki { text }
 │▷ .movie { mov name }
 │▷ .github { name }
 │▷ .mod { app name }
 │▷ .weather { city }
 │
 ╰────────────────
 ╭────────────────
 │🍁👿 Media Editor👿🍁
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
 │    🍁👿 Random 👿🍁
 │
 │▷ .quote
 │▷ .anime
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 Fun 👿🍁
 │
 │▷ .rex { hi }
 │▷ .gm
 │▷ .tgm
 │▷ .gn
 │▷ .tgn
 │▷ .tts { text }
 │▷ .ping [ for owner ]
 │▷ .antispam { text }
 │
 ╰────────────────
 
 ╭────────────────
 │      🍁👿 Other 👿🍁
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
 
         👿 POWERD BY 👿
  ❰🍁🔱  T Rex BOT  🔱🍁❱
  
       👿       Hiruwa        👿
` , rowId:"rowid1"},
        {title: '👿 ADVANCE MENU 👿', description: `▷▷▷▷▷▷\n\n\n
╔═══════════════════════╗

           ❰🍁🔱  T Rex BOT  🔱🍁❱

═════════════════════════

*🍁 Command:* °.xmedia°

*➢ Description:* °A plugin that have 25 media tools.°

*🍁 Command:* °.admin°

*➢ Description:* °To get the admin command list°

*🍁 Command:* °.trex°

*➢ Description:*°all commands°

*🍁 Command* °.rlpack°

*➢ Description:* °T-REX LOGO COLLECTION 01°

*🍁 Command:* °.lovepack°

*➢ Description:* °Send Love message to gf/bf.°

*🍁 Command;* °.grp°

*➢ Description:* °Send Groups list°

*🍁 Command:* °.warn1,.warn2,.warn3,.warn4

*➢ Description:* °Send Group Warm msg. Admin only Command°

*🍁 Command:* °.rules°

*➢ Description: * °Send Group Rules°

*🍁 Command:* °.rex°

*➢ Description:* °Chat with AI bot.°

*🍁 Command:* °.switch°

*➢ Description:* °Turn on/off chat bot.

⌨️ Example: To turn on AI chat, *.switch CHAT_BOT:true*

To turn on AI chat, *.switch CHAT_BOT:false*

(This is a only admin command)°

*🍁 Command:* °.anime°

*➢ Description:* °Send Different type ANIME images . විවිදාකාර ඇනිම් පින්තූර ඔබ වෙත එවයි..°

*🍁 Command:* °.antispam°

*➢ Description:* °This command for any emergency situation about any kind of WhatsApp SPAM in Group°

*🍁 Command:* °.mp3°

*➢ Description:* °Convert mp4 into mp3.°

*🍁 Command:* °.photo°

*➢ Description:* °🍁➢ Convert sticker into an image.°

*🍁 Command:* °.ffmpeg°

*➢ Description:* °Apply ffmpeg filter to a video

⌨️ Example: .ffmpeg fade=in:0:30°

*🍁 Command:* °.gn°

*➢ Description:* °Send Gn wish with image.°

*🍁 Command:* °.gm°

*➢ Description:* °Send Gm wish with image.°

*🍁 Command:* °.info°

*➢ Description:* °Show chat details°

*🍁 Command:* °.covid°

*➢ Description:* °Check information about Covid-19 of countries.

Example : .covid Sri Lanka°

*🍁 Command:* °.meme°

*➢ Description:* °The photos you replied to are memes.°

*🍁 Command:* °.movie°

*➢ Description:* °Movies වල විස්තර ලබාදීම.°

*🍁 Command:* °.notes°

*➢ Description:* °Show your notes.°

*🍁 Command:* °.save°

*➢ Description:* °Reply *.save* to a message or type *.save <your_note>*°

*🍁 Command:* °.deleteNotes°

*➢ Description:* °Clear your all notes.°

*🍁 Command:* °.ocr°

*➢ Description:* °Scan your picture into text.°

*🍁 Command:* °.removebg°

*➢ Description:* °Removing background of image.°

*🍁 Command:* °.report°

*➢ Description:* °Report someone in the group to admins.°

*🍁 Command:* °.fsong°

*➢ Description:* °Uploading file type songs.°

*🍁 Command:* °.song°

*➢ Description:* °Uploading mp3 type songs.°

*🍁 Command:* °.video°

*➢ Description:* °Downloading videos from YouTube°

*🍁 Command:* °.insta°

*➢ Description:* °🍁➢ ❰🍁🔱  T Rex BOT  🔱🍁❱ Download instagram videos.°

*?? Command:* °.fb°

*➢ Description:* °🍁➢ ❰🍁🔱  T Rex BOT  🔱🍁❱ Download Facebook videos.°

*🍁 Command:* °.trt°

*➢ Description:* °It translates with Google Translator. You must mention any message.°

*⌨️ Example:* °.trt en si (From English to Sinhala)°

*🍁 Command:* °.spdf°

*➢ Description:* °Converts a Site into PDF°

*🍁 Command:* °.quote°

*➢ Description:* °It Sends Random Quote°

*🍁 Command:* °.currency°

*➢ Description:* °To convert currencies.°

*🍁 Command:* °.tts°

*➢ Description:* °It translates words into voice messages.°

*🍁 Command:* °.yt°

*➢ Description:* °Searchng videos on YouTube.°

*🍁 Command:* °.wiki°

*➢ Description:* °Search Wikipedia.°

*🍁 Command:* °.img°

*➢ Description:* °Downloading google images.°

*🍁 Command:* °.wame°

*➢ Description:* °Get a link to the user chat.°

*🍁 Command:* °.github°

*➢ Description:* °Stalk github profiles of given username.

⌨️ Example: .github TRex°

*🍁 Command:* °.tk°

*➢ Description:* °Stalk tiktok profile to a given username.

⌨️ Example: .tK hiruwa66°

*🍁 Command:* °.ss°

*➢ Description:* °Take screenshot of given links°

*🍁 Command:* °.mod°

*➢ Description:* °Search modded apk in Moddroid site.°

*🍁 Command:* °.spoti°

*➢ Description:* °Search songs from spotify.°

*🍁 Command:* °.animesay°

*➢ Description:* °🍁➢ Write text on anime girl s paper°

*🍁 Command:* °.changesay°

*➢ Description:* °Weite chaged my mind themed memes°

*🍁 Command:* °.trumpsay°

*➢ Description:* °🍁➢ Write text on Trump Twitter°

*🍁 Command:* °.spotify°

*➢ Description:* °Download spotify songs.°

*🍁 Command:* °.sticker°

*➢ Description:* °Make stickers to your images. Reply to an image.°

*🍁 Command:* °.sticvid°

*➢ Description:* °🍁➢ Converts animated stickers to video.°

*🍁 Command:* °.alive°

*➢ Description:* °Check bot online or not°

*🍁 Command:* °.version°

*➢ Description:* °Check version of bot.°

*🍁 Command:* °.tagadmin°

*➢ Description:* °Tag all group admins.°

*🍁 Command:* °.tblend°

*➢ Description:* °Applies the selected TBlend effect to videos.°

*🍁 Command:* °.carbon°

*➢ Description:* °Convert text into Carbon effect°

*🍁 Command:* °.tgm°

*➢ Description:* °it sends good morning text message°

*🍁 Command:* °.tgn°

*➢ Description:* °it sends good night text message°

*🍁 Command:* °.ttp°

*➢ Description:* °Make text image°

*🍁 Command:* °.attp°

*➢ Description:* °Make animated text stickers in Rainbow theme°

*🍁 Command:* °.unaudio°

*➢ Description:* °Converts sound recording to an audio File.°

*🍁 Command:* °.unvoice°

*➢ Description:* °Convert mp3 into a WA voice message°

*🍁 Command:* °.vid2°

*➢ Description:* °Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... .°

*🍁 Command:* °.weather°

*➢ Description:* °Check weather.°

*🍁 Command:* °.speedtest°

*➢ Description:* °Check download and upload speed°

*🍁 Command:* °.ping°

*➢ Description:* °Your ping.°

*🍁 Command:* °.short°

*➢ Description:* °Shorten link.°
`, rowId:"rowid3"},
        {title: '👿 LOGO PACK 01 👿', description:`▷▷▷▷▷▷\n\n\n
╔══════════════════════
║❌ 🍁*REX LOGO PACK 1*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.phub*
╠══➢ 📛 Dec: *Send pornhub logo*
╠═➢ 🍁 Ex: *.phub T-Rex/Hiruwa*
║
╠═➢ 🍁 Cmd: *.stone*
╠══➢ 📛 Dec: *Send stone like logo*
╠═➢ 🍁Ex: *.stone T-REX/Hiruwa*
║
╠═➢ 🍁Cmd: *.glitch*
╠══➢ 📛 Dec: *Send glitch logo*
╠═➢ 🍁 Ex: *.glitch T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.space*
╠══➢ 📛 Dec: *Send space logo*
╠═➢ 🍁Ex: *.space T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.blood*
╠══➢ 📛 Dec: *Send blood hor logo*
╠═➢ 🍁Ex: *.blood T-REX*
║
╠═➢ 🍁Cmd: *.blackpink*
╠══➢ 📛 Dec: *Send bpink logo*
╠═➢ 🍁Ex: *.blackpink T-REX*
║
╠═➢ 🍁Cmd: *.wall*
╠══➢ 📛 Dec: *Send wall art logo*
╠═➢ 🍁Ex: *.wall T-Rex*
║
╠═➢ 🍁Cmd: *.coding*
╠══➢📛 Dec: *Send coding logo*
╠═➢ 🍁 Ex: *.coding T-REX*
║
╠═➢ 🍁Cmd: .*.sand1*
╠══➢ 📛  Dec: *Send sand writting*
╠═➢ 🍁 Ex: *.sand1 T-REX*
║
╠═➢ 🍁Cmd: *.sand2*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand2 T-REX
║
╠═➢ 🍁Cmd: *.sand3*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand3 T-REX
║
╠═➢ 🍁Cmd: *.beach*
╠══➢ 📛 Dec: *Send beach logo*
╠═➢ 🍁Ex: *.beach T-REX
║
╠═➢ 🍁Cmd: *.gradient*
╠══➢ 📛  Dec: *Send logo*
╠═➢ 🍁 Ex: *.gradient T-REX*
║
╠═➢ 🍁Cmd: *.luxury*
╠══➢ 📛  Dec: *Send luxury logo*
╠═➢ 🍁 Ex: *.luxury T-REX*
║
╠═➢ 🍁Cmd: *.sky*
╠══➢ 📛  Dec: *Send sky logo*
╠═➢ 🍁 Ex: *.sky T-REX*
║
╠═➢ 🍁Cmd: *.winter*
╠══➢ 📛  Dec: *Send winter logo*
╠═➢ 🍁 Ex: *.winter T-REX
║
╠═➢ 🍁Cmd: *.christmas*
╠══➢ 📛  Dec: *Send xmas logo*
╠═➢ 🍁 Ex: *.christmas T-REX*
║
╠═➢ 🍁Cmd: *.neon*
╠══➢ 📛  Dec: *Send neon logo*
╠═➢ 🍁 Ex: *.neon T-REX*
║
╠═➢ 🍁Cmd: *.king*
╠══➢ 📛  Dec: *Send king logo*
╠═➢ 🍁 Ex: *.king T-REX*
║
╠═➢ 🍁Cmd: *.glue*
╠══➢ 📛  Dec: *Send Glue logo*
╠═➢ 🍁 Ex: *.glue T-REX*
║
║      ╔═🍁 T-REX BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════
`, rowId:"rowid4"},
        {title: '👿 FF PACK 👿', description: `▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ❰🍁🔱  T Rex BOT  🔱🍁❱  
║         ║🍁╚FF PACK╝🍁║
║
╠═➢ 🍁.ff9       ❴your text❵
║send fiee fire logo
╠═➢ 🍁.ff10      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff11      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff12      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff13      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff14      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff15      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff16      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff17      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff18       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff19       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff20       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff21       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff22       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff23       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff24       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff25       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff26       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff27       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff28       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff29       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff30       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff31       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff32       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff33       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff34       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff35       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff36       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff37       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff38       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff39       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff41       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff42       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff43       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff44       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff45       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff46       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff47       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff48       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff49       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff50       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff51       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff52       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff53       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff54       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff55       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff56       ❴your text❵
║send free fire logo
║
║
║▷Creator: HIRUSHA
║
║ ❰🍁🔱  T Rex BOT  🔱🍁❱  
╚═════════════════════╝
`, rowId:"rowid5"},
        {title: '👿 LOGO PACK 02 👿', description:`▷▷▷▷▷▷\n\n\n
╔══════════════════════
║❌ 🍁*REX LOGO PACK 1*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.wel*
╠══➢ 📛 Dec: *Send welcome logo*
╠═➢ 🍁 Ex: *.wel T-Rex/Hiruwa*
║
╠═➢ 🍁 Cmd: *.bye*
╠══➢ 📛 Dec: *Send bye logo*
╠═➢ 🍁Ex: *.bye T-REX/Hiruwa*
║
╠═➢ 🍁Cmd: *.marvel*
╠══➢ 📛 Dec: *Send marve logo*
╠═➢ 🍁 Ex: *.marvel T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.2marvel*
╠══➢ 📛 Dec: *Send marvel logo*
╠═➢ 🍁Ex: *.2marvel T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.wolf*
╠══➢ 📛 Dec: *Send wolf logo*
╠═➢ 🍁Ex: *.wolf T-REX/HIRUWA*
║
╠═➢ 🍁Cmd: *.lava*
╠══➢ 📛 Dec: *Send lava logo*
╠═➢ 🍁Ex: *.lava T-REX*
║
╠═➢ 🍁Cmd: *.xmas*
╠══➢ 📛 Dec: *Send xmas logo*
╠═➢ 🍁Ex: *.xmas T-Rex*
║
╠═➢ 🍁Cmd: *.round*
╠══➢📛 Dec: *Send round logo*
╠═➢ 🍁 Ex: *.round { image url }*
║
╠═➢ 🍁Cmd: .*.quot*
╠══➢ 📛  Dec: *Send quote logo*
╠═➢ 🍁 Ex: *.quot T-REX*
║
╠═➢ 🍁Cmd: *.harta*
╠══➢ 📛 Dec: *Send harta logo*
╠═➢ 🍁Ex: *.harta T-REX
║
╠═➢ 🍁Cmd: *.1917*
╠══➢ 📛 Dec: *Send 1917 logo*
╠═➢ 🍁Ex: *.1917 T-REX
║
╠═➢ 🍁Cmd: *.minion*
╠══➢ 📛 Dec: *Send minion logo*
╠═➢ 🍁Ex: *.minion T-REX
║
╠═➢ 🍁Cmd: *.holo*
╠══➢ 📛  Dec: *Send holo logo*
╠═➢ 🍁 Ex: *.holo T-REX*
║
╠═➢ 🍁Cmd: *.metalp*
╠══➢ 📛  Dec: *Send metalp logo*
╠═➢ 🍁 Ex: *.metalp T-REX*
║
╠═➢ 🍁Cmd: *.avengers*
╠══➢ 📛  Dec: *Send avengers logo*
╠═➢ 🍁 Ex: *.avengers T-REX*
║
╠═➢ 🍁Cmd: *.halloween*
╠══➢ 📛  Dec: *Send halloween logo*
╠═➢ 🍁 Ex: *.halloween T-REX
║
╠═➢ 🍁Cmd: *.horror*
╠══➢ 📛  Dec: *Send horror logo*
╠═➢ 🍁 Ex: *.horror T-REX*
║
╠═➢ 🍁Cmd: *.glossyc*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyc T-REX*
║
╠═➢ 🍁Cmd: *.deluxe*
╠══➢ 📛  Dec: *Send deluxe logo*
╠═➢ 🍁 Ex: *.deluxe T-REX*
║
╠═➢ 🍁Cmd: *.glossyb*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyb T-REX*
║
╠═➢ 🍁Cmd: *.joker*
╠══➢ 📛  Dec: *Send joker logo*
╠═➢ 🍁 Ex: *.joker T-REX*
║
║      ╔═🍁 T-REX BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════
`, rowId:"rowid6"},
        {title: '👿 ATTP PACK 👿', description: `▷▷▷▷▷▷\n\n\n
╔═════════════════════╗
║      ❰🍁🔱  T Rex BOT  🔱🍁❱  
║        ║🍁╚ATTP PACK╝🍁║
║
╠═➢ 🍁.01attp      ❴your text❵
║send fiee fire logo
╠═➢ 🍁.02attp      ❴your text❵
║send Text logo
╠═➢ 🍁.03attp      ❴your text❵
║send Text logo
╠═➢ 🍁.04attp      ❴your text❵
║send Text logo
╠═➢ 🍁.05attp      ❴your text❵
║send Text logo
╠═➢ 🍁.06attp      ❴your text❵
║send Text logo
╠═➢ 🍁.07attp      ❴your text❵
║send Text logo
╠═➢ 🍁.08attp      ❴your text❵
║send Text logo
╠═➢ 🍁.09attp      ❴your text❵
║send Text logo
╠═➢ 🍁.10attp       ❴your text❵
║send Text logo
╠═➢ 🍁.11attp       ❴your text❵
║send Text logo
╠═➢ 🍁.12attp       ❴your text❵
║send Text logo
╠═➢ 🍁.13attp       ❴your text❵
║send Text logo
╠═➢ 🍁.14attp       ❴your text❵
║send Text logo
╠═➢ 🍁.15attp       ❴your text❵
║send Text logo
╠═➢ 🍁.16attp       ❴your text❵
║send Text logo
╠═➢ 🍁.17attp       ❴your text❵
║send Text logo
╠═➢ 🍁.18attp       ❴your text❵
║send Text logo
╠═➢ 🍁.19attp       ❴your text❵
║send Text logo
╠═➢ 🍁.20attp       ❴your text❵
║send Text logo
╠═➢ 🍁.21attp       ❴your text❵
║send Text logo
╠═➢ 🍁.22attp       ❴your text❵
║send Text logo
╠═➢ 🍁.23attp       ❴your text❵
║send Text logo
╠═➢ 🍁.24attp       ❴your text❵
║send Text logo
╠═➢ 🍁.25attp       ❴your text❵
║send Text logo
╠═➢ 🍁.26attp       ❴your text❵
║send Text logo
╠═➢ 🍁.27attp       ❴your text❵
║send Text logo
╠═➢ 🍁.28attp       ❴your text❵
║send Text logo
╠═➢ 🍁.29attp       ❴your text❵
║send Text logo
╠═➢ 🍁.30attp       ❴your text❵
║send Text logo
╠═➢ 🍁.31attp       ❴your text❵
║send Text logo
╠═➢ 🍁.32attp       ❴your text❵
║send Text logo
╠═➢ 🍁.33attp       ❴your text❵
║send Text logo
╠═➢ 🍁.34attp       ❴your text❵
║send Text logo
╠═➢ 🍁.35attp       ❴your text❵
║send Text logo
╠═➢ 🍁.36attp       ❴your text❵
║send Text logo
╠═➢ 🍁.37attp       ❴your text❵
║send Text logo
╠═➢ 🍁.38attp       ❴your text❵
║send Text logo
╠═➢ 🍁.39attp       ❴your text❵
║send Text logo
╠═➢ 🍁.40attp       ❴your text❵
║send Text logo
║
║▷Creator: HIRUSHA
║
║ ❰🍁🔱  T Rex BOT  🔱🍁❱  
╚═════════════════════╝

`, rowId:"rowid20"},
{title: '👿 DOWNLOADER 👿', description:`▷▷▷▷▷▷\n\n\n
 ╭────────────────
 │  🍁👿 Downloader 👿🍁
 │
 │▷ .video { vid link }
 │▷ .down { status down }
 │▷ .vid2 { vid link }
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
`, rowId:"rowid8"},
        {title: '👿 ABOUT T-REX BOT 👿', description: `▷▷▷▷▷▷\n\n\n
🍁 Developer : Hiruwa
🍁 Bot             : T-REX V 3.0.0 
🍁 Language : Sinhala & English
🍁 Sponcer Team : PEARL TEAM
🍁 Develop language : Node js
🍁 Developer no : wa.me/+94788306130
`, rowId:"rowid9"},
        {title: '👿 ADMIN PANEL 👿', description: `▷▷▷▷▷▷\n\n\n
❰🍁🔱  T Rex BOT  🔱🍁❱\n\n🍁 COMMAND: *.ban*\nℹ️ DESCRIPTION: Remove someone from the group. Mention the message or tag a person to use command.\n\n🍁 COMMAND: *.add*\nℹ️ DESCRIPTION: Adds someone to the group.\n\n🍁 COMMAND: *.mute*\nℹ️ DESCRIPTION: Mute group chat. Messages can only be sent by admin. \n\n🍁 COMMAND: *.unmute*\nℹ️ DESCRIPTION: Remove group chat mute. Anyone can send a message.\n\n🍁 COMMAND: *.clear*\nℹ️ DESCRIPTION: Clearing chat.\n\n🍁 COMMAND: *.name*\nℹ️ DESCRIPTION: Change group name. \n\n🍁 COMMAND: *.promote*\nℹ️ DESCRIPTION: Promoting members to admin.\n\n🍁 COMMAND: *.demote*\nℹ️ DESCRIPTION: Demoting admins.\n\n🍁 COMMAND: *.myplugin*\nℹ️ DESCRIPTION: To view the current plugin list from ❰🍁🔱  T Rex BOT  🔱🍁❱.\n\n🍁 COMMAND: *.plug*\nℹ️ DESCRIPTION: Install external plugins.\n\n🍁 COMMAND: *.unplug*\nℹ️ DESCRIPTION: Removes the plugin.\n\n🍁 COMMAND: *.invite*\nℹ️ DESCRIPTION: Provides group invitation link.\n\n🍁 COMMAND: *.afk*\nℹ️ DESCRIPTION: It turns bot bot AFK - Away From Keyboard.\n\n🍁 COMMAND: *.restart*\n➢ DESCRIPTION: Restart the bot.\n\n🍁 COMMAND: *.shutdown*\n➢ DESCRIPTION: Shutdown the Bot.\n\n🍁 COMMAND: *.setvar*\n➢ DESCRIPTION: Change heroku config vars.\n\n🍁 COMMAND: *.getvar*\n➢ DESCRIPTION: Get heroku config var.\n\n🍁 COMMAND: *.speedtest*\n➢ DESCRIPTION:Check download and upload speed.\n\n🍁 COMMAND: *.filter*\nℹ️ DESCRIPTION: It adds filters. If someone writes your filter word, it sends the answer. If you write a .filter it will show your list of filters.\n\n🍁 COMMAND: *.stop*\nℹ️ DESCRIPTION: Stops the filters you added earlier.\n\n🍁 COMMAND: *.welcome*\nℹ️ DESCRIPTION: It sets the welcome message.\n\n🍁 COMMAND: *.goodbye*\nℹ️ DESCRIPTION: Sets the goodbye  message.\n\n🍁 COMMAND: *.kickme*\nℹ️ DESCRIPTION: It removes the bot from the group that provided the command.\n\n🍁 COMMAND: *.pp*\nℹ️ DESCRIPTION: The photo you mention mentions the bot profile photo.\n\n🍁 COMMAND: *.block*\nℹ️ DESCRIPTION: Block tagged user.\n\n🍁 COMMAND: *.unblock*\nℹ️ DESCRIPTION: Unblock tagged user.\n\n🍁 COMMAND: *.jid*\nℹ️ DESCRIPTION: Giving user JID.\n\n🍁 COMMAND *.tagall*\nℹ️ DESCRIPTION: Tag everyone in group.\n\n🍁 COMMAND: *.up*\nℹ️ DESCRIPTION: Check for updates.\n\n🍁 COMMAND: *.uptrex*\nℹ️ DESCRIPTION: To update your bot.\n\n🍁 COMMAND: *.dyno*\nℹ️ DESCRIPTION: Showing heroku dyno hours.\n\n🍁 COMMAND: *.sysd*\nℹ️ DESCRIPTION: Show system properties.\n\n🍁 COMMAND: *.scam*\nℹ️ DESCRIPTION: Scam actions for 5min.\n\n🍁 COMMAND: *.antilink*\nℹ️ DESCRIPTION: Anti link on Ex: .antilink on/off\n\n🍁 COMMAND: *.antibad*\nℹ️ DESCRIPTION: Remove bad word users Ex: .antibad on/off\n\n🍁 COMMAND: *.chatbot*\nℹ️DESCRIPTION: Auto chat on Ex: .chatbot on/off\n👿 Command: .voice on/off\n▷ Description: Activate and deactivate voice chat\n\n👿 Command: .public ▷ Description: set bot as public\n\n 👿 Command: .private\n▷ Description: Set your bot as private\n\n*⚠️ The above command only works for Admin, Bot and SUDO numbers.\n\n❰🍁🔱  T Rex BOT  🔱🍁❱*
`, rowId:"rowid10"},
        {title: '👿 Work Type PUBLIC 👿', description: "▷▷▷▷▷▷\n\n\nType .public to public mode", rowId:"rowid9"},
        {title: '👿 Work Type PRIVATE 👿', description:"▷▷▷▷▷▷\n\n\nType .private to private mode", rowId:"rowid2"}
       ]
       
       const sections = [{title: "👿 T-REX Command Panel 👿", rows: rows}]
       
       const button = {
        buttonText: 'Click Me▷',
        description: "👿 T-REX COMMAND PANEL 👿",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage, {quoted: message.data })
    
    }));
}

}
