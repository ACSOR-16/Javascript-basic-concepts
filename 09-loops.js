// CICLO FOR

let frutas = ["mango", "fresa", "platano", "naranja"];

function frutasGustos(fruta) {
    console.log(`Me encanta la fruta, ${fruta}`)
}

for (let index = 0; index < frutas.length; index++) {
    return frutasGustos(frutas[index]) ;
    
}

// CICLO FOR ... OF
let numbers = [5, 4, 3, 2, 1];

// ❌ No cambia el array original requiere de un indice
for (let number of numbers) {
  number = number * 2;
}

console.log(numbers) // [5, 4, 3, 2, 1]

// ✅ Cambia el array original
for(let i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2;
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]

// pero al no cambiarlo podemos guardarlo en otro array para poder utilizarlo mas adelante
let numbersChanged = [5, 4, 3, 2, 1];
let duplicates = [];

for (let number of numbersChanged) {
  duplicates.push(number * 2);
}

console.log(duplicates) // [ 10, 8, 6, 4, 2 ]

// CLICLO WHILE 

let estudiantes = ["maria", "edu", "daniela", "rodry"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
  console.log(estudiantes);
  let estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}