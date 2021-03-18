const p1Objeto = {
    score: 0,
    button: document.querySelector("#p1Boton"),
    display: document.querySelector('#p1')
}
const p2Objeto = {
    score: 0,
    button: document.querySelector("#p2Boton"),
    display: document.querySelector('#p2')
}
const resetear = document.querySelector("#reset")
const limiteSeleccion = document.querySelector('#limites')
let limite = 3;
let isTerminado = false;

// ******EVENT LSITENERS*******************************************************
limiteSeleccion.addEventListener('change', function () {
    limite = parseInt(this.value)
    console.log(limite);
    resetF();
})
p2Objeto.button.addEventListener('click', function () {
    updateScore(p1Objeto, p2Objeto)
})
p1Objeto.button.addEventListener('click', function () {
    updateScore(p2Objeto, p1Objeto)
})
resetear.addEventListener('click', resetF)

// ******FUNCTIONS*************************************************************
function resetF() {
    isTerminado = false;
    for (let p of [p1Objeto, p2Objeto]) {
        p.score = 0
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
}
function updateScore(j1, j2) {
    if (!isTerminado) {
        j1.score += 1;
        if (j1.score === limite) {
            isTerminado = true;
            j1.display.classList.add('has-text-success')
            j2.display.classList.add('has-text-danger')
            j1.button.disabled = true;
            j2.button.disabled = true;
        }
        j1.display.textContent = j1.score
    }
}
