const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply("**YETERSİZ YETKİ!**");
  let pixelien = message.mentions.channels.first();
  if (!pixelien) return message.reply("**Bir Kanal Etiketlemen Gerek!**");
  let jkood = args.slice(1).join(" ");
  if (!jkood) return message.reply("**Ne Duyurusu Yapılacak Yazman Gerek!**");

  let cse = new Discord.MessageEmbed()
    .setTitle("Ꮙ")
    .setThumbnail(message.guild.iconURL())
    .setColor("BLACK")
    .setDescription(`${jkood}`)
    .setTimestamp()
  pixelien.send(cse);
  setTimeout(() => {
    pixelien.send("@everyone").then(csmm => {
      csmm.delete({timeout: 200});
    });
  }, 2000);
};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "duyuru"
};