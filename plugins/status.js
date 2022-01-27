const Trex = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const Down = '🖲️  DOWNLOADING STATUS .'

    Trex.addrex({pattern: 'down$', fromMe: true }, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,Down,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .save('stat.png')
                .on('end', async () => {
                    await message.client.sendMessage(message.client.user.jid,fs.readFileSync('stat.png'), MessageType.image,{mimetype: Mimetype.png, caption: '⎝🛡️ ALPHA 🛡️⎠' ,quoted: message.data});
            });
        return 
        }

        ffmpeg(location)
            .save('statu.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.client.user.jid,fs.readFileSync('statu.mp4'), MessageType.video,{mimetype: Mimetype.mp4, caption: '⎝🛡️ ALPHA 🛡️⎠' ,quoted: message.data});
            });
        return 
    }));
