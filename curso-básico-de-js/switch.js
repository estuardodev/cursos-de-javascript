// Condicion Switch
/**
 * SINTAXIS
 * switch (expresion){
 *  case 1:{
 *      // BLOQUE
 *      break;
 *  }
 *  case 2:{
 *      // Bloque 2
 *      break;
 *  }
 *  default:{
 *      // Bloque default, parecido a else 
 *  }
 * }
 */

var semaforo = function (color) {
    switch (color) {
        case "Rojo": {
            console.log("ALTO");
            break;
        }
        case "Amarillo": {
            console.log("Despacio");
            break;
        }
        case "Verde": {
            console.log("Dele mijo dele")
            break;
        }
        default:
            console.log("EL SEMAFORO NO SIRVE");
    }
}

