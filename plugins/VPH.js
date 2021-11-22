const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
const {uploadByBuffer} = require('cobrabot-patch')
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');



Trex.addrex({pattern: 'uploadv ?(.*)', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    

    if (!message.reply_message) return await message.client.sendMessage(message.jid, 'මෙගාබයිට් පහට අඩු වීඩියෝ එකකට මෙන්ශන් කරන්න ( Mention Video Less than 5mb ) 🌠✴❤', MessageType.text);

var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('Trex.mp4')
        .on('end', async () => {
        
        var geturl = await uploadByBuffer(fs.readFileSync('Trex.mp4' ), 'video/mp4')
        
        await message.client.sendMessage(message.jid,'YOUR VIDEO TELEGRAPH LINK IS 😍►\n\n'+ geturl.link , MessageType.text)
        });
        

}));

if (Config.WORKTYPE == 'public') {

Trex.addrex({pattern: 'uploadv ?(.*)', fromMe: false,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    

    if (!message.reply_message) return await message.client.sendMessage(message.jid, 'මෙගාබයිට් පහට අඩු වීඩියෝ එකකට මෙන්ශන් කරන්න ( Mention Video Less than 5mb ) 🌠✴❤', MessageType.text);

var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('Trex.mp4')
        .on('end', async () => {
        
        var geturl = await uploadByBuffer(fs.readFileSync('Trex.mp4' ), 'video/mp4')
        
        await message.client.sendMessage(message.jid,'YOUR VIDEO TELEGRAPH LINK IS 😍►\n\n'+ geturl.link , MessageType.text)
        });
        

}));

}
