# 04-condicionales.ts

CASADO = True

if CASADO == True
    print  ("si estoy casado")
else:
    print ("no estoy casado")


if CASADO == False  # (expresion => boolean)
    print("no estoy casado")
else: 
    print("si estoy casado")


if CASADO != True
    print("no estoy casado")
 else: 
    print("si estoy casado")

if CASADO != False
    print("si estoy casado")
else: 
    print("no estoy casado")

TENGO_MOSA = False
ESTA_CASADO =  True # expresion
SOY_MOSERO = TENGO_MOSA == True; 
CASADO_Y_MOSERO = ESTA_CASADO & s SOY_MOSERO

if CASADO_Y_MOSERO
    print("Casado y mosero")
else:
    print("o casado o mosero o nada")

#casadoYMosero     <=> c==true & b==true & d==true

# AND -> &

# TRUE y TRUE = TRUE
# TRUE y FALSE = FASE
# FALSE y TRUE = FALSE
# FALSE y FALSE = FALSE

# OR -> | -> Pipes

# TRUE y TRUE = TRUE
# TRUE y FALSE = TRUE
# FALSE y TRUE = TRUE
# FALSE y FALSE = FALSE


#apago la primera alarma me hago 
#bolita y lloro hasta la segunda 
#alarma y me levanto
#celularDescargado == true
#celularDañado     == true
#amaneceMuerto     == true
#estaActivadaLaAlarma  !=true
#estaEnModoSilencio     = true
#const seAtrasoAClase = celularDescargado == true | celularDañado == true | amaneceMuerto  == true | estaActivadaLaAlarma !=true | estaEnModoSilencio == true 




#TRUTY
if""                             #falsy
    print("truty")
else
    print("falsy")



if "abc"                           #truty
    print("truty")
else
    print("falsy")



if -1                                #truty
    print("truty")
else
    print("falsy")



if 1.32235                           #truty
    print("truty")
else
    print("falsy")



if 0                                  #falsy
    print("truty")
else
    print("falsy")


if undefined
    print("truty")
else
    print("falsy")


#FALSY

def switch_demo(argument):
CALCULO = "multiplicar" # sumar restar multiplicar dividir

if calculo == sumar:
    #codigo
else :
    if calculo == restar
    #codigo
    else:
        if calculo == multiplicar
        #codigo
        else:
            if calculo == dividir
            #codigo
            else:
                print ()

# 6 Guagua
# 18 Guambra
# 65 Longo 
# 66 Ruku

EDAD_STRING = input("Ingresas edad")
EDAD = Number(EDAD_STRING)

if edad >= 0 & edad <=6 
    print("Guagua")
 else: 
    if edad > 6 & edad <=18
        print("Guambra")
     else: 
        if edad > 18 & edad <=65
            console.log("Longo")
        else:
            if edad > 65
                print("Ruku")
            else:
                print("Edad ingresada invalida")


if Edad == 6
print("Guagua")
switch(Edad) {
    case 6 :   
        console.log("Guagua")
        break;
    case 18:   
        console.log("Guambra")
        break;
    case 65: 
        console.log("Longo") 
        break;
    case  66 : 
        console.log("Rukku") 
        break;
    default:

}