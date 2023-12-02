import { logger, commands } from "@vendetta";
import Settings from "./Settings";
import { msgInput, sendMessage } from "./josiahLib-vendetta/josiahLib-vendetta"
import { findByProps } from "@vendetta/metro";
let lce = findByProps("Messages")

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
        patches.push(commands.registerCommand({
            name: "happy",
            description: "a very happy boi :D",
            //@ts-ignore
            applicationId: -1,
            type: 1,
            inputType: 1,
            options: [{
                name: "message",
                description: lce.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
                required: true,
                displayDescription: lce.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
                displayName: "message",
                type: 3
            }],
            execute: (args, ctx) => {
                sendMessage(ctx.channel.id, args[0].value + "\\(^v^)/")
            }
        }))
    },
    onUnload: () => {
        for (const unpatch of patches) unpatch();
    },
    settings: Settings,
}