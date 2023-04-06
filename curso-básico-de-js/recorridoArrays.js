// Métodos de recorrido de Arrays
// Existen métodos de array para recorrerlos y devolver un valor. Entre estos están dos muy importantes: map y filter


// Filter
// El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados
/**
 * SINTAXIS:
 * // ARRAY PRINCIPAL
 * var nuevoArray = ARRAY.filter(function(parametro){
 *  return parametro.llave == X;
 * });
 * 
 * Esto nos devolvera lo que tenga X en el array principal pero en un nuevo array
 */

var libros = [
    { nombre: "Pensadores", costo: 500 },
    { nombre: "Pensadores2", costo: 5000 },
    { nombre: "Java", costo: 200 },
    { nombre: "Rinoceronte", costo: 1222 },
]

var nuevoArray = libros.filter(function (libro) {
    return libro.costo <= 1000;
});

console.log(nuevoArray);

// Map
// El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformado
// mediante una función (callback)

var nuevorArrayMap = libros.map(function (libro) {
    return libro.nombre
});

console.log(nuevorArrayMap);


// Otros métodos
// Metodo Find
var nuevoArrayFind = libros.find(function (libro) {
    return libro.costo = 500;
});

console.log(nuevoArrayFind)

// Metodo forEach 
// El metodo forEach de los arrayys consiste en ejecutar una función.
// Para cada uno de los elementos iterados, este metodo no retorna ningun valor.

libros.forEach(function (libro) {
    console.log(libro.nombre);
})


// Método some
// El método some es inmutable y cosiste en retornar un valor lógico verdadero si existe almenos un elemento
// que cumpla la condicion establecida en la función.