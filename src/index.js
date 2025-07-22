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
    console.log(`${b.user.username} is online!`)
});

bot.on('messageCreate', (msg)=>{
    
    if(msg.author.bot){
        return;
    }
    if (msg.content.includes(`<@${bot.user.id}>`)) {
        msg.reply("Thou shall not pass");
    }
    if(msg.content.toLowerCase() === 'hey'){
        msg.reply(`Hello ${ msg.author.globalName} :P`)
    }
});

bot.on('interactionCreate', async (interaction)=>{
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'rate') {
        const link = interaction.options.getString('link');
        await interaction.reply(`Your link was: ${link}`);
    }
})