


// Ici je reprend un example de mdn avec d'autre données
   
    const chiffres = [ 15, 16, 17, 18, 24, 67, 45]
   
    function isBiggerThan10(chiffres) {
    return chiffres > 18;
    } 
    console.log (chiffres.some(isBiggerThan10));
    // chiffres.some(isBiggerThan10);  // true


// Un autre exemple avec de nouvelles données dans. Je compren que la fonction est simplifié entre les parenthèses
    const myArray = [2, 5, 8, 1, 4]

    console.log(myArray.some(x => x > 10));  // false



// Je ne comprend pas cet exemple de mdn avec le modulus. Est-possible de le décortiquer en class?
        const array = [1, 2, 3, 4, 5];

        // checks whether an element is even
        const even = (element) => element % 2 === 0;

        console.log(array.some(even));
        // expected output: true
