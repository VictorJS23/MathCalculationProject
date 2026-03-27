export const hexadecimalAOctal = (hex) => {
    // Normalizar entrada
    hex = String(hex).trim().replace(",", ".").toUpperCase();

    // Validar (0-9 y A-F, con decimal opcional)
    if (!/^[0-9A-F]+(\.[0-9A-F]+)?$/.test(hex)) {
        return "Error: número hexadecimal inválido";
    }

    let [parteEntera, parteDecimal] = hex.split(".");

    // 🔹 HEX → DECIMAL (parte entera)
    let decimalEntero = parseInt(parteEntera, 16);

    // 🔹 HEX → DECIMAL (parte decimal)
    let decimalFraccion = 0;
    if (parteDecimal) {
        for (let i = 0; i < parteDecimal.length; i++) {
            decimalFraccion += parseInt(parteDecimal[i], 16) * Math.pow(16, -(i + 1));
        }
    }

    // 🔹 DECIMAL → OCTAL (parte entera)
    let octalEntero = decimalEntero.toString(8);

    // 🔹 DECIMAL → OCTAL (parte decimal)
    let octalDecimal = "";
    let fraccion = decimalFraccion;
    let precision = 10; // puedes ajustar

    while (fraccion > 0 && precision > 0) {
        fraccion *= 8;
        let digito = Math.floor(fraccion);
        octalDecimal += digito.toString(8);
        fraccion -= digito;
        precision--;
    }

    // 🔹 RETORNAR SIEMPRE STRING
    return octalDecimal.length > 0
        ? `${octalEntero}.${octalDecimal}`
        : `${octalEntero}`;
}

let result = hexadecimalAOctal('afc')
console.log(result);

//------------------------------------------------------->>

export const hexadecimalABinario = (hex) => {
    // Normalizar entrada
    hex = String(hex).trim().replace(",", ".").toUpperCase();

    // Validar (0-9 y A-F, con decimal opcional)
    if (!/^[0-9A-F]+(\.[0-9A-F]+)?$/.test(hex)) {
        return "Error: número hexadecimal inválido";
    }

    let [parteEntera, parteDecimal] = hex.split(".");

    // 🔹 Parte entera → cada dígito hex = 4 bits
    let binEntero = parteEntera
        .split("")
        .map(d => parseInt(d, 16).toString(2).padStart(4, "0"))
        .join("")
        .replace(/^0+/, "") || "0";

    // 🔹 Parte decimal → cada dígito hex = 4 bits
    let binDecimal = "";
    if (parteDecimal) {
        binDecimal = parteDecimal
            .split("")
            .map(d => parseInt(d, 16).toString(2).padStart(4, "0"))
            .join("")
            .replace(/0+$/, ""); // opcional: quitar ceros finales
    }

    // 🔹 RETORNAR SIEMPRE STRING
    return binDecimal.length > 0
        ? `${binEntero}.${binDecimal}`
        : `${binEntero}`;
}

let result2 = hexadecimalABinario('f')
console.log(result2);