const { getFiles } = require("../util/functions")

module.exports = (bot, reload) => {
    const { discordClient } = bot

    let events = getFiles("./events/", ".js")

    if (events.length === 0){
        console.log('No events to load')
    }

    events.forEach((f,i) => {
        if(reload)
            delete require.cache[require.resolve(`../events/${f}`)] //clears references to cached module objects
        
        const event = require(`../events/${f}`)
        discordClient.events.set(event.name, event)

        if(!reload)
            console.log(`${i + 1}. ${f} loaded`)
    })

    if(!reload)
        initEvents(bot)
}

function triggerEventHandler(bot, event, ...args){
    const { discordClient } = bot

    try {
        if (discordClient.events.has(event))
            discordClient.events.get(event).run(bot, ...args)
        else 
            throw new Error(`Event ${event} does not exist`)
    } catch (err) {
        console.error(err)
    }
}

function initEvents(bot){
    const { discordClient } = bot

    discordClient.on("ready", () => {
        triggerEventHandler(bot,"ready")
    })

    discordClient.on("messageCreate", (message) => {
        triggerEventHandler(bot, "messageCreate", message)
    })
}