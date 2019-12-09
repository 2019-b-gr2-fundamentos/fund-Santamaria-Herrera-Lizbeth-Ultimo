
//Switch

//Ejercicio 1
console.log("Programa que calcula El area lateral, el area total, el area de la base, volumen de un prisma regular ");
console.log("Que dato desea conocer:  \n1:Area de la base, \n2:Area lateral, \n3:Area total, \n4:Volumen del prisma")

const  datoString = prompt("Que acividad realizará"); 
const  dato = Number (datoString) 

switch(dato) {
    case 1:
        console.log("Se calculara el Area de la base")
        console.log("La formula del Area de la base es:\n Ab= (P*ap)/2,\n donde:\nP: Perimetro \nap: apotema ")
        const ladosbString = prompt("Ingresar el numero de lados de la base, deben ser mayores a 2")
        const ladosb = Number(ladosbString);
        if(ladosb > 2){                                  
            const tamañoladosString = prompt("Ingrese el tamaño de los lados de la base")
            const tamañolado = Number (tamañoladosString)
            console.log("El perimetro de la base es:")
            console.log(ladosb*tamañolado)
            const apotemaString = prompt("Ingrese el valor del apotema")
            const apotema = Number(apotemaString)
            console.log("El area de la base es:")
            console.log((ladosb*tamañolado*apotema)/2)
        }else{
            console.log(" El numero de lados ingresado es inválido");         
        }
        break;
    case 2:
            console.log("Se calculara el Area lateral")
        console.log("La formula del Area lateral es:\n Al= Pb*h,\n donde:\nPb: Perimetro de la base \nh: altura ")
        const ladosString = prompt("Ingresar el numero de lados de la base, deben ser mayores a 2")
        const lados = Number(ladosString);
        if(lados > 2){                                  
            const tamañoladosString = prompt("Ingrese el tamaño de los lados de la base")
            const tamañolado = Number (tamañoladosString)
            console.log("El perimetro de la base")
            console.log(lados*tamañolado)
            const alturaString = prompt("Ingrese el valor de la altura")
            const altura = Number(alturaString)
            console.log("El area lateral es:")
            console.log(lados*tamañolado*altura)
        }else{
            console.log(" El numero de lados ingresado es inválido");         
        }

        break;
    case 3:
            console.log("Se calculara el Area Total")
        console.log("La formula del Area Total es:\n Ab= Al + 2 * Ab,\n donde:\nAb: Area de la base \nAl: Area lateral ")
        const ladoString = prompt("Ingresar el numero de lados de la base, deben ser mayores a 2")
        const lado = Number(ladoString);
        if(lado > 2){                                  
            const tamañoladosString = prompt("Ingrese el tamaño de los lados de la base")
            const tamañolado = Number (tamañoladosString)
            console.log("El perimetro de la base es:")
            const Pb =lado*tamañolado
            console.log(Pb)
            const apotemaString = prompt("Ingrese el valor del apotema")
            const apotema = Number(apotemaString)
            console.log("El area de la base es:")
            const Ab = (Pb*apotema)/2
            console.log(Ab)
            const alturaString = prompt("Ingrese el valor de la altura")
            const altura = Number(alturaString)
            console.log("El area lateral es:")
            const Al= Pb*altura
            console.log(Al)
            console.log("El area total es:")
            const At = Al + 2 * Ab
            console.log(At)
        }else{
            console.log(" El numero de lados ingresado es inválido");         
        }
        break;
    case  4:
            console.log("Se calculara el Volumen el prisma")
            console.log("La formula del Volumen del prisma es:\n V= Ab * h,\n donde:\nAb: Area de la base \nh: Altura ")
            const ladosbstring = prompt("Ingresar el numero de lados de la base, deben ser mayores a 2")
        const ladosbs = Number(ladosbstring);
        if(ladosbs > 2){                                  
            const tamañoladosString = prompt("Ingrese el tamaño de los lados de la base")
            const tamañolado = Number (tamañoladosString)
            console.log("El perimetro de la base es:")
            const Pb =ladosbs*tamañolado
            console.log(Pb)
            const apotemaString = prompt("Ingrese el valor del apotema")
            const apotema = Number(apotemaString)
            console.log("El area de la base es:")
            const Ab = (Pb*apotema)/2
            console.log(Ab)
            const alturaString = prompt("Ingrese el valor de la altura")
            const altura = Number(alturaString)
            console.log("El volumen del prisma es:")
            const V = Ab * altura
            console.log(V)
        break;
    }
    default:
      console.log("Operacion no definida")
}

