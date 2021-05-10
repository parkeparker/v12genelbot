 const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
   message.inlineReply(`Bu sunucuda henüz rp sistemi açık değil.`)
}

module.exports.conf = {
   aliases: ["rplist"]
}

module.exports.help = {
   name: "rp"
} 