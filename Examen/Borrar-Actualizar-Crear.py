print("Con este programa se podra crear, actualizar y borrar nombres de dinosaurios")

DINOSAURIOS = ["Brachiosaurus", "Diplodocus", "Stegosaurus", "Triceratops", "Protoceratops","Patagotitan", "Apatosaurus","Camarasurus"]
import random

def main():
    dinosaurios()

def dinosaurios():
    print (" ",DINOSAURIOS)
    print("OBSERVACION: EL INDICEDEL ARREGLO INICIA EN 0")
    print ("Selecciona una opcion:\n1.Observar el arreglo de dinosaurios \n2.Añadir o cambiar \n3:Eliminar\n4:Observar un dinosaurio en especifico\n5:Salir")
    print("Ingresa el numero de la opcion que deseas que se ejecute")
    opcion = int(input())


    if opcion == 1:
        print("El arreglo de dinosaurios es: ", DINOSAURIOS)
        print("1:menú principal\n2:salir")
        op = int(input())
        if op == 1:
            main()
        elif op ==2 :
            print("Adios")
        else:
            print("opcion no valida")

    elif opcion == 2:
        print("Elija:\n1:Añadir\n2:actualizar")
        eli = int(input())
        if eli ==1:
            print("Ingrese el nombre del dinosaurio que desea añadir")
            agregar = str(input())
            DINOSAURIOS.append(agregar)
            print("Ël arreglo con un dinisaurio agregado es: ", DINOSAURIOS)
            print("1:menú principal\n2:salir")
            op = int(input())
            if op == 1:
                main()
            elif op == 2:
                print("Adios")
            else:
                print("opcion no valida")

        elif eli == 2:
            print("1:Ingresar nombre\n2:random")
            nom = int(input())
            
            if nom == 1:
                print("Ingrese la posicion que desea actualizar")
                posi = int(input())
                if  0 <= posi <= len(DINOSAURIOS)-1 :
                    DINOSAURIOS[posi] = str(input("Ingrese nombre de dinosaurio: "))
                    print("El arreglo actualizado es:", DINOSAURIOS)
                    print("1:menú principal\n2:salir")
                    op = int(input())
                    if op == 1:
                     main()
                    elif op == 2:
                        print("Adios")
                    else:
                        print("opcion no valida")
                else:
                    print("Posicion invalida")

            if nom == 2:
                print("Ingrese la posicion que desea actualizar")
                posi = int(input())
                if  0 <= posi <= len(DINOSAURIOS)-1 :
                    DINOSAURIOS[posi] = random.choice(DINOSAURIOS)
                    print("El arreglo actualizado es:", DINOSAURIOS)
                    print("1:menú principal\n2:salir")
                    op = int(input())
                    if op == 1:
                     main()
                    elif op == 2:
                        print("Adios")
                    else:
                        print("opcion no valida")
                else:
                    print("Posicion no valida")

            
        else:
            print("Posicion invalida")

        

    elif opcion == 3:
        print ("El arreglo es : ", DINOSAURIOS)
        print("Ingrese el numero de la posicion del Dinosaurio que desea borrar/eliminar")
        indice = int(input())
        
        if  0 <= indice <= len(DINOSAURIOS)-1 :
            p = DINOSAURIOS.pop(indice)
            print("El arreglo con el nombre del dinosaurio eliminado es: ", DINOSAURIOS)
            print("El dinosaurio eliminsado es: ", p )
            print("1:menú principal\n2:salir")
            op = int(input())
            if op == 1:
                main()
            elif op == 2:
                print("Adios")
            else:
                print("opcion no valida")
        else:
            print("No es una posicion del arreglo")

        

    elif opcion == 4:
     print("Ingrese la posicion del nombre del dinosaurio que desea observar")
     dino = int(input())

     if  0 <= dino <= len(DINOSAURIOS)-1 :
        dinop = DINOSAURIOS[dino]
        print("El dinosaurio que seleccionó es: ", dinop)
        print("Desea actualizar su eleccion, escriba :\n1:si\n2:salir\n3menú principal")
        sf = int(input())
        if sf == 1:
            aleatorio = random.choice(DINOSAURIOS)
            print(aleatorio)
        elif sf == 2:
            print("Adios")
        elif  sf == 3:
            main()
        else:
            print("Opcion no valida")
     else:
            print("No es una posicion del arreglo")
     
     
         
    elif opcion == 5:
        print ("Adios")
     
    else: 
         print("Opción no vallida")
        
main()