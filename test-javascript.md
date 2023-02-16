# Test de JavaScript

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

es una espacio en memoria para guardar tipos de datos o valores funciones y demas usos que se le puede atribuir.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

declarar tiene la particularidad de crearla como tal (const name;), mientras queque inicializar (name = oscar) y/o reinicializar (name = wilfredo)es asignarle un valor o volver a reasignar otro valor.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

la diferencia entre sumas es que sumas valores numericos y da como resultado otro valor y concatinar es unir los datos de tipo string 

- ¿Cuál operador me permite sumar o concatenar?

es el simbolo "+" con el si el tipo de datos es de tipo numero lo suma y si es de tipo de string lo concatena

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuari o en Platzi: string
- Edad: number
- Correo electrónico string
- Mayor de edad boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = 'Oscar Wilfredo';
let apellido = 'Aguirre Tarazona';
let username = 'Acsor';
let edad = 25;
let mail = 'oscar.tarazonao@gmail.com';
let esMayorDeEdad = true;
let dineroAhorrado = 2000;
let deudas = 20;
```


### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

un conjunto de sentencias o encapsular bloques de codigo para ser usado, ejecutados y reutilizar par calcular de manera mas 

- ¿Cuándo me sirve usar una función en mi código?

nos srive siempre en cuando querramos  automatizar algo por decir un patron que se repita y podamos encapsular y reutilizarlo cuando sea necesario.
tambien  nos sirve por un tema de orden y legibilidad de nuestro codigo.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

las funciones reciben parametros cuando estas estan declaradas, y son argumentos cuando enviamos a que sean ejecutadas

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Oscar Wilfredo";
const lastname = "Aguirre Tarazona";
const completeName = name + lastname;
const nickname = "Acsor";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

function usuario (name, lastName, nickName) {
    const completeName = name + lastName;
    
    console.log(`mi nombre es ${completeNanme}, pero prefiero que me digas ${nickName}`)
}

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
- ¿Puedo combinar funciones y condicionales?

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
- ¿Qué tipos de ciclos existen en JavaScript?
- ¿Qué es un ciclo infinito y por qué es un problema?
- ¿Puedo mezclar ciclos y condicionales?

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
- ¿Qué es un objeto?
- ¿Cuándo es mejor usar objetos o arrays?
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!