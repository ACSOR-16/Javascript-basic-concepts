//javascript debilmente tipado 
// implicita cambia de untipo de valor a otro tipo de valor
let sumaOConcatenacion = 4 + "7";
// "47"-string

let productoOString = 4 * "7";
// 28-number

// explicita nosotros obligamos a cambiar un tipo de valor a otro
let numero = 49;
// 49-number
let coercionExplicita = string(numero);
//"49"-string