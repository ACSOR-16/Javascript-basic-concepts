let names = ["Andres", "Ramiro", "Silvia", "Oscar"]

// Accedemos y mutamos el segundo elemento
names[1] = "Adhara"

// Length devuelve la cantidad de elemento
let longitud = names.length
console.log(longitud) // 4

//Index es la posicion en la que se encuentra en el array
nombres[0] // "Andres"
nombres[1] // "Adhara"
nombres[2] // "Silvia"
nombres[3] // "Oscar"
nombres[4] // undefined

console.log(nombres) // ["Andres", "Adhara", "Silvia", "oscar"]

// METODOS DE ARRAYS basicos
Array.prototype.push () // agrega al final
Array.prototype.pop () // elimina el ultimo
Array.prototype.unshift () // agrega el elemento al incio
Array.prototype.shift () // elimina el primer elemento
Array.prototype.indexOf () // retorna el indice del array
