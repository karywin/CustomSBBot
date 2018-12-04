# CustomSBBot
Discord.js Multifunction bot.. Chassis and platform based on Space Boat (http://github.com/votyn/SpaceBoat)
## NOTICE - Please read!
This bot has now become a solely personal, closed source project. I created it a long time ago for friends to use, but I see no point in updating it here further. This bot will no longer recieve any further updates here, so use at your own risk.
## Planned features
- ~~Ask command, gives a randomized and somewhat humourous answer to any question in the world.~~
- ~~Moderation functions, kicking, banning, warning and role management of users in the server.~~
- Server unique commands, such as a love orientated system in which points are rewarded to users. Bot gets more "intimate" as time goes on.
- More moderation features, such as message logging and a user health system (like a point system but dictates where a user is in good standing in the server).
- ~~Logging functions, such as when users join, leave, delete a message in the server. An admin log would seperate deleted messages from a public log.~~
- Implementing a starred message program, such as a bot would provide like Starboard.
- More features will be mentioned here in the future.

## Adding the bot to your server
If you'd like to add the bot to your server, please go to https://discordapp.com/deadlink to invite it. Beware that you'll need Manage Server permissions. Also beware that the bot goes offline every night, as well as every once in a while regularly. I am currently not able to host the bot 24/7. Hopefully in the future this will change.

## Installation and Running of the bot on your server (hosting it yourself)
This bot requires [node.js](https://nodejs.org/en/download/), [git](https://git-scm.com/downloads), and [yarn](https://yarnpkg.com/en/docs/install). 

You can use this option if you are not happy with dealing with regular bot outages. At this time, the bot is still in development. The bot key for the official bot is in the config.json file if you really feel the need to install it yourself. You can use the original Space Boat as an alternative (https://github.com/Votyn/SpaceBoat/), or install it yourself. You'll have to create a bot user in Discord, search it on Google for more information. Use at your own risk. I am not responsible for any incidents that are caused by this bot. If there is any bugs with the bot, or you need help installing it, I can be reached at leidentaysarconah@gmail.com or on discord as beawydp#1111.

**I recommend downloading the version of the bot via source code or by git. I always will update the git first, and the zip file in the releases will be behind. To have all the latest commands, please clone via git.**

To download the latest **stable** version of the bot via a .zip release file, please go here:
https://github.com/karywin/CustomSBBot/releases/latest

To download the **stable** version of the bot via git; i.e. the version the official bot is running, run the following in a terminal:
```bash
git clone https://github.com/karywin/CustomSBBot.git
```

Having downloaded the bot, download the node dependencies:
```bash
yarn install
```
Then to start the bot (This uses `nodemon`):
```bash
yarn start
```
If you want to run it in the background with `screen` you can use `yarn background` instead.

Installation instructions provided by Space Boat (https://github.com/Votyn/SpaceBoat/).

You are free to do what you'd like with the bot under terms of license from it's platform, at (https://github.com/Votyn/SpaceBoat/). Please credit me and https://github.com/Votyn/ when modifying the bot in any way/publishing it under your own work.
# Vulpes-Botius
