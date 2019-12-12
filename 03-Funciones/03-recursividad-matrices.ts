//Escriba un prgrama que verifique si dos matrices son
//iguales ( La matriz es de dos dimensiones n * m)
// "n" y "m" pueden ser iguales o distintas
/*
n = 2 , m = 3
1 2 3     2 3 4
4 5 6     5 6 7
*/

const arreglo1 = [
    [1,2,3],
    [4,5,6,6] 
];
const arreglo2 = [
    [2,3,4],
    [5,6,7] 
];



function matricesIguales(
    arreglo01: number [][],
    arreglo02: number [][]
):void{
    const tamaño = arreglo1[0].length
    const tamaño1 = arreglo1[1].length
    const tamaño2 = arreglo2[0].length
    const tamaño3 = arreglo2[1].length
    
    const tamaño4 = arreglo1.length
    const tamaño5 = arreglo2.length

    if (tamaño == tamaño1 && tamaño2 == tamaño3 && tamaño4 == tamaño5 && tamaño == tamaño2 && tamaño1 == tamaño3){ 
        console.log("Las matrices son iguales")
    }else{ 
        if (tamaño != tamaño1){ 
            console.log("arreglo 1 dimensionalmente incorrecto")
        }else{ 
            if (tamaño2 != tamaño3){
            console.log("arreglo 2 dimensionalmente incorrecto")
            }else{
            console.log("no son iguales") 
        } 
        }   
    }
}
    
function main1(){ 

    matricesIguales(arreglo1,arreglo2);
}

main1();

