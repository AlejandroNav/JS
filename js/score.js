const jugador1 = document.querySelector("#p1Boton")
const jugador2 = document.querySelector("#p2Boton")

const mostar1 = document.querySelector('#p1')
const mostar2 = document.querySelector('#p2')

const resetear = document.querySelector("#reset")

const limiteSeleccion = document.querySelector('#limites')



let limite = 3;
let marcador1 = 0;
let marcador2 = 0;
let isTerminado = false;

limiteSeleccion.addEventListener('change', function () {
    limite = parseInt(this.value)
    console.log(limite);
    resetF();
})

jugador1.addEventListener('click', function () {
    if (!isTerminado) {
        marcador1 += 1;
        if (marcador1 === limite) {
            isTerminado = true;
            mostar1.classList.add('has-text-success')
            mostar2.classList.add('has-text-danger')
            jugador2.disabled = true;
            jugador1.disabled = true;
        }
        mostar1.textContent = marcador1;
    }
})

jugador2.addEventListener('click', function () {
    if (!isTerminado) {
        marcador2 += 1;
        if (marcador2 === limite) {
            isTerminado = true;
            mostar2.classList.add('has-text-success')
            mostar1.classList.add('has-text-danger')
            mostar1.disabled = true;
            mostar2.disabled = true;
        }
        mostar2.textContent = marcador2
    }
})

resetear.addEventListener('click', resetF)

function resetF() {
    marcador1 = marcador2 = 0
    mostar1.textContent = marcador1;
    mostar2.textContent = marcador2;
    isTerminado = false;
    mostar2.classList.remove('has-text-success','has-text-danger')
    mostar1.classList.remove('has-text-danger','has-text-success')
    jugador2.disabled = false;
    jugador1.disabled = false;

}
