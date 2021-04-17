const joke = require('give-me-a-joke')

joke.getRandomDadJoke (function(joke) {
    console.dir(joke);
});

// To get a customized joke
var fn = "Jackie";
var ln = "Chan";
joke.getCustomJoke (fn, ln, function(joke) {
    
console.log(joke);
});
