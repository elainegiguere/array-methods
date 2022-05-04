

// Ici je reprends l'exemple avec des nouveau paramêtres

const words = ['ballon', 'plage', 'parasol', 'nageurs', 'sable', 'glacière'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["parasol", "nageurs", "glacière"]




// Ici je veux que la liste d'âge des 18 ans et plus

tableauAges = [ 10, 26, 16, 18, 32, 31, 17]

function estMajeur(tableauAges) {
  return tableauAges >= 18
}

let filtered = tableauAges.filter(estMajeur)
console.log(filtered);
// (4) [26, 18, 32, 31]