
const nombre = "carlos alfonso"
//  var  ---- tipo global
//  let 

// declarar un valor
const edad = 80

// asignacion
const edad_suma = edad + 80
console.log(edad, edad_suma)

// caso de LET if 
let estalloviendo = undefined
estalloviendo = true


// OPERADORES
// OPERADORES DE COMPARACION 
// =, < > 

// OPERADOR DE IGUALDAD === // Ecmascript 2016 // Igualdad escrita
// compara el tipo con el valor
const pedro = 15
const juan = 15

// mayor y menor < >
console.log(pedro > juan)

// mayor igual y menor igual 
console.log(pedro >= juan)

// OPERADORES LOGICOS
// AND &&
// OR  ||
// NOT !

// valores truthy y falsy
// AND compara dos o mas expresiones 
// para que and sea verdadero todas las expresiones deben de serlo

console.log(pedro === juan && pedro === 15 && juan === 5 && pedro === (5 + 10))
//               true      =>     true     =>     false   /        true

// todos los alumnos que presentaron el examen de matematicas 
// todos los alumnos que obtubieron +7 en el examen de matematicas 

// OR  ||
// or regresa un true si alguna de las expresiones es verdadera
console.log(pedro === juan || pedro < 15 || juan === 5 || pedro > (5 + 10))
//              true           false         false             false
// casos reales
const estadoCuenta = 0 || "deposita mas dinero para usarlo en tu cuenta"
console.log(estadoCuenta, "edo")
console.log(Boolean(""), "---- boolean")

// ?? Nullish coalescing assignment Ecma 2020
const estadoCuenta2 = 0 ?? "deposita mas dinero para usarlo en tu cuenta"
console.log(estadoCuenta2, "edo 2")

// operadores mat
// + 
// concatenear o unir dos cadenas de texto
// console.log("hola" + " mundo")
// cambiar un string a un numero 
let numMat = "1250"
console.log(+numMat)  // mutando la variable original
console.log(numMat++) // incremento
console.log(numMat)
console.log(numMat + 200)

// resta - 
console.log(numMat--) // decremento
console.log(numMat)
console.log(200 - 2)


// multi *
// hace el cambio de tipos
console.log(20 * "4")

// modulo %
// nos retorna el residuo de una division
// casos REAL
// 1 reto programacion // busca los numeros pares e impares
// 2 pintar una tabla con CSS
console.log(20 % 2)
// odd 

// division
console.log(10 / 5)

// metodo de matematicas avanzadas
// Estoy aprendiendo JS, dime algunas cosas basicas que puedo hacer con Math dame ejemplos sencillo de ejecutar y con casos REALES
// Math.floor Math.slice // algoritmo de ordenar valores

// Que es un if 
// Estructuras de cotrol 
// sintaxis basica
/* if (evaular una condicion === true) {
    /// ejecutar lo que aqui este dentro 
    console.log("hola")
} */

/* if (pedro < 15){
    // SCOPE
    const tarjeta = true
    console.log(tarjeta)
    console.log("A PEDRO LE TOCA SU BECA DEL BIENESTAR")
}

if (pedro >= 18) {
    console.log("A PEDRO tramita tu INE")
} */


// ELSE 
if (pedro <=15){
    // SCOPE
    const tarjeta = true
    console.log(tarjeta)
    console.log("A PEDRO LE TOCA SU BECA DEL BIENESTAR")
} else {
    console.log("A PEDRO tramita tu INE")
}


// else if
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

if (pedro <= 15) {
    console.log("pedro es menor de 15")
} else if (pedro < 10) {
    console.log("pedro le toca vacuna del sarampion que no da autimso, vacunate porfavor")
} else if (pedro >= 18) {
    console.log("pedro puede tomar azulitos")
} else {
    console.log("pedro parece que no puede hacer nada ")
}

if (pedro > 10 && pedro < 18) {
    console.log("pedro es menor de edad")
}

if (pedro < 14 || pedro >= 15) {
    console.log("pedro tiene entre 14 y 15")
}
// For - Crear bucles // interacion
// sintaxis
// else if
/*
 * Escribe un programa que muestre por consola (con un console.log) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

//   contador /  expr   / incrementar el i + 1
//   for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
for (let i = 1; i <= 100; i++) {
    console.log(i) 
    // % modulo es el residuo de una division   
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log(i + "fizzbuzz")
    } else if ((i % 3) === 0) {
        console.log(i + "fizz")
    } else if ((i % 5) === 0) {
        console.log(i + "buzz")
    } 
}
/* const numbers = []
numbers.length = 100
const lista = numbers.fill(1).map(i => i +1)
console.log(lista) */

// forEach, for of; for in; async await for; map, filter, find, some, 






