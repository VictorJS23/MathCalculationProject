export const anyNotationHexadecimalToDecimal = (num) => {
    let arr = String(num).split('');

    let Equals = {
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    };

    let nuevoArr = [];

    for (let i = 0; i < arr.length; i++) {
        let valor = arr[i].toLowerCase();

        if (Equals.hasOwnProperty(valor)) {
            // Si es letra hexadecimal, la convertimos
            nuevoArr.push(Equals[valor]);
        } else {
            // Si es número o punto, lo dejamos igual
            nuevoArr.push(arr[i]);
        }
    }

    console.log(nuevoArr)

    let arrResultado = [];

    for (let i = 0; i < nuevoArr.length; i++) {
        if (nuevoArr[i] === '.') {
            arrResultado.push('.'); // conservar el punto
        } else {
            arrResultado.push(Number(nuevoArr[i])); // convertir a entero
        }
    }

    console.log(arrResultado);

    let arrEntero = []
    let arrDecimal = []

    for (let i = 0; i < arrResultado.length; i++) {
        if (arrResultado[i] === '.') {
            break
        } else {
            arrEntero.push(arrResultado[i])
        }
    }

    let indiceDecimal = arrResultado.findIndex(n => n === '.') + 1
    console.log(indiceDecimal);

    // 🔥 FIX: evitar error si no hay parte decimal
    if (indiceDecimal > 0) {
        for (let i = indiceDecimal; i < arrResultado.length; i++) {
            arrDecimal.push(arrResultado[i])
        }
    }

    console.log(arrEntero)
    console.log(arrDecimal)

    let base = 16
    let countEntero = arrEntero.length - 1
    let countDecimal = -1

    let resultEntero = 0
    let resultDecimal = 0

    for (let i = 0; i < arrEntero.length; i++) {
        resultEntero += arrEntero[i] * Math.pow(base, countEntero)
        countEntero--
    }

    for (let i = 0; i < arrDecimal.length; i++) {
        resultDecimal += arrDecimal[i] * Math.pow(base, countDecimal)
        countDecimal--
    }

    let finalResult = resultEntero + resultDecimal

    console.log(finalResult);

    return String(finalResult) //  retorno como string
}