const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('CREATED BY : PITAR HIX');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('⚙            https://discord.gg/2yCdFZ | سيرفر الدعم');
  console.log('⚙            PITAR : ibarmoda');
client.user.setStatus("dnd");
});
                                                                                                                                                                                              var prefix = "!";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "Bb") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.sendMessage(total).catch(console.error);
  }
  
  

  });

// playing
client.on('ready', () => {
                                                                                                                                                                                                                                                                              client.user.setGame(`!help | ArabicoBot`,'https://www.twitch.tv/v5bz');
});


client.on("message", msg => {
           var prefix = "!";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});


client.on('message', message => {
     if (message.content === "!help") {
message.author.send("االبوت العربي الجديد ذو الاوامر الخورافية" + `  **

╭━━━╮╱╱╱╱╭╮╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭━╮┃╱╱╱╱┃┃╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃┃╱┃┣━┳━━┫╰━┳┳━━┳━━┫╰╯╰┳━┻╮╭╯
┃╰━╯┃╭┫╭╮┃╭╮┣┫╭━┫╭╮┃╭━╮┃╭╮┃┃
┃╭━╮┃┃┃╭╮┃╰╯┃┃╰━┫╰╯┃╰━╯┃╰╯┃╰╮
╰╯╱╰┻╯╰╯╰┻━━┻┻━━┻━━┻━━━┻━━┻━╯

السلام وعليكم ورحمة الله وبركاته نقدم لكم بوت اسطوووري وجدييد
بوت جديد في الديسكورد : :new: 
شغال 24 ساعة متواصلة بدون توقف : :white_check_mark: 
برمجة خورافية للبوووووت : :cool: 
اضافات ما توقف ابدا على البوت كل يوم نبدا برمجة للمساااء نقعد نبرمج البوت : :closed_book: 
بوت محمي اقوى الحمايات ما يتهكر ابداا : :shield: 
خالي من الفيروسات او اكواد خبيثة او خاصة لتهكير السيرفرات : :x:
رابط اضافة البوت العربي 
[https://discordapp.com/oauth2/authorize?client_id=414962445325697037&scope=bot&permissions=2146958591]
مبرمج البوت العربي [ＰＩＴＡＲ ＩＳ ＨＥＲＥ#5333]

**`);
    }
});


client.on('message', message => {
     if (message.content === "!help") {
message.author.send("" + `  **
!ping                | سرعة الأتصال
!id                  | معلومــات عــن حســابــك
!say                 | يكرر الكلام الذي تقولة
!avatar              | صورتك في الدسكورد
!embed               | يكرر الكلام بطريقة أخرى 
!level               |  لتعرف اللفل حقك
!credit              |  لتعرف فلوسك
تنبيه هام : كود الكرديت قيد التطوير ما تقدر تعطي احد كرديت هو قيد التطوير

"اوامر السيرفرات" 

!server                 | معلومات عن السيرفر
!clear                  | لحذف الرسائل
!bc                     |  لارسال رسالة برود كاست عادي
!bc2                    |  لارسال رسالة برود كاست مطور
!create colors          | لصناعة 200 لون
!delete colors          | لحذف 200 لون
!kick                   | لطرد الشخص
!ban                    | لتبنيد الشخص
!mute                   | لاعطاء العضو ميوت
!unmute                 | لفك الميوت عن العضو
!mutechannel            | لتقفيل الشات
!unmutechannel          | لفتح الشات
ct                      | لصناعة روم كتابي
!cv                     | لصناعة روم صوتي
!rooms                  | يطلع لك اسامي وارقام الرومات
!create server          | صيانة / يسويلك سيرفر كاامل


"اوامر البوت" 

!bot               | عدد السيرفرات التي تستخدم البوت
!invite            | لاضافة البوت الى سيرفرك
!support           | لدخول سيرفر المساعدة الخاص بالبوت
!contact           | لارسال رسالة الى صاحب البوت

"اوامر العاب"

!challenges             | لمعرفة ماذا يوجد من تحديات
!مريم                      | لتلعب لعبة مريم
!عقاب                        | لتعاقب واحد
!غرد               | للتغريد الى شخص
!cat             | يرسلك صورة بسه 
!صراحة                | الصراحة
!كت تويت                      | الكت تويت
!لو خيروك                      | لتلعب لعبة لو خيروك

"ديانات"

!اذكار                    | لقراءة اذكار

"استضافات"

استضافة الترحيب : سوي روم باسم welcome
استضافة اللوق   : سوي روم باسم console
"الدعم الفني"
:gear:          https://discord.gg/ZPzcRfu    | سيرفر الدعم 
:gear:            https://arabicobot.wixsite.com/arabicobot  | موقع البوت


**`);
    }
});


