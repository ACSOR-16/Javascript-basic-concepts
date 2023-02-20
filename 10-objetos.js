// OBJETO contiene atributos
let miAuto = {
  marca: "Toyota",
  modelo: "suv",
  annio: 2023,
  detalleDeAuto: function(){
      console.log(`Auto ${this.modelo} ${this.annio}`)
  }
}

// para acceder a los valores o propiedades de un abjeto
miAuto.marca;
miAuto.modelo;
miAuto.annio;

miAuto["marca"] // "Toyota"
miAuto["modelo"] // "Corolla"
miAuto["año"] // 2020
miAuto["detalle"] // ƒ detalle()

// agregar una propierdad con metodos
miAuto.detalleDeAuto(); // "Aauto Toyota 2023"

// accedemos mediante variables
var propiedad1 = "marca"
miAuto[propiedad1] // "Toyota"

var propiedad2 = "nombre"
miAuto[propiedad2] // undefined

miAuto[modelo] // ReferenceError: modelo is not defined (no existe referencia)

//A;ADIENDO O MODIFICANDOLAS    PROPIEDADES DE UN OBJETO
miAuto["color"] = "rojo"
// o 
miAuto.color = "rojo"

console.log(miAuto)
/* {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
  color: 'rojo'  <---- nueva propiedad
} */

//ELIMINANDO PROPIEDADES DE UN OBJETO
delete miAuto["marca"]
// o 
delete miAuto.marca

console.log(miAuto)
/* { 
  modelo: 'Corolla', <--- No existe la propiedad marca
  'año': 2020,
  detalle: ƒ detalle(),
} */


// FUNCION CONSTRUCTORA
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

let autoNuevo = new auto("mazda", "mx-5", 2023);
let autoNuevo2 = new auto("mazda", "mx-3", 2022);
let autoNuevo3 = new auto("Toyota", "rav4", 2020);
