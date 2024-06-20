const { Telegraf } = require('telegraf');

let binarysearch = `Nhii aata`;
   
// https://t.me/codingmaniac_bot
const bot = new Telegraf('7293355978:AAEs45grHlzZX69ZaNhIkfQtoN824Q5_5Ig');
bot.start((ctx)=>ctx.reply('Welcome to the new coding bot from Atharv!'));

bot.command('binarysearchcpp' , (ctx)=> ctx.reply(binarysearch));

bot.on('sticker', (ctx)=> ctx.reply('❤️'));

bot.launch();


