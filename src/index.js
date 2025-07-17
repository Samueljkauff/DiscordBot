const  { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();

const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})

bot.login(process.env.DISCORD_TOKEN);

bot.on('ready', (b)=>{
    console.log(`${b.user.tag} is online!`)
});

bot.on('messageCreate', (msg)=>{
    
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === 'hey'){
        msg.reply(`Hello ${ msg.author.globalName} :P`)
    }
});