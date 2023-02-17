//operadores aritmeticos
//suma
2 + 3 // 5

// resta
5 - 3 // 2

// multiplicacion
8 * 7 // 56

// division 
8 / 4 // 2

// residuo o coeficiente
28 % 5 // 3

// OPERADORES DE CONCATENACION
"Hola" + "Oscar" // "Hola Oscari"

// OPERADORES DE INCREMENTO Y DECREMENTO aumenta o disminuye una unidad a una variable
variable++
variable--
--variable
++variable

//  OPERADORES DE ASIGNACION "="
let saludo = "Hola Mundo";

//  OPERADORES DE ASIGNACION COMBINADA

let contador = 1;

contador = contador + 2;
contador = contador - 1;
contador = contador * 5;
contador = contador / 2;

// forma corta
let contadorC = 1;

contadorC += 2;
contadorC -= 1;
contadorC *= 5;
contadorC /= 2;

// OPERADORES DE IGUALDAD " == O ==="
//Igualdad
"3" == 3 // true
3 == 3 // true

// Igualdad estricta
"3" === 3 // false
3 === 3 // true

// OPERADORES DE DESIGUALDAD " != O !=="
"3" != 3 // false
3 != 3 // false

// Desigualdad estricta
"3" !== 3 // true
3 !== 3 // false

// OPERADORES DE MAYOR O MENOR
// Menor que
3 < 5 // true

// Mayor que
3 > 5 // false

// Mayor o igual a que
3 >= 3 // true
3 >= 5 // false

// Menor o igual a que
3 <= 3 // true
3 <= 5 // true

// OPERADORES LOGICOS
// Operador de disyuncion AND O (&&)
let bAnd = 5
let aAnd = 15

(aAnd >= 10) && (aAnd <= 20) // true
(bAnd >= 10) && (bAnd <= 20) // false

// Operador de unión u OR (||)
let aOr = 15
let bOr = 5

(aOr <= 10) || (aOr >= 20) // false
(bOr <= 10) || (bOr >= 20) // true

// Operador de negación o NOT (!)
let aNot = 5

!(aNot < 0) // true
