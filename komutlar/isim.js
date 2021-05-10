const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
      let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has("MANAGE_NICKNAMES")) return message.reply(`<:no:697374724946395246> Bunu yapabilmek için "Kullanıcı Adlarını Yönet" yetkisine sahip olmalısınız!`)

  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`:x: Lütfen bir kullanıcı giriniz! \nDoğru Kullanım; \`${prefix}isim @${client.user.username}#${client.user.discriminator} \``)

  if(!isim) return message.reply(`:x: Lütfen bir kullanıcı adı giriniz! \nDoğru Kullanım; \`${prefix}isim @${client.user.username}#${client.user.discriminator} \``)

  if(isim.length > 32) return message.reply(`:x: Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`)

  message.inlineReply(`<a:emoji_18:813449313715879987> Kullanıcı ismi başarıyla \`${isim}\` olarak değiştirildi. <a:emoji_18:813449313715879987>`)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isim','setnick','nick','isim-değiştir'],
    permLevel: 0
}

exports.help = {
    name: 'i',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isimdeğiştir @kullanıcı '
}