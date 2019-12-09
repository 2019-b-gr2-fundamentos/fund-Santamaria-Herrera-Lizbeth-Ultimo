const numeroUnoString = prompt("Ingresa numero 1"); //STRING
const numeroDosString = prompt("Ingresa numero 2"); //STRING
const numeroUno = Number (numeroUnoString)
const numeroDos = Number (numeroDosString);
const operacionString = prompt ("Elija que opercacion basica desea que se realice seleccionando un numero de acuerdo a la operacion 1:suma, 2:resta, 3: Multiplicaion, 4:division")
const operacion = Number (operacionString);

if (operacion == 1 ){
    console.log (numeroUno + numeroDos);
} else {
    if (operacion == 2){
        console.log (numeroUno - numeroDos);
    } else {
        if(operacion == 3){
            console.log (numeroUno * numeroDos);;
        }else{
            if(operacion == 4){
                console.log (numeroUno / numeroDos);
            }else{
                console.log("LA OPERACION NO HA SIDO DEFINIDA");
            }
            
        }
    }
}

switch(operacion) {
    case 1 :   
        console.log (numeroUno + numeroDos);
        break;
    case 2:   
        console.log(numeroUno - numeroDos)
        break;
    case 3: 
        console.log(numeroUno * numeroDos) 
        break;
    case  4 : 
        console.log(numeroUno / numeroDos) 
        break;
    default:

}

