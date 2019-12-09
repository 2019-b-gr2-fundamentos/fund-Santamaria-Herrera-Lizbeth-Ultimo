function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function main() {
    calculadora();
}
function calculadora() {
    var operacion = prompt('Selecciona una operacion: \n"suma-1", \n"resta-2", \n"multiplicacion-3", \n"divivison-4", \n"terminamos-5"');
    var esSuma = operacion == 'suma' ||
        operacion == '1' ||
        operacion == 'suma-1';
    var esResta = operacion == 'resta' ||
        operacion == '2' ||
        operacion == 'resta-2';
    var esMultiplicacion = operacion == 'multiplicacion' ||
        operacion == '3' ||
        operacion == 'multiplicacion-3';
    var esDivision = operacion == 'division' ||
        operacion == '4' ||
        operacion == 'divivison-1';
    var esterminamos = operacion == 'terminamos' ||
        operacion == '5' ||
        operacion == 'terminamos-1';
    var estaValida = esSuma || esResta || esMultiplicacion || esDivision;
    if (estaValida) {
        var numUno = +prompt("Numero 1");
        var numDos = +prompt("Numero 2");
        var resultado = 0;
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        if (esResta) {
            resultado = restar(numUno, numDos);
        }
        if (esMultiplicacion) {
            resultado = multiplicar(numUno, numDos);
        }
        if (esDivision) {
            resultado = dividir(numUno, numDos);
        }
        console.log(resultado);
    }
    else {
        if (esterminamos) {
            console.log("Adios:'(");
        }
        else {
            calculadora();
        }
    }
}
/*
1) Seleccionar operacion
2.1) La seleccion no es VALIDA
    2.1.1) Vuelve a seleccionar la operacion
2.2) La seleccion es VALIDA
    2.2.1) Ingresar primer numero
    2.2.2) Ingresar segundo numero
    2.2.3) Ejecutar la operacion
 
*/ 
