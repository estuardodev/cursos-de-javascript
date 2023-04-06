// Coerción
// Existen Coercion implicita y explicita

// Coerción Implicita
// La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript.

var a = 4 + "7" // Resultado 47
// Según JS queremos concatenar el 4 y el 7

var b = 4 * "7" // Resultado 28
// Acá segun Js si queriamos usar un 7 en número


// Coerción Explicita
// La coerción explícita es la transformación de tipos de datos donde controlamos el resultado
var num1 = 10
var resultado = num1 + "10" // Resultado 1010
// Acá se concatena num1 (number) y "10" (string)

var c = String(num1) // Obligamos a num1 pasar a ser string cuando era number
