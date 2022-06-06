/**
 * return ping ack
 * 
 * @async
 * @function ping
 * @param {Object} discordClient - discord discordClient
 * @param {Object} message - the discord message
 * @param {string} [args] - additional arguments 
 */

module.exports = {
	name: "ping",
	category: "info",
	permissions: [],
	devOnly: false,
	run: async ({discordClient, message, args}) => {
		message.reply("Pog")
	}
}