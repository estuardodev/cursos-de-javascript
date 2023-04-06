// Scope en Js
// El scope es el alcance que tienen las variables
/**
 * SCOPE GLOBAL:
 * var nombre = "Estuardo"; // Toda parte del código tiene acceso a la variable
 * 
 * SCOPE LOCAL:
 * function Edad(){
 *  var edad = 19; // Solo la función tiene acceso a la variable
 *  return `Hola ${edad}`;
 * }
 */


var name = "Estuardo";

function Saludar() {
    var apellido = "Ramirez";
    return `Hola ${name} ${apellido}`
}

Saludar();
name;
apellido;