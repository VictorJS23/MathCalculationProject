//----------Import de funciones------------------------->>
import { anyNotationToDecimal } from "./NotacionDecimal/main"
import { anyNotationHexadecimalToDecimal } from "./NotacionDecimal/main1"
import { anyIntNotationToDecimal } from "./NotacionEntera/main2"
import { anyDoubleDecimalToAnyNotation } from "./Notacion/main3"
import { intDecimalToAnyNotation } from "./NotacionDiv/main4"
import { intDecimalToHexadecimal } from "./NotacionDiv/main4"
//----------Import de funciones------------------------->>

//-------------validaciones----------------------------->>

// Valida si hay una letra en el Input
export const IsThereANumber = (number) => {
    return Array.from(number).some(c => /[a-zA-Z]/.test(c));
}

// Valida que si sea decimal, que no sea entero, y que no tenga letras
const ItsADecimalAndNotHexadecimal = (number) => {
    const input = Number(number)
    return !isNaN(input) && !Number.isInteger(input)
}

// valida que si sea entero, que no sea deicmal y que no tenga letras
const itsAnIntAndNotDoubleOrHexadecimal = (number) => {
    const input = Number(number)
    return !isNaN(input) && Number.isInteger(input)
}
//-------------validaciones----------------------------->>

//-----------------test--------------------------------->>
const btn = document.getElementById("convert");

btn.addEventListener("click", function () {
    const numero = document.getElementById("input").value;

    if (numero === "") {
        swal("No has ingresado ningun numero!!");
        return;
    }

    swal("Número ingresado: " + numero);
});

