const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const Bot = new Client({
  authStrategy: new LocalAuth(),
});

Bot.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

Bot.on("ready", () => {
  console.log("Bot is ready!");
});

Bot.on("message", async (message) => {
  if (message.body === "Hello") {
    message.reply("Hello how are you ?");
  }
});
Bot.on("message_create", (message) => {
  console.log(message.body);
});

Bot.initialize();
