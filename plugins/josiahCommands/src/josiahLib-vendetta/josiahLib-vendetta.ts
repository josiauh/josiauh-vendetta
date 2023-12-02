/* 
JosiahLib-Vendetta

my custom lib for every plugin i make!

copied over to every plugin
if not, please tell me!
*/
import { findByProps } from "@vendetta/metro";
let lce = findByProps("Messages")
let MsgActs = findByProps("sendMessage", "recieveMessage")

let msgInput: ApplicationCommandOption = {
    name: "message",
    description: lce.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
    required: true,
    displayDescription: lce.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
    displayName: "message",
    type: 3
}

let sendMessage = function(channelId, msg) {
    MsgActs.sendMessage(channelId, {
        content: msg
    })
};

export { sendMessage, msgInput }