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

//-----------------------Parte Hexadecimal------------------------------>>

let numH = 62
let baseH = 16

let residuos = [];

function decimalHexadecimal(n) {

    while (n > 0) {
        residuos.push(n % baseH); // guardas el residuo
        n = Math.floor(n / baseH); // divides entre 2
    }

    return residuos.reverse()
}

console.log(decimalHexadecimal(numH))

const Equals = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
};

let nuevoArr = []

for (let i = 0; i < residuos.length; i++) {
    if (residuos[i] >= 10) {
        nuevoArr.push(Equals[residuos[i]])
    } else {
        nuevoArr.push(residuos[i])
    }
}

let final = nuevoArr.join("")

console.log(final)
