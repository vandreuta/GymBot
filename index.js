
// import discord.js library
const Discord = require("discord.js")

// load env globals
require("dotenv").config()

const client = new Discord.Client({
    // add intents
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

// event listeners
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)

})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello!")
    }
})

client.login(process.env.TOKEN)