//If
//Ejercicio 1
console.log("Programa que escribe en letras el nombre de los meses de acuerdo a su número correspondiente ");
const  mesString = prompt("Ingresa mes"); 
const mes = Number (mesString) 

if (mes == 1  ){
    console.log ("Enero");
} else {
    if (mes == 2 ){
        console.log ("Febrero");
    } else {
        if(mes == 3 ){
            console.log ("Marzo");;
        }else{
            if(mes == 4 ){
                console.log ("Abril");
            }else{
                if(mes == 5 ){
                    console.log ("Mayo");
                }else{
                    if(mes == 6 ){
                        console.log ("Junio");
                    }else{
                        if(mes == 7 ){
                            console.log("Julio");
                        }else{
                            if(mes == 8){
                                console.log("Agosto");
                            }else{
                                if(mes == 9){
                                    console.log("Septiembre");
                                }else{
                                    if(mes == 10){
                                        console.log("Octubre");
                                    }else{
                                        if(mes == 11){
                                            console.log("Noviembre");
                                        }else{
                                            if(mes == 12){
                                                console.log("Diciembre");
                                            }else{
                                                console.log("Dato no definido")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
        }
    }
}
 

//Ejercicio 2
console.log("Programa que reparte las tareas a realizar durante un dia de parrillada, entre 3 miembros de una familia ")
console.log("Los miembros de la familia son: Roberto, Laura, Julio")
console.log("Las tareas a realizar son: \n1: Asar la carne, \n2:preparar los acompañantes (choclo, papas,habas etc), \n3: Emplatar lo que ya esta cocinado")
console.log("Seleccionar la tarea a realizar con el numero correspondiente")
 
const actividad1String = prompt("Que realizara Roberto")
const actividad1 = Number (actividad1String) 

if(actividad1 == 1){
    console.log("Roberto asará la carne");
}else{
    if(actividad1 == 2){
        console.log("Roberto prepara los acompañantes");
    }else{
        if(actividad1 == 3){
            console.log("Roberto emplatara la comida");
        }else{
            console.log("Elija una actividad a realizar")
        }
    }
}

const actividad2String = prompt("Que realizara Laura")
const actividad2 = Number (actividad2String)

if(actividad2 == 1 && actividad2 == actividad1){
    console.log("Roberto ya esta realizando esa actividad escoger otra actividad");
}else{
    if(actividad2 == 2 && actividad2 == actividad1){
        console.log("Roberto ya esta realizando esa actividad escoger otra actividad");
    }else{
        if(actividad2 == 3 && actividad2 == actividad1){
            console.log("Roberto ya esta realizando esa actividad escoger otra actividad");
        }else{
            if(actividad2 == 1){
                console.log("Laura asará la carne");
            }else{
                if(actividad2 == 2){
                    console.log("Laura prepara los acompañantes");
                }else{
                    if(actividad2 == 3){
                        console.log("Laura emplatara la comida");
                    }else{
                console.log("Elija una actividad")
                    }
                }
            }
        }
    }
}

const actividad3String = prompt("Que realizara Julio")
const actividad3 = Number (actividad3String) 

if(actividad3 == 1 && actividad3 == actividad1){
    console.log("Roberto ya esta realizando esa actividad escoger otra actividad");
}else{
    if(actividad3 == 2 && actividad3 == actividad1){
        console.log("Roberto ya esta realizando esa actividad escoger otra actividad");
    }else{
        if(actividad3 == 3 && actividad3 == actividad1){
            console.log("Roberto ya esta realizando esa actividad escoger otra actividad");
        }else{
            if(actividad3 == 1 && actividad3 == actividad2){
                console.log("Laura ya esta realizando esa actividad escoger otra actividad");
            }else{
                if(actividad3 == 2 && actividad3 == actividad2){
                    console.log("Laura ya esta realizando esa actividad escoger otra actividad");
                }else{
                    if(actividad3 == 3 && actividad3 == actividad2){
                        console.log("Laura ya esta realizando esa actividad escoger otra actividad");
                    }else{
                        if(actividad3 == 1){
                            console.log("Julio Laura asará la carne");
                        }else{
                            if(actividad3 == 2){
                                console.log("Julio prepara los acompañantes");
                            }else{
                                if(actividad3 == 3){
                                    console.log("Julio emplatara la comida");
                                }else{
                                 console.log("Elija una actividad a realizar");
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


// Ejemplo 3
console.log("Test de inteligencia\nResponder con una \"1\" si es verdadero y una \"0\" si es falso")
console.log("Cada pregunta vale 1 punto, al final daremos el puntaje final")
console.log("Empezamos")
 
const pregunta1String = prompt("¿La Guerra de los Cien Años duro 100 años?")
const pregunta1 = Number(pregunta1String);
console.log("1) ¿La Guerra de los Cien Años duro 100 años?")
if( pregunta1 == 1){
    console.log("Error, Duró 116 años (de 1337 a 1453)");
    console.log( "point1 = 0") 
}else{
    console.log("correcto");
    console.log( "point1 = 1") 
}

const pregunta2String = prompt("¿Los sombreros de Panamá, se fabrican en Panama?")
const pregunta2 = Number (pregunta2String)
console.log("2) ¿Los sombreros de Panamá, se fabrican en Panama?")
if( pregunta2 == 1){
    console.log("Error, \nSon elabrados en Ecuador)");
    console.log("point2 = 0") 
}else{
    console.log("correcto");
    console.log("point2 = 1") 
}

const pregunta3String = prompt("¿La tripa de gato (catgut) usado en cirugía, se obtiene de los gatos?")
const pregunta3 = Number (pregunta3String)
console.log("3) ¿La tripa de gato (catgut) usado en cirugía, se obtiene de los gatos?")
if( pregunta3 == 1){
    console.log("Error, \nSe obtiene de ovejas y caballos como cualquiera lo sabe.)");
    console.log("point3 = 0") 
}else{
    console.log("correcto");
    console.log("point3 = 1") 
}

const pregunta4String = prompt("¿ Los rusos celebran la Revolución de Octubre, en Octubre?")
const pregunta4 = Number(pregunta4String)
console.log("4) ¿ Los rusos celebran la Revolución de Octubre, en Octubre?")
if( pregunta4 == 1){
    console.log("Error, \nSe celebra en Noviembre.El calendario ruso tenía una diferencia de 13 días en aquel entonces y con el sistema occidental la fecha cae en Noviembre)");
    console.log("point4 = 0") 
}else{
    console.log("correcto");
    console.log("point4 = 1") 
}

const pregunta5String = prompt("¿Los pinceles de pelo de camello, se elaboran con pelo de camello?")
const pregunta5 = Number (pregunta5String)
console.log("5) ¿Los pinceles de pelo de camello, se elaboran con pelo de camello?")
if( pregunta5 == 1){
    console.log("Error, \nSe elaboran con el pelo de las ardillas de los pinares)");
    console.log("point5 = 0") 
}else{
    console.log("correcto");
    console.log("point5 = 1") 
}

const pregunta6String = prompt("¿las Islas Canarias, que están en el Atlántico, tienen ese nombre por la presencia de canarios?")
const pregunta6 = Number (pregunta6String)
console.log("6) ¿las Islas Canarias, que están en el Atlántico, tienen ese nombre por la presencia de canarios?")
if( pregunta6 == 1){
    console.log("Error, \nel nombre deriva del latín \"Insularia Canaria\" que significa -obvio- \"Tierra de los Perros\" (canis =erros)) ");
    console.log("point6 = 0") 
}else{
    console.log("correcto");
    console.log("point6 = 1") 
}

const pregunta7String = prompt("¿El nombre del rey Jorge VI, EsJorge VI ?")
const pregunta7 = Number(pregunta7String)
console.log("7) ¿El nombre del rey Jorge VI, EsJorge VI ?")
if( pregunta7 == 1){
    console.log("Error,\nSe llamaba Alberto !!, al asumir el tronon en 1936 adoptó el de Jorge VI para la coronación.)");
    console.log("point7 = 0") 
}else{
    console.log("correcto");
    console.log("point7 = 1") 
}

const pregunta8String = prompt("¿El ave llamada pinzón púrpura, es de color purpura?")
const pregunta8 = Number (pregunta8String)
console.log("8) ¿El ave llamada pinzón púrpura, es de color purpura?")
if( pregunta8 == 1){
    console.log("Error, \nDe su característico color carmín.)");
    console.log("point8 = 0") 
}else{
    console.log("correcto");
    console.log("point8 = 1") 
}

const pregunta9String = prompt("¿Las grosellas chinas provienen de China?")
const pregunta9 = Number(pregunta9String)
console.log("9) ¿Las grosellas chinas provienen de China?")
if( pregunta9 == 1){
    console.log("Error, \nSe cultivan exclusivamente en Nueva Zelanda)");
    console.log("point9 = 0") 
}else{
    console.log("correcto");
    console.log("point9 = 1") 
}

const pregunta10String = prompt("¿La Guerra de los Treinta Años duro 30 años?")
const pregunta10 = Number (pregunta10String)
console.log("10) ¿La Guerra de los Treinta Años duro 30 años?")
if( pregunta10 == 0){
    console.log("correcto");
    console.log("point10 = 1") 
}else{
    console.log("Error");
    console.log("point10 = 0") 
}


console.log("Sume los puntos obtenidos")
console.log("- Si acertó con las 10 respuestas, seguramente es colaborador del Newsletter (no se merece menos)\n",
"- Si acertó entre 7 y 9, seguramente es propietario de alguna delas Empresas de Internet que lograron sobrevivir...Felicitaciones !!\n",
"- Entre 3 y 6 respuestas correctas, no diga más... Usted tenía un start up, pero el mercado fue duro, la publicidad online se vino a pique...si, si... está bien, lo entendemos. \n",
"- Entre 1 y 2 respuestas correctas... en fin, qué opina de Homero Simpson ? eh ?\n",
"- 0 Respuestas correctas... ejem, mejor lo dejamos ahí, quiere ?")