const Discord = require('discord.js');

function error1(message, s) {
return message.channel.send(new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Sorry!')
.setDescription(s));
};

function error2(message, s, d) {
return message.channel.send(new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Sorry!')
.setImage(d)
.setTimestamp()
.setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
.setDescription(s));

};
exports.run = async (client, message, args) => {// can#0002
if(!args[0]) return error1(message, 'Please enter the URL of a valid site, <@!'+message.author.id+'>!');
if(!message.channel.nsfw) return error2(message, 'This command can take screenshots of every website or even NSFW websites, so this command can only be used on channels with NSFW channel option enabled in channel settings.', 'https://cdn.discordapp.com/attachments/747455199072878633/777523545554288640/nsfw.gif');
const puppeteer = require("puppeteer");
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.setViewport({
  width: 1280,
  height: 800
})

await page.goto(args[0])
await page.screenshot({
  path: 'codesnacks.png'
}).then(m => {
message.channel.send(new Discord.MessageAttachment(m, 'asd.png'))
});

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'ss'
};// codare ♥