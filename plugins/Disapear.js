const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Trex = require('../events');
const Config = require('../config');
const UNQ = "🧨 dont type words after command ✨🪔"
const DDO = "🧨 turn on disappering mode ✨🪔"
const ONO = "🧨 Sucsessfuly Turned on ✨🪔"
const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Trex.addrex({pattern: 'dis on ?(.*)', fromMe: true, desc: DDO,dontAddCMDList: true }, (async (message, match) => {    

        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 604800);
            await message.client.sendMessage(message.jid,ONO,MessageType.text);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));


Trex.addrex({pattern: 'dis off ?(.*)', fromMe: true, desc: DDO,dontAddCMDList: true }, (async (message, match) => {   

        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,'🧨 Disapearing off 🪔✨',MessageType.text);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));

module.exports = {
    checkImAdmin: checkImAdmin
};