//Ejercicio 2
console.log("Esta es una máquina expendedora de dulces y bocaditos la cual cuenta con 10 articulos los cuales se encuentran en un casillero determinado con un ubicacion, ingrese el dinero, y elija el producto ingresando el numero de su localizacion")
console.log("1:chocolate jet,\n2:agua mineral,\n3:Papas sin marca\n4:galletas oreo,\n5:chicles trident,\n6:caramelos halls,\n7:Coca cola,\n8:chocolates m&m,\n9:Doritos,\n10:Gomitas")
console.log("Ingresar monedas maximo de 1 dolar, no se acptan billetes")

const  UbicaionString = prompt("Qué producto comprara?"); 
const  Ubicacion = Number (UbicaionString)

switch(Ubicacion) {
    case 1 :   
        console.log("Ha elegido Chocolate jet ")
        console.log("El precio es: 40 ctvs")
        const  monedasString = prompt("Cuanto dinero ha ingresado en la maquina en centavos")
        const  monedas = Number (monedasString)

        if(monedas >= 40){                                  
            console.log("Su cambio es:", monedas-40, "centavos");
            console.log("Retire el producto ")
        }else{
            console.log("No tiene suficiente dinero para comprar el producto");
        }

        break;
    case 2:   
        console.log("Ha elegido Agua Mineral ")
        console.log("El precio es: 60 ctvs")
        const  monedaString = prompt("Cuanto dinero ha ingresado en la maquina en centavos")
        const  moneda = Number (monedaString)

        if(moneda >= 60){                                  
            console.log("Su cambio es:", moneda-60, "centavos");
            console.log("Retire el producto ")
        }else{
            console.log("No tiene suficiente dinero para comprar el producto");
        }
        break;
    case 3: 
        console.log("Ha elegido Papas sin marca ")
        console.log("El precio es: 50 ctvs")
        const  monedString = prompt("Cuanto dinero ha ingresado en la maquina en centavos")
        const  moned = Number (monedString)

        if(moned >= 50){                                  
            console.log("Su cambio es:", moned-50, "centavos");
            console.log("Retire el producto ")
        }else{
            console.log("No tiene suficiente dinero para comprar el producto");
        }
        break;
    case  4 : 
        console.log("Ha elegido Galletas Oreo ")
        console.log("El precio es: 50 ctvs")
        const  MonedasString = prompt("Cuanto dinero ha ingresado en la maquina en centavos")
        const  Monedas = Number (MonedasString)

        if(Monedas >= 50){                                  
            console.log("Su cambio es:", Monedas-50, "centavos");
            console.log("Retire el producto ")
        }else{
            console.log("No tiene suficiente dinero para comprar el producto");
        }
        break;
    case  5 : 
        console.log("Ha elegido Chicles trident, ") 
        console.log("El precio es: 35 ctvs")
        const  mOnedasString = prompt("Cuanto dinero ha ingresado en la maquina en centavos")
        const  mOnedas = Number (mOnedasString)

        if(mOnedas >= 35){                                  
            console.log("Su cambio es:", mOnedas-35, "centavos");
            console.log("Retire el producto ")
        }else{
            console.log("No tiene suficiente dinero para comprar el producto");
        }
        break;
    case  6 : 
        console.log("Ha elegido Caramelos halls ") 
        console.log("El precio es: 60 ctvs")
        const  moNedasString = prompt("Cuanto dinero ha ingresado en la maquina en centavos")
        const  moNedas = Number (moNedasString)

        if(moNedas >= 60){                                  
            console.log("Su cambio es:", moNedas-60, "centavos");
            console.log("Retire el producto ")
        }else{
            console.log("No tiene suficiente dinero para comprar el producto");
        }
        break;
    case  7 : 
        console.log("Ha elegido Coca cola ") 
        console.log("El precio es: 70 ctvs")
        const  moneDasString = prompt("Cuanto dinero ha ingresado en la maquina en centavos")
        const  moneDas = Number (moneDasString)

        if(moneDas >= 70){                                  
            console.log("Su cambio es:", moneDas-70, "centavos");
            console.log("Retire el producto ")
        }else{
            console.log("No tiene suficiente dinero para comprar el producto");
        }
        break
    case  8 : 
        console.log("Ha elegido Chocolates m&m ")
        console.log("El precio es: 55 ctvs")
        const  monedAsString = prompt("Cuanto dinero ha ingresado en la maquina en centavos")
        const  monedAs = Number (monedAsString)

        if(monedAs >= 55){                                  
            console.log("Su cambio es:", monedAs-55, "centavos");
            console.log("Retire el producto ")
        }else{
            console.log("No tiene suficiente dinero para comprar el producto");
        }
        break;
    case  9 : 
        console.log("Ha elegido Doritos ")
        console.log("El precio es: 50 ctvs")
        const  monedaSString = prompt("Cuanto dinero ha ingresado en la maquina en centavos")
        const  monedaS = Number (monedaSString)

        if(monedaS >= 50){                                  
            console.log("Su cambio es:", monedaS-50, "centavos");
            console.log("Retire el producto ")
        }else{
            console.log("No tiene suficiente dinero para comprar el producto");
        }
        break;
    case  10 : 
        console.log("Ha elegido Gomitas ")
        console.log("El precio es: 25 ctvs")
        const  monEdasString = prompt("Cuanto dinero ha ingresado en la maquina en centavos")
        const  monEdas = Number (monEdasString)
        if(monEdas >= 25){                                  
            console.log("Su cambio es:", monEdas-25, "centavos");
            console.log("Retire el producto ")
        }else{
            console.log("No tiene suficiente dinero para comprar el producto");
        }

        break;
    default:
        console.log("Ubicacion ingresada incorrecta")

}

