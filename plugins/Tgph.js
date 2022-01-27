const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
const {uploadByBuffer} = require('telegraph-uploader')
const ffmpeg = require('fluent-ffmpeg');
const need = 'Please Reply a photo ( ෆොටෝ එකකට රිප්ලයි කරන්න ) 🌠✴'
const {execFile} = require('child_process');



Trex.addrex({pattern: 'uploadp ?(.*)', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    

    if (!message.reply_message) return await message.client.sendMessage(message.jid, need, MessageType.text);
    
    
var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
  


    ffmpeg(location)
        .save('Alpha.jpg')
        .on('end', async () => {
        
        var geturl = await uploadByBuffer(fs.readFileSync('Alpha.jpg' ), 'image/jpg')
        
        await message.client.sendMessage(message.jid,'YOUR IMAGE TELEGRAPH LINK IS 🖲️ ►\n\n'+ geturl.link , MessageType.text, {quoted: message.data});
        });
        

}));


if (Config.WORKTYPE == 'public') {
    
    
    
    Trex.addrex({pattern: 'uploadp ?(.*)', fromMe: false,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    

    if (!message.reply_message) return await message.client.sendMessage(message.jid, need, MessageType.text);
        

var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
  


    ffmpeg(location)
        .save('Alpha.jpg')
        .on('end', async () => {
        
        var geturl = await uploadByBuffer(fs.readFileSync('Alpha.jpg' ), 'image/jpg')
        
        await message.client.sendMessage(message.jid,'YOUR IMAGE TELEGRAPH LINK IS 🖲️ ►\n\n'+ geturl.link , MessageType.text, {quoted: message.data});
        });
        

}));
    
    }
