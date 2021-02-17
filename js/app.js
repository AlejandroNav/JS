
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

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
for (let i = 1; i <= answer; i++) {

    if (i%3===0 && i%5===0) {
        console.log("FizzBuzz");
        
    } 
    else if (i%3===0 ) {
        console.log("Fizz");
        
    } 
    else if ( i%5===0) {
        console.log("Buzz");
        
    }
    else {
        console.log(i);
    }
    
  }

let userin = prompt("dame un numerio ");

if (userin ==7){
    console.log("Eres un suertudo")
}
