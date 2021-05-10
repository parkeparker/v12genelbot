const Discord = require("discord.js");
const sqrt = "https://media1.tenor.com/images/078926325b3c103c07c812307df1b5c3/tenor.gif?itemid=13604149";

module.exports.run = async(client, message, args) => {
   message.inlineReply(`${sqrt}`)
}

module.exports.conf = {
   aliases: ["sqrt"]
}

module.exports.help = {
   name: "sqrt"
} 