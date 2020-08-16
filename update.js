const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const { get } = require("snekfetch");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"); //تعديل اساسي سوي اي بي اي جديد
client.login(process.env.BOT_TOKEN2);
const yt_api_key = "AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"; 
const queue = new Map();
const Discord = require("discord.js");
const myid = ["512603544227151872"];
const pretty = require("pretty-ms");
const prefix = ["!"];
const { devs } = require("./config");
const moment = require("moment");

client.on("ready", () => {
  client.user.setStatus("Idle");

  client.user.setActivity(`Soon Update / !help`, { type: "PLAYING" });
});

client.on("message", message => {
  if (message.content === prefix + `help`) {
    let embed = new Discord.RichEmbed()

      .setColor("#ffffff")
      .setDescription(":white_check_mark: **- تـم أرسـال الـرسـالـة بـنـجـاح ، تـأكـد مـن فـتـح الـخـاص بـك.**");


    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + `help general`) {
    let embed = new Discord.RichEmbed()

      .setColor("#ffffff")
      .setDescription(":white_check_mark: **- تـم أرسـال الـرسـالـة بـنـجـاح ، تـأكـد مـن فـتـح الـخـاص بـك.**");


    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + `help admin`) {
    let embed = new Discord.RichEmbed()

      .setColor("#ffffff")
      .setDescription(":white_check_mark: **- تـم أرسـال الـرسـالـة بـنـجـاح ، تـأكـد مـن فـتـح الـخـاص بـك.**");


    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + `help bot`) {
    let embed = new Discord.RichEmbed()

      .setColor("#ffffff")
      .setDescription(":white_check_mark: **- تـم أرسـال الـرسـالـة بـنـجـاح ، تـأكـد مـن فـتـح الـخـاص بـك.**");


    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + `help games`) {
    let embed = new Discord.RichEmbed()

      .setColor("#ffffff")
      .setDescription(":white_check_mark: **- تـم أرسـال الـرسـالـة بـنـجـاح ، تـأكـد مـن فـتـح الـخـاص بـك.**");


    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + `help others`) {
    let embed = new Discord.RichEmbed()

      .setColor("#ffffff")
      .setDescription(":white_check_mark: **- تـم أرسـال الـرسـالـة بـنـجـاح ، تـأكـد مـن فـتـح الـخـاص بـك.**");


    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + `help music`) {
    let embed = new Discord.RichEmbed()

      .setColor("#ffffff")
      .setDescription(":white_check_mark: **- تـم أرسـال الـرسـالـة بـنـجـاح ، تـأكـد مـن فـتـح الـخـاص بـك.**");


    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content.includes("discord.gg")) {
    if (!message.channel.guild)
      return message.reply("** ammm.. :thinking: ? **");
    if (!message.member.hasPermissions(["ADMINISTRATOR"])) {
      message.delete();
      return message.reply(
        `**:x: - لا تـسـتـطـيـع نـشـر روابـط سـيـرفـرات أخـرى.**`
      );
    }
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'profile')) {
    var mentionned = message.mentions.users.first();
    var getvalueof;
    var bot;
    if (mentionned) {
      getvalueof = mentionned;
    } else {
      getvalueof = message.author;
    }
    let embed = new Discord.RichEmbed();
    embed.addField(":cloud_tornado:  الاسم", `**[ ${message.author.username}#${message.author.discriminator} ]**`, true)
      .addField(":id: الأيـدي ", `**[ ${message.author.id} ]**`, true)
      .setColor("RANDOM")
      .setFooter(message.author.username, message.author.avatarURL)
      .setThumbnail(`${message.author.avatarURL}`)
      .setTimestamp()
      .setURL(`${message.author.avatarURL}`)
      .addField(':spy:  الـحـالـة', `**[ ${message.author.presence.status.toUpperCase()} ]**`, true)
      .addField(':satellite_orbital:   يـلـعـب', `**[ ${message.author.presence.game === null ? "No Game" : message.author.presence.game.name} ]**`, true)
      .addField(':military_medal: الـرتـب', `**[ ${message.member.roles.filter(r => r.name).size} ]**`, true)
      .addField(':robot:  هـل هـو بـوت', `**[ ${message.author.bot.toString().toUpperCase()} ]**`, true);
    message.channel.send({ embed: embed })
  }
});

client.on('message', message => {
  if (message.content === "!help") {
    message.author.send("" + `  **
!help general » للأوامـر العـامـة
!help admin » للأوامـر الأداريـة
!help bot » للأوامـر الخـاصـة بالبـوت
!help games » للأوامـر الخـاصـة بالألعـاب
!help music » للأوامـر الخـاصـة بالمـوسـيـقـى
!help others » للأوامـر الخـاصـة بـالاوامـر الاخـرى
**`);
  }
});


client.on('message', message => {
  if (message.content === "!help general") {
    message.author.send("" + `  **
    أوامـر عــامـة » :reminder_ribbon: 
    !profile » معلومــات حـسابـك الـشـخـصـي
    !id » معلومــاتـك فـي الـسـيرفـر
    !say » تـكـرار الـكـلام 
    !embed » تـكـرار الـكـلام بـطـريـقة أخـرى صيانة
    !avatar » الأفـتـار الـخـاص بـك
    !level » (صـيـانـة) لـمـعـرفـة لـفـل الـخـاص بـك
    !credit » (صـيـانـة) لـمـعـرفـة عـدد فـلـوسك
    !suggest » لـتـقـديـم أقـتـراح للـسـيـرفـر
    !server » مـعـلـومـات عـن الـسـيـرفـر
    !clear » حـذف الـرسـائـل 
    !rooms » لأظـهـار أسـمـاء الـرومـات
    !roles » لأظـهـار أسـمـاء الــرتــب صيانة
**`);
 }
});

client.on('message', message => {
  if (message.content === "!help admin") {
    message.author.send("" + `  **
    أوامـر أداريـة » :reminder_ribbon: 
    !kick » لـطـرد عـضـو
    !ban » لـتـبـنـيـد عـضـو
    !mute » لأعـطـاء شـخـص مـيـوت كـتـابـي صيانة 
    !unmute » لـفـك مـيـوت كـتـابـي صيانة
    !lock » لـقـفـل الـشـات
    !unlock » لـفـتـح الـشـات
    !hide » لأخـفـاء الـشـات
    !show » لأظـهـار الـشـات
    !ct » لـصـنـاعـة روم كـتـابـي
    !cv » لـصـنـاعـة روم صـوتـي
    !ccg » لـصـنـاعـة روم للـرومـات
    !setlog » لـوضـع روم اللـوق
    !togglelog » لأطـفاء او تـشغـيل اللـوق
    !slowmode » لتـعييـن سـلومـود فـالسـيرفـر
    !create colors » لـصـنـاعـة 200 لـون
    !delete colors » لــحـذف 200 لــون ( صيانة )
    !create server » صـنـاعـة سـيـرفـر كـامـل (صـيـانـة)
**`);
 }
});

