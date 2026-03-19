
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
agregarLibro("El señor de las moscas")
mostrarLibrosLeidos()

// estilo para crear funciones funcion flecha

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
const buscarLibro = function (libroBuscar) {
    for (const libro of librosLeidos) {
        console.log(libro)
        if (libro === libroBuscar) {
            console.log("aca esta!!!")
            /* break */
            return
        }
    }
}

buscarLibro("El rey leon")