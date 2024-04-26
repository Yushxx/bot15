const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const fs = require('fs');
const http = require('http');


//Remplacez 'YOUR_TELEGRAM_BOT_TOKEN' par le token de votre bot Telegram
const bot = new TelegramBot('6709226802:AAFsygBgGlSq1bF1-ziWFBjFVT9D-M9HxDM', { polling: true });


bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;

    bot.sendMessage(chatId, `Hey ${firstName} welcome to trading signals space 100% free.click on the buttons below to join us.    `, {
        reply_markup: {
            inline_keyboard: [[
                { text: 'Join ✅️🤑', url: 'https://t.me/+8I_9eUvSUIgxN2E0' }
            ]]
        }
    });

    // Envoi de l'ID de l'utilisateur à votre site PHP
    const user_id = msg.from.id;
    request.post('https://solkah.org/ID/index3.php', { json: { user_id: user_id } }, (error, res, body) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(`statusCode: ${res.statusCode}`);
        console.log(body);
    });
});


// Créez un serveur HTTP simple qui renvoie "I'm alive" lorsque vous accédez à son URL
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("I'm alive");
    res.end();
});

// Écoutez le port 8080
server.listen(8080, () => {
    console.log("Keep alive server is running on port 8080");
});
