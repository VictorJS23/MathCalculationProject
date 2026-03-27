export const binarioAOctal = (binario) => {
    // Normalizar entrada
    binario = String(binario).trim().replace(",", ".");

    // Validar (solo 0 y 1, con decimal opcional)
    if (!/^[01]+(\.[01]+)?$/.test(binario)) {
        return "Error: número binario inválido";
    }

    let [parteEntera, parteDecimal] = binario.split(".");

    // 🔹 Parte entera → agrupar de 3 en 3 (desde la derecha)
    let enteroPadded = parteEntera.padStart(
        Math.ceil(parteEntera.length / 3) * 3,
        "0"
    );

    let octalEntero = "";
    for (let i = 0; i < enteroPadded.length; i += 3) {
        let grupo = enteroPadded.slice(i, i + 3);
        octalEntero += parseInt(grupo, 2).toString(8);
    }

    // Quitar ceros a la izquierda (pero dejar al menos uno)
    octalEntero = octalEntero.replace(/^0+/, "") || "0";

    // 🔹 Parte decimal → agrupar de 3 en 3 (desde la izquierda)
    let octalDecimal = "";
    if (parteDecimal) {
        let decimalPadded = parteDecimal.padEnd(
            Math.ceil(parteDecimal.length / 3) * 3,
            "0"
        );

        for (let i = 0; i < decimalPadded.length; i += 3) {
            let grupo = decimalPadded.slice(i, i + 3);
            octalDecimal += parseInt(grupo, 2).toString(8);
        }

        // Opcional: quitar ceros finales
        octalDecimal = octalDecimal.replace(/0+$/, "");
    }

    // 🔹 Retornar SIEMPRE string
    return octalDecimal.length > 0
        ? `${octalEntero}.${octalDecimal}`
        : `${octalEntero}`;
}

let result = binarioAOctal(110.10)
console.log(result);

//---------------------------------------------------------------->>

export const binarioAHexadecimal = (binario) => {
    // Normalizar entrada
    binario = String(binario).trim().replace(",", ".");

    // Validar (solo 0 y 1, con decimal opcional)
    if (!/^[01]+(\.[01]+)?$/.test(binario)) {
        return "Error: número binario inválido";
    }

    let [parteEntera, parteDecimal] = binario.split(".");

    // 🔹 Parte entera → agrupar de 4 en 4 (derecha a izquierda)
    let enteroPadded = parteEntera.padStart(
        Math.ceil(parteEntera.length / 4) * 4,
        "0"
    );

    let hexEntero = "";
    for (let i = 0; i < enteroPadded.length; i += 4) {
        let grupo = enteroPadded.slice(i, i + 4);
        hexEntero += parseInt(grupo, 2).toString(16).toUpperCase();
    }

    // Quitar ceros a la izquierda (pero dejar uno)
    hexEntero = hexEntero.replace(/^0+/, "") || "0";

    // 🔹 Parte decimal → agrupar de 4 en 4 (izquierda a derecha)
    let hexDecimal = "";
    if (parteDecimal) {
        let decimalPadded = parteDecimal.padEnd(
            Math.ceil(parteDecimal.length / 4) * 4,
            "0"
        );

        for (let i = 0; i < decimalPadded.length; i += 4) {
            let grupo = decimalPadded.slice(i, i + 4);
            hexDecimal += parseInt(grupo, 2).toString(16).toUpperCase();
        }

        // Opcional: quitar ceros finales
        hexDecimal = hexDecimal.replace(/0+$/, "");
    }

    // 🔹 Retornar SIEMPRE string
    return hexDecimal.length > 0
        ? `${hexEntero}.${hexDecimal}`
        : `${hexEntero}`;
}

let result2 = binarioAHexadecimal(1101111)
console.log(result2);