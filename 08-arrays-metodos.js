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

let articulos = [
  {nombre: "Bicicleta", costo: 850},
  {nombre: "TV", costo: 2550},
  {nombre: "Laptop", costo: 8550},
  {nombre: "Libro", costo: 150},
  {nombre: "Celular", costo: 1850},
  {nombre: "Teclado", costo: 430},
]

// FILTER general una nuevo array
let articuloFiltados = articulos.filter(function (articulo){
  return articulo.costo <= 500;
});// articuloFiltados = [ {nombre: "Libro", costo: 150}, {nombre: "Teclado", costo: 430}]


// MAP genera un nuevo array
let nombreArticulo = articulos.map(function(articulo) {
  return articulo.nombre;
}); // nombreArticulo = [Bicicleta, TV, Laptop, Libro, Celular, Teclado]

//FIND valida y genera un array
let encuentraArticulo = articulos.find(function(articulo) {
  return articulo.nombre === "Laptop";
});// encuentraArticulo= {nombre: "Laptop", costo: 8550},

//FOREACH 
articulos.forEach(function(articulo){
  console.log(articulo.nombre);
}); // solo regresa los valores como "Bicicleta" "TV" "Laptop" "Libro" "Celular" "Teclado"

// SOME es una validadcion
let articulosBaratos = articulos.some(function(articulo) {
  return articulo.costo <= 1500;
});// true