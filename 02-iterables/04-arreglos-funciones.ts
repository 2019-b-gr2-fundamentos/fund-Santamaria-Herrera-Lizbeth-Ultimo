const arregloNumeros = [1,2,3,4,5,6,7,8,9,10];

//Acceder
//Necesito:Indice
console.log(arregloNumeros[6]);    //7
//Añadir al final
//Necesito: Elemento a añadirse
arregloNumeros.push(11);
//Borrar al final
arregloNumeros.pop();
// Anadir un indice
//Necesito: Indice
//          Elemento
arregloNumeros.splice(1,0,1.1)  //posicion, cuantos/cual voy a borrar, que voy a agregar
console.log(arregloNumeros);
//Borrar
arregloNumeros.splice(7,1);
console.log(arregloNumeros);

//BUSCAR EL INDICE DE UN ELEMENTO 

arregloNumeros.indexOf(5); // 5
arregloNumeros.indexOf(7); // indexof ->>conocer el indice

console.log(arregloNumeros.indexOf(5));
console.log(arregloNumeros.indexOf(7));

arregloNumeros.splice(5,0,9)

arregloNumeros[0] = 999;
console.log(arregloNumeros)