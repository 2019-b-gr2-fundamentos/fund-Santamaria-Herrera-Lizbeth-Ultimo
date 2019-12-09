//Arreglo
function imprimirArreglo(arreglo) {
    var tamaño = arreglo.length;
    for (var vecesRepite = 0; vecesRepite < tamaño; vecesRepite++) {
        var posicion = arreglo[vecesRepite];
        console.log(posicion);
    }
}
function main() {
    var arreglos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    imprimirArreglo(arreglos);
}
main();
