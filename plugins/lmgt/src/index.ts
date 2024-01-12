import { logger, commands } from "@vendetta";
import { findByProps } from "@vendetta/metro";
const MessageActions = findByProps("sendMessage", "receiveMessage", "sendBotMessage");
let ps = []
export default {
    onLoad: () => {
        logger.log("Hello world!");
        ps.push(commands.registerCommand({
            name: "lmgt",
            displayName: "lmgt",
            description: "Let me google that...",
            displayDescription: "Let me google that...",
            options: [
                {
                    name: "query",
                    displayName: "query",
                    required: true,
                    //@ts-ignore
                    type: 3,
                    description: "The search",
                    displayDescription: "The search"
                },
                {
                    name: "hidden",
                    displayName: "hidden",
                    required: false,
                    type: ApplicationCommandOptionType.BOOLEAN,
                    description: "Send as a bot, true/false only",
                    displayDescription: "Send as a bot, true/false only"
                }
            ],
            inputType: 1,
            type: 1,
            //@ts-ignore
            applicationId: -1,
            execute: (args, ctx) => {
                if (args[1] == "true") {
                    MessageActions.sendBotMessage(ctx.channel.id, {
                        content: `https://letmegooglethat.com/?q=${args[0].value.split(" ").join("+")}`
                    })
                } else {
                    MessageActions.sendMessage(ctx.channel.id, {
                        content: `https://letmegooglethat.com/?q=${args[0].value.split(" ").join("+")}`
                    })
                }
            },
        }))
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        for (const unpatch of ps) unpatch()
    },
}