const discord = require('discord.js')

module.exports = {
    name: 'membercount',
    execute(message, args) {
        embed = new discord.MessageEmbed()
        .addField('Membercount', `\`${message.guild.memberCount}\``)
        .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(embed)
    }
}