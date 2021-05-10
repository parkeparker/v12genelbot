const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
    try {
        const chypercode1 = new Discord.RichEmbed()
            .addField(`Sunucuda bulunan emojiler`, message.guild.emojis.map(emoji => emoji).join(' | '))
            .setColor("GREEN")
            .setTimestamp()
        message.channel.send(chypercode1)
    } catch (err) {
        const chypercode2 = new Discord.RichEmbed()
            .addField(`Sunucuda bulunan emojiler`, 'Üzgünüm sunucunuzda çok fazla emoji var ya da hiç emoji yok bunları gösteremiyorum Discord izin vermiyor.')
            .setColor("RED")
            .setTimestamp()
        message.channel.send(chypercode2)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
    kategori: 'sunucu'
}

exports.help = {
    name: 'emojiler',
    description: 'Emojileri gösterir.',
    usage: 'emojiler'
}