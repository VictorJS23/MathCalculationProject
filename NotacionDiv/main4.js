let num = 35
let base = 2

function decimalABinario(n) {
    let residuos = [];

    while (n > 0) {
        residuos.push(n % base); // guardas el residuo
        n = Math.floor(n / base); // divides entre 2
    }

    return residuos.reverse().join('');
}

console.log(decimalABinario(num)); // "100011"