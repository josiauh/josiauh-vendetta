(function(e,o,i){"use strict";const a=i.findByProps("sendMessage","receiveMessage");let n=[];var s={onLoad:function(){o.logger.log("Hello world!"),n.push(o.commands.registerCommand({name:"lmgt",displayName:"lmgt",description:"Let me google that...",displayDescription:"Let me google that...",options:[{name:"query",displayName:"query",required:!0,type:3,description:"The search",displayDescription:"The search"}],inputType:1,type:1,applicationId:-1,execute:function(t,l){a.sendMessage(l.channel.id,{content:`https://letmegooglethat.com/?q=${t[0].value.split(" ").join("+")}`})}}))},onUnload:function(){o.logger.log("Goodbye, world.");for(const t of n)t()}};return e.default=s,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta,vendetta.metro);
