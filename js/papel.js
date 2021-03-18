const rockBtn = document.querySelector("#roca")
const paperBtn = document.querySelector("#papel")
const scissorBtn = document.querySelector("#tijera")

const message = document.querySelector("#messag")

const pcShow = document.querySelector('#p1s')
const youShow = document.querySelector('#p2s')


let isGame = false;

let pcScore = 0;
let youScore = 0;
let pcMove = 0;
let youMove = 0;
let maximum = 3;


rockBtn.addEventListener('click', function () { // 1 is Rock
    if (!isGame) {
        youMove = 1;
        pcMove = compuRandom();
        if (pcMove === 1) {
            youScore + 0;
        } else if (pcMove === 2) {
            youScore += 1;
        } else {
            pcScore += 1;
        }
        message.textContent = ('Rock vs ' + pcTextMove(pcMove) )

        turn()
        
    }
})
paperBtn.addEventListener('click', function () { // 2 is paper
    if (!isGame) {
        youMove = 2;
        pcMove = compuRandom();
        if (pcMove === 1) {
            youScore += 1;
        } else if (pcMove === 2) {
            youScore += 0;
        } else {
            pcScore += 1;
        }

        message.textContent = (' Paper vs ' + pcTextMove(pcMove))
        turn()

    }
})
scissorBtn.addEventListener('click', function () { // 3 is scissors
    if (!isGame) {
        youMove = 3
        pcMove = compuRandom();
        if (pcMove === 1) {
            pcScore += 1;
        } else if (pcMove === 2) {
            youScore += 1;
        } else {
            youScore += 0;
        }
        message.textContent = ('Scissors vs ' + pcTextMove(pcMove))
        turn()
    }
})

function compuRandom() {
    numero = Math.ceil(Math.random() * 3);
    return numero;

}
function pcTextMove(pcMove) {
    if (pcMove === 1) {
        return " PC  Rock"
    } else if (pcMove === 2) {
        return " PC  Paper"
    }
    else {
        return "  PC  Scissors "
    }
}
function turn() {
    pcShow.textContent = pcScore
    youShow.textContent = youScore
    if (pcScore === maximum) {
        isGame = true;
        pcShow.classList.add('winner')
        youShow.classList.add('loser')
    }if (youScore === maximum) {
        isGame = true;
        pcShow.classList.add('loser')
        youShow.classList.add('winner')
    }
}