// -ping
   client.on('message', message => {
     if (message.content === "!ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')

  message.channel.sendEmbed(embed);
    }
});
 

 client.on('message', function(msg) {
         var prefix = "!"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });



   client.on('message', message => {
     if (message.content === "!help") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
  .addField("تم ارسال الاوامر في الخاص + تاكد انك فاتح الخاص :]")

     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
        var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
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
    var prefix = "!";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "ArabicoBot"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('message', message => {
    if(message.content.includes('discord.gg')){ 
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`**للاسف ما تقدر تنشر ههههههههههههههههههههههههههههه**`)
    }
}
});


client.on('message' , message => {
    if (message.content === "!invite") {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('اظعط هنا لدعوة البوت الى سيرفرك')
 .setURL('https://discordapp.com/oauth2/authorize?client_id=414962445325697037&scope=bot&permissions=2146958591')
  message.channel.sendEmbed(embed);
   }
});


client.on('message' , message => {
    if (message.content === "!support") {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('اظغط هنا لدخول سيرفر الدعم الفني')
 .setURL('https://discord.gg/ZPzcRfu')
  message.channel.sendEmbed(embed);
   }
});


client.on('message', message => {
     if (message.content === "!challenges") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
	 .addField("اختر تحدي | !challenge | !challenge2 | !challenge3 | !challenge4 | !challenge5 | !challenge6 | !challenge7")
	 
	 
	 
  message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
     if (message.content === "!challenge") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
  .addField("روح عند ابوك واسلخه كف او تروح تاكل 5 ليمونات حامضة")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
     if (message.content === "!challenge2") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
  .addField("تروح عند ابوك وتقله احبك او تروح عند صديقك وتقله انا اكرهك واضربه كف")
     
     
	 
  message.channel.sendEmbed(embed);
    }
});
  
  
client.on('message', message => {
     if (message.content === "!challenge3") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
  .addField("تروح عند اختك وتكذب عليها او تروح عند ابوك تقله بخترقكك عشاني كرهتك")
     
	 
	 
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
     if (message.content === "!challenge4") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
  .addField("تروح على المطبخ وتقشر بصل او تروح الخزانة حقتك وتحرق بنطلون")
     
	 
	 
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
     if (message.content === "!challenge5") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
  .addField("تروح الحمام وتعبي مويا حقته وتعطيه ل اخوك يشربه او تروح عند اخوك وتقله كل زق")
     
	 
	 
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
     if (message.content === "!challenge6") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
  .addField("تروح تاكل شي ما تحبه وتكرهه او تاكل 10 حلاوة معفنة")
     
	 
	 
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
     if (message.content === "!challenge7") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
  .addField("تروح تاكل حبة من البطاطا يلي ياكلها خويك او تخدع اخوك لما يجيب بطاطا تاكله كله")
     
	 
	 
  message.channel.sendEmbed(embed);
    }
});
 
 
client.on('message', function(message) {
if(!message.channel.guild) return;
if(message.content === '!create colors') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('يتم انشاء 200 لون انتضر | ▶️')
}else{
message.channel.send('ما معاك البرمشن المطلوب |❌🚫')
}
}
});

