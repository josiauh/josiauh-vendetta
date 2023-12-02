import { logger, commands, settings } from "@vendetta";
import Settings from "./Settings";
import { msgInput, sendMessage } from "./josiahLib-vendetta/josiahLib-vendetta"
import { findByProps } from "@vendetta/metro";
let lce = findByProps("Messages")

let patches = [];

export default {
    onLoad: () => {
        patches.push(commands.registerCommand({
            name: "happy",
            displayName: "happy",
            description: "oh i'm a very happy boi! \\(^v^)/",
            displayDescription: "oh i'm a very happy boi! \\(^v^)/",
            options: [{
                name: "message",
                displayName: "message",
                description: lce.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
                displayDescription: lce.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
                required: true,
                // @ts-ignore
                type: 3
            }],
            // @ts-ignore
            applicationId: -1,
            inputType: 1,
            type: 1,
        
            execute: (args, ctx) => {
               
                sendMessage(ctx.channel.id, args[0].value + "\\(^v^)/")
            }
        }));
    },
    onUnload: () => {
        for (const unpatch of patches) unpatch()
    },
    Settings: settings,
}