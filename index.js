const Discord = require("discord.js");

const Client =  new Discord.Client;

const prefix = "+";

Client.on("ready", () => {
    console.log("Le bot a été allumé avec succès !")
});

Client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;


    //+ping
    if(message.content == prefix + "ping"){
        message.reply("pong");
    }

    if(message.content == prefix + "user-info"){
        message.channel.send ("**" + message.author.username +  "** qui a pour identifiant : __" + message.author.id + "__" );
    }
});



Client.login("ODE4NTE2MTk1MDc3NjUyNDgw.YEZMnA.pwWe4U7VyG5BKTKirMmP3d8oHFo");