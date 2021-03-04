
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