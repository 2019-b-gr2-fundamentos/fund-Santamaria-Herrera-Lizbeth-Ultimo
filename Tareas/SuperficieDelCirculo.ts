console.log("Superficie de un circulo")
console.log("La superficie de un ciruclo esta dada por la formula:")
console.log("S=π(r^2)")
const radioString = prompt("Ingresar el radio del ciculo"); 
const π = Math.PI; 
const radio = Number (radioString)
if (radio == 0){  
    console.log("El radio no puede ser 0");
} else {
    if (radio < 0){  
        console.log("el radio no puede ser negativo");
    } else {
        if (radio > 0){  
            var raelevado = Math.pow(radio,2)
            console.log("La superficies del circulo es: π*","(",radio, "^2)")
            console.log(π* raelevado )
        } else {
            console.log("valor ingresado no es valido");
        }
    }
}

