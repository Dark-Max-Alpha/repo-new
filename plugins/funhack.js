const Alpha = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require("axios");
let WType = Config.WORKTYPE == 'public' ? false : true

var HACK_DESC = ''
if (Config.LANG == 'EN') HACK_DESC = 'Fake hack ! Scam your friend'
if (Config.LANG == 'SI') HACK_DESC = 'ව්‍යාජයයි! ඔබගේ මිතුරාව රවටන්න'

const WAME = "*⚠️ ꜱᴛᴀʀᴛɪɴɢ ʜᴀᴄᴋɪɴɢ...ᴜsᴇʀ: {}*"

var time = new Array();

    time[0] = 6000
    time[1] = 7000
    time[2] = 3000
    time[3] = 4000
    time[4] = 5000
    time[5] = 10000
    time[6] = 15000
    time[7] = 20000
    time[8] = 25000
    time[9] = 30000

  var random0 = Math.floor(10*Math.random());
  var random1 = Math.floor(10*Math.random());
  var random2 = Math.floor(10*Math.random());
  var random3 = Math.floor(10*Math.random());
  var random4 = Math.floor(10*Math.random());
  var random5 = Math.floor(10*Math.random());
  var random6 = Math.floor(10*Math.random());
  var random7 = Math.floor(10*Math.random());
  var random8 = Math.floor(10*Math.random());
  var random9 = Math.floor(10*Math.random());
  
const end = `status: 200
url : https://drive.google.com/file/d/1HXclQumyRIRy9STTiHcTAHpSMM2mj5ZF/view?usp=sharing
host: drive.google.com
✅ Hack successfully!
*ʜᴀᴄᴋᴇᴅ ʙʏ: ALPHA 😈*
`

Alpha.addrex({pattern: 'hack$', fromMe: WType, desc: HACK_DESC, deleteCommand: true}, (async (message, match) => {

var thumb = await axios.get("https://telegra.ph/file/dfa0564731ced96dc2b73.jpg", {responseType: "arraybuffer"});

   if (!message.reply_message) {

   await message.client.sendMessage(message.jid, "*Need a user to hack ! 😈*", MessageType.text, {quoted: message.data })

   } else if (message.reply_message) {

   await message.client.sendMessage(message.jid, WAME.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.replace('@s.whatsapp.net', ' ')), MessageType.text, {quoted: message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]} });
   
   await new Promise(r => setTimeout(r, time[random0] ));
   
   await message.client.sendMessage(message.jid,'*📈 ᴄᴏʟʟᴇᴄᴛɪɴɢ ᴅᴇᴛᴀɪʟꜱ...*',MessageType.text);
   
   await new Promise(r => setTimeout(r, time[random1] ));
   
   await message.client.sendMessage(message.jid,'*🔒 ʟᴏɢɪɴ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴄᴏʟʟᴇᴄᴛɪɴɢ...*',MessageType.text);
   
   await new Promise(r => setTimeout(r, time[random2] ));
   
   await message.client.sendMessage(message.jid,'*ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴀ ᴡʜɪʟᴇ...*',MessageType.text);
   
   await new Promise(r => setTimeout(r, time[random3] ));
   
   await message.client.sendMessage(message.jid,'```■□□□□□□□□□ 10%```',MessageType.text);

   await new Promise(r => setTimeout(r, time[random4] ));
   
   await message.client.sendMessage(message.jid,'```■■■□□□□□□□ 25%```',MessageType.text);
   
   await new Promise(r => setTimeout(r, time[random5] ));
   
   await message.client.sendMessage(message.jid,'```■■■■■□□□□□ 54%```',MessageType.text);
   
   await new Promise(r => setTimeout(r, time[random6] ));
   
   await message.client.sendMessage(message.jid,'```■■■■■■□□□□ 69%```',MessageType.text);

   await new Promise(r => setTimeout(r, time[random7] ));
   
   await message.client.sendMessage(message.jid,'```■■■■■■■■□□ 80%```',MessageType.text);
   
   await new Promise(r => setTimeout(r, time[random8] ));
   
   await message.client.sendMessage(message.jid,'```■■■■■■■■■□ 93%```',MessageType.text);
   
   await new Promise(r => setTimeout(r, time[random9] ));
   
   await message.client.sendMessage(message.jid,'```■■■■■■■■■■ 100%```',MessageType.text);
   
   await new Promise(r => setTimeout(r, time[random0] ));
   
   await message.client.sendMessage(message.jid,'*ᴜᴘʟᴏᴀᴅɪɴɢ ᴅᴇᴛᴀɪʟꜱ ᴏғ ' + message.reply_message.jid.replace('@s.whatsapp.net', '') +' ᴛᴏ ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ...*', MessageType.text);
   
   await new Promise(r => setTimeout(r, time[random1] ));
   
   await message.client.sendMessage(message.jid, end ,MessageType.text, { contextInfo: { key: {"fromMe": false, "participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "120363038448154828@g.us","inviteCode": "https://achifernando.tk","groupName": "HACKED 😈", "caption": `${Config.USER_NAME}`, 'jpegThumbnail': Buffer.from(thumb.data)}}} });

   }
   
}));
