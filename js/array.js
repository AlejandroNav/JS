
var cars = ["Saab", "Volvo", "BMW"];

cars[0] = Date.now();

cars.push("Lemon al final");
// push adds to the end

document.getElementById("demo0").innerHTML = cars;
cars.pop();
// pop removes from the end
document.getElementById("demo").innerHTML = cars;
cars.shift();
// shift removes from the start
document.getElementById("demo2").innerHTML = cars;
// unshift adds to the start
cars.unshift("HOLA");
cars.unshift("HOLA1");
cars.unshift("Cosita");
document.getElementById("demo3").innerHTML = cars;

let reddiCom = {
    user: "Esternocleido",
    arrivotos: 23,
    bajivotos: 44,
    score: 545,
    tags: ["Hilarius", "funny", "mexican"]
}
console.log("Hsdfasdgfaerg")

// for (let index = 1; index <= 16; index++) {
//     console.log("hola " + index)
// }

for (let index = 0; index < 201; index++) {
    if (index % 10 == 0) {
        console.log(index)
    }

}
for (let index = 25; index >= 0; index--) {
    if (index % 5 === 0) {
        console.log(index)
    }

}

for (let indexy = 0; indexy < cars.length; indexy++) {
    console.log(indexy + "  " + cars[indexy].toUpperCase());
    for (let index = 0; index < cars.length; index++) {
        console.log(indexy + "  " + index + "  " + cars[index].toUpperCase());

    }
}


let dificultad = parseInt(prompt("Dame el numero mas alto "));
while (!dificultad) {
    dificultad = parseInt(prompt("Dame  un numero valido"))
}

const target = Math.floor(Math.random() * dificultad) + 1;
console.log(target)

let mensajito = parseInt(prompt("Dame el primer guess "));
let intentos = 1;


while (true) {
    intentos++;

    if (mensajito === target) {
        break;
    } else {
        console.log("Equivocado no es " + mensajito)
        if (mensajito > target) {
            mensajito = parseInt(prompt(" Dame otro numero " + mensajito + "  es muy alto"));
        } else {
            mensajito = parseInt(prompt(" Dame otro numero " + mensajito + "  es muy bajo"));
        }
    }
}
console.log(" Escogiste el verdadero " + target + ` en ${intentos} intentos`);
