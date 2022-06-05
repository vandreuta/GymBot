
// import discord.js library
const Discord = require("discord.js")

// load env globals
require("dotenv").config()

const client = new Discord.Client({
    // add intents
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let botDetails = {
    client,
    prefix: "g.",
    owners: ["751500917228044398", "375718620086665217"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

module.exports = botDetails

client.login(process.env.TOKEN)