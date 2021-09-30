

//Basic requirements
const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const got = require("got");
const fs = require('fs');

// Config Checker
const Config = require('../config');

//Language
const Language = require('../language');
const LANG = Language.getString('information');

if (Config.WORKTYPE == 'private') {
  Trex.addrex({pattern: 'covid ?(.*)', fromMe: true, desc: LANG.COVID_DESC,  deleteCommand: false}, async (message, match) => {
    if (match[1] === '') return await message.reply(LANG.NEED_CON);
      const url = `https://coronavirus-19-api.herokuapp.com/countries/${match[1]}`;
            const response = await got(url);
            const jsun = JSON.parse(response.body);
            await message.client.sendMessage(message.jid, fs.readFileSync("/root/ng19/src/earth.mp4"), MessageType.video, {mimetype: Mimetype.gif, caption: LANG.COUNTRY + jsun.country + '\n\n' + LANG.CASES + jsun.cases + '\n' + LANG.TCASES + jsun.todayCases + '\n' + LANG.DEATHS + jsun.deaths + '\n' + LANG.TDEATHS + jsun.todayDeaths + '\n' + LANG.RECO + jsun.recovered + '\n' + LANG.CRIT + jsun.critical + '\n' + LANG.TEST + jsun.totalTests });
  });
}

else if (Config.WORKTYPE == 'public') {
  Trex.addrex({pattern: 'covid ?(.*)', fromMe: false, desc: LANG.COVID_DESC}, async (message, match) => {
    if (match[1] === '') return await message.reply(LANG.NEED_CON);
      const url = `https://coronavirus-19-api.herokuapp.com/countries/${match[1]}`;
            const response = await got(url);
            const jsun = JSON.parse(response.body);
            await message.client.sendMessage(message.jid, fs.readFileSync("/root/ng19/src/earth.mp4"), MessageType.video, {mimetype: Mimetype.gif, caption: LANG.COUNTRY + jsun.country + '\n\n' + LANG.CASES + jsun.cases + '\n' + LANG.TCASES + jsun.todayCases + '\n' + LANG.DEATHS + jsun.deaths + '\n' + LANG.TDEATHS + jsun.todayDeaths + '\n' + LANG.RECO + jsun.recovered + '\n' + LANG.CRIT + jsun.critical + '\n' + LANG.TEST + jsun.totalTests });
  });
}