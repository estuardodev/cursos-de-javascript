// Valores Truthy y Falsy
// Los valores truthy y falsy son valores verdaderos y falsos cuando se realiza una coerción de cualquier tipo
// a booleano

// Función Boolean(); nos dice que tipo de valor es un dato

// FALSOS:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

// VERDADEROS:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function () { }); //Cualquier función es verdadera también