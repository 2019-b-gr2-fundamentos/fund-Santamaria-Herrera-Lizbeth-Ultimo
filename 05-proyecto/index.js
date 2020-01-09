"use strict";
//NODE MODULES
//const sumaLibreria = require('libreria-ls/lib/suma');
exports.__esModule = true;
//Importar todo el contenido con el nombre 'sumaLibreria'
//del paquete 'libreria-ls/lib/suma'
var restaLibreria = require("libreria-ls/lib/resta");
var respuesta = restaLibreria(1, 2);
console.log('respuesta de la resta es: ', respuesta);
var sumaLibreria = require("libreria-ls/lib/suma");
var respuest = sumaLibreria(1, 2);
console.log('respuesta de la suma es: ', respuest);
var multiplicacionLibreria = require("libreria-ls/lib/multiplicacion");
var respues = multiplicacionLibreria(1, 2);
console.log('respuesta de la multiplicaion es: ', respues);
var divisionLibreria = require("libreria-ls/lib/division");
var respue = divisionLibreria(1, 2);
console.log('respuesta de la division es: ', respue);
var areaCirculoLibreria = require("libreria-ls/lib/area-circulo");
var respu = areaCirculoLibreria(2);
console.log('respuesta del area del circulo es: ', respu);
var areaTrianguloLibreria = require("libreria-ls/lib/area-triangulo");
var resp = areaTrianguloLibreria(1, 2);
console.log('respuesta del area del triangulo es: ', resp);
var distanciaMruvLibreria = require("libreria-ls/lib/distancia-MRUV");
var res = distanciaMruvLibreria(1, 2, 3);
console.log('respuesta de la distancia en MRUV es: ', res);
var PI = require("libreria-ls/lib/pi");
console.log('La constante pi es : ', PI);
