// Solo para Notaciones enteras (sin punto decimal)

let num = 3304
let base = 5 // Cualquier notacion a decimal

let arr = String(num).split('').map(Number);

console.log(arr);

let result = 0

for (let i = 0; i < arr.length; i++) {
    result = result * base + arr[i];
}

console.log(`El numero "${num}" de base "${base}" en decimal es : ${result}`)

//---------------Notacion Hexadecimal-------------->

let hex = "2ad"
let baseHex = 16

let arrHex = String(hex).split('');

let Equals = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
};

let nuevoArr = [];

for (let i = 0; i < arrHex.length; i++) {
    let valor = arrHex[i].toLowerCase();

    if (Equals.hasOwnProperty(valor)) {
        // Si es letra hexadecimal, la convertimos
        nuevoArr.push(Equals[valor]);
    } else {
        nuevoArr.push(arrHex[i]);
    }
}

console.log(nuevoArr)

let arrResultado = [];

for (let i = 0; i < nuevoArr.length; i++) {
    arrResultado.push(Number(nuevoArr[i])); // convertir a entero

}

console.log(arrResultado);

let resultHex = 0

for (let i = 0; i < arrResultado.length; i++) {
    resultHex = resultHex * baseHex + arrResultado[i];
}

console.log(`El numero "${hex}" de base "${baseHex}" en decimal es : ${resultHex}`)