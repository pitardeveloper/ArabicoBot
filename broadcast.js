const Discord = require("discord.js");
const x5bz = new Discord.Client();
const x5bztoken = "process.env.BOT_TOKEN"
x5bz.on('ready', () => {
x5bz.user.setGame(`!help | ArabicoBot`,'https://www.twitch.tv/v5bz');
  console.log('Im Ready!');
});
/* YT: iiPixlSA */
x5bz.on('message', message => {
if (message.content.split(' ')[0] == '!bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});
x5bz.on("message", message => {
    var prefix = "!";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(":white_check_mark: | تم ارسال للكل رساله فارغه")
                                .setColor("#FF0000")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال للكل الرساله !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
x5bz.login(x5bztoken);
