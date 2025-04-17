require("dotenv").config();
const botConfig = require("./botconfig.json");
const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js-selfbot-v13");

const client = new Client();
const channelId = "idhere";
const applicationId = "idhere";
const BumpReminderBotId = "478321260481478677";

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);

  const channel = await client.channels.cache.get(channelId);
  if (!channel) throw new Error("channel not found");

  channel.send("I am awake.");
  await channel.sendSlash(applicationId, "bump");
});

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

client.on("messageCreate", async (msg) => {
  if (msg.channel.id == channelId) {
    if (msg.author.id == BumpReminderBotId) {
      console.log("Message Received");
      if (msg.content == "Pong!") {
        console.log("Correct Message");
        msg.channel.send("Hi");
        const num = randomIntFromInterval(14500, 15000);
        msg.channel.sendSlash(applicationId, "bump");
        console.log("Hi");
        console.log(num);
        console.log(num);
        console.log(num);
      }
    }
  }
});

client.login(process.env.TOKEN);
