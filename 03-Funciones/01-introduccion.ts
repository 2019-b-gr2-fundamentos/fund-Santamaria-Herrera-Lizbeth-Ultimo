function log(
    cualquierCosa  //Parametro
    ){
    console.log(cualquierCosa);
}

log("Hola Mundo") 

/* una funcion es un proceso
un proceso tiene:
entradas -> parametros
salidas
cuando un proceso no tiene salida se denomina: void
un funcion tiene 
paremetros: con parametros o sin parametros
salidas: con salidas o sin salidas
una funcion es como un contrato que se debe cumplir
si el proceso esta mal hecho, pueden existir fallos en las salidas
*/

function noHayElTexto(){
    console.log("No hay el texto");
}
noHayElTexto();

function sumarDosNumeros(
    a: number,
    b:number
    ):number{
    return a+b;
}
sumarDosNumeros(4,2);