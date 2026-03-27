// || YA FUNCIONA NO TOCAR ||

//----------Import de funciones----------------->>
import { IsThereANumber } from "../validation.js"
//----------Import de funciones----------------->>

// Solo para Notaciones enteras (sin punto decimal)
export const anyIntNotationToDecimal = (num, base) => {

    if (!IsThereANumber(num)) {
        let arr = String(num).split('').map(Number);

        let result = 0

        for (let i = 0; i < arr.length; i++) {
            result = result * base + arr[i];
        }
        console.log(result);

        return String(result) // 🔥 retorno como string

    } else {
        let arrHex = String(num).split('');

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
            resultHex = resultHex * base + arrResultado[i];
        }
        console.log(resultHex);

        return String(resultHex) // 🔥 retorno como string
    }
}

anyIntNotationToDecimal(1011011, 2)