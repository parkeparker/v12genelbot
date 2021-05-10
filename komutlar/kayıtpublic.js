const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
      let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has("MANAGE_ROLES")) return message.reply(`<:no:697374724946395246> Bunu yapabilmek için "Rolleri " yetkisine sahip olmalısınız!`)

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
if(!member) return message.channel.send("birini etiketle")
member.roles.add("812598686935941130")//public
member.roles.add("812598686927945736")//kayıtlı
member.roles.remove("812598686927945735")//kayıtsız 

  message.inlineReply("<a:emoji_18:813449313715879987>")
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['public'],
    permLevel: 0
}

exports.help = {
    name: 'public',
    description: 'Kayıtsız rolü alıp kayıtlı verir.',
    usage: 'public @kullanıcı '
}