//Ejemplo 3
console.log("Informacion Turística de Ecuador")
console.log("Elija el lugar del cual le gustaria conocer\nPresentamos 4 lugares\n1:Quito\n2:Montañita\n3:Cuenca\n4:Baños de Agua Santa")
const  LugarString = prompt("Qué lugar le gustaria conocer?"); 
const  Lugar = Number (LugarString)

switch(Lugar) {
    case 1:  
        console.log("Ha elegido Quito ")
        console.log("Qué le gustaria conocer de Quito?")
        const ConocerQString = prompt("1:Lugares Turisticos,\n2:Gastronomia,\n3:Una leyenda,\n4:Todo")
        const Conocer = Number(ConocerQString)
        switch(Conocer) {
            case 1:   
                console.log("Ha elegido Lugares Turisticos ")
                console.log("5 lugares turisticos de Quito son:\n1:Centro Histórico\n2:Iglesia de la Compañía de Jesús de Quito\n3:Mitad del Mundo\n4:Teleférico de Quito\n5:El Panecillo")
                break;
            case 2:   
                console.log("Ha elegido Gastronomia ")  
                console.log("A continuación, una sugerencia de los platillos más apetitosos que puede encontrar en la capital ecuatoriana.",
                "Hornado.\nFritada\nGuata\nYahuarlocro\nTripas Mishqui\nPapas con cuero\nEmpanada de viento\nEmpanada de morocho.")
                break;
            case 3:
                console.log("Ha elegido una leyenda ") 
                console.log("Cuenta una leyenda de El Panecillo, que había en Quito una mujer que diariamente llevaba su vaquita al Panecillo. Allí pasaba siempre porque no tenía un potrero donde llevarla. Un buen día, mientras recogía un poco de leña, dejó a la vaquita cerca de la olla. A su regreso ya no la encontró. Llena de susto, se puso a buscarla por los alrededores.\n",
                "Pasaron algunas horas y la vaquita no apareció. En su afán por encontrarla, bajó hasta el fondo de la misma olla y su sorpresa fue muy grande cuando llegó a la entrada de un inmenso palacio. Cuando pudo recuperarse de su asombro, miró que en un lujoso trono estaba sentada una bella princesa.\n",
                "Al ver allí a la humilde señora, la princesa sonriendo preguntó: -¿Cuál es el motivo de tu visita? - ¡He perdido a mi vaca! Y si no la encuentro quedaré en la mayor miseria -contestó la mujer sollozando. La princesa, para calmar el sufrimiento de la señora, le regaló una mazorca y un ladrillo de oro. También la consoló asegurándole que su querida vaquita estaba sana y salva.\n",
                "La mujer agradeció a la princesa y salió contenta. Cuando llegó a la puerta, ¡tuvo la gran sorpresa! -¡Ahí está mi vaca! La mujer y el animalito regresaron a su casa.")
                break;
            case  4 : 
                console.log("Ha elegido Todo ")
                console.log("Lugares Turisticos")
                console.log("5 lugares turisticos de Quito son:\n1:Centro Histórico\n2:Iglesia de la Compañía de Jesús de Quito\n3:Mitad del Mundo\n4:Teleférico de Quito\n5:El Panecillo")
                console.log("Gastronomia")
                console.log("A continuación, una sugerencia de los platillos más apetitosos que puede encontrar en la capital ecuatoriana.",
                "Hornado.\nFritada\nGuata\nYahuarlocro\nTripas Mishqui\nPapas con cuero\nEmpanada de viento\nEmpanada de morocho.")
                console.log("Leyenda")
                console.log("Cuenta una leyenda de El Panecillo, que había en Quito una mujer que diariamente llevaba su vaquita al Panecillo. Allí pasaba siempre porque no tenía un potrero donde llevarla. Un buen día, mientras recogía un poco de leña, dejó a la vaquita cerca de la olla. A su regreso ya no la encontró. Llena de susto, se puso a buscarla por los alrededores.\n",
                "Pasaron algunas horas y la vaquita no apareció. En su afán por encontrarla, bajó hasta el fondo de la misma olla y su sorpresa fue muy grande cuando llegó a la entrada de un inmenso palacio. Cuando pudo recuperarse de su asombro, miró que en un lujoso trono estaba sentada una bella princesa.\n",
                "Al ver allí a la humilde señora, la princesa sonriendo preguntó: -¿Cuál es el motivo de tu visita? - ¡He perdido a mi vaca! Y si no la encuentro quedaré en la mayor miseria -contestó la mujer sollozando. La princesa, para calmar el sufrimiento de la señora, le regaló una mazorca y un ladrillo de oro. También la consoló asegurándole que su querida vaquita estaba sana y salva.\n",
                "La mujer agradeció a la princesa y salió contenta. Cuando llegó a la puerta, ¡tuvo la gran sorpresa! -¡Ahí está mi vaca! La mujer y el animalito regresaron a su casa.")
                break;
            default:
        
        }
        break;
    case 2:  
        console.log("Ha elegido Montañita ") 
        const ConocerMString = prompt("1:Actividades ,\n2:Gastronomia,\n3:Una leyenda,\n4:Todo")
        const ConocerM = Number(ConocerMString)
        switch(ConocerM) {
            case 1:   
                console.log("Ha elegido Actividades ")
                console.log("Algunos Actividades que podria realizar son:1:Observación de Ballenas Jorobadas en la costa de Ecuador\n2:visitar isla  de la Plata a dos horas de Montañita.\n3:Visitar Isla Salango (Snorkel y pesca en la Isla frente a Salango.)\n4:Visitar playa Los Frailes\n5:Cabalgatas hacia las cascadas y rios de Dos Mangas")
                break;
            case 2:   
                console.log("Ha elegido Gastronomia ")  
                console.log("1) ARROZ CON CAMARONES\n2) ARROZ CON LECHE\n3)BOLLO DE PESCADO\n4)BOLÓN DE VERDE\n5)CAMARON ENCOCADO, entre otros")
                break;
            case 3:
                console.log("Ha elegido una leyenda ") 
                console.log("Hace unos años surfistas llegaron a la costa y descubrieron la punta de Montañita y las maravillosas y potentes olas, impresionados por su encanto y lo virgen del lugar, se empezo a correr la voz en toda sudamerica.  Un tiempo después un irlandes abre el primer parador / bar en la punta.",
                "A partir de eso empezaron a venir cada vez mas surfistas y también hippies que encontraban en este lugar refugio, paz y amabilidad por parte de sus habitantes.")
                break;
            case  4 : 
                console.log("Ha elegido Todo ")
                console.log("Actividades")
                console.log("Algunos Actividades que podria realizar son:1:Observación de Ballenas Jorobadas en la costa de Ecuador\n2:visitar isla  de la Plata a dos horas de Montañita.\n3:Visitar Isla Salango (Snorkel y pesca en la Isla frente a Salango.)\n4:Visitar playa Los Frailes\n5:Cabalgatas hacia las cascadas y rios de Dos Mangas")
                console.log("Gastronomia ")  
                console.log("1) ARROZ CON CAMARONES\n2) ARROZ CON LECHE\n3)BOLLO DE PESCADO\n4)BOLÓN DE VERDE\n5)CAMARON ENCOCADO, entre otros")
                console.log("Leyenda ") 
                console.log("Hace unos años surfistas llegaron a la costa y descubrieron la punta de Montañita y las maravillosas y potentes olas, impresionados por su encanto y lo virgen del lugar, se empezo a correr la voz en toda sudamerica.  Un tiempo después un irlandes abre el primer parador / bar en la punta.",
                "A partir de eso empezaron a venir cada vez mas surfistas y también hippies que encontraban en este lugar refugio, paz y amabilidad por parte de sus habitantes.")
                break;
            default:
        
        }
        break;
    case 3: 
        console.log("Ha elegido Cuenca ") 
        const ConocerCString = prompt("1:Lugares Turisticos,\n2:Gastronomia,\n3:Una leyenda,\n4:Todo")
        const ConocerC = Number(ConocerCString)
        switch(ConocerC) {
            case 1:   
                console.log("Ha elegido Lugares Turisticos ")
                console.log("Algunos lugares turisticos de Cuenca son")
                console.log("5 lugares turisticos de Quito son:\n1:Plaza Abdon Calderón y Las Catedrales\n2:Museo y Parque Arqueológico de Pumapungo\n3:Museo de las Conceptas\n4: Mirador el Turi\n5:Parque Nacional Cajas")
                break;
            case 2:   
                console.log("Ha elegido Gastronomia ") 
                console.log("1:mote pillo: que contiene principalmente el mote, manteca de chancho, huevos y podemos aromatizar con algunas yerbas",
                "\n2:chancho muerto: donde se puede degustar su cascarita, fritada, sancocho morcillas y esto va acompañado por mote, tostado y llapingachos",
                "\n3:caldo de patas,\n4:las tortillas de choclo y maíz,\n5:el cuy con papas, etc") 
                break;
            case 3:
                console.log("Leyenda ") 
                console.log("El Farol de la Viuda:\n",
                    "Esta leyenda se suscitaba en el barrio de El Vado. Un figura femenina con el rostro cubierto y supuestamente demacrado que solo se hacia notar por las noches cargando un farol que rompía con la oscuridad. Se dice que vivía en una casa abandonada en este barrio y que al igual que el cura, usaba este artilugio para espantar a los curiosos mientras tenia sus encuentros amorosos por las noches.")
                break;
            case  4 : 
                console.log("Ha elegido Todo ")
                console.log("Algunos lugares turisticos de Cuenca son:")
                console.log("1:Plaza Abdon Calderón y Las Catedrales\n2:Museo y Parque Arqueológico de Pumapungo\n3:Museo de las Conceptas\n4: Mirador el Turi\n5:Parque Nacional Cajas")
                console.log(" Gastronomia ") 
                console.log("1:mote pillo: que contiene principalmente el mote, manteca de chancho, huevos y podemos aromatizar con algunas yerbas",
                "\n2:chancho muerto: donde se puede degustar su cascarita, fritada, sancocho morcillas y esto va acompañado por mote, tostado y llapingachos",
                "\n3:caldo de patas,\n4:las tortillas de choclo y maíz,\n5:el cuy con papas, etc") 
                console.log("Ha elegido una leyenda ") 
                console.log("El Farol de la Viuda:\n",
                    "Esta leyenda se suscitaba en el barrio de El Vado. Un figura femenina con el rostro cubierto y supuestamente demacrado que solo se hacia notar por las noches cargando un farol que rompía con la oscuridad. Se dice que vivía en una casa abandonada en este barrio y que al igual que el cura, usaba este artilugio para espantar a los curiosos mientras tenia sus encuentros amorosos por las noches.")
                break;
            default:
        
        }
        break;
    case  4 : 
        console.log("Ha elegido Baños de Agua Santa ") 
        const ConocerBString = prompt("1:Lugares Turisticos,\n2:Gastronomia,\n3:Una leyenda,\n4:Deportes ")
        const ConocerB = Number(ConocerBString)
        switch(ConocerB) {
            case 1:   
                console.log("Ha elegido Lugares Turisticos ")
                console.log("Algunos lugares turisticos de Baños de Agua Santa")
                console.log("1:Terma Baños de Agua Santa\n2:Cascadas de Baños:\n2.1) Cascada de Agoyán\n2.2) Cascada Manto de la Novia\n2.3) Pailón del Diablo\n2.4) Cascada Bascún\n2.5) Cascada Chamana,etc",
                "\n3:Miradores Baños de Agua Santa:\n3.1) Casa del arbol \n3.2) Mirador de la Virgen de Ventanas\n3.3) Mirador de Runtun",
                "\n4: Senderos Baños de Agua de Santa:\n4.1) Sendero los Sauces \n5:Basílica de Baños\6:Laguna de Limonturo")
                break;
            case 2:   
                console.log("Ha elegido Gastronomia ")  
                console.log("1) Cuy asado.\n2) Caldo de gallina criolla.\n3)Hornado.\n4)Caldo de 31.\n5)Tortillas de maíz y papa con queso elaboradas en tiesto.\n6)Caucara.\n7)Trucha asada, frita o al vapor.\n8)Carne asada.")
                break;
            case 3:
                console.log("Ha elegido una leyenda ") 
                console.log("Cascada de la Virgen\n",
                "Según la leyenda, pobladores y arrieros, al pasar por aquel sitio, un Ángel aparecía para darles fuerza y voluntad y, así llegar a su destino. Hoy constituye un centro sagrado para esta comunidad. Tiene una altura de 50 metros, donde se puede observar la caída de agua dando la  apariencia de “EL Manto de la Virgen”")
                break;
            case  4 : 
                console.log("Ha elegido Deportes ")
                console.log("Algunos Deportes que se pueden realizar son:Canyoning Baños.",
                "1: Rafting\n2: Ciclismo\n3: Canopy\n4: Escalada\n5: Parapente\n6: Jumping\n7:Senderismo")
                break;
            default:
        
        }
        break;
    default:
        console.log("No esta dentro de las opciones")

}