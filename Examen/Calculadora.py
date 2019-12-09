#print("Elegir una operacion:\n1:area del circulo\n2:Ley de gases nobles\n3:formula de la distancia en MRUV\n4:ley dde gravitacion universal\n5:Pitagoras\n6:volmen del cilindro\n7:area del triagulo")

def sumar(a,b):
    sum = a + b
    return sum

def restar(x,y): 
    resta = x - y
    return resta

def multiplicar(x,y):
    mult = x*y
    return mult

def dividir(x,y):
    div = x/y 
    return div

def area_ciculo(r):
    S = 3.1416 * pow (r,2)
    return S

def Presion (V,n,R,T):
    P = (n*R*T)/V
    return P

def Volumen(P,n,R,T):
    V = (n*R*T) / P
    return V

def Numero_moles(P,V,R,T):
    n = (P*V) / (R*T)
    return n

def Constante(P,V,n,T):
    R = (P*V) / (n*T)
    return R

def Temperatura(P,V,n,R):
    T = (P*V) / (n*R)
    return T

def distancia(v,t,a):
    d = ( v * t ) + (1/2)* a * pow(t,2)
    return d

def ley_de_gravitacion_universal(G,m1,m2,r):
    F = (G*m1*m2)/(pow(r,2)) 
    return F

def pitagoras_cateto(a,c):
    import math
    b = math.sqrt(pow(a,2) - pow(c,2))
    return b

def pitagoras_hipotenusa(b,c):
    import math
    a = math.sqrt(pow(b,2) + pow(c,2))
    return a

def volumen_cilindro (r,h):
    V = 3.1416 * pow(r,2) * h
    return V

def area_triangulo(b,h):
    A = (b*h)/2
    return A

def main():
    calculadora()