client.on('message', message => {
  if (message.content === "!help bot") {
    message.author.send("" + `  **
    أوامـر الــبـوت » :reminder_ribbon: 
    !ping » لـمـعـرفـة سـرعـة أتـصـال الـبـوت
    !bot » عـدد الـسـيـرفـرات الـتـي تـسـتخـدم الـبـوت
    !invite » لـدعـوة الـبـوت للـسـيـرفـر الـخـاص بـك
    !support » لـدخـول سـيـرفـر الـدعـم الـفـنـي
**`);
 }
});

client.on('message', message => {
  if (message.content === "!help games") {
    message.author.send("" + `  **
    أوامـر الألـعـاب » :reminder_ribbon: 
    !challenge » لـعـبـة تـحديـات
    !mariam » للـعب لـعبة مـريـم (صـيـانـة)
    !punish » لـمـعـاقـبة شـخـص 
    !saraha » لـعـبـة صـراحـة
    !cut » كــت تـويـت
    !duk » لـعـبـة هـل تـعلم
    !hack » لـعـبـة الهاك
    !itmuc » لـعـبة لـو خـيـروك
**`);
 }
});

client.on('message', message => {
  if (message.content === "!help others") {
    message.author.send("" + `  **
    أوامـر اخــرى » :reminder_ribbon: 
    !man » يـرسـل لـك صـورة رجـال (صيانة)
    !woman » يـرسـل لـك صـورة بـنـت صيانة
    !kids » يـرسـل لـك صـورة اطـفـال (صيانة)
    !anime » يـرسـل لـك صـورة انـمـي
    !dog » يـرسـل لـك صـورة كـلـب (صيانة)
    !cat »  (صـيـانة) يـرسـل لـك صـورة بـسة أو قـطـة
    !azkar » لـقـرائـة الأذكـار
**`);
 }
});

client.on('message', message => {
  if (message.content === "!help music") {
    message.author.send("" + `  **
 أوامـر المـوسـيـقـى » :reminder_ribbon:
 :gear: » قادم قريبا !
**`);
 }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "Bb") {
    let numArray = args.map(n => parseInt(n));
    let total = numArray.reduce((p, c) => p + c);

    message.channel.sendMessage(total).catch(console.error);
  }



});

client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {
    const embed = new Discord.RichEmbed()

      .setColor("#FF0000")
      .addField('``سـرعـة أتـصـال الــبـوت`` ', `${Date.now() - message.createdTimestamp}` + ' ms')
    message.channel.sendEmbed(embed);
  }
});

client.on('message', function (msg) {
  var prefix = "!"
  if (msg.content.startsWith(prefix + 'server')) {
    let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Server Statistics.`)
      .addField(':globe_with_meridians:** نـوع الـسـيـرفـر**', `[** __${msg.guild.region}__ **]`, true)
      .addField(':medal:** الـرتـب**', `[** __${msg.guild.roles.size}__ **]`, true)
      .addField(':red_circle:**عـدد الأعـضـاء**', `[** __${msg.guild.memberCount}__ **]`, true)
      .addField(':blue_circle: **عـدد الأعـضـاء الأونـلايـن**', `[** __${msg.guild.members.filter(m => m.presence.status == 'online').size}__ **]`, true)
      .addField(':pencil:**عـدد الـرومـات الـكـتـابـية**', `[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`, true)
      .addField(':microphone:**عـدد الـرومـات الـصـوتـيـة**', `[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`, true)
      .addField(':crown:**ألأونـر شـيـب**', `**${msg.guild.owner}**`, true)
      .addField(':id:**أيــدي الـسـيـرفـر**', `**${msg.guild.id}**`, true)
      .addField(':date:**تـاريـخ أنـشـاء الـسـيـرفـر**', msg.guild.createdAt.toLocaleString())
    msg.channel.send({ embed: embed });
  }
});


client.on("message", message => {
  if (message.content === prefix + "hide") {
    if (!message.channel.guild)
      return message.reply(
        "**:x: - .لا يـمـكـن أسـتـخـدام هـذا الأمــر عـبـر الـخـاص**"
      );

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        " **:x: - .لا تـمـتـلـك صـلاحـيـات كـافـية**"
      );
    message.channel
      .overwritePermissions(message.guild.id, {
        READ_MESSAGES: false
      })
      .then(() => {
        message.channel.send(
          "**:white_check_mark: - .لـقـد تـم أخـفـاء الـشـات بـنـجـاح**"
        );
      });
  }

  if (message.content === prefix + "show") {
    if (!message.channel.guild)
      return message.reply(
        "**:x: - لا يـمـكـن أسـتـخـدام هـذا الأمــر عـبـر الـخـاص**"
      );

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        " **:x: - .لا تـمـتـلـك صـلاحـيـات كـافـية**"
      );
    message.channel
      .overwritePermissions(message.guild.id, {
        READ_MESSAGES: true
      })
      .then(() => {
        message.channel.send(
          "**:white_check_mark: - .لـقـد تـم أظـهـار الـشـات بـنـجـاح**"
        );
      });
  }
});

client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild)
      return message.reply(
        "**:x: - .لا يـمـكـن أسـتـخـدام هـذا الأمــر عـبـر الـخـاص**"
      );
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        " **:x: - .لا تـمـتـلـك صـلاحـيـات كـافـية**"
      );
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send(
          "**:white_check_mark: - .لـقـد تـم قـفـل الـشـات بـنـجـاح**"
        );
      });
  }
  if (message.content === prefix + "unlock") {
    if (!message.channel.guild)
      return message.reply(
        "**:x: - لا يـمـكـن أسـتـخـدام هـذا الأمــر عـبـر الـخـاص**"
      );
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        " **:x: - لا تـمـتـلـك صـلاحـيـات كـافـية.**"
      );
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      })
      .then(() => {
        message.channel.send(
          "**:white_check_mark: - .لـقـد تـم فـتـح الـشـات بـنـجـاح**"
        );
      });
  }
});

client.on("message", async message => {
  if (message.content.toLowerCase().startsWith(prefix + "suggest")) {
    var shopc = message.guild.channels.find("name", "suggestions");
    if (!shopc)
      return message.channel.send(
        "**:x: - .هـذا الـسـيـرفـر لا يـحـتـوي عـلـى روم بـأسـم `suggestions`**"
      );
    let قتراح = "";
    let fillter = m => m.author.id === message.author.id;

    await message.channel
      .send(
        `**:x: - .أكـتـب أقـتـراحـك**`)
      .then(e => {
        message.channel
          .awaitMessages(fillter, { time: 60000, max: 1 })
          .then(co => {
            قتراح = co.first().content;
            co.first().delete();

            let desc = "";

            desc = co.first().content;
            co.first().delete();
            e.edit(
              `**:white_check_mark: - .لـقـد تـم ارسـال الأقـتـراح الـخـاص بـك**`
            ).then(e => {
              let system = new Discord.RichEmbed()
                .setDescription(
                  `
  
**__الأقـتـراح__ » '${قتراح}' **

**تـم أرسـال الأقـتـراح مـن قـبـل »** ${message.author} `
                )
                .setTitle(
                  `**__الأقـتـراحـات__**`
                )
                .setThumbnail(message.author.avatarURL)
                .setColor("004c53")
              shopc.send(system);
            });
          });
      });
  }
});


client.on('message', message => {
  if (message.content.startsWith(prefix + 'avatar')) {
    var mentionned = message.mentions.users.first();
    var getvalueof;
    var bot;
    if (mentionned) {
      getvalueof = mentionned;
    } else {
      getvalueof = message.author;
    }
    let avatar = new Discord.RichEmbed()
      .setTitle(`${getvalueof.username}\'s Avatar`)
      .setImage(`${getvalueof.avatarURL}`);
    message.channel.sendEmbed(avatar);
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                "" +
                "**" +
                ":white_check_mark: -  تـم مـسـح الـرسـائل الـمـحـددة بـنـجـاح " +
                "**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .send(
              "" +
              "**" +
              ":white_check_mark: -  تـم مـسـح الـرسـائل الـمـحـددة بـنـجـاح" +
              "**"
            )
            .then(m => m.delete(4000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});




client.on("message", (message) => {
  if (message.content.startsWith(prefix + 'ct')) {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**:x: - لا تـمـتـلـك صـلاحـيـات كـافـيـة**");
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
    message.channel.sendMessage('**:white_check_mark: - تـم إنـشاء روم كـتابـي.**')

  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + 'cv')) {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**:x: - لا تـمـتـلـك صـلاحـيـات كـافـيـة**");
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('**:white_check_mark: - تـم إنـشاء روم صـوتـي.**')

  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + 'ccg')) {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**:x: - لا تـمـتـلـك صـلاحـيـات كـافـيـة**");
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'category');
    message.channel.sendMessage('**:white_check_mark: - تـم إنـشاء مـجمـوعـة للـرومـات **')

  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'rooms')) {
    if (message.author.bot) return
    if (!message.guild) return;

    var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .addField(`${message.guild.name}`, `**رومـات الـسـيـرفـر**`)
      .addField('عـدد الـرومـات', `** ${message.guild.channels.size}**`)

      .addField('اسـمـاء الـرومـات.', `**[${channels}]**`)
    message.channel.sendEmbed(embed);
  }
});

