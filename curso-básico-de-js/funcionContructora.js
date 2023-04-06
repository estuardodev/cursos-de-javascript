// Funcion Constructora
// Nos ayuda a evitarnos escribir cosas de forma manual

/**
 * SINTAXIS:
 * // LA SINTAXIS VARIA DEPENDIENDO DE LA NECESIDAD
 * function X(X, Y, Z){
 *  this.x = x
 *  this.y = y
 *  this.z = z
 *  this.d = function(){
 *          console.log("...")
 *      }
 * }
 */

function Auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio
    this.detalle = function () {
        console.log(`El auto ${this.marca} es modelo ${this.modelo} del año ${this.anio}`)
    }
}

// RETO
var marcas = ["Toyota", "Tesla", "Honda"]
var modelos = ["Model 3", "Corolla", "Civic"]
var anios = [2000, 2018, 2015]

var autos = []

for (i = 0; i < marcas.length; i++) {
    autos.push(new Auto(marcas[i], modelos[i], anios[i]))
}

for (i = 0; i < autos.length; i++) {
    console.log(autos[i])
}  
