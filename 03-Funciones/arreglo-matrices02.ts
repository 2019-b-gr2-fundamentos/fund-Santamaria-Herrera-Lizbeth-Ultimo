const arreglo01 = [
    [1,2,3,2],
    [4,5,6,6] 
];

const tamaño01 = arreglo01.length


function Suma(
    arreglo01: number [][]
):void{
    let sum = 0
    
    for (let veces = 0;
        veces < tamaño01;
        veces++) {
            const posicion = arreglo01 [veces]
            sum = sum + posicion
        }
}
    
function main1(){ 

    Suma(arreglo01);
}

main1();
