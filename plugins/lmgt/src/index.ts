import { logger, commands } from "@vendetta";
import { findByProps } from "@vendetta/metro";
const MessageActions = findByProps("sendMessage", "receiveMessage");
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
                }
            ],
            inputType: 1,
            type: 1,
            //@ts-ignore
            applicationId: -1,
            execute: (args, ctx) => {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: `https://letmegooglethat.com/?q=${args[0].value.split(" ").join("+")}`
                })
            },
        }))
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        for (const unpatch of ps) unpatch()
    },
}