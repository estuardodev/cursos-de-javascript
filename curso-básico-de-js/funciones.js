// Funciones en Js
// Existen 2 tipos de funciones, declarativas y expresión:

// Declarativas
/**
 * Para las declarativas utilizamos la siguiente sintaxis:
 * function <nombre>(){
 * }
 * Esta forma podemos mandar a llamar a la funcion antes de que sea declarada
 */

function miFuncion() {
    return 3; // Con return hacemos un retorno o devolvemos un valor por medio de la función
}

// Para invocar o llamar una función, lo hacemos con su nombre y () al final
miFuncion()

// Expresión
/**
 * Para las funciones de expresión utilizamos variables para almacenar la función, también es conocida como
 * funciones anónimas
 * Sintaxis:
 * var <nombre> = function(){
 * }
 * De esta forma solo podemos mandar a llamarla luego de ser declarada
 */
// Las funciones pueden recibir parametros, son elementos que puede usar una función
var miFuncion = function (a, b) {
    return a + b;
}

// Para invocar o llamar una función que recibe argumentos, utilizamos su nombre y (), dentro deben ir los argumentos
miFuncion(4, 5)

// console.log() es una función que nos da Js para poder imprimir en la consola del navegador   
console.log(miFuncion(10, 11))

/**
 * Para concatenar elementos en JS podemos usar, `` y ${variable} 
 * Sintaxis:
 * console.log(`Hola ${variable}`)
 */