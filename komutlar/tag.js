const Discord = require("discord.js");
const tag = "Ꮙ";

module.exports.run = async(client, message, args) => {
   message.inlineReply(`${tag}`)
}

module.exports.conf = {
   aliases: ["t"]
}

module.exports.help = {
   name: "tag"
} 