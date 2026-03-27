import { anyNotationToDecimal } from "./NotacionDecimal/main.js";
import { anyNotationHexadecimalToDecimal } from "./NotacionDecimal/main1.js";
import { anyDoubleDecimalToAnyNotation } from "./Notacion/main3.js";
import { intDecimalToAnyNotation, intDecimalToHexadecimal } from "./NotacionDiv/main4.js";
import { octalAHexadecimal, octalABinario } from "./Notacion/main5.js";
import { binarioAOctal, binarioAHexadecimal } from "./Notacion/main6.js";
import { hexadecimalABinario, hexadecimalAOctal } from "./Notacion/main7.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("convert").addEventListener("click", calcular);
});

function calcular() {

    const numero = document.getElementById("input").value.trim().replace(",", ".");
    const origen = document.getElementById("from").value;
    const destino = document.getElementById("to").value;

    if (!numero) {
        swal("Error", "Debes ingresar un número", "warning");
        return;
    }

    const bases = {
        decimal: 10,
        binario: 2,
        octal: 8,
        hexadecimal: 16
    };

    const validaciones = {
        decimal: /^[0-9]+(\.[0-9]+)?$/,
        binario: /^[01]+(\.[01]+)?$/,
        octal: /^[0-7]+(\.[0-7]+)?$/,
        hexadecimal: /^[0-9a-fA-F]+(\.[0-9a-fA-F]+)?$/
    };

    if (!validaciones[origen].test(numero)) {
        swal("Error", "Número inválido para la base seleccionada", "error");
        return;
    }

    if (origen === destino) {
        swal("Resultado", numero, "success");
        return;
    }

    let resultado;

    // 🔥 CASOS DIRECTOS (más eficientes)
    if (origen === "octal" && destino === "hexadecimal") {
        resultado = octalAHexadecimal(numero);
    }
    else if (origen === "octal" && destino === "binario") {
        resultado = octalABinario(numero);
    }
    else if (origen === "binario" && destino === "octal") {
        resultado = binarioAOctal(numero);
    }
    else if (origen === "binario" && destino === "hexadecimal") {
        resultado = binarioAHexadecimal(numero);
    }
    else if (origen === "hexadecimal" && destino === "binario") {
        resultado = hexadecimalABinario(numero);
    }
    else if (origen === "hexadecimal" && destino === "octal") {
        resultado = hexadecimalAOctal(numero);
    }

    // 🔁 SI NO ES CASO DIRECTO → PASAR POR DECIMAL
    else {

        let decimal;

        if (origen === "decimal") {
            decimal = Number(numero);
        }
        else if (origen === "hexadecimal") {
            decimal = Number(anyNotationHexadecimalToDecimal(numero));
        }
        else {
            decimal = Number(anyNotationToDecimal(numero, bases[origen]));
        }

        if (destino === "decimal") {
            resultado = decimal.toString();
        }
        else if (destino === "hexadecimal") {
            resultado = decimal % 1 === 0
                ? intDecimalToHexadecimal(decimal)
                : anyDoubleDecimalToAnyNotation(decimal, 16);
        }
        else {
            resultado = decimal % 1 === 0
                ? intDecimalToAnyNotation(decimal, bases[destino])
                : anyDoubleDecimalToAnyNotation(decimal, bases[destino]);
        }
    }

    if (resultado === undefined || resultado === null || resultado === "") {
        swal("Error", "No se pudo convertir el número", "error");
        return;
    }

    swal("Resultado", String(resultado), "success");
}