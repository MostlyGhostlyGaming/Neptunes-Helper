const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('Neptunes Helper is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }
});


client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch (args[0]) {
        case 'kick':
            if(!args[1]) message.channel.send('you need to specify a person!')

            const user = message.mentions.users.first();

            if(user){
                const member =  message.guild.member(user);
                if(member){
                    member.kick('You were kicked').then(() =>{
                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(err =>{
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else{
                    message.reply("That user isn\'t in the thid guild")
                } 
            } else {
                message.reply('that user isn\'t in the guild')
            }
            
        break;
    }

    switch (args[0]) {
        case 'ban':
            if(!args[1]) message.channel.send('you need to specify a person!')

            const user = message.mentions.users.first();

            if(user){
                const member =  message.guild.member(user);
                if(member){
                   member.ban({ression: 'You Were Banned'}).then(() =>{
                       message.reply(`Sucsessfuly Banned ${user.tag}`)
                   })
                } else{
                    message.reply("That user isn\'t in the thid guild")
                } 
            } else {
                message.reply('that user isn\'t in the guild')
            }
            
        break;
    }
})

client.login(process.env.BOT_TOKEN)
