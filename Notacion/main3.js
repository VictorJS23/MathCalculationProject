export const anyDoubleDecimalToAnyNotation = (num, base) => {
    let partes = num.toString().split(".")
    //Convertimos el numero a String y luego separamos por punto
    //Esto pasa el "25.5" a ["25", "5"]

    let entero = Number(partes[0])
    //Convertimos en numero la primera posicion
    let decimal = partes[1] ? Number("0." + partes[1]) : 0
    //Convertimos en decimal la segunda posicion adjunta de un 0

    console.log(entero)
    console.log(decimal)

    let countEntero = 0
    let countDecimal = -1

    let powers = []
    let negativePowers = []

    while (Math.pow(base, countEntero) <= entero) {
        powers.push(Math.pow(base, countEntero))
        countEntero++
    }

    powers.push(Math.pow(base, countEntero)) //Para llegar a la ultima potencia hay que usarlo una vez mas
    console.log(powers);

    //-------Parte negativa------->>

    let suma = 0
    let precision = 15 //  LIMITE PARA EVITAR LOOP INFINITO

    while (suma < decimal && precision > 0) {
        let valor = Math.pow(base, countDecimal)

        if (suma + valor <= decimal) {
            negativePowers.push(valor)
            suma += valor
        }
        countDecimal--
        precision-- //  IMPORTANTE
    }

    console.log(negativePowers)

    let fullArray = [...negativePowers.reverse(), ...powers].reverse()

    console.log(fullArray)

    let result = [] // array con respuesta final
    let sum = num

    for (let i = 1; i < fullArray.length; i++) {
        if (sum >= fullArray[i]) {
            sum = sum - fullArray[i]
            result.push(1)
        } else {
            result.push(0)
            continue
        }
    }

    console.log(result)

    let cantidad = fullArray.filter(n => n % 1 !== 0).length
    // Con esto validamos la cantidad de decimales o mejor dicho las potencias negativas usadas

    console.log(cantidad) // aqui vamos la cantidad de decimales existentes

    let posicion = result.length - cantidad

    result.splice(posicion, 0, ".")
    //Ingresa un elemento en la posicion deseada, 0 para indicar que no eliminara nada, el elemento a agregar

    console.log(result)

    let resultadoMostrable = result.join("") //  cambio: quitar comas
    console.log(resultadoMostrable)

    return String(resultadoMostrable) //  cambio: asegurar retorno string
}