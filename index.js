// testing uwu
// import discord.js library
const Discord = require("discord.js")

// env globals
require("dotenv").config()

const discordClient = new Discord.Client({
	// intents -> see discord.js docs: https://discord.js.org/#/docs/discord.js/13.8.0/class/Intents
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_MEMBERS"
	]
})

let bot= {
	discordClient, 
	prefix: "g.",
	owners: ["751500917228044398", "375718620086665217"]
}

// maps containing command and event details
discordClient.commands = new Discord.Collection()
discordClient.events = new Discord.Collection()

discordClient.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
discordClient.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

discordClient.loadEvents(bot, false)
discordClient.loadCommands(bot, false)

module.exports = bot

discordClient.login(process.env.TOKEN)