const discord = require("discord.js")
const client = new discord.Client()
const db = require("quick.db")
const config = require('./config.json')
const fs = require('fs')
const keepAlive = require('./server')


client.commands = new discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

client.on('ready', () => {
    console.log('i am online !')
    client.user.setActivity(`Cant Study || -Help`, {
        type: "PLAYING",
        url: "https://www.twitch.tv/twitch"
        
      });
})


client.on('message', async (message) => {
    let prefix;

    let prefixes = await db.fetch(`prefix_${message.guild.id}`)

    if(prefixes == null) {
        prefix = "-"
    } else {
        prefix = prefixes
    }

    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if(message.guild === null) return
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()

    if(!client.commands.has(command)) return;
    try{
        client.commands.get(command).execute(message, args)
    } catch (error) {
        console.error(error);
        message.reply('there was a error running that command')
    }
})


keepAlive()
client.login(config.token)

for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)

    
}