const Discord = require("discord.js")

module.exports = {
	name: "messageCreate",
	run: async function runAll(bot, message) {
		const { client, prefix, owners} = bot

		if(!message.guild) return
		if(message.author.bot) return
		if(!message.content.startsWith(prefix)) return

		const args = message.content.slice(prefix.length).trim().split(/ +/g) // split by spaces
		const commandString = args.shift().toLowerCase()

		let command = client.commands.get(commandString)
		if (!command) return

		let member = message.member

		// perms checking

		if (command.devOnly && !owners.includes(member.id))
			return message.reply("fuck off scrub")

		if (command.permissions && member.permissions.missing(command.permissions).length !== 0)
			return message.reply("fuck off scrub")

		try {
			await command.run({...bot ,message, args})
		} catch (err) {
			let errorMessage = err.toString()
			// for future errors
			if (errorMessage.startsWith("?")){
				errorMessage = errorMessage.slice(1)
				await message.reply(errorMessage)
			} else 
				console.error(err)
		}

	}
}