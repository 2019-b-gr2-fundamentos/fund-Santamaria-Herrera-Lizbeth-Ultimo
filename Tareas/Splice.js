/*Desarrollar un programa que me permita agregar datos a un arreglo para lo cual se debe:
1) ingresar el arreglo
2) Ingresar el indice, la ubicacion en la cual se añadirá el elemento
3) ingresar el elemento que desea agregar*/
//Tarea: no usar splice,Programar el splice con un elemento, hacer el pseudocogico y el diagrama de flujo, crear mi propia forma
/*const arregloNumero = [1,2,3,4,5,6,7,8,9,10];
arregloNumero.splice(1,0,1.1)
 console.log(arregloNumero)
 */
var arregloNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numero = prompt("Que numero desea ingresar");
var numero1 = Number(numero);
var posicion = prompt("En que posicion desea ingresarlo");
var numero2 = Number(posicion);
arregloNumero.push(9);
console.log(arregloNumero);
/*for (let arreglo = 0; arreglo < numero2; arreglo++) {
    const elementos = arregloNumero.indexOf[arreglo];
    console.log(elementos)
}*/ 
