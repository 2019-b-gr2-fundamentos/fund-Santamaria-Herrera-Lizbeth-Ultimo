//NODE MODULES
//const sumaLibreria = require('libreria-ls/lib/suma');

//Importar todo el contenido con el nombre 'sumaLibreria'
//del paquete 'libreria-ls/lib/suma'


import * as restaLibreria from 'libreria-ls/lib/resta'
const respuesta = restaLibreria(1,2);
console.log('respuesta de la resta es: ', respuesta);

import * as sumaLibreria from 'libreria-ls/lib/suma'
const respuest = sumaLibreria(1,2);
console.log('respuesta de la suma es: ', respuest);

import * as multiplicacionLibreria from 'libreria-ls/lib/multiplicacion'
const respues = multiplicacionLibreria(1,2);
console.log('respuesta de la multiplicaion es: ', respues);

import * as divisionLibreria from 'libreria-ls/lib/division'
const respue= divisionLibreria(1,2);
console.log('respuesta de la division es: ', respue);

import * as areaCirculoLibreria from 'libreria-ls/lib/area-circulo'
const respu = areaCirculoLibreria(2);
console.log('respuesta del area del circulo es: ', respu);

import * as areaTrianguloLibreria from 'libreria-ls/lib/area-triangulo'
const resp = areaTrianguloLibreria(1,2);
console.log('respuesta del area del triangulo es: ', resp);

import * as distanciaMruvLibreria from 'libreria-ls/lib/distancia-MRUV'
const res = distanciaMruvLibreria(1,2,3);
console.log('respuesta de la distancia en MRUV es: ', res);

import * as PI from 'libreria-ls/lib/pi'
console.log('La constante pi es : ', PI);


