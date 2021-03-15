const db = require('quick.db')
const discord = require('discord.js')


module.exports = {
    name: 'prefixset',
    async execute(message, args) {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you do not have permission')
        if(!args[0]) return message.reply('define a new prefix')

        await db.set(`prefix_${message.guild.id}`, args[0])

        embed = new discord.MessageEmbed()
        .addField('New Prefix', `\`${args[0]}\``)
        .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(embed)
    }
}