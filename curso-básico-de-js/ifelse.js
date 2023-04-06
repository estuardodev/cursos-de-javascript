// Condicionales if else
// Validamos si algo es verdadero o es falso y frente a esto ejecutamos algo
/**
 *  if (condicion){
 *      // Se ejecuta si es verdadero
 *  }else{
 *      // Se ejecuta si es falso
 * }
 */

if (true) {
    console.log("Hola Mundo");
} else {
    console.log("Hola Mundo Triste");
}


// Si deseamos hacer varias validaciones usamos else if
if (true) {
    console.log("Hola Mundo");
} else if (false) {
    console.log("Hola Mundo Triste");
} else {
    console.log("Chales");
}


// Operador Ternario
// Es realizar una condicion de una manera mas corta y en una sola linea
true ? console.log("Hola Mundo") : console.log("Hola Mundo Triste");

// RETO DE PIEDRA PAPEL O TIJERA
var opcion1 = "Piedra";
var opcion2 = "Papel";
var opcion3 = "Tijera";

function Juego(opcion, cpu) {
    if (opcion === opcion1 && cpu === opcion3) {
        console.log("Ganaste");
    } else if (opcion === opcion2 && cpu === opcion1) {
        console.log("Ganaste");
    } else if (opcion === opcion3 && cpu === opcion2) {
        console.log("Ganaste");
    } else if (opcion === opcion1 && cpu === opcion1 || opcion === opcion2 && cpu === opcion2 || opcion === opcion3 && cpu === opcion3) {
        console.log("EMPATE")
    } else {
        console.log("Perdiste")
    }
}