//----------Import de funciones----------------->>
import { anyIntNotationToDecimal } from "./NotacionEntera/main2";
//----------Import de funciones----------------->>

// Valida si hay una letra en el Input
export const IsThereANumber = (number) => {
    return Array.from(number).some(c => /[a-zA-Z]/.test(c));
}

//--------------test------------------->>
const btn = document.getElementById("convert");

btn.addEventListener("click", function () {
    const numero = document.getElementById("input").value;

    if (numero === "") {
        swal("No has ingresado ningun numero!!");
        return;
    }

    swal("Número ingresado: " + numero);
});

