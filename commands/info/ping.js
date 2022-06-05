/**
 * return ping ack
 * 
 * @async
 * @function ping
 * @param {Object} client - discord client
 * @param {Object} message - the discord message
 * @param {string} [args] - additional arguments 
 */

module.exports = {
	name: "ping",
	category: "info",
	permissions: [],
	devOnly: false,
	run: async ({client, message, args}) => {
		message.reply("Pog")
	}
}