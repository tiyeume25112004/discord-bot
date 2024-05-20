const { Client, GatewayIntentBits } = require('discord.js');
const axios = require("axios")
require('dotenv').config()

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
     GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.mentions.has(client.user)) {
        message.reply("dùng /neko");
    }
    if (message.author.bot) return;
    if (message.content.startsWith("/")) {
        if (message.content=="/neko") {
            const response = await axios.get('https://nekos.best/api/v2/neko');
            const neko_img = response.data.results[0]["url"];

            message.reply(neko_img)
        }
    }
});

client.login(process.env.TOKEN_BOT);
