// tipo de Variables
var name = "Oscar";
const lastnameparner = "Aguirre";
let emailGmail = "oscar.aguirre.tarazona@gmail.com";

// Declarar una variable
let emailhotmacil;
const lastname = "tarazona";

// Inicializar y reinicializar una variable
lastname;
emailGmail = "oscar98wll18@gmail.com";

// determina el nombre y tipo para almacenar en variables la siguiente informacion

let string = "batman";
// string

let numer = 123705;
// number

let mayorDeEdad = tru || false;
// Boolean

let newPassword = undefined;
// undefined

let frutas = ["melon", "platano"]
// array

let automovil = {    
    marcar: "toyota",
    modelo: "suv",
    year: 2022,
}
// objeto

// valores falsy  aquel que es falso en un contexto booleano

// Coersión explícita
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false

// También puedes realizar una coerción implícita con el operador de negación (!), pero solo es para que la conozcas, no es recomendable.
// Coersión implícita (no la uses)
!!0 // false
!!"" // false
!!null // false
!!undefined // false
!!NaN // false
!!false // false

// valores truthy aquel que es verdadero en un contexto booleano
// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true

// Cabe recalcar que en JavaScript todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos.

Boolean([]) // true
Boolean({}) // true