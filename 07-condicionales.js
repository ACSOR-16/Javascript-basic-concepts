// Condicionales: If, Else, else if

let precio = 10
let articulos = 20;

if (articulos >= 5 && articulos < 10){
   precio = precio * (1-0.10)
} else if (articulos >= 10 && articulos < 15){
    precio = precio * (1-0.15)
} else {
    precio = precio * (1-0.20)
    // se ejecuata este bloque
}

// Operador ternario
// La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso
function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

esPar(2) // "Es par"
esPar(3) // "No es par"

// SWITCH
function semaforo(color) {
    switch (color) {
      case "verde": {
        console.log("¡Sigue!")
        break
      }
      case "amarillo": {
        console.log("¡Detente!")
        break
      }
      case "rojo": {
        console.log("¡No puedes avanzar!")
        break
      }
      default: {
        console.log("¡No reconozco ese color! :(")
      }
    }
  }
  
  semaforo("verde") //'¡Sigue!'