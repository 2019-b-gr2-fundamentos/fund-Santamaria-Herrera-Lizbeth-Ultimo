"use strict";
//NODE MODULES
//const sumaLibreria = require('libreria-ls/lib/suma');
exports.__esModule = true;
//Importar todo el contenido con el nombre 'sumaLibreria'
//del paquete 'libreria-ls/lib/suma'
var sumaLibreria = require("libreria-ls/lib/suma");
var respuesta = sumaLibreria(1, 2);
console.log('respuesta es: ', respuesta);
