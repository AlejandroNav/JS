const message = document.querySelector('.message');
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const selectionPlayer = document.querySelector('.player-selection');
const selectionComputer = document.querySelector('.computer-selection');

let playerScore = 0;
let computerScore = 0;

// Start Game when user clicks on an image
images.forEach((image) =>
    image.addEventListener('click', () => {
        if (playerScore >= 5 || computerScore >= 5) {
            return;
        }
        game(image.dataset.image);
    })
);
/* Game Logic */

function getComputerSelection() {
    let computerNumber = random(3);
    let computerGuess = '';

    switch (computerNumber) {
        case 1:
            computerGuess = 'Rock';
            break;
        case 2:
            computerGuess = 'Paper';
            break;
        case 3:
            computerGuess = 'Scissors';
            break;
        default:
            break;
    }
    return computerGuess;
}

function playRound(playerSelection, computerSelection) {
    let log = '';
    if (playerSelection === 'Rock') {
        if (computerSelection  === 'Rock') {

        }
        else if (computerSelection  === 'Rock') {

        }
        else {

        }

    }
    else if (playerSelection === 'Paper') {
        if (computerSelection  === 'Rock') {

        }
        else if (computerSelection  === 'Rock') {

        }
        else {

        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection  === 'Rock') {

        }
        else if (computerSelection  === 'Rock') {

        }
        else {

        }
    }




    return log;
}