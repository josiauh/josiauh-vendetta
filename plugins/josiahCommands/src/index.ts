import { commands } from "@vendetta";
import { findByProps } from "@vendetta/metro";
import Settings from "./Settings";
import { msgInput } from "josiahvendetta";

// based on the uwuify plugin by ECHO, big thanks to them!
const MessageActions = findByProps("sendMessage", "receiveMessage");
const Locale = findByProps("Messages");

const endings = [
    "OwO",
    "UwU",
    "o.O",
    "-.-",
    ">w<",
    "(⑅˘꒳˘)",
    "(ꈍᴗꈍ)",
    "(˘ω˘)",
    "(U ᵕ U❁)",
    "σωσ",
    "òωó",
    "(///ˬ///✿)",
    "(U ﹏ U)",
    "( ͡o ω ͡o )",
    "ʘwʘ",
    ":3",
    ":3", // important enough to have twice
    ":3", // important enough to have thrice
    "XD",
    ">_<",
    "^^",
    "^^;;",
    "(ˆ ﻌ ˆ)♡",
    "^•ﻌ•^",
    "/(^•ω•^)",
    "(✿oωo)",
    "\\(^v^)/",
    "( ͡° ͜ʖ ͡°)",
    "¯\\_(ツ)_/¯",
    "(╯°□°)╯︵ ┻━┻",
    "┬─┬ノ( º _ ºノ)",
    "/(v_v)\\",
    "ヾ(•ω•`)o",
    "<(°□°)>",
    "(.__.)",
    "('._.)",
    "(._.')",
    "X_X",
    "○( ＾皿＾)っ"
];


function selectRandomElement(arr) {
    // generate a random index based on the length of the array
    const randomIndex = Math.floor(Math.random() * arr.length);

    // return the element at the randomly generated index
    return arr[randomIndex];
}


function good(message: string): string {
    let answer = "";

    answer = message

    answer += " " + selectRandomElement(endings);
    return answer;
}

let patches = [];

export default {
    onLoad: () => {
        patches.push(commands.registerCommand({
            name: "kaoRoulette",
            displayName: "kaoRoulette",
            description: "custom kaomoji, you'll never know what you get!",
            displayDescription: "custom kaomoji, you'll never know what you get!",
            options: [{
                name: "message",
                displayName: "message",
                description: Locale.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
                displayDescription: Locale.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,
                required: true,
                // @ts-ignore
                type: 3
            }],
            // @ts-ignore
            applicationId: -1,
            inputType: 1,
            type: 1,
        
            execute: (args, ctx) => {
               
                MessageActions.sendMessage(ctx.channel.id, {
                    content: good(args[0].value)
                })
            }
        }));
    },
    onUnload: () => {
        for (const unpatch of patches) unpatch()
    },
    Settings: Settings
}