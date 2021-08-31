var fs = require('fs')
const Discord = require("discord.js11");
var chalk = require('chalk');

const tokens = fs.readFileSync('tokens.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');

var items = ['Lubrico Community'];

process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};

const bot = new Discord.Client({
    disableEveryone: true
});

class Bot {
    constructor(token) {
        this.token = token;
    }
    online() {
        this.bot = new Discord.Client();
        this.bot.on('ready', () => {
            console.log(chalk.green(`[INFO]`) + `|` + (chalk.blueBright `Logged into `) + (chalk.redBright `%s`) + ` |` + (chalk.blueBright ` ID: `) + (chalk.magenta `%s`) + ` at` + (chalk.yellow ` "%s"`), this.bot.user.tag, this.bot.user.id, new Date().toLocaleTimeString());
            this.bot.on("message", async message => {})
        });
        this.bot.on('ready', () => {
            this.bot.user.setPresence({
                game: {
                    name: items[Math.floor(Math.random() * items.length)], //Thanks to vjjjj for helping figure this part out
                    type: "PLAYING"
                }
            });
            this.bot.channels.get("876462143082487838").join().catch(O_o => {})
        });

        this.bot.login(this.token).catch(err => {});;
    }
}

process.title = ` Lubrico's Server Token: ${tokens.length}`;


var i = 0;
var int = setInterval(() => {
    if (i >= tokens.length) return clearInterval(int);
    new Bot(tokens[i++]).online();
}, 0);

client.on('ready', ()=>{
    client.channels.cache.get('876462143082487838').join() 
    })

    this.bot.login(this.token).catch(err => {});;