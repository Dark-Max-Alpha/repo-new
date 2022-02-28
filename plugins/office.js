const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'office', fromMe: false,  deleteCommand: true }, (async (message, match) => {

            var image = await axios.get ('https://telegra.ph/file/011d37f1cef06440daf7a.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│ ⎝🛡️ SOFTWARE STORE BY ACHI BRO LK 🛡️⎠
│      Ms Office Softwares 
│  
│  
│  
│  
│  
│
│         🛡️POWERD BY🛡️
│        ⎝🛡️ ALPHA 🛡️⎠
╰──────────────`,quoted: message.data})

    }));


}
