console.log("hola mundo, como están?")
console.error("hola mundo, como están?")
// para mostrar el la consola si exsite algun error
console.warn("error, señor")
console.table(["apples", "oranges", "bananas"]);
// 


// <-- para crear cometarios
// Tipos de datos en Javascript
// linter
// variables: para declarar variables tenemos
// let
// const
// **** var *****

// Tipos primitivos

// Number

//JAVASCRIPT ES: no tipado: INFIERE LOS TIPOS DE DATOS

const edad = 80
/* console.log(edad, "----- edad", typeof edad) */

const dolar = 17.80
/* console.log(dolar, "----- dolar", typeof dolar) */
///

// pasar de string a numeros
const edad10 = Number(edad) + 10
console.log(parseInt(edad))
console.log(+edad, "usando mas")

var nombre2 = ""

// PROMPT: QUE HACE ESTE LINEA, Y DAME EJEMPLOS DE USO Y UN DATOS CURISO
/* parseFloat */
console.log(edad10, "edad en 10 años")

// String - texto
// comillas dobles, comillas sencillas y template string

const nombre = "carlos chavez"
/* console.log(nombre, "--- nombre ---", typeof nombre) */
console.log(nombre + "rosario")

// Boolean // true false 

const estaNubaldo = false
/* console.log(estaNubaldo, "--- estaNubaldo ---", typeof estaNubaldo) */


// undefined ->
// null
const calificacion = null
/* console.log(calificacion, "--- calificacion ---", typeof calificacion) */
/* console.log(calificacion, "--- calificacion 22---", calificacion instanceof null) */


//* menos usados *//
// BigInt 
// Symbol -< valor unico id, de una lista de personal, React


// tipos Complejos
// Array, matriz, Slice, 


const alumnos = ["Victor", "Andres", "Julia", "Luis"]
// index            0         1         2       3 
console.log(alumnos.length, Array.isArray(alumnos)) 

// interamos elementos de un arreglo
// accedemos a los elementos de un arreglo

console.log(alumnos[2], "index 2")

// describiendo como es mi casa
const casa = {
    cuartos: 4,
    puertas : 10,
    direccion: "Av siempre viva",
    color: "rosa",
    ventanas: 4,
    cocina: true,
    bathrooms: 2,
}

// concatenando texto y accediendo al valor de un objeto
console.log("la casa tiene ", casa.puertas, " puertas")

// Objetos
const alumno = {
    "nombre": "carlos",
    "batch": 45,
    "product_line": "master_frontend",
    "email": "cchavezmx2315@gmail.com"
}

const devf_alumnos = [
    alumno,
]

console.log(devf_alumnos)
