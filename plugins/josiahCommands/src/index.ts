import { logger, commands } from "@vendetta";
import Settings from "./Settings";
import { msgInput, sendMessage } from "./josiahLib-vendetta/josiahLib-vendetta"

//#region Commands


let happyCmd: ApplicationCommand = {
    name: "happy",
    description: "a very happy boi :D",
    //@ts-ignore
    applicationId: -1,
    type: ApplicationCommandType.MESSAGE,
    inputType: ApplicationCommandInputType.BOT,
    options: [msgInput],
    execute: (args, ctx) => {
        sendMessage(ctx.channel.id, args[0].value + "\\(^v^)/")
    }
}
//#endregion

let patches = [];

export default {
    onLoad: () => {
        logger.log("Loading commands!");
        patches.push(commands.registerCommand({
            name: "happy",
            description: "a very happy boi :D",
            //@ts-ignore
            applicationId: -1,
            type: ApplicationCommandType.MESSAGE,
            inputType: ApplicationCommandInputType.BOT,
            options: [msgInput],
            execute: (args, ctx) => {
                sendMessage(ctx.channel.id, args[0].value + "\\(^v^)/")
            }
        }))
    },
    onUnload: () => {
        logger.log("Goodbye discord!!!");
        for (const unpatch of patches) unpatch();
    },
    settings: Settings,
}