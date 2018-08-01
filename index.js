const discord = require('discord.js');

const client = Discord.Client();

const config = require('./config.json');

client.on("ready", () => { 
  console.log('Bot has successfully started in ${client.guilds.size}');
  client.user.setActivity('Prefix is $');
});