client.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  let args = message.content.split(' ');
  if (args[0] == '!hack') {
    let user = message.mentions.members.first();
    if (!user) return message.channel.send('**Mention A User To Hack. 🙂**');
    let hack = await message.channel.send(`**Hacking <@${user.id}> <:ShyizerPartner4:722067478976397404>**`);
    setTimeout(() => {
      hack.edit(`**Getting [${user.user.username}] ID.**`);
      setTimeout(() => {
        hack.edit(`**Getting [${user.user.username}] IP.**`);
        setTimeout(() => {
          hack.edit(`**Getting [${user.user.username}] Token & Discord Databases**`);
          setTimeout(() => {
            hack.edit(`**Getting [${user.user.username}] Email & Password **`);
            setTimeout(() => {
              hack.edit(`**JOINING [${user.user.username}]'s Account. **\n**◈ ||█||▒▒▒▒▒▒▒▒▒ ◈ 10%**`);
              setTimeout(() => {
                hack.edit(`**´JOINING [${user.user.username}]'s Account. **\n**◈ ||██||▒▒▒▒▒▒▒▒ ◈ 20%**`);
                setTimeout(() => {
                  hack.edit(`**JOINING [${user.user.username}]'s Account. **\n**◈ ||███||▒▒▒▒▒▒▒ ◈ 30%**`);
                  setTimeout(() => {
                    hack.edit(`**JOINING [${user.user.username}]'s Account. **\n**◈ ||████||▒▒▒▒▒▒ ◈ 40%**`);
                    setTimeout(() => {
                      hack.edit(`**JOINING [${user.user.username}]'s Account. **\n**◈ ||█████||▒▒▒▒▒ ◈ 50%**`);
                      setTimeout(() => {
                        hack.edit(`**JOINING [${user.user.username}]'s Account. **\n**◈ ||██████||▒▒▒▒ ◈ 60%**`);
                        setTimeout(() => {
                          hack.edit(`**JOINING [${user.user.username}]'s Account. **\n**◈ ||███████||▒▒▒ ◈ 70%**`);
                          setTimeout(() => {
                            hack.edit(`**JOINING [${user.user.username}]'s Account. **\n**◈ ||████████||▒▒ ◈ 80%**`);
                            setTimeout(() => {
                              hack.edit(`**JOINING [${user.user.username}]'s Account. **\n**◈ ||█████████||▒ ◈ 90%**`);
                              setTimeout(() => {
                                hack.edit(`**JOINING [${user.user.username}]'s Account. **\n**◈ ||██████████|| ◈ 100%**`);
                                setTimeout(() => {
                                  hack.edit(`**[${user.user.username}]'s Account Hacked.** 
**Email: superarabic@hacker.com**
**Password: ilovehackgame**
**User Token: NzM1OTYzMTIyOTkwMjN4MzQw.Xxn5TA.7jD7wYNDncDebShdh2CjZnkuK8V**`);
                                }, 500);
                              }, 500);
                            }, 500);
                          }, 500);
                        }, 500);
                      }, 500);
                    }, 500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 3000);
    setTimeout(() => { }, 3000);
    setTimeout(() => { }, 1000);
    setTimeout(() => { }, 1000);
    setTimeout(() => { }, 1000);
    setTimeout(() => { }, 500);
    setTimeout(() => { }, 500);
    setTimeout(() => { }, 500);
    setTimeout(() => { }, 500);
    setTimeout(() => { }, 500);
    setTimeout(() => { }, 500);
    setTimeout(() => { }, 500);
    setTimeout(() => { }, 500);
    setTimeout(() => { }, 500);
    setTimeout(() => { }, 500);
    setTimeout(() => { }, 500);
  }
})

const challenge = ['اتحداك تاكل ليمونة كاملة حامضة', 'تروح ي بيبسي او كوكا كولا 1 لتر وتشربها ب اقل من دقيقتين لو خسرت لازم تتعاقب عن طريق امر !punish', 'تحذف افضل لعبة عندك فالجوال واذا انت بيسي احذفها', 'اتحداك تشغل اغنية مرة مزعجة انت ما تحبها بصوت عالي', 'اتحداك تطفي الانترنت لمدة ساعة', 'اتحداك تضرب اخوك كف اذا ما عندك اخ اضرب نفسك كف قوي', 'اتحداك تقول لي احبك', 'اتحداك تكسر كاسة او صحن فالبيت', 'اتحداك تكتب امر !punish وتنفذ العقاب', 'اتحداك تطلع من السيرفر 10 دقايق وترجع لو السيرفر سيرفرك اطلع من اي سيرفر 10 دقايق', 'اتحداك تقول لشخص فالشارع ما تعرفه تراك مرة كريه', 'اتحداك تضارب مع خويك اللي معك', 'اتحداك تكتب امر !cat وأي صورة تطلعلك حطها صورة بروفايلك لمدة 20 دقيقة', 'غير اسمك فالدسكورد الى انا بوت لمدة 10 دقايق', 'تاكل اكلة ما تحبها او تسلخ نفسك كف قوي ', 'اتحداك تروح اي سيرفر وتكتب فالشات انا مجنون', 'اتحداك تخلط 2 من انواع المشروبات وتشربه', 'اتحداك تختم لعبة Getting Over It بدون ما تعصب', 'اتحداك تروح اي سيرفر وتمنشن اونر السيرفر 3 مرات وتمسح', 'اتحداك تمنشن اخر شخص كتب فالشات وتقوله انا احبك', '** :octagonal_sign: استخدم النسخة المدفوعة لفتح مزيد من التحديات :white_check_mark:  :octagonal_sign: ** ']

client.on('message', message => {
  if (message.content === `!challenge`) {
    message.channel.sendMessage({
      embed: {
        color: 3547003,
        description: `${challenge[Math.floor(Math.random() * challenge.length)]}`
      }
    });
  };
});

const cuttweet = [
  'كت تويت ‏- تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت ‏- أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت ‏- الحرية لـ ... ؟',
  'كت تويت ‏- قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏- كلمة للصُداع؟',
  'كت تويت ‏- ما الشيء الذي يُفارقك؟',
  'كت تويت ‏- ما الشيء الذي يُفارقك؟',
  'كت تويت ‏- موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏- أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت| بعد ١٠ سنين ايش بتكون ؟',

  'كت تويت ‏- مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت| عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت ‏- أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت|ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت|وش يفسد الصداقة؟',
  '‏كت تويت|شخص لاترفض له طلبا ؟',
  '‏كت تويت|كم مره خسرت شخص تحبه؟.',
  '‏كت تويت|كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت|كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت|هل تُخفي نجاحك أو كت كت تويت | هل تخفي نجاحك أو أشيائك الجميلة خوفاً من العين والحسد؟',
  '‏كت تويت|جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت|أقوى كذبة مشت عليك ؟',
  '‏كت تويت|تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت|هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت|أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت|‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت|وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت|مطلبك الوحيد الحين ؟',
  '‏كت تويت|- هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content === `!cut`) {
    message.channel.sendMessage({
      embed: {
        color: 3547003,
        description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
      }
    });
  };
});


const Sra7a = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]

client.on('message', message => {
  if (message.content.startsWith('!saraha')) {
    if (!message.channel.guild) return message.reply('** This command only for servers **');
    var client = new Discord.RichEmbed()
      .setTitle("لعبة صراحة ..")
      .setColor('RANDOM')
      .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
      .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
      .setTimestamp()

    message.channel.sendEmbed(client);
    message.react("??")
  }
});

var rebel = ["https://f.top4top.net/p_682it2tg6.png", "https://e.top4top.net/p_682a1cus5.png", "https://d.top4top.net/p_682pycol4.png", "https://c.top4top.net/p_682vqehy3.png", "https://b.top4top.net/p_682mlf9d2.png", "https://a.top4top.net/p_6827dule1.png", "https://b.top4top.net/p_682g1meb10.png", "https://a.top4top.net/p_682jgp4v9.png", "https://f.top4top.net/p_682d4joq8.png", "https://e.top4top.net/p_6828o0e47.png", "https://d.top4top.net/p_6824x7sy6.png", "https://c.top4top.net/p_682gzo2l5.png", "https://b.top4top.net/p_68295qg04.png", "https://a.top4top.net/p_682zrz6h3.png", "https://f.top4top.net/p_6828vkzc2.png", "https://e.top4top.net/p_682i8tb11.png"]
client.on('message', message => {
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + 'lokhayrok')) {
    var cat = new Discord.RichEmbed()
      .setImage(rebel[Math.floor(Math.random() * rebel.length)])
    message.channel.sendEmbed(cat);
  }
});



client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('**هـذا الامـر مـخـصـص للـسيرفـرات - :x:**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**لـيس لـديك صـلاحـيات - :x: **");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**الـبوت لـيس لـديه صـلاحـيات - :x:**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  // let b5bzlog = client.channels.find("name", "✎・punishments");

 //  if(!b5bzlog) return message.reply("اكتشفت انه لا يوجد روم ✎・punishments لكي يتم ارسال الاوامر فيه");
  if (message.mentions.users.size < 1) return message.reply("**قـم بأخـتـيار شـخـص - :x:**");
  if(!reason) return message.reply ("**اكـتب سـبـب الطـرد - :x:**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**الـبوت لايـستطـيع طرد شـخص اعـلـى مـنه - :x:**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`تمت مقاضاة المخالف بالطرد`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**المخالف :**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل :**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب :**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
 

 
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('**هـذا الامـر مـخـصـص للـسيرفـرات - :x:**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لـيس لـديك صـلاحـيات - :x:**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**الـبوت لـيس لـديه صـلاحـيات - :x:**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  // let b5bzlog = client.channels.find("name", "✎・punishments");

 //  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a ✎・ban-kick-warn text channel.");
  if (message.mentions.users.size < 1) return message.reply("**قـم بأخـتـيار شـخـص - :x:**");
  if(!reason) return message.reply ("**اكـتب سـبـب الطـرد - :x:**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**الـبوت لايـستطـيع طرد شـخص اعـلـى مـنه - :x:**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`تمت مقاضاة المخالف بالباند`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**المخالف :**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل :**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب :**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});



const Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
  "**تتصل على شرطي تقول له عندكم مطافي**.",
  "**خلاص سامحتك**.",
  "** تصيح في الشارع انا  مجنوون**.",
  "** تروح عند شخص تقول له احبك**.",

]


client.on('message', message => {
  if (message.content.startsWith("!punish")) {
    if (!message.channel.guild) return message.reply('** This command only for servers**');
    var embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL)
      .addField('لقد تم عقابك',
        `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
    message.channel.sendEmbed(embed);
    console.log('[38ab] Send By: ' + message.author.username)
  }
});

client.on('message', async message => {
  const args = message.content.slice(prefix.length).split(/ +/);
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.startsWith('!slowmode')) return;
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('لـيـس لـديك صـلاحـيات كـافـية - :x:');
  if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('الـبوت لـيـس لـديه صـلاحـيات كـافـية - :x:');
  if (!args[1]) {
      message.channel.setRateLimitPerUser(0);
      message.channel.send('تـم ايـقاف الـسـلومـود - :white_check_mark: ');
      return;
  }
  if (isNaN(args[1])) return message.channel.send('**يـجب عـليك كـتابـة رقـم - :pencil2: **');
  message.channel.setRateLimitPerUser(args[1]);
  message.channel.send('تـم تـغير الـسـلومـود - :white_check_mark:');
});


client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {

    message.channel.send("`#` " + args.join("  "));
    message.delete();
  }
});



var anime = ["https://cdn.discordapp.com/attachments/732299524911005766/733009748097761330/49742691_1352698931537143_5732270576823697408_n.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733009748315865188/2326fe2326f8f362760c71bb60d2fee5.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733009748529774609/blue-eyes-anime-art-Favim.com-6229405.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733009748869513336/Screenshot_20200707-111706_Gallery.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733016030263378001/hqdefault-1.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733016030598791259/32dd4bc7583da4fcbc10f56696b55bb4.png", "https://cdn.discordapp.com/attachments/732299524911005766/733016030980604027/258-2585755_manga-anime-animeboy-mangaboy-monokuma-boy-hot-monokuma.png", "https://cdn.discordapp.com/attachments/732299524911005766/733016031513149560/0q0MJQxtMuouTlKBT.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733016031706087475/3f741aa869e1f9663b360cf93de0b8bc.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733016031907545218/wBk6SwF_d.webp", "https://cdn.discordapp.com/attachments/732299524911005766/733016032272318505/1a3bfbae898ba375185859b06c5a1ec7.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733016610004140162/wp5114631.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733016795035861072/Screenshot_20200715-204649_Gallery.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733017374156128397/530-5307740_cute-fox-anime-girl-hd-png-download.png", "https://cdn.discordapp.com/attachments/732299524911005766/733017386776657980/336b2b74b660615868d1e9fc8608e0d4.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733017391306506250/Anime-wallpaper-for-phone-003.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733020063527075910/78-782739_stickers-kawaii-anime-gatitos-cute-anime-girls-neko.png", "https://cdn.discordapp.com/attachments/732299524911005766/733031285152546926/beautiful-anime-city-background-Chrome-Theme-ThemeBeta.jpeg", "https://cdn.discordapp.com/attachments/732299524911005766/733031285370388621/c26568af5f30ee14ccef3f78eaa79c2c.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733031562223812799/2686b2829740d8726f8cc42c9a0fe791.jpeg", "https://cdn.discordapp.com/attachments/732299524911005766/733191856820715550/47f1e1a8eb78d96f02caa62cd7c7ae64.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733191857139613746/60ba53c7c0ae65f8c04cba66732ef2b635ba81d0_00.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733192479125405738/672e80d4a4a54fe7bc4a1bdb51286531.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733192479322537984/original.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/733192897750499417/20-best-anime-character-designs-easy-drawing-ideas-for-beginners-2019-3-e1551383913486.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/735732158865604680/2018Anime_Anime_girl_with_sakura_flowers_in_her_hair_130168_10.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/735732513187561582/EXTWWBNUYAEEIVQ_2.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/735734299650818128/33361236_469294100155484_7618545764263788544_n.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/735734422627680256/21032789_362981880786707_2570854588460821807_n.jpg", "https://cdn.discordapp.com/attachments/732299524911005766/742084035903225886/3XAGgklKkJhv5M9m5NkfhBYb7l8.jpg"]
client.on('message', message => {
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + 'anime')) {
    var cat = new Discord.RichEmbed()
      .setImage(anime[Math.floor(Math.random() * anime.length)])
    message.channel.sendEmbed(cat);
  }
});

client.on("message", pixelbot => {
  if (pixelbot.content.startsWith(prefix + "user")) {
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply(":x: - This Command is only done on Servers");
    pixelbot.guild.fetchInvites().then(invites => {
      
      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__**`)
        .join( );
      let pixeluser = new Discord.RichEmbed() 
        .setColor("#00000")
        .setTitle(" :beginner: | مـعلومـات الـشـخـص") 
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("✽ ألاسـم :   ", pixelbot.author.username, true)
        .addField("✽ ألتاق :   ", pixelbot.author.discriminator, true)
        .addField("✽ الايدي : ", pixelbot.author.id, true) 
        .addField(
          "✽ تاريخ دخـوله الـسـيرفـر :   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "✽ تاريخ أنـشاء حـسابـه :    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("✽ الانفايت :    ", inviteCount, true)
        .setTimestamp(); 

      pixelbot.channel.sendEmbed(pixeluser).then(c => {});
    });
  }
}); 

/// كود تعين اللوق
const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});


const credits = JSON.parse(fs.readFileSync("./credits.json"));
var time = require("./time.json");
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      credits: 0
    };
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
    if(message.content === "!credits") {
    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**${mention.username}, your :credit_card: balance is \`$${credits[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2]) || [",", "."].includes(args[2]))
        return message.channel.send(`**:x: | Error**`);

      if (args[2] < 1) return message.channel.send(`**:x: | Error**`);
      if (mention.bot) return message.channel.send(`**:x: | Error**`);
      if (mentionn.id === message.author.id)
        return message.channel.send(`**:x: | Error**`);
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**:x: | Error , You Don't Have Enough Credit**`
        );
      if (args[2].includes("-")) return message.channel.send(`**:x: | Error**`);
      let resulting =
        parseInt(args[2]) == 1
          ? parseInt(args[2])
          : Math.floor(args[2] - args[2] * (5 / 100));
      let tax =
        parseInt(args[2]) == 1
          ? parseInt(args[2])
          : Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 9);
      let second = Math.floor(Math.random() * 9);
      let third = Math.floor(Math.random() * 9);
      let fourth = Math.floor(Math.random() * 9);
      let num = `${first}${second}${third}${fourth}`;
      let Canvas = require("canvas");
      let canvas = Canvas.createCanvas(108, 40);
      let ctx = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/608278049091223552/617791172810899456/hmmm.png"
      );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.font = "20px Arial Bold";
      ctx.fontSize = "20px";
      ctx.fillStyle = "#ffffff";
      message.channel
        .send(
          `**${
            message.author.username
          }, Transfer Fees: \`${tax}\`, Amount: \`$${resulting.toLocaleString()}\`**
type these numbers to confirm: `
        )
        .then(async essss => {
          message.channel.send(`\`${num}\``).then(m => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (collected.first().content === num) {
                  essss.delete()
                  message.channel.send(
                    `**:moneybag: | ${
                      message.author.username
                    }, Done Trans \`$${resulting.toLocaleString()}\` To ${mentionn}**`
                  );
                  mention.send(
                    `**:money_with_wings: | Transfer Receipt **\`\`\`You Have Received \`$${resulting.toLocaleString()}\` From User ${
                      message.author.username
                    }; (ID (${message.author.id})\`\`\``
                  );
                  m.delete();
                  credits[author].credits += Math.floor(
                    -resulting.toLocaleString()
                  );
                  credits[mentionn.id].credits += Math.floor(
                    +resulting.toLocaleString()
                  );
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                  );
                } else {
                  m.delete();
                  essss.delete();
                }
              });
          });
        });
    } else {
      message.channel.send(
        `**:x: | Error , Please Command True Ex: \`${prefix}credits [MentionUser] [Balance]\`**`
      );
    }
  }
    if(message.content === "!daily") {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `**:stopwatch: |  ${
          message.author.username
        }, your daily :dollar: credits refreshes in ${pretty(times, {
          verbose: true
        })}.**`
      );
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**:atm:  | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
}); //

client.on("message", async message => {
  let Fire = message.content.split(" ")[0].substring(prefix.length);
  let mention = message.mentions.users.first() || message.author;
  if (Fire === "addcredits") {
    let args = message.content.split(" ");
    if (!devs.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**Type Credit**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += +args[1];
    fs.writeFileSync("./credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(`** Adedd Money For : \`${args[1]}\` Done **`);
  } else if (Fire === "removecredits") {
    let args = message.content.split(" ");
    if (!devs.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**Type Credit**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += -args[1];
    fs.writeFileSync("./credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(`**, Remove Money For : \`${args[1]}\`**`);
  }
});

client.on("message", async message => {
  var room;
  var title; //HactorMC
  var duration; //HactorMC
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(prefix + "giveaway")) {
    //return message.channel.send('**في مشكله ببعض الاساسيات من فضلك انتظر شوي**');
    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        ":heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**"
      );
    message.channel
      .send(`**من فضلك اكتب اسم الروم بدون منشن ( # )**`)
      .then(msgg => {
        message.channel
          .awaitMessages(filter, {
            max: 1, //HactorMC
            time: 20000,
            errors: ["time"]
          })
          .then(collected => {
            let room = message.guild.channels.find(
              gg => gg.name === collected.first().content
            );
            if (!room)
              return message.channel.send(
                "**لم اقدر علي ايجاد الروم | اعد المحاوله لاحقا**"
              );
            room = collected.first().content;
            collected.first().delete();
            msgg.edit("**اكتب مدة القيف اواي بالدقائق**").then(msg => {
              message.channel
                .awaitMessages(filter, {
                  max: 1, //HactorMC
                  time: 20000,
                  errors: ["time"]
                })
                .then(collected => {
                  if (isNaN(collected.first().content))
                    return message.channel.send(
                      ":heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**"
                    );
                  duration = collected.first().content * 60000;
                  collected.first().delete();
                  msgg
                    .edit(
                      ":eight_pointed_black_star:| **اكتب على ماذا تريد القيف اواي**"
                    )
                    .then(msg => {
                      message.channel
                        .awaitMessages(filter, {
                          max: 1,
                          time: 20000,
                          errors: ["time"]
                        })
                        .then(collected => {
                          title = collected.first().content;
                          collected.first().delete();
                          try {
                            let giveEmbed = new Discord.RichEmbed()
                              .setAuthor(
                                message.guild.name,
                                message.guild.iconURL
                              )
                              .setTitle(title)
                              .setDescription(
                                `المدة : ${duration / 60000} دقائق`
                              )
                              .setFooter(
                                message.author.username,
                                message.author.avatarURL
                              );
                            message.guild.channels
                              .find(gg => gg.name === room)
                              .send(giveEmbed)
                              .then(m => {
                                let re = m.react("🎉");
                                setTimeout(() => {
                                  let users = m.reactions.get("🎉").users;
                                  let list = users
                                    .array()
                                    .filter(u => u.id !== m.author.id);
                                  let gFilter =
                                    list[
                                      Math.floor(Math.random() * list.length) +
                                        0
                                    ];
                                  if (users.size === 1)
                                    gFilter = "**لم يتم التحديد**";
                                  let endEmbed = new Discord.RichEmbed()
                                    .setAuthor(
                                      message.author.username,
                                      message.author.avatarURL
                                    )
                                    .setTitle(title)
                                    .addField(
                                      "انتهى القيف اواي !",
                                      `الفائز هو : ${gFilter}`
                                    )
                                    .setFooter(
                                      message.guild.name,
                                      message.guild.iconURL
                                    );
                                  m.edit(endEmbed);
                                }, duration);
                              });
                            msgg.edit(
                              `:heavy_check_mark:| **تم اعداد القيف اواي**`
                            );
                          } catch (e) {
                            msgg.edit(
                              `:heavy_multiplication_x:| **لم اقدر علي اعداد القيف اواي بسبب عدم توفر البرمشن المطلوب**`
                            );
                            console.log(e);
                          }
                        });
                    });
                });
            });
          });
      });
  }
});

client.on("message", message => {
  if (!message.guild || message.author.bot) return;
  if (message.content == prefix + "colors") {
    var fsn = require("fs-nextra");
    fs.readdir("./colors", async (err, files) => {
      var f = files[Math.floor(Math.random() * files.length)];
      var { Canvas } = require("canvas-constructor");
      var x = 0;
      var y = 0;
      if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0)
        return;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(() => {
          x += 100;
          if (x > 100 * 12) {
            x = 100;
            y += 80;
          }
        });
      var image = await fsn.readFile(`./colors/${f}`);
      var xd = new Canvas(100 * 11, y + 350)
        .addBeveledImage(image, 0, 0, 100 * 11, y + 350, 100)
        .setTextBaseline("middle")
        .setColor("white")
        .setTextSize(60)
        .addText(`قائمة الألوان`, 375, 40);
      x = 0;
      y = 150;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(role => {
          x += 75;
          if (x > 100 * 10) {
            x = 75;
            y += 80;
          }
          xd.setTextBaseline("middle")
            .setTextAlign("center")
            .setColor(role.hexColor)
            .addBeveledRect(x, y, 60, 60, 15)
            .setColor("white");
          if (`${role.name}`.length > 2) {
            xd.setTextSize(30);
          } else if (`${role.name}`.length > 1) {
            xd.setTextSize(40);
          } else {
            xd.setTextSize(50);
          }
          xd.addText(role.name, x + 30, y + 30);
        });
      message.channel.sendFile(xd.toBuffer());
    });
  }
});

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.split(" ")[0] == prefix + "color") {
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**لا يـوجـد لـون بـهذا الـرقـم - :x:**`)
      .setColor(`ff0000`);
    if (!args[0]) return message.channel.sendEmbed(embedd);
    if (isNaN(args[0]))
      return message.channel.sendEmbed(
        embedd.setDescription("**يـرجـى اخـتيـار رقـم - :x:**")
      );
    if (!message.guild.roles.find("name", `${args[0]}`))
      return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args[0]}`);
    if (!a) return;
    if (a.hasPermission(8))
      return message.channel.send(
        embedd.setDescription("**هـذا اللـون مخــصـص للأدمـن فقط - :x:**")
      );
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**تـم تـغيـر لـونـك بـنجـاح - :white_check_mark:**`)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args[0]) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args[0]}`));
  }
});

