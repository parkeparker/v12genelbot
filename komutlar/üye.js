const Discord = require("discord.js");

  exports.run = (client, message, args) => {

    const sayaq = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name} `)
       .setColor("BLUE")
       .addField("> <a:emoji_7:813448029067542540>**Toplam Kullanıcı**",message.guild.memberCount)
       .addField("> <a:emoji_7:813448029067542540>**Çevrimiçi Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'online').size)
       .addField("> <a:emoji_7:813448029067542540>**Boşta Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'idle').size)
       .addField("> <a:emoji_7:813448029067542540> **Rahatsız Etmeyindeki Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'dnd').size)
       .addField("> <a:emoji_7:813448029067542540> **Çevrimdışı Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'offline').size)
       .setThumbnail(message.guild.iconURL({ dynamic:true }));
       message.channel.send(sayaq);
  };

  module.exports.conf = {
    aliases: ["say"],
    permLevel: 0,
    enabled: true,
    guildOnly: true
  };

  module.exports.help = {
    name: "üye-say",
    description: "",
    usage: ""
  };