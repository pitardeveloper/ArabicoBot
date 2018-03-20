const Discord = require("discord.js");
const x5bz = new Discord.Client();
const x5bztoken = "process.env.BOT_TOKEN"
x5bz.on('ready', () => {
x5bz.user.setGame(`!help | ArabicoBot`,'https://www.twitch.tv/v5bz');
  console.log('Im Ready!');
});
/* YT: iiPixlSA */
x5bz.on('message', message => {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == '!bc2') {
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('** You Dont Have `ADMINISTRATOR` Permission **');
            var bc = new Discord.RichEmbed()
            .setAuthor(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/4F4w1zP0y3ibykdGhcuAC9qTYPJzUHET_9VY6lBEj0M/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/293074606166769666/979a490c4c7ef5d320875cb51e16b462.png?width=201&height=201')
            .addField('السيرفر:', `${message.guild.name}`)
            .addField('المرسل:', `${message.author.username}#${message.author.discriminator}`)
            .setColor('RANDOM')
            .addField('الرسالة: ', args)
            m.send(`${m}`,{embed: bc});
        });
    }
});
x5bz.login(x5bztoken);
