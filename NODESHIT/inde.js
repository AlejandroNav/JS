const joke = require('give-me-a-joke')
const colory = require('colors')
const figgy = require("figlet")

joke.getRandomDadJoke(function (joke) {
    console.dir(joke);
});


figgy('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});


const franc = require("franc")
const langs = require("langs")


const input = process.argv[2];
const langCode = franc(input)

if (langCode ==='und') {
    console.log('Sorry it doenst work');
}
else console.log(langs.where("3",langCode).name.red);