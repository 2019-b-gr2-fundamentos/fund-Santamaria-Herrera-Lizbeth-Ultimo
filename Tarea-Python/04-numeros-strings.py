#numeroUno = 1; //notacion: snake case
numeroDos = 2
resultado = 0
#SUMA
resultado = 1 + 2
#RESTAR
resultado = 1 - 2
#MULTIPLLICAR
resultado = 1 * 2
#DIVIDIR
resultado = 1 / 2
#EXPONENCIAL
resultado = 1 ^ 2
#MOD
resultado = 2 % 4 #0 -> residuo
resultado = 4 % 3 #1 -> residuo
resultado = 7 % 3 #1 -> residuo

print ("pera" + ' + ' +'2')

#STRINGS
MENSAJE = " \"Hola mundo\" "                                                                                      
SALUDO = '\'Adios mundo\''
print(MENSAJE + " \t \r \n " + SALUDO)
# \n -> salto de linea  
# \t -> tab    
# \r =  retorno de carro (básicamente también se usa para imprimir cosas en la siguiente línea)
# \ '= imprime una comilla simple (') en tu texto
# \ ”= imprime un comillas dobles (") en su texto
# \\ = imprima una barra diagonal inversa (\) en su texto

# template strings
from string import Template 
t = Template('Hey, $name!')
s = t.substitute(name= 'Lizbeth')
print(s)
saludoEdad = Template('Mi edad es: \n$edad')
saludoE = saludoEdad.substitute (edad = 30)
SaludoCompleto = Template( '$men \n $sal')
SaludoC = SaludoCompleto.substitute(men = MENSAJE, sal = SALUDO )
print (saludoE)
print(SaludoC)

#CONTAMOS ELEMENTOS
NOMBRELONGITUD = " Lizbeth Santamaria "
print (len(NOMBRELONGITUD))     #len -> determinar el número de caracteres en una cadena
print(NOMBRELONGITUD.strip())   #strip -> elimina los espacios del inicio y del final de una cadena


#CAMBIAR MAYUSCULAS 
print(NOMBRELONGITUD.upper()) # upper -> convierte toda la cadena en mayusculas
print(NOMBRELONGITUD.lower()) # upper -> convierte toda la cadena en minusculas

print(NOMBRELONGITUD.replace("e","o"))
print(NOMBRELONGITUD.replace("a","o"))  # replace -> encuentra la reemplaza
print(NOMBRELONGITUD.replace("\n","o"))  #print(nombreLongitud.replace("buscamos","o=se reemplaza"))
print(NOMBRELONGITUD.replace("x","o"))

print(NOMBRELONGITUD.find("z"))      # 3 
print(NOMBRELONGITUD.find("d"))      # -1 find -> busca la primera ocurrencia e indica la posicion, si no encuentra (-1)
print(NOMBRELONGITUD.find("Lizbeth")) # find -> encuentra la posiscion empezando a contar desde 0

print(NOMBRELONGITUD[0:11])   #devuelve el pedazo del string en un rango

print(NOMBRELONGITUD.index("a")) # indica la primera posicion encontrada
# print(NOMBRELONGITUD.index("x")) , str.indexsube ValueErro si no encuentra el substring

print('NOMBRELONGITUD contain_a =', NOMBRELONGITUD.__contains__("a"))      #booleano
print('NOMBRELONGITUD contain_x =', NOMBRELONGITUD.__contains__("x"))
print('NOMBRELONGITUD contain_" " =', NOMBRELONGITUD.__contains__(" "))         #booleano
 #__contains__() es un método de instancia y devuelve un valor booleano Verdadero o Falso 
 #dependiendo de si el objeto de cadena contiene el objeto de cadena especificado o no.

print(NOMBRELONGITUD.endswith("x"))      #endswith: Devuelve True si las cadenas terminan con el sufijo especificado
print(NOMBRELONGITUD.startswith(" Liz")) # starswith: Devuelve False si las cadenas no empiezan con el prefijo especificado

print(NOMBRELONGITUD[3:10])



#NUMEROUNO     -> TODO MAYUSCULA (SEPARACION NO)
#NUMERO_UNO    -> mayusculas guion bajo
#NumeroUno     ->
#numerouno
#numero_uno """