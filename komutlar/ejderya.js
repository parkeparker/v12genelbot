exports.run = async (client, msg, args) => {
  let kufur=[
    "Üzgünüm dostum kimse ölmedi! `https://media.discordapp.net/attachments/748847448620925029/815505170309971968/Fashion_wallpapers_quotes_celebrities_and_so_much_more.gif`",
    "Öldün çık!! `https://media.discordapp.net/attachments/748847448620925029/815505170309971968/Fashion_wallpapers_quotes_celebrities_and_so_much_more.gif`",
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});
  if(member.id === "498474557569499146")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ağzına sıçtığım sen kimsinde Muhammete söversin!')
}})
  if(member.id === "481412397895122963")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Orda durucan Batuhanıma sövemezsin!!`)
}})
  if(member.id === "431772260508893194")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Orda durucan Mertime sövemezsin!!`)
}})
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Siktir duygusuz pezeveng bide bana sövecek!!`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 2)]}.`)
  }})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
 };

exports.help = {
  name: 'dracaryss',
  description: 'Birine Söver.',
  usage: 'söv'
 }

