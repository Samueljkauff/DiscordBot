require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'multiply',
        description: 'multiply two numbers',
        options: [{
            name: 'first-number',
            description: 'The Second Number',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'second-number',
            description: 'The Second Number',
            type: ApplicationCommandOptionType.Number,
            required: true,
        }]
    },
    {
        name: 'rate',
        description: 'Send a Spotify link and rate the album!',
        options: [{
            name: 'link',
            description: 'Spotify Link',
            type: ApplicationCommandOptionType.String,
            required: true,
        }],
    }
];

const rest = new REST({version: '10'}).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try{
     console.log('Registering slash commands...');
     await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
        { body: commands}
     )

        console.log('Slash commands registered!');
    }catch(error){
        console.log(`an error occured: ${error}`);
    }
})();