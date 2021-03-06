const Discord = require("discord.js"),
    fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let guildSett = JSON.parse(fs.readFileSync('./guildSettings.json', 'utf8'));
  
    let targetRole = message.mentions.channels.firstKey() || args[0]; 

    if(!message.member.hasPermission("ADMINISTRATOR") && message.member.id !== "76063689064583168") return message.channel.send("Sorry, you do not have permission to use this command.");
    if(!targetRole) return message.channel.send("*Please specify a new welcome channel channel.*");

    guildSett[message.guild.id].GuildSettings.WelcomeChannel = targetRole;

    fs.writeFile('./guildSettings.json', JSON.stringify(guildSett, null, 2), (err) => {
        if (err) console.log(error);
    })

    let sEmbed = new Discord.RichEmbed()
        .setTitle("Welcome Channel Changed")
        .addField(`Set to`, `\`${args[0]}\``);

    message.channel.send(sEmbed);
}