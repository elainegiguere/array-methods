
// Ici j'ai repris le même concept que mdn

const array1 = [10, 20, 30, 40];
const map1 = array1.map(x => x * 5);
console.log(map1);
// expected output: Array [50, 100, 150, 200]

// Ici je voulais voir si ça marchait avec des strings

const tableau = ['pomme', 'orange', 'banane'];
const map2 = tableau.map(x => x + 's');
console.log(map2);
// expected output: Array ["pommes", "oanges", "bananes"]