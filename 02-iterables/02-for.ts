// for
//1) Declarar una varible
//2)Condicion (Expresión)
//3)Incrementar, disminuir la variable

for(let numeroExDeMiCrush = 7;
    numeroExDeMiCrush > 0; // != 0  OK      >= 0    NO
    numeroExDeMiCrush--){ // -- decrecer
    console.log('ES CAN DA LO!', numeroExDeMiCrush)
}

for(let numeroExDeMiCrush = 0;
    numeroExDeMiCrush <= 6 ;    
    numeroExDeMiCrush++){ 
    console.log('ES CAN DA LO!', numeroExDeMiCrush)
}

for(let numeroExDeMiCrush = 0;
    numeroExDeMiCrush < 7 ;     
    numeroExDeMiCrush++){ // ++ aumenta
    console.log('ES CAN DA LO!', numeroExDeMiCrush)
}


//ARREGLO
// 1 Elemento ( Varible const numero = 1)
//Conjunto del MISMO ELEMENTO  ( [1, 2, 3, 4, 5] }
//Conjunto DIFERENTES ELEMENTOS ( [1, "abc", true] )

const arregloNumeros = [1, 2, 3, 4, 5];

// REASIGNAR -> let
//arregloNumeros = [1, 2, 3, 4, 5, 6]  -> NO

arregloNumeros.push(6);         //FUNCION
console.log('arregloNumeros', arregloNumeros)

arregloNumeros.pop();
console.log('arregloNumeros', arregloNumeros)

//Acceder a cada elemento del arreglo POR EL INDICE
const indiceElementoUno=0;
arregloNumeros[indiceElementoUno]; //1
arregloNumeros[0];
const indiceElementoCinco = 4
arregloNumeros [indiceElementoCinco]; //5
arregloNumeros[4]; //5

//Acceder al elemento 5
// 1) INDICE
// [1, 2, 3, 4, 5]
//  0  1  2  3  4
//INDICES
console.log('elemento',arregloNumeros[indiceElementoCinco]);
console.log(arregloNumeros[4]);
//5



//Arreglo
// 1) Elementos
// 2) Indices (0 index based) -> POSICION
// 3) Longitud -> # Elementos

console.log(arregloNumeros.length);


//FOR
// 1) let tamaño = arregloNumeros.length     // 5
// 2) tamaño > 0
// 3) --

for(let tamaño = arregloNumeros.length;
    tamaño > 0;
    tamaño--){
        console.log(tamaño)
 
}



