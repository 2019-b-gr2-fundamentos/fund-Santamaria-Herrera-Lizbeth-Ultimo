/*Desarrollar un programa que me permita agregar datos a un arreglo para lo cual se debe:
1) ingresar el arreglo
2) Ingresar el indice, la ubicacion en la cual se añadirá el elemento
3) ingresar el elemento que desea agregar*/

//Tarea: no usar splice,Programar el splice con un elemento, hacer el pseudocogico y el diagrama de flujo, crear mi propia forma

/*const arregloNumero = [1,2,3,4,5,6,7,8,9,10];
arregloNumero.splice(1,0,1.1)
 console.log(arregloNumero)
 */
let arregloNumero = [1,2,3,4,5,6,7,8,9,10];
 const numero = prompt("Que numero desea ingresar");
 const posicion = prompt("En que posicion desea ingresarlo");
 const numero1 = Number (numero)
 const numero2 = Number (posicion)
 //arregloNumero.push(numero1)
 console.log(arregloNumero)

 for (let arreglo = 1; arreglo < numero2; arreglo++) {
    const elemento = arregloNumero.indexOf(arreglo);
    console.log(arregloNumero[elemento])
 }
  console.log(numero1)
for (let arreglos = numero2 ; arreglos <= arregloNumero.length; arreglos++) {
    const elementos = arregloNumero.indexOf(arreglos);
    console.log(arregloNumero[elementos])
}
