# Vulpes Botius
Discord.js Multifunction bot used for the Fox Appreciation Party server. Chassis based on Space Boat (http://github.com/votyn/SpaceBoat)
## Planned features
- ~~Ask command, gives a randomized and somewhat humourous answer to any question in the world.~~
- ~~Moderation functions, kicking, banning, warning and role management of users in the server.~~
- Server unique commands, such as a love orientated system in which points are rewarded to users. Bot gets more "intimate" as time goes on.
- More moderation features, such as message logging and a user health system (like a point system but dictates where a user is in good standing in the server).
- ~~Logging functions, such as when users join, leave, delete a message in the server. An admin log would seperate deleted messages from a public log.~~
- Implementing a starred message program, such as a bot would provide like Starboard.
- More features will be mentioned here in the future.

## Adding the bot to your server
At this time, Vulpes Botius is still in development, and thus is a private bot. The bot key is in the config.json file if you really feel the need to install it yourself. You can use the original Space Boat as an alternative (https://github.com/Votyn/SpaceBoat/), or install it yourself. In the future, I will provide an easier way to install the bot for everyone. W Use at your own risk. I am not responsible for any incidents that are caused by this bot. If there is any bugs with the bot, or you need help installing it, I can be reached at leidentaysarconah@gmail.com or on discord as beawydp#1111.

## Installation and Running of the bot on your server.
This bot requires [node.js](https://nodejs.org/en/download/), [git](https://git-scm.com/downloads), and [yarn](https://yarnpkg.com/en/docs/install). 

To download the latest **stable** version of the bot via a .zip release file, please go here:
https://github.com/karywin/VulpesBotius/releases/latest

To download the **stable** version of the bot via git; i.e. the version the official bot is running, run the following in a terminal:
```bash
git clone https://github.com/karywin/VulpesBotius.git
```
To download the **indev** version of the bot that I am currently working on, please visit http://bot.beawy.tk/vulpesbotius/dev/downloads

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
# Vulpes-Botius
