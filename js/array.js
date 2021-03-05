
var cars = ["\nSaab", "\nVolvo", "\nBMW"];

cars[0] = Date.now();

cars.push(" \nLemon al final");
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
for (let index = 0; index <= 10; index++) {
    console.log("hola" + index)

}