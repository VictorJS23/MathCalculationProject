export const octalAHexadecimal = (octal) => {
    // Asegurar que sea string
    octal = String(octal).trim().replace(",", ".");

    // Validar número octal (con o sin decimal)
    if (!/^[0-7]+(\.[0-7]+)?$/.test(octal)) {
        return "Error: número octal inválido";
    }

    let [parteEntera, parteDecimal] = octal.split(".");

    // 🔹 OCTAL → DECIMAL (parte entera)
    let decimalEntero = 0;
    for (let i = 0; i < parteEntera.length; i++) {
        decimalEntero = decimalEntero * 8 + Number(parteEntera[i]);
    }

    // 🔹 OCTAL → DECIMAL (parte decimal)
    let decimalFraccion = 0;
    if (parteDecimal) {
        for (let i = 0; i < parteDecimal.length; i++) {
            decimalFraccion += Number(parteDecimal[i]) * Math.pow(8, -(i + 1));
        }
    }

    // 🔹 DECIMAL → HEX (parte entera)
    let hexEntero = decimalEntero.toString(16).toUpperCase();

    // 🔹 DECIMAL → HEX (parte decimal)
    let hexDecimal = "";
    let fraccion = decimalFraccion;
    let precision = 10; // puedes ajustar

    while (fraccion > 0 && precision > 0) {
        fraccion *= 16;
        let digito = Math.floor(fraccion);
        hexDecimal += digito.toString(16).toUpperCase();
        fraccion -= digito;
        precision--;
    }

    // 🔹 RETORNO SIEMPRE STRING
    if (hexDecimal.length > 0) {
        return String(hexEntero + "." + hexDecimal);
    } else {
        return String(hexEntero);
    }
}

let result = octalAHexadecimal(34.5)

console.log(result)

//---------------------------------------------------------->>

export const octalABinario = (octal) => {
    // Convertir a string y normalizar coma a punto
    octal = String(octal).trim().replace(",", ".");

    // Validar número octal (entero o decimal)
    if (!/^[0-7]+(\.[0-7]+)?$/.test(octal)) {
        return "Error: número octal inválido";
    }

    let [parteEntera, parteDecimal] = octal.split(".");

    // 🔹 OCTAL → DECIMAL (parte entera)
    let decimalEntero = 0;
    for (let i = 0; i < parteEntera.length; i++) {
        decimalEntero = decimalEntero * 8 + Number(parteEntera[i]);
    }

    // 🔹 OCTAL → DECIMAL (parte decimal)
    let decimalFraccion = 0;
    if (parteDecimal) {
        for (let i = 0; i < parteDecimal.length; i++) {
            decimalFraccion += Number(parteDecimal[i]) * Math.pow(8, -(i + 1));
        }
    }

    // 🔹 DECIMAL → BINARIO (parte entera)
    let binEntero = decimalEntero.toString(2);

    // 🔹 DECIMAL → BINARIO (parte decimal)
    let binDecimal = "";
    let fraccion = decimalFraccion;
    let precision = 10; // puedes aumentar si quieres más exactitud

    while (fraccion > 0 && precision > 0) {
        fraccion *= 2;
        let bit = Math.floor(fraccion);
        binDecimal += bit.toString();
        fraccion -= bit;
        precision--;
    }

    // 🔹 RETORNAR COMO STRING
    if (binDecimal.length > 0) {
        return String(binEntero + "." + binDecimal);
    } else {
        return String(binEntero);
    }
}

let result2 = octalABinario(34.5)

console.log(result2)