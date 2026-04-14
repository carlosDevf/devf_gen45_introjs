// Destruccturación 

// objetos
const casaCarlos = {
    numero_ext: "32",
    calle: "Valle de bravo"    
}
// ¿para que lo voy a usar?
// las caracteristicas de lo que quiera representar
// Biblioteca: libro: titulo, autor, fecha, edicion, paginas,
// batman_year_one: 
// alumnos: nombre, edad, modulo o el producto que adquirio 

// leer una propiedad
casaCarlos.calle
casaCarlos["calle"]

// añadir una nueva propiedad
casaCarlos.hipoteca = "se paga en febrero"
console.log(casaCarlos)

// ojo cuidado! alerta! alarma! no lo haga mi compaaaaa!!
/* delete casaCarlos.hipoteca
// mongo => replicas de tu bd en todas las partes del mundo = 

console.log(casaCarlos) */
/// hay que crear un nuevo objeto 

const {hipoteca, numero_ext, calle} = casaCarlos
console.log(calle)

// ejemplo de como crear un nuevo objeto basado en otro quitando elementos
// spread operator
// hipo es ejemplo de destructuracion
const {hipoteca: hipo, ...restOfData} = casaCarlos
console.log(restOfData, "copia de casaCarlos")
console.log(casaCarlos, "original")


const colonia = [casaCarlos]
// map para iterar objetos =D 
// callback: es una funcion dentro de otra funcion

const getItems = (item, index) => {
    console.log(index, 'index')
    const { calle: street } = item
    console.log(street)
}

colonia.map(getItems)


const nombreUser = "carlos@devf.com.mx"
///  nombre[0]
const [nombre] = nombreUser.split("@")
console.log(nombre)


// RETO: 
const grupo = "MASTER_DATA BATCH 2 META_IA"
// CREAR UN ARREGLO
const grupoArreglo = grupo.split(" ") // crear un nuevo arreglo
console.log(grupoArreglo)
//                    producto   numeber_batch    path
// al ejecutarse [ 'MASTER_DATA', 'BATCH', '2', 'META_IA' ]
// Senior => magic numbers
const producto = grupoArreglo[0]
const batchNum = grupoArreglo[2]
const path = grupoArreglo[3]

const [product,, batch, PATH] = grupoArreglo
console.log(PATH, "    ", path)


console.log(grupoArreglo.slice(grupoArreglo.length -1)[0])
console.log(grupoArreglo.at(-1))

// comuncacion
// Race condition // funciones asincronas
const alumnos = Promise.resolve(fetch("https://pokeapi.co/api/v2/pokemon/pikachu")) // 35ms
const profesores = Promise.resolve(fetch("https://profesores/carlos")) // 10s

const constancia_de_estudios = ""
