const discord = require('discord.js')

module.exports = {
    name: 'help',
    execute(message, args){
        embed = new discord.MessageEmbed()
        .setTitle('Help')
        .addField('Misc', '`ping`')
        .addField('Info', '`Membercount`')
        .addField('Mod', '`Prefixset`', false)
        .setColor('RANDOM')
        .setTimestamp()
        message.author.send(embed)

    }
}