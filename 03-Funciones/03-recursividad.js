function imprimirMensajeNVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log('Se termino');
    }
    else {
        console.log(mensaje);
        var nuevoNumeroVeces = numeroVeces - 1;
        imprimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}
/*
function main(){
    imprimirMensajeNVeces('Hola', 5);
}
main();
*/
var arregloDosDimensiones = [
    [1, 2, 3, 4],
    [4, 5, 6, 7,] //indice y longitud
];
arregloDosDimensiones[0]; // []1, 2, 3, 4]
arregloDosDimensiones[0].length; //4
arregloDosDimensiones[1]; //[4,5,6,7,]
arregloDosDimensiones.length; //2
//1) definir el tamaño
//2)repetir el calculo N veces (N = tamaño)
//3.1) 1er elemento del 1er arreglo
//3.2) ultimo elemento del 2do arreglo
//3.3) Sumar los elementos
//3.4) 1er elemento + 1 = 2do elemento 1er arreglo
//3.5)ultimo elemento -1 = penultimo del 2do arreglo
//3.6) sumar los elementos
// multiplicar el 0 * n elemento +
// multiplicar el 0 + 1 * n - 1 elemento +
// multiplicar el 0 + 2 * n - 2 elemento +
arregloDosDimensiones[0][0];
arregloDosDimensiones[0][1];
arregloDosDimensiones[1][0];
arregloDosDimensiones[1][1];
function productoCruz(vectores) {
    //[0,0, 1 * 4 - 2 * 3]
    var tamaño = arregloDosDimensiones[0].length;
    //console.log(tamaño)
    var posicion2 = tamaño;
    for (var vecesQueSeRepite = 0; vecesQueSeRepite < tamaño; vecesQueSeRepite++) {
        var posicion = arregloDosDimensiones[0][vecesQueSeRepite];
        console.log(posicion);
        var posicioN2 = arregloDosDimensiones[1][tamaño - vecesQueSeRepite - 1];
        console.log(posicioN2);
        var producto = posicion * posicion2;
        console.log(producto);
    }
}
function main() {
    var arreglos = [
        [1, 2, 3, 4],
        [4, 5, 6, 7,]
    ];
    productoCruz(arreglos);
}
main();