def  calculadora():
     print('Selecciona una operacion: \n1:suma-\n2:resta\n3:multiplicacion\n4:division\n5:area del circulo\n6:Ley de gases nobles\n7:formula de la distancia en MRUV\n8:ley dde gravitacion universal\n9:Pitagoras\n10:volmen del cilindro\n11:area del triagulo\n12:terminamos')
     print("ingresar el numero de la operacion que desea realizar:")
     opcion = int(input())
     #while (opcion <=4):

     if opcion == 1:
        print ("Suma")
        x = float(input("Primer numero: ")) 
        y = float(input ("Segundo numero: ")) 
        print ("La suma es:", sumar(x,y))
        
     elif opcion == 2:
        print ("Resta")
        x = float(input("Primer numero: ")) 
        y = float(input("Segundo numero: "))  
        print("La resta es:", restar(x,y))
 
     elif opcion == 3:
        print ("Multiplicacion")
        x = float(input("Primer numero: ")) 
        y = float(input("Segundo numero: "))
        print ("La multiplicacion es: ", multiplicar(x,y))
 
     elif opcion == 4:
        print ("Division")
        x = float(input("Primer numero: ")) 
        y = float(input("Segundo numero: ")) 
        print ("la division es:", dividir(x,y))
     
     elif opcion == 5:
        print("Area del circulo, la formula es igual a:S=π(r^2)")
        r = int(input("Ingresar el radio: "))
    
        if r == 0:
            print("El radio no puede ser 0")
        elif r < 0: 
            print("el radio no puede ser negativo")
        elif r > 0:
            print("El area del circulo es:",area_ciculo(r))
   
     elif opcion == 6:
         print("Ley de gases nobles, la formula es igual a: P*V = n*R*T\nDonde:\nP=presion\nV:Volumen\nn:Numero de moles\nR:Constante de los gases ideales\nT: Temperatura")
         print("Que desea calcular:\n1:Presion\n2:Volumen\n3:Numero de moles\n4:Constante de los gases ideales\n5: Temperatura")
         ley = int(input())

         if ley == 1:
            print ("Presion")
            V = float(input("Ingrese el Volumen: "))
            n = float(input("Ingrese el numero de moles: "))
            R = float(input("Ingrese la Constante de los gases: "))
            T = float(input("Ingrese la Temperatura: "))
            print("La presion es:",Presion (V,n,R,T))
         elif ley ==2:
            print ("Volumen")
            P = float(input("Ingrese la Presion: "))
            n = float (input("Ingrese el numero de moles: "))
            R = float(input("Ingrese la Constante de los gases: "))
            T = float(input("Ingrese la Temperatura: "))
            print("El volumen es:",Volumen (P,n,R,T))
         elif ley == 3:
            print ("numero de moles")
            P = float(input("Ingrese la Presion: "))
            V = float(input("Ingrese el Volumen: "))
            R = float(input("Ingrese la Constante de los gases: "))
            T = float(input("Ingrese la Temperatura: "))
            print("El numero de moles es:",Numero_moles (P,V,R,T))
         elif ley == 4:
            print ("Constante de los gases ideales")
            P = float(input("Ingrese la Presion: "))
            V = float(input("Ingrese el Volumen: "))
            n = float(input("Ingrese el numero de moles: "))
            T = float(input("Ingrese la Temperatura: "))
            print("La constante de los gases ideales es:",Numero_moles (P,V,n,T))
         elif ley == 5:
            print ("Temperatura")
            P = float(input("Ingrese la Presion: "))
            V = float(input("Ingrese el Volumen: "))
            n = float(input("Ingrese el numero de moles: "))
            R = float(input("Ingrese la Constante de los gases: "))
            print("La temperatura es:",Numero_moles (P,V,n,R))
         else:
             print ("entrada no valida")

     elif opcion == 7:
        print (" distancia en MRUV")
        v = float(input("Ingrese la velocidad inicial: "))
        t = float(input("Ingrese el tiempo: "))
        a = float(input("Ingrese el aceleracion: "))
        print("La distancia recorrida es:",distancia(v,t,a))
        
     elif opcion == 8:
        print("Fuerza gravitatoria, cuya formula es:F = (G*m1*m2)/(r^2)\nDonde:\nG:es la contante de gravitacion universal cuyo valor es G = 6,67*10^-11 [N·m^2/kg^2]\nm1 y m2: son las masas de los cuepos que interaccionan\nr: es la distancia que los separa.")
        m1 = float(input("Ingrese la masa del primer cuerpo en [Kg]: "))
        m2 = float(input("Ingrese la masa del segundo cuerpo en [Kg]: "))
        r = float(input("Ingrese la distancia que separa a dichos cuerpos: "))
        G = 6.67 * pow(10,-11)
        print("La distancia recorrida es:",ley_de_gravitacion_universal(G,m1,m2,r))
    
     elif opcion == 9:
        print("Teorema de pitagoras, cuya pormula es a^2 = b^2 + c^2, Donde:\na:hipotenusa\nb,c:catetos")
        print("que desea calcular:\n1:cateto\n2:hipotenusa")
        pitagoras = int(input())
        if pitagoras == 1:
            print("cateto")
            a = float(input("Ingresar la hipotenusa: "))
            b = float(input("Ingresar el cateto que se tiene como dato: "))

            if a < b:
                print ("la hipotenusa no puede ser mas pequeña que un cateto")
            else:
                print("El cateto es igual a :", pitagoras_cateto(a,b))
        
        elif pitagoras == 2:
            print("Hipotenusa")
            b = float(input("Ingresar el pimer cateto: "))
            c = float(input("Ingresar el segundo cateto: "))
            print("La hipotenusa es igual a :", pitagoras_hipotenusa(b,c) )
     elif opcion == 10:
        print ("Volumen del cilindro")
        r = float(input("ingrese en radio de la base: "))
        h = float(input("Ingrese la altura del cilindro: "))
        print("El volumen del cilindro es: ",volumen_cilindro (r,h))
        
     elif opcion == 11:
         print("Area del triángulo")
         b = float(input("Ingrese la base de triangulo"))
         h = float(input("Ingrese la altura del triangulo"))
         print("El area del triangulo es: ", area_triangulo(b,h) )
         
     elif opcion == 12:
         print("Adios")
     else:
        print ("No es opcion Valida")

main() 