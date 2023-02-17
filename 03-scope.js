// Scope global donde puede acceder todos los valores
let name = "Oscar";
let lastname = "Aguirre";

function completeName (name, lastname) {
    // el scope local donde puedes accedes los valores que estan encapsulados en una funcion y que solo se aplica en este ambito
    let nickname = "Acsor";
    return console.log(`mi nombre es ${name}, y mi apellido es ${lastname} pero prefiero que me digas ${nickname}`);
}
