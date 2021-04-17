const joke = require('give-me-a-joke')
const colory = require('colors')
joke.getRandomDadJoke (function(joke) {
    console.dir(joke);
});

// To get a customized joke
var fn = "Jackie";
var ln = "Chan";
joke.getCustomJoke (fn, ln, function(joke) {
    
console.log(joke.trap);
});
