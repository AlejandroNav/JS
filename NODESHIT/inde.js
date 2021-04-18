const joke = require('give-me-a-joke')
const colory = require('colors')
const figgy = require("figlet")

joke.getRandomDadJoke(function (joke) {
    console.dir(joke);
});

// To get a customized joke
var fn = "Jackie";
var ln = "Chan";
joke.getCustomJoke(fn, ln, function (joke) {

    console.log(joke.trap);
});


figgy('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});