client.on('message', message=>{
if (message.content === '!create colors'){
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
setInterval(function(){})
let count = 0;
let ecount = 0;
for(let x = 199; x < 200; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
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
    if(message.content === "!bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
        .setDescription(`**السيرفرات**?? **__${client.guilds.size}__**
**المستخدمين**?? **__${client.users.size}__**
**الرومات**?? **__${client.channels.size}__** `)
               message.channel.sendEmbed(embed);
           }
});


client.on('message', message => {
  if (message.content === `!كت تويت`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
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
 if (message.content.startsWith('!صراحة')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});


  var prefix = "!";
var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});

client.on("message", (message) => {
if (message.content.startsWith("!ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("!cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

//اوامر اداريه//
client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' + لازم تشيل خاصية Send Message **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});



   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' + لازم تشيل خاصية Send Message **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});


client.on('message', message => {

       if(message.content === prefix + "!mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//viper
    if(message.content === prefix + "!unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
                }
                
         
       
});


var prefix = "!"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت ممعك برمشن Kick Members >:(**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**انا ممعي برمشن Kick Members :(**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**المطرود :**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل :**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب :**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
 

 
var prefix = "!"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت ممعك برمشن Ban Members >:(**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**انا ممعي برمشن Ban Members :(**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**المبند :**",  '**[ ' + `${user.tag}` + ' ]**')
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
   if (message.content.startsWith("!عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('تم معاقبتك هاهاهاهاها' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});

var prefix = "!"
client.on('message', message => {

  if (message.content.startsWith(prefix + "contact")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.users.get("414870488691769344").send(
      "\n" + "" + "● السيرفر :" + "" +
      "\n" + "" + "» " + message.guild.name + "" +
      "\n" + "" + " ● المرسل : " + "" +
      "\n" + "" + "» " + message.author.tag + "" +
      "\n" + "" + " ● الرسالة : " + "" +
      "\n" + "" + args + "")
  }
  });


   client.on('message', message => {
     if (message.content === "!contact") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
  .addField("تم ارسال رسالة لصاحب البوت العربي")
  
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.content === "!rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**الرومات الموجودة بالسيرفر:white_check_mark:**`)
        .addField(':arrow_down: عدد الرومات. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:اسامي الرومات. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});


const adkar = [
  '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
  '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
  '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
  '**‏اذكار  |  **أستغفر الله .',     
  '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
  '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
  '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
  '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
  '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
  '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
  '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
  '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
  '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
  '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
  'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
  '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
  '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
  '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
  '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
  '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
  '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
  '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
  '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
  '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
  '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
  '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
  '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
  '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
  '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
]
client.on('message', message => {
if (message.author.bot) return;
if (message.content.startsWith('!اذكار')) {
  if(!message.channel.guild) return;
var client= new Discord.RichEmbed()
.setTitle("اذكار")
.setThumbnail(message.author.avatarURL)
.setColor('RANDOM')
.setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
               .setTimestamp()
message.channel.sendEmbed(client);
message.react("??")
}
});


client.on('message' , message => {
    if (message.content === "!website") {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('اظغط هنا لدخول موقع البوت العربي')
 .setURL('https://arabicobot.wixsite.com/arabicobot')
  message.channel.sendEmbed(embed);
   }
});


client.on('message', msg => {
  //Code By : ‡ ♪ ℬℐℓѦℓ✋ ‡#2026
  if(msg.content.startsWith('!suggestion')) {
    if(!msg.channel.guild) return msg.reply('** هاذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', 'suggestions')) return msg.reply('**الرجاء إضافة روم بإسم (suggestions)**');
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply('الرجاء كتابة الاقتراح')
    //غيره على حسب اسم روم الاقتراحات او سوي مثل اسم الروم الموجود هنا
    if(msg.guild.channels.find('name', 'suggestions')) {
      //غيره هنا كمان اذا غيرت فوق
      msg.guild.channels.find('name', 'suggestions').send(`
      تم الاقتراح من قبل : ${msg.member}

      الاقتراح : 
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      .then(function (message) {
        message.react('✅')
        message.react('❌')
      })
      }
    }

});


var prefix = "!"
client.on('message', message => {

  if (message.content.startsWith(prefix + "arabickobol")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("481733105284284417").send(
      "\n" + "" + " ● تقرير الاقتراح : " + "" +
      "\n" + "" + args + "")
  }
  });


   client.on('message', message => {
     if (message.content === "!suggestion") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`ArabicoBot`, 'https://images-ext-2.discordapp.net/external/lrVzKt7T8b5JZz-VcYfH6ICQtHA0Bj8_AXkq_JO2ZX8/https/cdn.discordapp.com/attachments/411548285740908551/411550507363074048/6k0g8EYs.jpg')
  .setColor("#9B59B6")
  .addField("تم ارسال الاقتراح الخاص بك")
  
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "❊ ◆Rainbow◆", // اسم الرتبة
      guildid: "507868593103568901", // اي دي السيرفر
      sec: 0.3 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("**يجب ان تكون رتبة البوت فوق رتبة الرينبو**");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
}); 

 client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('!bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "ArabicoBot Support";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | تم ارسال البرود كاست الى جميع الاعضاء الموجودين في السيرفر  ${message.guild.members.size}`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('السيرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setImage("https://media.discordapp.net/attachments/493443213093240832/494200503056465941/1r.png?width=301&height=301")
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**تم الغاء البرودكاست.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
