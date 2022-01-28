const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 ⎝🛡️ ALPHA 🛡️⎠ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🖲️   *Owner & Founder - Achi Fernando ( Achiya )*

🖲️   *Language - NODE JS*

🖲️   *Sponser Team - PEARL Team*


       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *Kasun Ravihara* 🍒
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 *Hiruwa* 🍒
➻ *Co Owner*

🍒 *Thinura* 🍒
➻ *Admin Manger*

           🍒 *ᴀᴅᴍɪɴꜱ* ™🍒

╹ 🔰 *Hirusha Rukshan* ╹
╹ 🔰 *Kasun Ravihara*╹
╹ 🔰 *Thinura*    ╹
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 ⎝🛡️ ALPHA 🛡️⎠ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🖲️   *Owner & Founder - Achi Fernando ( Achiya )*

🖲️   *Language - NODE JS*

🖲️   *Sponser Team - PEARL Team*


       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *Kasun Ravihara* 🍒
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 *Hiruwa* 🍒
➻ *Co Owner*

🍒 *Thinura* 🍒
➻ *Admin Manger*

           🍒 *ᴀᴅᴍɪɴꜱ* ™🍒

╹ 🔰 *Hirusha Rukshan* ╹
╹ 🔰 *Kasun Ravihara*╹
╹ 🔰 *Thinura*    ╹
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰` })

    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 ⎝🛡️ ALPHA 🛡️⎠ *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

🖲️   *Owner & Founder - Achi Fernando ( Achiya )*

🖲️   *Language - NODE JS*

🖲️   *Sponser Team - PEARL Team*


       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *Kasun Ravihara* 🍒
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 *Hiruwa* 🍒
➻ *Co Owner*

🍒 *Thinura* 🍒
➻ *Admin Manger*

           🍒 *ᴀᴅᴍɪɴꜱ* ™🍒

╹ 🔰 *Hirusha Rukshan* ╹
╹ 🔰 *Kasun Ravihara*╹
╹ 🔰 *Thinura*    ╹
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰 `  ,quoted: message.data})

    }));
}
