import { IsThereANumber } from "./validation.js";
import { anyNotationToDecimal } from "./NotacionDecimal/main.js";
import { anyNotationHexadecimalToDecimal } from "./NotacionDecimal/main1.js";
import { anyIntNotationToDecimal } from "./NotacionEntera/main2.js";
import { anyDoubleDecimalToAnyNotation } from "./Notacion/main3.js";
import { intDecimalToAnyNotation, intDecimalToHexadecimal } from "./NotacionDiv/main4.js";
import { octalAHexadecimal } from "./Notacion/main5.js";
import { octalABinario } from "./Notacion/main5.js";
import { binarioAOctal } from "./Notacion/main6.js";
import { binarioAHexadecimal } from "./Notacion/main6.js";
import { hexadecimalABinario } from "./Notacion/main7.js";
import { hexadecimalAOctal } from "./Notacion/main7.js";

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("convert").addEventListener("click", calcular);

});

function calcular() {

    const numero = document.getElementById("input").value.trim();
    const origen = document.getElementById("from").value; // De una notacion
    const destino = document.getElementById("to").value; // a otra notacion

    if (!numero) {
        swal("Error", "Debes ingresar un número", "warning");
        return;
    }

    if (IsThereANumber(numero)) {
        swal("Error", "No se permiten letras en el número", "error");
        return;
    }

    const num = Number(numero);

    if (isNaN(num)) {
        swal("Error", "El valor ingresado no es válido", "error");
        return;
    }

    let resultado;

    if (origen === "decimal") {

        if (Number.isInteger(num)) {
            if (destino === "hexadecimal") {
                resultado = intDecimalToHexadecimal(numero);
            } else {
                resultado = intDecimalToAnyNotation(numero, destino);
            }
        } else {
            resultado = anyDoubleDecimalToAnyNotation(numero, destino);
        }

    } else if (origen === "hexadecimal") {

        resultado = anyNotationHexadecimalToDecimal(numero);

    } else if (origen === "binario" || origen === "octal") {

        resultado = anyNotationToDecimal(numero, origen);

    }

    if (Array.isArray(resultado)) {
        resultado = resultado.join("");
    }

    if (resultado === undefined || resultado === null || resultado === "") {
        swal("Error", "No se pudo convertir el número", "error");
        return;
    }

    swal("Resultado", resultado.toString(), "success");
}