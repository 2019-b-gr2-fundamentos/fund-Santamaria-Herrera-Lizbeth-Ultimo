//const numeroUno = 1; //notacion: camenlCase
var numeroDos = 2;
var resultado = 0;
//SUMA
resultado = 1 + 2;
//RESTAR
resultado = 1 - 2;
//MULTIPLLICAR
resultado = 1 * 2;
//DIVIDIR
resultado = 1 / 2;
//EXPONENCIAL
resultado = 1 ^ 2;
//MOD
resultado = 2 % 4; //0 -> residuo
resultado = 4 % 3; //1 -> residuo
resultado = 7 % 3; //1 -> residuo
console.log("pera" + 2);
// STRINGS
var mensaje = "\"Hola mundo\"";
var saludo = '\'Adio\s mundo\'';
console.log(mensaje + " 1\t 2\r 3\n " + saludo); // \n -> salto de linea  \t -> tab
// templete strings
var edad = 30;
var saludoEdad = "Mi edad es: \n" + edad; // ` -> Permite inyectar variables dentro el texto
var SaludoCompleto = mensaje + "\n" + saludo; // 
console.log(saludoEdad);
console.log(SaludoCompleto);
//contamos elementos
var nombreLongitud = "Vicente Adrian";
console.log(nombreLongitud.length);
console.log(nombreLongitud.trim());
//Cambiar mayusculas
console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLowerCase());
//console.log(nombreLongitud.replace("e","o"));
//console.log(nombreLongitud.replace("a","o"));  // replace -> primera que encuentra la reemplaza
//console.log(nombreLongitud.replace("\n","o")) //console.log(nombreLongitud.replace("buscamos","o=se reemplaza"))
console.log(nombreLongitud);
console.log(nombreLongitud.replace("x", "o"));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("a", "o"));
console.log(nombreLongitud);
console.log(nombreLongitud.search("z")); // -1
console.log(nombreLongitud.search("d")); //   indica la posicion
console.log(nombreLongitud.search("Adrian")); //search -> busca la primera ocurrencia e indica la posicion, si no encuentra (-1)
console.log(nombreLongitud.slice(0, 6)); // devuelve el pedazo del string en un rango
console.log(nombreLongitud.indexOf("a"));
console.log(nombreLongitud.indexOf("x")); //-1
console.log(nombreLongitud.includes(" ")); //booleano
console.log(nombreLongitud.includes("x")); //booleano
console.log(nombreLongitud.endsWith("x")); //booleano
console.log(nombreLongitud.startsWith("vice")); //booleano
console.log(nombreLongitud.substring(0, 6)); //




var COLOR_ROJO = 1; //camelCase
//NUMEROUNO     -> TODO MAYUSCULA (SEPARACION NO)
//NUMERO_UNO    -> mayusculas guion bajo
//NumeroUno     ->
//numerouno
//numero_uno 
