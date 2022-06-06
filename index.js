// testing uwu
// import discord.js library
const Discord = require("discord.js")

// env globals
require("dotenv").config()

const client = new Discord.Client({
	// intents -> see discord.js docs: https://discord.js.org/#/docs/discord.js/13.8.0/class/Intents
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_MEMBERS"
	]
})

let bot= {
	client, 
	prefix: "g.",
	owners: ["751500917228044398", "375718620086665217"]
}

// maps containing command and event details
client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

client.login(process.env.TOKEN)