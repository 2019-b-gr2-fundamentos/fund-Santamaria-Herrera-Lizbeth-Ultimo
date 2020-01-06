//NODE MODULES
//const sumaLibreria = require('libreria-ls/lib/suma');

//Importar todo el contenido con el nombre 'sumaLibreria'
//del paquete 'libreria-ls/lib/suma'

import * as sumaLibreria from 'libreria-ls/lib/suma'
const respuesta = sumaLibreria(1,2);
console.log('respuesta es: ', respuesta);