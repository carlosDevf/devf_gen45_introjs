
/* Instrucciones para resolver el problema:

Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
Entregables
Para este proyecto, debes compartir la URL del archivo en el repositorio creado con la solución del problema descrito. Si tienes alguna duda de este ejercicio, no dudes en consultarla con tu sensei para que quede claro. También puedes solicitar una asesoría.

Crea un nuevo archivo a tu repositorio en tu equipo local para solucionar el problema planteado.
Crea un 'commit' en tu repositorio con este archivo para guardar los cambios crear una nueva versión de tu repositorio.
Si quieres agrega otro(s) archivo(s) que tengas con ejemplos de la clase o con algún ejemplo que tú hayas intentado mucho mejor.
Comparte la liga de Github del archivo agregado a tu repositorio con la solución. También puede ser la liga de tu commit. */

console.log("hola")

const librosLeidos = []

const agregarLibro = function (titulo) {
    librosLeidos.push(titulo)
}


// Programacion Orientada a Objetos
const mostrarLibrosLeidos = function () {
    // this. // hace referencia a el objeto que se esta declarando
    // Hoisting (Elevación)
    console.log(librosLeidos)
}

agregarLibro("el principito")
agregarLibro("El rey leon")
agregarLibro("El señor de los anillos")
agregarLibro("El señor de los anillos las dos torres")
agregarLibro("El señor de las moscas")
mostrarLibrosLeidos()

// estilo para crear funciones funcion flecha
// JS metodos de array: find => filter
const mostarUltimoLibro = () => {
    // pop: // "sacar" el ultimo elemento que entro al array y modifica el array original
    /* const ultimo = librosLeidos.pop() */

    // version clasica: 
    // slice dividir un arreglo, 
    /* const ultimo = librosLeidos.slice(librosLeidos.length - 1) */

    // version 2021
    const ultimo = librosLeidos.at(-1)
    console.log("tu ultimo libro es: " + ultimo)
    return ultimo
}

// => es return implicito:
// escribir menos lineas
// metodos de arreglos "modernos": 
const mostarUltimoLibroFlecha = () => librosLeidos.at(-1)
console.log(mostarUltimoLibroFlecha())
mostarUltimoLibro()

///
mostrarLibrosLeidos()


// librosLeidos[i]
// lenght < libro....
// i++
// algoritmos de busqueda
// divide y veceras array
// Arbol de desicion
// debe estar ordenado*****
const buscarLibro = function (libroBuscar) {

    const middle = Math.floor(librosLeidos.length / 2)
    console.log(middle)

    const left = librosLeidos.slice(0, middle)
    const right = librosLeidos.slice(middle, librosLeidos.length)
    console.log(left, 'izq')
    console.log(right, 'der')

    for (const libro of left) {
        console.log(libro)
        if (libro === libroBuscar) {
            console.log("aca esta!!!")
            /* break */
            return
        }
    }
}

/* buscarLibro("El rey leon") */
// sort(a, b): acomodar objetos* a - b, b - a
console.log(librosLeidos.find((valor, index) => valor === "El señor de los anillos"))


// orden
const libreriaFunciones = {
//   Llave  => valor
    addBook: agregarLibro,
    showBooks: mostrarLibrosLeidos,
    addInternalBooks: function(book) {
        // this.
        this.books.push(book)
    },
    showInternalBooks: function() {
        console.log(this.books)
    },
    books: [],
    // chequenlooo
    agregarLibro,
}

libreriaFunciones.addBook("La maquina del tiempo")
libreriaFunciones.addInternalBooks("La batalla de Tenochtitlan")
libreriaFunciones.showInternalBooks()
libreriaFunciones.books
// añadir nuevas funciones
libreriaFunciones.name = "Carlos"

console.log(libreriaFunciones)

// REACT: Promesas:=> arreglo de funciones