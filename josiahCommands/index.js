(function(o,a,t,i){"use strict";const{FormText:r}=i.Forms;function d(){return React.createElement(r,null,"Adds more commands to discord! Based on the uwuify plugin by ECHO, big thanks to them!")}const c=t.findByProps("sendMessage","receiveMessage"),n=t.findByProps("Messages"),C=["OwO","UwU","o.O","-.-",">w<","(\u2445\u02D8\uA4B3\u02D8)","(\uA20D\u1D17\uA20D)","(\u02D8\u03C9\u02D8)","(U \u1D55 U\u2741)","\u03C3\u03C9\u03C3","\xF2\u03C9\xF3","(///\u02EC///\u273F)","(U \uFE4F U)","( \u0361o \u03C9 \u0361o )","\u0298w\u0298",":3",":3",":3","XD",">_<","^^","^^;;","(\u02C6 \uFECC \u02C6)\u2661","^\u2022\uFECC\u2022^","/(^\u2022\u03C9\u2022^)","(\u273Fo\u03C9o)","\\(^v^)/","( \u0361\xB0 \u035C\u0296 \u0361\xB0)","\xAF\\_(\u30C4)_/\xAF","(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B","\u252C\u2500\u252C\u30CE( \xBA _ \xBA\u30CE)","/(v_v)\\","\u30FE(\u2022\u03C9\u2022`)o","<(\xB0\u25A1\xB0)>","(.__.)"];function l(u){const e=Math.floor(Math.random()*u.length);return u[e]}function m(u){let e="";return e=u,e+=" "+l(C),e}let s=[];var p={onLoad:function(){s.push(a.commands.registerCommand({name:"kaoRoulette",displayName:"kaoRoulette",description:"custom kaomoji, you'll never know what you get!",displayDescription:"custom kaomoji, you'll never know what you get!",options:[{name:"message",displayName:"message",description:n.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,displayDescription:n.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,required:!0,type:3}],applicationId:-1,inputType:1,type:1,execute:function(u,e){c.sendMessage(e.channel.id,{content:m(u[0].value)})}}))},onUnload:function(){for(const u of s)u()},Settings:d};return o.default=p,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta,vendetta.metro,vendetta.ui.components);