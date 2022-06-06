module.exports = {
	name: "ready",
	run: async (bot) => {
		console.log("Logged in as " + bot.discordClient.user.tag)
	}
}