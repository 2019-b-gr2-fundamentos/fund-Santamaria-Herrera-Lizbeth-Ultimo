// DO WHILE
//let vecesQueHeComido = 0;

do {
    console.log("vamos a comer")
    vecesQueHeComido = vecesQueHeComido + 1;

    switch(vecesQueHeComido) {
        case 1:   
            console.log("Desayuno");
            break;
        case 2:  
            console.log("Almuerzo") ; 
            break;
        case 3 : 
            console.log("Merienda");
            break;
        default:
          console.log("Gordito");
    } 

}while(vecesQueHeComido < 3)

while(vecesQueHeComido < 3){
    console.log("vamos a comer")
    vecesQueHeComido = vecesQueHeComido + 1;

    switch(vecesQueHeComido) {
        case 1:   
            console.log("Desayuno");
            break;
        case 2:  
            console.log("Almuerzo") ; 
            break;
        case 3 : 
            console.log("Meriena");
            break;
        default:
          console.log("Gordito");
    } 
}

/*
1 Analisis Socioeconomico -> impar
2 Algebra
3 compiladores
5 Fundamentos de Programacion
7 Calculo Vectorial
11 Fisica
13 Ingles 

Si el numero es impar -> le aumentamos a analivis socioeconomico
si es par             -> aumentamos a algebra
si es multiplo de 3   -> aumentamos a compiladores
*/



/*console.log("Hice ${Analisis}deberes de Analisis.")
console.log("Hice" + Analisis +" deberes de Analisis.")*/


let Analisis = 0;
let Algebra = 0
let compiladores = 0
let Programacion = 0
let CalculoVectorial = 0
let Fisica = 0
let Ingles = 0
let tareas = 0

do {
    tareas = tareas + 1
    if(tareas%13 == 0){
        Ingles = Ingles + 1
        }else{
        if(tareas%11 == 0){
            Fisica = Fisica + 1
            }else{
             if(tareas%7 == 0){
                CalculoVectorial = CalculoVectorial + 1
                }else{
                 if(tareas%5 == 0){
                    Programacion = Programacion + 1
                    }else{
                     if(tareas%3 == 0){
                        compiladores = compiladores + 1
                        }else{
                            if(tareas%2 == 0){
                            Algebra = Algebra + 1
                            }else{
                                if (tareas%2 != 0){
                                Analisis = Analisis + 1
                             }else{
                            }
                            
                        }
                    
                    }
                    
                }
            } 
        }
    }
}while(tareas < 1000)

console.log("deberes de Ingles:", Ingles);
console.log("deberes de Fisica:", Fisica);
console.log("deberes de Calculo Vectorial:", CalculoVectorial);
console.log("deberes de Programación:", Programacion);
console.log("deberes de Compiladores:", compiladores);
console.log("deberes de Algebra:", Algebra);
console.log("deberes de analisis socioeconomico:", Analisis)