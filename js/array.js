
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
    intentos++;

}
console.log(" Escogiste el verdadero " + target + ` en ${intentos} intentos`);

let inpu = prompt("que te gustaria hacer?")

const todos = ['colecciona huevos', 'limpiar banio']

while (inpu !== 'quit' && inpu !== 'q') {
    inpu = prompt("que te gustaria hacer?")
    if (inpu === 'list') {
        console.log(" ****")
        for (let index = 0; index < todos.length; index++) {
            console.log(`${index + 1}: ${todos[index]} `);
        }
    } else if (inpu === 'new') {
        const newTodo = prompt("Dame tu nueva tarea ");
        todos.push(newTodo);
        console.log(` ${newTodo} agragado a la lista `);
    } else if (inpu === 'delete') {
        const borra = prompt("Ok da el index a borrar");
        todos.splice(borra, 1);
        console.log(` ${borra} indice ha sido borrado `);
    }

}

console.log(" saliste de la app ")
console.log(" ")

function diceRoll(caras) {
    return Math.floor(Math.random() * caras)

}
console.log(diceRoll(1000));

function rant(message) {

    var str = message;
    let res = [str.toUpperCase(), str.toUpperCase(), str.toUpperCase()];
    return res;
}
console.log(rant("woop"));


function add(x, y) {
    return x + y;
}
console.log(add(10, 100))
const numeros = [3, 5, 76, 2, 45, 5, 32, 2, 4, 5]



numeros.forEach(function (elem) {
    console.log(elem)
})

const tenTimes = numeros.map(function (elem) {
    return elem * 10;
})

console.log(tenTimes)

function cleanNames(arr) {
    const newArr = arr.map(function (str) {
        return str.trim();
    })
    return newArr;
}
setTimeout(() => {
    console.log(cleanNames([" asfsg  ", "fasdf  fw  "]))
}, 3000)

const id = setInterval(
    () => { console.log(Math.random()) }, 1400
)
clearInterval(id)


numeros.filter(n => {
    return n > 5
})

// function dado(numeros){
//     if (numeros===undefined) {
//         numeros = 6
//     }
//     return Math.floor(Math.random()*numeros) + 1
// }

function dado(numeros = 6) {
    return Math.floor(Math.random() * numeros) + 1
}

const usuario = {
    email: 'aleju@gmail.com',
    pass: '12345',
    first: 'Alejandro',
    last: 'Nava',
    born: 1992,
    deid: 2090,
    cita: 'CDMX'
}

const firstName = usuario.first;

const { email } = usuario;

console.log(firstName + " su correo es: " + email)