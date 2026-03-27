// Convierte cualquier notacion a DECIMAL
// pedir a que notacion excepto hexadecimal

// let num = 1010100.0101; // Binario que en decimal es 11.75
// let base = 2 // la notacion actual

export const anyNotationToDecimal = (num, base) => {
    let [entero, decimal] = String(num).split('.');

    let arrEntero = Array.from(entero, Number);
    let arrDecimal = decimal ? Array.from(decimal, Number) : [];

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

    return String(finalResult) // 🔥 retorno como string
}