let cmds = {
  play: { cmd: "play", a: ["p", "شغل"] },
  skip: { cmd: "skip", a: ["s", "تخطى"] },
  stop: { cmd: "stop", a: ["ايقاف"] },
  pause: { cmd: "pause", a: ["ايقاف مؤقت"] },
  resume: { cmd: "resume", a: ["r", "كمل"] },
  volume: { cmd: "volume", a: ["vol", "صوت"] },
  queue: { cmd: "queue", a: ["q", "قائمة"] },
  repeat: { cmd: "repeat", a: ["re", "تكرار"] },
  forceskip: { cmd: "forceskip", a: ["تخطي الكل", "fskip"] },
  skipto: { cmd: "skipto", a: ["st", "اذهب الى"] },
  nowplaying: { cmd: "Nowplaying", a: ["np", "الان"] }
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

Object.keys(cmds).forEach(key => {
  var value = cmds[key];
  var command = value.cmd;
  client.commands.set(command, command);

  if (value.a) {
    value.a.forEach(alias => {
      client.aliases.set(alias, command);
    });
  }
});

let active = new Map();

client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", () => {
  console.log(`on`);
  console.log(`Guilds: ${client.guilds.size}`);
  console.log(`Users: ${client.users.size}`);
});

client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";

  let cmd =
    client.commands.get(command) ||
    client.commands.get(client.aliases.get(command));

  let s;

  if (cmd === "play") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        `:no_entry_sign: You must be listening in a voice channel to use that!`
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        `:no_entry_sign: I can't join Your voiceChannel because i don't have ` +
          "`" +
          "`CONNECT`" +
          "`" +
          ` permission!`
      );
    }

    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        `:no_entry_sign: I can't SPEAK in your voiceChannel because i don't have ` +
          "`" +
          "`SPEAK`" +
          "`" +
          ` permission!`
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();

      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(`Added to queue: ${playlist.title}`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(args, 1);

          // eslint-disable-next-line max-depth
          var video = await youtube.getVideoByID(videos[0].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("I can't find any thing");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }

    async function handleVideo(video, msg, voiceChannel, playlist = false) {
      const serverQueue = active.get(msg.guild.id);

      //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));

      let hrs =
        video.duration.hours > 0
          ? video.duration.hours > 9
            ? `${video.duration.hours}:`
            : `0${video.duration.hours}:`
          : "";
      let min =
        video.duration.minutes > 9
          ? `${video.duration.minutes}:`
          : `0${video.duration.minutes}:`;
      let sec =
        video.duration.seconds > 9
          ? `${video.duration.seconds}`
          : `0${video.duration.seconds}`;
      let dur = `${hrs}${min}${sec}`;

      let ms = video.durationSeconds * 1000;

      const song = {
        id: video.id,
        title: video.title,
        duration: dur,
        msDur: ms,
        url: `https://www.youtube.com/watch?v=${video.id}`
      };
      if (!serverQueue) {
        const queueConstruct = {
          textChannel: msg.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [], ////تعديل غير اساسي
          volume: 25, //// تعديل درجة الصوت الاساسية
          requester: msg.author,
          playing: true,
          repeating: false
        };
        active.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
          var connection = await voiceChannel.join();
          queueConstruct.connection = connection;
          play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
          console.error(`I could not join the voice channel: ${error}`);
          active.delete(msg.guild.id);
          return msg.channel.send(`I cant join this voice channel`);
        }
      } else {
        serverQueue.songs.push(song);

        if (playlist) return undefined;
        if (!args) return msg.channel.send("no results.");
        else
          return msg.channel
            .send(":watch: Loading... [`" + args + "`]")
            .then(m => {
              setTimeout(() => {
                //:watch: Loading... [let]
                m.edit(
                  `:notes: Added **${song.title}**` +
                    "(` " +
                    song.duration +
                    ")`" +
                    ` to the queue at position ` +
                    `${serverQueue.songs.length}`
                );
              }, 500);
            });
      }
      return undefined;
    }

    function play(guild, song) {
      const serverQueue = active.get(guild.id);

      if (!song) {
        serverQueue.voiceChannel.leave();
        active.delete(guild.id);
        return;
      }
      //console.log(serverQueue.songs);
      if (serverQueue.repeating) {
        console.log("Repeating");
      } else {
        serverQueue.textChannel.send(
          ":notes: Added **" +
            song.title +
            "** (`" +
            song.duration +
            "`) to begin playing."
        );
      }
      const dispatcher = serverQueue.connection
        .playStream(ytdl(song.url))
        .on("end", reason => {
          //if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
          //else console.log(reason);
          if (serverQueue.repeating) return play(guild, serverQueue.songs[0]);
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
    }
  } else if (cmd === "stop") {
    if (msg.guild.me.voiceChannel !== msg.member.voiceChannel)
      return msg.channel.send(
        `You must be in ${msg.guild.me.voiceChannel.name}`
      );
    // if (!msg.member.hasPermission("ADMINISTRATOR")) {
    //    msg.react("❌");
    //    return msg.channel.send("You don't have permission `ADMINSTRATOR`");
    //  }
    let queue = active.get(msg.guild.id);
    if (queue.repeating)
      return msg.channel.send(
        "Repeating Mode is on, you can't stop the music, run `" +
          `${prefix}repeat` +
          "` to turn off it."
      );
    queue.songs = [];
    queue.connection.dispatcher.end();
    return msg.channel.send(
      ":notes: The player has stopped and the queue has been cleared."
    );
  } else if (cmd === "skip") {
    let vCh = msg.member.voiceChannel;

    let queue = active.get(msg.guild.id);

    if (!vCh)
      return msg.channel.send(
        "Sorry, but you can't because you are not in voice channel"
      );

    if (!queue) return msg.channel.send("No music playing to skip it");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip it, because repeating mode is on, run " +
          `\`${prefix}forceskip\``
      );

    // let req = vCh.members.size - 1;

    //if (req == 1) {
    msg.channel.send("**:notes: Skipped **" + args);
    return queue.connection.dispatcher.end("Skipping ..");
    // }

    // if (!queue.votes) queue.votes = [];

    // if (queue.votes.includes(msg.member.id))
    //  return msg.say(
    //    `You already voted for skip! ${queue.votes.length}/${req}`
    //  );

    //  queue.votes.push(msg.member.id);

    //  if (queue.votes.length >= req) {
    //     msg.channel.send("**:notes: Skipped **" + args);

    //     delete queue.votes;

    //     return queue.connection.dispatcher.end("Skipping ..");
    //   }
    //
    //  msg.channel.send(
    //  `**You have successfully voted for skip! ${queue.votes.length}/${req}**`
    // );
  } else if (cmd === "pause") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) {
      return msg.channel.send("No music playing to pause.");
    }

    if (!queue.playing)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let disp = queue.connection.dispatcher;

    disp.pause("Pausing..");

    queue.playing = false;

    msg.channel.send(
      ":notes: Paused " + args + ". **Type** `" + prefix + "resume` to unpause!"
    );
  } else if (cmd === "resume") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) return msg.channel.send(":notes: No music paused to resume.");

    if (queue.playing)
      return msg.channel.send(":notes: No music paused to resume.");

    let disp = queue.connection.dispatcher;

    disp.resume("Resuming..");

    queue.playing = true;

    msg.channel.send(":notes: Resumed.");
  } else if (cmd === "volume") {
    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send(
        ":notes: There is no music playing to set volume."
      );

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(":notes: You are not in my voice channel");

    let disp = queue.connection.dispatcher;

    if (isNaN(args[0])) return msg.channel.send(":notes: Numbers only!");

    if (parseInt(args[0]) > 100)
      return msg.channel.send("You can't set the volume more than **100**.");
    //:speaker: Volume changed from 20 to 20 ! The volume has been changed from ${queue.volume} to ${args[0]}
    msg.channel.send(
      ":loud_sound: Volume has been **changed** from (`" +
        queue.volume +
        "`) to (`" +
        args[0] +
        "`)"
    );

    queue.volume = args[0];

    disp.setVolumeLogarithmic(queue.volume / 100);
  } else if (cmd === "queue") {
    let queue = active.get(msg.guild.id);

    if (!queue)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let embed = new Discord.RichEmbed().setAuthor(
      `${client.user.username}`,
      client.user.displayAvatarURL
    );
    let text = "";

    for (var i = 0; i < queue.songs.length; i++) {
      let num;
      if (i > 8) {
        let st = `${i + 1}`;
        let n1 = Converter.toWords(st[0]);
        let n2 = Converter.toWords(st[1]);
        num = `:${n1}::${n2}:`;
      } else {
        let n = Converter.toWords(i + 1);
        num = `:${n}:`;
      }
      text += `${num} ${queue.songs[i].title} [${queue.songs[i].duration}]\n`;
    }
    embed.setDescription(`Songs Queue | ${msg.guild.name}\n\n ${text}`);
    msg.channel.send(embed);
  } else if (cmd === "repeat") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send("There is no music playing to repeat it.");

    if (queue.repeating) {
      queue.repeating = false;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`False`)"
      );
    } else {
      queue.repeating = true;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`True`)"
      );
    }
  } else if (cmd === "forceskip") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (queue.repeating) {
      queue.repeating = false;

      msg.channel.send("ForceSkipped, Repeating mode is on.");

      queue.connection.dispatcher.end("ForceSkipping..");

      queue.repeating = true;
    } else {
      queue.connection.dispatcher.end("ForceSkipping..");

      msg.channel.send("ForceSkipped.");
    }
  } else if (cmd === "skipto") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue.songs || queue.songs < 2)
      return msg.channel.send("There is no music to skip to.");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip, because repeating mode is on, run " +
          `\`${prefix}repeat\` to turn off.`
      );

    if (!args[0] || isNaN(args[0]))
      return msg.channel.send(
        "Please input song number to skip to it, run " +
          prefix +
          `queue` +
          " to see songs numbers."
      );

    let sN = parseInt(args[0]) - 1;

    if (!queue.songs[sN])
      return msg.channel.send("There is no song with this number.");

    let i = 1;

    msg.channel.send(
      `Skipped to: **${queue.songs[sN].title}[${queue.songs[sN].duration}]**`
    );

    while (i < sN) {
      i++;
      queue.songs.shift();
    }

    queue.connection.dispatcher.end("SkippingTo..");
  } else if (cmd === "Nowplaying") {
    let q = active.get(msg.guild.id);

    let now = npMsg(q);

    msg.channel.send(now.mes, now.embed).then(me => {
      setInterval(() => {
        let noww = npMsg(q);
        me.edit(noww.mes, noww.embed);
      }, 5000);
    });

    function npMsg(queue) {
      let m =
        !queue || !queue.songs[0] ? "No music playing." : "Now Playing...";

      const eb = new Discord.RichEmbed();

      eb.setColor(msg.guild.me.displayHexColor);

      if (!queue || !queue.songs[0]) {
        eb.setTitle("No music playing");
        eb.setDescription(
          "\u23F9 " + bar(-1) + " " + volumeIcon(!queue ? 100 : queue.volume)
        );
      } else if (queue.songs) {
        if (queue.requester) {
          let u = msg.guild.members.get(queue.requester.id);

          if (!u) eb.setAuthor("Unkown (ID:" + queue.requester.id + ")");
          else eb.setAuthor(u.user.tag, u.user.displayAvatarURL);
        }

        if (queue.songs[0]) {
          try {
            eb.setTitle(queue.songs[0].title);
            eb.setURL(queue.songs[0].url);
          } catch (e) {
            eb.setTitle(queue.songs[0].title);
          }
        }
        eb.setDescription(embedFormat(queue));
      }

      return {
        mes: m,
        embed: eb
      };
    }

    function embedFormat(queue) {
      if (!queue || !queue.songs) {
        return "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(100);
      } else if (!queue.playing) {
        return (
          "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(queue.volume)
        );
      } else {
        let progress = queue.connection.dispatcher.time / queue.songs[0].msDur;
        let prog = bar(progress);
        let volIcon = volumeIcon(queue.volume);
        let playIcon = queue.connection.dispatcher.paused ? "\u23F8" : "\u25B6";
        let dura = queue.songs[0].duration;

        return (
          playIcon +
          " " +
          prog +
          " `[" +
          formatTime(queue.connection.dispatcher.time) +
          "/" +
          dura +
          "]`" +
          volIcon
        );
      }
    }

    function formatTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
    }

    function bar(precent) {
      var str = "";

      for (var i = 0; i < 12; i++) {
        let pre = precent;
        let res = pre * 12;

        res = parseInt(res);

        if (i == res) {
          str += "\uD83D\uDD18";
        } else {
          str += "▬";
        }
      }

      return str;
    }

    function volumeIcon(volume) {
      if (volume == 0) return "\uD83D\uDD07";
      if (volume < 30) return "\uD83D\uDD08";
      if (volume < 70) return "\uD83D\uDD09";
      return "\uD83D\uDD0A";
    }
  }
});
