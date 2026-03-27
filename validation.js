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
