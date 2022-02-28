const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

if (Config.WORKTYPE == 'public') {

     Trex.addrex({pattern: 'ws', fromMe: false,  deleteCommand: true }, (async (message, match) => {


            var image = await axios.get ('https://telegra.ph/file/011d37f1cef06440daf7a.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭───────────────
│ ⎝🛡️ SOFTWARE STORE BY ACHI BRO LK 🛡️⎠
│      Wondershare Softwares 
│  
│  ◎Filmora 7.8.9 =.f9
│  ◎Filmora 10.1.20 =.f20
│  ◎Filmora 10.5.10 =.f10
│  ◎Filmora 10.7.8.12 =.f12
│
│         🛡️POWERD BY🛡️
│        ⎝🛡️ ALPHA 🛡️⎠
╰──────────────`,quoted: message.data})

    }));

} 
