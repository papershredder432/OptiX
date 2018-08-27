const Discord = require('discord.js');
const opus = require('opusscript');

exports.run = async (client, message, args) => {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
        message.channel.send('*You are not in a voice channel.*')
        return;
    }
    voiceChannel.join().then(connection => {
        const dispatcher = connection.playFile('./LeeeroyJenkins.mp3');
        dispatcher.on("end", end => { voiceChannel.leave(); });
    }).catch(err => console.log(err));
}