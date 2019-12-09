let edad = 30;

if(edad > 18){
    console.log("Legal");
}else{
    console.log("7 años de carcel")
}


if(true){ ///Bloque 1
    let edad = 30
    console.log(edad); //30
    if(edad){ //  Bloque 2  
        console.log(edad);
        if(edad){ // Bloque 3
            console.log(edad);
        }else{ // Bloque 4
            console.log(edad);
        }
    }else{ // Bloque 5 
        console.log(edad)  
    }
}else{ // Bloque 6
     console.assert(edad); // UNDIFINED
     console.log("7 años de carcel");
}

for (let i=0; i<1; i++){
    let bandera = 0
    bandera = bandera + 1
    console.log(bandera);
}

if (true){
    let bandera = 0;
    for(let i=0; i<10; i ++){
        bandera = bandera + i;
        console.log(bandera);
    }
}

let arregloFloron = [0,0,0,0,1]
let existeFloron = false

for(let i=0; i<5; i++){
    if (arregloFloron[i] == 1){
        existeFloron = true
    }
}
if(existeFloron){
    console.log('adivinar');
}else{
    console.log("Signar y luego adivinar");    
}