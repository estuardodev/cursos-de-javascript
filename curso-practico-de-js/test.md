## Test de JS

#### Responde las siguientes preguntas en la sección de comentarios:
**¿Qué es una variable y para qué sirve?**

> Es un espacio en memoria que nos sirve para almacenar un valor.

**¿Cuál es la diferencia entre declarar e inicializar una variable?**

> Al declarar simplemente designamos el nombre de la variable, al inicializar designamos el valor que contendrá dicha variable

**¿Cuál es la diferencia entre sumar números y concatenar strings?**

> Al sumar números realizamos lo que hacemos en matemática y al concatenar strings es como juntar dos o más strings en un orden establecido.

**¿Cuál operador me permite sumar o concatenar?**

> El operador que nos permite concatenar y sumar es el operador de +


------------


#### Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
> Nombre --> String
Apellido --> String
Nombre de usuario en Platzi --> String
Edad --> Number
Correo electrónico --> String
Mayor de edad --> Boolean
Dinero ahorrado --> Number o String (String si se desea guardar el símbolo de la moneda)
Deudas --> String

#### Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

    // Variables
    let Nombre;
    let Apellido;
    let Nombre_de_usuario_en_Platzi ;
    let Edad;
    let Correo_electrónico;
    let Mayor_de_edad;
    let Dinero_ahorrado;
    let Deudas;
#### Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

    Nombre completo (nombre y apellido)
    Dinero real (dinero ahorrado menos deudas)
    Nombre = "Estuardo"
    Apellido = "Ramírez" 
    var dineroReal = Dinero_ahorrado - Deudas;
    
    console.log(`Mi nombre es ${Nombre} ${Apellido} y tengo ${dineroReal} quetzales de dinero`
#### Responde las siguientes preguntas en la sección de comentarios:
**¿Qué es una función?**

> Son un conjunto de sentencia que podemos utilizar para generar ciertas acciones con valores.

**¿Cuándo me sirve usar una función en mi código?**

> Cuando utilizamos varias veces un mismo código y así reutilizar partes de nuestro código

**¿Cuál es la diferencia entre parámetros y argumentos de una función?**

> El argumento es el valor real que le pasamos a una función y el parámetro es el dato o valor que vamos a solicitar para realizar ciertas acciones

#### Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

    // Codigo de ejercicio
    const name = "Juan David";
    const lastname = "Castro Gallego";
    const completeName = name + lastname;
    const nickname = "juandc";
    
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
    
    // Mi Código
    function persona(name, lastname, nickname){
    	const completeName = name + lastname;
    	console.log(`Mi nombre es ${complateName} , pero prefiero que me digas ${nickname}.`);
    }


#### Responde las siguientes preguntas en la sección de comentarios:
**¿Qué es un condicional?**
> Un condicional evalua si una expresion o condición es verdadera o falsa

**¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?**
> Existe la condición if ... else ...
La condicion con uso de operador ternario que nos ayuda a evaluar una expresión en una linea de código 
Y switch que se maneja por medio de casos

**¿Puedo combinar funciones y condicionales?**
> Si se puede

#### Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
    const tipoDeSuscripcion = "Basic";
    
    switch (tipoDeSuscripcion) {
       case "Free":
           console.log("Solo puedes tomar los cursos gratis");
           break;
       case "Basic":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
           break;
       case "Expert":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
           break;
       case "ExpertPlus":
           console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
           break;
    }


------------



    const tipoDeSuscripcion = "Basic";
    
    if (tipoDeSuscripcion === "Free"){
        console.log("Solo puedes tomar los cursos gratis");
    } else if(tipoDeSuscripcion === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } else if(tipoDeSuscripcion === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else if(tipoDeSuscripcion === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
	
#### Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).	Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

    const tipoDeSuscripcion = "Basic";
    if (tipoDeSuscripcion === "Free"){
        console.log("Solo puedes tomar los cursos gratis");
    }
    if(tipoDeSuscripcion === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    if(tipoDeSuscripcion === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    if(tipoDeSuscripcion === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
	
### Ciclos
#### Responde las siguientes preguntas en la sección de comentarios:
**¿Qué es un ciclo?**
> Un ciclo es una estrucutra de control que permite realizar una o varias instrucciones mientras una condicion sea verdadera

**¿Qué tipos de ciclos existen en JavaScript?**
> for, for of, while

**¿Qué es un ciclo infinito y por qué es un problema?**
> Es cuando una condición o una expresión nunca sera falsa y el bloque de código se ejecutara por siempre, es un problema porque nuestro código nunca pasara de esa parte y puede detener el equipo

**¿Puedo mezclar ciclos y condicionales?**
> Si se puede

#### Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
    for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    }
    
    for (let i = 10; i >= 2; i--) {
        console.log("El valor de i es: " + i);
    }
    
    var contador = 0;
    while contador < 5{
        console.log("El valor de contador es: " + contador);
        contador++
    }
    
    var contador1 = 10;
    while contador1 >= 2{
        console.log("El valor de contador1 es: " + contador1);
        contado1--
    }

#### Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

    let respuesta = prompt("¿Cuánto es 2 + 2?");
    while(respuesta != "4") {
      respuesta = prompt("Respuesta incorrecta. ¿Cuánto es 2 + 2?");
    }
    alert("¡Felicidades, respondiste correctamente!");
	
### Listas
#### Responde las siguientes preguntas en la sección de comentarios:
**¿Qué es un array?**
> Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

**¿Qué es un objeto?**
> Un objeto es una estructura de datos que permite almacenar valores mediante propiedad-valor a través de la sintaxis de llaves y separado por comas

**¿Cuándo es mejor usar objetos o arrays?**
> Un array es mejor utilizarlo cuando necesitamos varios datos en una sola variable y un un objeto cuando necesitamos identificar cada dato que tengamos dentro de la variable

**¿Puedo mezclar arrays con objetos o incluso objetos con arrays?**:
> Si se puede mesclar

#### Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
    var array = ["Hola", "Mundo"]
    
    var funcion = function (objeto) {
        console.log(objeto[0])
    }
    
    funcion(array)
	
#### 	Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
    var array = ["Hola", "Mundo"]
    
    var funcion = function (objeto) {
        for (var i = 0; i < objeto.length; i++) {
            console.log(objeto[i])
        }
    }
    
    funcion(array)
	
#### 	Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
    var array = {
        nombre: "Estuardo",
        apellido: "Ramírez",
        username: "estuardodev",
        github: "github.com/estuardodev",
        twitter: "twitter.com/estuardodev"
    }
    
    function Imprimir(objeto) {
        for (let object in objeto) {
            console.log(object + ":" + objeto[object])
        }
    }
    
    Imprimir(array)