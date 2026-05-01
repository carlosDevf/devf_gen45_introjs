// arreglos => [] string, numbers, arrays o slice, objetos, combinados

// iterar => revisar elemento por elemento cada uno del contenido
// Una analogía de la vida real
// Imagina que eres un profesor y tienes que pasar lista en clase:
// Tienes tu hoja con la lista de estudiantes (tu arreglo).
// Lees el primer nombre, buscas si el alumno está y le pones su asistencia.
// Pasas al segundo nombre y repites el proceso.
// Sigues así hasta llegar al final de la hoja.

// Ese proceso de ir "uno por uno" revisando o haciendo algo con cada estudiante es exactamente lo que significa iterar.
// index => numero que representa la posicion de alguno de esos elementos length array.lenght  7
// for (var i = 0; i < 10; i++){}
// 

const productos = [
  { id: 1, nombre: "Laptop id: 1,Gamer", precio: 25000, disponible: true },
  { id: 2, nombre: "Ratón Inalámbrico", precio: 500, disponible: true },
  { id: 3, nombre: "Teclado Mecánico", precio: 1200, disponible: false },
  { id: 4, nombre: "Monitor 4K", precio: 7000, disponible: true }
];

// productos[0] =   { id: 1, nombre: "Laptop id: 1,Gamer", precio: 25000, disponible: true },
// productos[1] =   { id: 2, nombre: "Ratón Inalámbrico", precio: 500, disponible: true },
// productos[2] =   { id: 3, nombre: "Teclado Mecánico", precio: 1200, disponible: false },
// productos[3] =   { id: 4, nombre: "Monitor 4K", precio: 7000, disponible: true }
// interar: significa repetir una acción o un proceso varias veces.
// Método find(): Búsqueda específica
// a buscar un elemento dentro de un arreglo y si lo encuentra retorna el elemento y si no undefined
const list = [1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7]
const searchNumber = list.find((element) => elemento === 78)

const monitor = productos.find((element) => {     
    return element.nombre === "Monitor 4K"
})

// 2. Método filter(): Selección por condiciones
// a buscar un elemento dentro de un arreglo y si lo encuentra retorna un arreglo con todas las conicidencias y si no retonar un arrego vacio
const numbers = list.filter((element) => element === 3)
const numbersFind = list.find(element => element === 3)

// 3. Método map(): Transformación de datos
// como conseguimos una lista con solo los precios, para crear un arreglo de otro arreglo
// "El gerente nos pide una lista rápida que solo tenga los nombres de los productos para hacer un inventario impreso. No necesitamos los precios ni la disponibilidad."
const inventarioList = productos.map((element) => element.nombre)

// ¡Buen Fin! Aplicamos un 10% de descuento a todos los productos
const buenFinList = productos.map((element) => {
    const newprice = element.precio * 0.90
    // USO CASI DE TODOS LOS DIAS
    return {        
        ...element, // spread operator copia el elemento que se itera 
        precio: newprice,  // cambiamos el valor del precio
        desc: "10%"
    }
})

const newList = []
// 4. Método forEach(): Ejecutar acciones
productos.forEach((element) => {
    const newprice = element.precio * 0.90
    // USO CASI DE TODOS LOS DIAS
    const el = {        
        ...element, // spread operator copia el elemento que se itera 
        precio: newprice,  // cambiamos el valor del precio
        desc: "10%"
    }
    newList.push(el)
})

// 5. Método some(): ¿Al menos uno cumple la regla?
// si alguno de los elementos cumple con la condicio true, false
// retorna un boolean
const list_3 = list.some((element) => element === 782)
if (list_3) {
    console.log("si cumple")
} else {
    console.log("no cumple")
}

console.log("--------------------------------------------------------------------")
// 6. Método every(): ¿Todos cumplen la regla?
// retorna un boolean true false 
// "El gerente de la tienda quiere saber si todos los productos de nuestro catálogo 
// están disponibles actualmente para lanzar una campaña publicitaria. 
// Si falta aunque sea uno, la respuesta debe ser No."
const isPromotion = productos.every((element) => element.disponible === true)
console.log("si hay una promocio????", isPromotion)


console.log("------------------------------SORT--------------------------------------")
// 7. Método sort(): Ordenar los datos
// ordena los elementos de un arreglo
// siempre que ocupemos el metodo sort trata de hacer una copia del arreglo original por que es un metodo que "muta"
const copyList = [...list]
const listSort = copyList.sort((next, current) => {
    // console.log("current", current)
    // console.log("next", next)
    return next - current
})
// console.log("listSort", listSort)
// console.log(list, "list")
//  para sortear fechas hay que convertias en un timestampt 30/04/2026
console.log(new Date().getTime())
const productosSort = productos.sort((a, b) => a.precio - b.precio)


console.log("------------------------------REDUCE--------------------------------------")
// Método reduce(): Reducir todo a un solo valor
// increameta la complejidad de el codigo, computacional
const sumaLista = list.reduce((acc, current) => {
    return acc + current
},0)

console.log(sumaLista)

const totalInventario = productos.reduce((acc, current) => {    
    // acc.product + precio
    return acc + current.precio
}, 0)

console.log(totalInventario)