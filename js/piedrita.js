const message = document.querySelector('.message');
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const selectionPlayer = document.querySelector('.player-selection');
const selectionComputer = document.querySelector('.computer-selection');

let playerScore = 0;
let computerScore = 0;




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
        if (computerSelection === 'Rock') {
            log = 'Computer Rock ties your Rock';
        }
        else if (computerSelection === 'Paper') {
            log = 'Computer Paper slays your Rock';
        }
        else {
            log = 'Computer Scissors are destroyed by your Rock';
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            log = 'Computer Rock is deafeated your Paper';
        }
        else if (computerSelection === 'Paper') {
            log = 'Computer Paper ties your Paper';
        }
        else {
            log = 'Computer Scissors slay your Paper';
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            log = 'Computer Rock breaks your Scissors';
        }
        else if (computerSelection === 'Paper') {
            log = 'Computer Paper is rekt by your Scissors';
        }
        else {
            log = 'Computer Scissors ties your Scissors';
        }
    }
    return log;
}

/* Helper Functions */
function random(number) {
    return Math.floor(Math.random() * number + 1);
}
