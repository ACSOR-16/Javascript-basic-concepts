// dato el hoiting cuando mandas a llamar una variable antes de ser procesada de la siguiente forrma:
console.log(example);
// agrega un valor de undefined a pesar de que agregamos el valor despues 

let example = 345;

// otro ejemplo
hey();

function  hey() {
    console.log(`Hola ${myName}`);
}

let myName = "oscar";
// => Hola undefined