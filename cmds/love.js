const guilds = require("../data/guilds.json");

module.exports.run = (bot, message, args) => {
    if (message.channel.id === guilds[message.guild.id].botChannelID ||
        message.channel.id === guilds[message.guild.id].adminbotChannelID) {
        if (Object.keys(args).length < 1) {
            let response = bot.utils.randomSelection([
                `Hey, if you love me, at least ask me a question.`,
                `I'm not telepathic you know...`,
                `I can't answer a question if you don't ask me one!`,
                `...`,
                '<:tearthonk:427621281525923842>',
                '<:rauf:427621360286826496>',
                '<:thenk:427621426514755601>',
                '<:oh:427621570320531456>',
                '<:waitwhat:427621591036198914>',
                '<a:gone:427621026957099009>',
                '<:ohno:427621654684893194>',
                '<:thohno:427621998089338880>'
            ]);
            return message.channel.send(response);
        }
        else {
            randomUserID = message.mentions.members.randomKey()
            if (message.mentions.members.has(166125035092836352) || 
                message.content.toLowerCase().indexOf('votyn') > 1 ) { // yes i am vain
                let response = bot.utils.randomSelection([
                    `Ask them yourself! Be a big boy <3`,
                    `Why don't you ask him yourself?`,
                    `Hmm... Not sure about that one...`,
                    `Obviously.`,
                    `Never.`,
                    `Why though?`,
                    `Not sure. Ask again later maybe?`,
                    '<:soontm:427622707824427018>',
                    `Not likely`,
                    `I think so.`,
                    `I don't think so...`,
                    `Maybe...`,
                    `I'm not sure.`,
                    `Why would you ask that? <:rauf:427621360286826496>`,
                    `I hope not!`,
                    `I hope so...`,
                    `Well now that you ask...`,
                    `I would count on it.`,
                    `Is that even a question?`,
                    `Not on my watch!`,
                    '<:sweats:427623000087592965>'
                ]);
                return message.channel.send(response);
            }
            else if (randomUserID) {
                let response = bot.utils.randomSelection([
                    `Ask them yourself! Be a big boy <3`,
                    `Let them answer that question. I don't know everything after all.`,
                    `Some questions are best left to those whom they involve.`,
                    `Why not ask them yourself?`,
                    `Well since you mentioned them, ask them yourself! You’re a big fox now <3 `,
                    `I don't think so...`,
                    `Maybe they do... maybe they don’t.`,
                    `That's not for me to say.`,
                    `Bro, you gotta be kidding me.`,
                    `Oh fuck. Not this again.`,
                    `Aperson is cool. He probably has the answer to that.`,
                    `Not likely`,
                    `I think so.`,
                    `I'm not sure.`,
                    `Why would you ask that? Bad boy:tm:`,
                    `I hope not!`,
                    `I hope so...`,
                    `Well now that you ask...`,
                    `I would count on it.`,
                    `Is that even a question?`,
                    `Nah. :P`,
                ]);
                return message.channel.send(response);
            }
            else { // Can also be used for dm usage in future.
                let response = bot.utils.randomSelection([
                    `You’re kinda cute.`,
                    `You’re super cute.`,
                    `I’d knot you so hard you’d feel like you’ve been pinned to the best telephone pole on Earth.`,
                    `Trying not to be the biggest perv here, but let’s cuddle, and maybe it’ll turn into something more.`,
                    `Knot sure. ;)`,
                    `Your fur is so warm and soft <3`,
                    `You’ve just made a fox feel loved. Now it’s your turn <3`,
                    `Oh yeah!`,
                    `I’m knot sure…`,
                    `You’re so hot.`,
                    `Woah there foxy pants.`,
                    `Woah there prancy paws.`,
                    `Damn. You’ve just moved up a base.`,
                    `I hope so...`,
                    `I find you kind of.. cute. Let’s cuddle.`,
                    `Here, come with me! My tent’s over there ^-^`,
                    `Hey, I’m just an innocent fox. ^-^`,
                    `I love you too <3`,
                    `<3`,
                    `Uh, yeah dude. Totally.`,
                    `Nah.`,
                    `Not right now.`,
                    `Holy shit... definitely!`,
                    `Why don’t we do something fun?`,
                    `Oh no…`,
                    `Uh oh…`,
                    `Of course!`,
                    `Awoo <3`
                ]);
                return message.channel.send(response);
            }
        }
    }
};


module.exports.help = {
    name: `love`,
    usage: `love <question>`,
    type: 'Fun',
    description: `Lol. Don\'t expect it to be right though.`
};
