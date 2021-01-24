
let friend = 6
let nombre = "Alejandro Nava APredes"
friend++;
console.log(friend)

console.log(nombre[nombre.length - 1])

function sumaString(nom) {
    return nom.toUpperCase() + " el tamano es " + nom.length
}

console.log(sumaString("Amalia Soto "))
console.log(sumaString(nombre))

function divideDos(a, b) {
    dvi = a / b;
    var textoDiv = " La division de " + a + " entre " + b + " es " + dvi;
    return textoDiv
}

function sumaDos(a, b) {
    (a, b)
    dvi = a + b;
    var textoDiv = " La Suma de " + a + " entre " + b + " es " + dvi;
    return textoDiv
}

function gen() {
    let r = Math.round(Math.random() * 100);
    return r;

}

console.log(divideDos(gen(), gen()))

console.log(sumaDos(gen(), gen()))

let isGameOpen = true;

let userin = prompt("dame un numerio ");

if (userin ==7){
    console.log("Eres un suertudo")
}
