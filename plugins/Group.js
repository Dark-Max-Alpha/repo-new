const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP LIST ╗📛\n\n🖲️  GROUP  🖲️ \n\n 🔱 ' + Config.GROUPN1 + ' 🔱\n\n\n       ⎝🛡️ ALPHA 🛡️⎠'})

    }));
  
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP LIST ╗📛\n\n🖲️  GROUP  🖲️ \n\n 🔱 ' + Config.GROUPN1 + ' 🔱\n\n\n       ⎝🛡️ ALPHA 🛡️⎠'})

    }));
  
  Trex.addrex({pattern: 'grp', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP LIST ╗📛\n\n🖲️  GROUP  🖲️ \n\n 🔱 ' + Config.GROUPN1 + ' 🔱\n\n\n       ⎝🛡️ ALPHA 🛡️⎠   ' ,quoted: message.data})

    }));
 
}
