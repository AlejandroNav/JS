
const inventors = [
    { first_name: "Reamonn", second_name: "Fouch", born: 1547, dead: 1607 },
    { first_name: "Sebastian", second_name: "Waeland", born: 1541, dead: 1632 },
    { first_name: "Linus", second_name: "Winny", born: 1533, dead: 1626 },
    { first_name: "Ive", second_name: "Sey", "born": 1539, dead: 1609 },
    { first_name: "Bibby", second_name: "Attride", born: 1542, dead: 1600 },
    { first_name: "Ellery", second_name: "Simonin", born: 1540, dead: 1626 },
    { first_name: "Hattie", second_name: "Bonefant", born: 1552, dead: 1621 },
    { first_name: "Cecil", second_name: "Tuttle", born: 1551, dead: 1596 }];

console.log(inventors[5]);
nombres = ['Katrina, Romeo ', 'Caron, Gallop ', 'Pearle, Ryans ', 'Sonja, Tutson',
    'Lang, Augustin', 'Lora, Sanborn ', 'Cherish, Lapp ', 'Laine, Mascio',
    'Coral, Via ', 'Tamica ,Monzon ', 'Scarlett, Landy ', 'Gilma ,Hoey ',
    'Darryl, Muntz  ', 'Lavette ,Skeete  ', 'Bok, Armstead  ', 'Fleta, Barbee ',
    'Lezlie ,Wakefield', 'Ambrose, Marriner', 'Marcene ,Holland', 'Ghislaine, Hodnett',
    'Shiloh, Downing ', 'Elsa, Farhat ', 'Ilse, Sidener', 'Jacquiline, Linthicum',
    'Sarina, Stemple', 'Jonathan, Byron', 'Valentine, Yeaman', 'Qiana, Wiggin ',
    'Trudy, Jamieson',]

console.log(nombres[10]);

// filter regresa los elementos que sumplen la condicion a un nuevo array
const quince = inventors.filter(inventor =>
    (inventor.born >= 1535 && inventor.born <= 1545)
)
console.table(quince);


// map take san array does something and return a ne one of the same lenght
const fullNames = inventors.map(inventor => inventor.first_name +' '+ inventor.second_name)
console.log( fullNames);

// sort 

const orden = inventors.sort(function (a,b) {
    if (a.born > b.born) {
        return 1
    } else {
        return -1
    }
    
})
console.table(orden);

/// reduce te da un total que regresa 

const total = inventors.reduce((total,inventor) =>{
    return total + (inventor.dead - inventor.born)
})
console.log(total);