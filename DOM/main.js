console.log("hola dom")

// orden
const libreriaFunciones = {    
    addInternalBooks: function(book) {
        // this.
        this.books.push(book)
    },
    showInternalBooks: function() {
        console.log(this.books)
    },
    books: [],        
}


// DOM
// Buscar elementos
// 
const inputLibro = document.getElementById("input_libro")
// tradicional "facil"
const botonEnviar = document.getElementById("btn_enviar")

const contenedorLibros = document.getElementById("lista_libros")

// moderna ***

// Eventos // funciones anonimas
botonEnviar.addEventListener("click", (evento) => {
    evento.preventDefault()
    const libro = inputLibro.value
    if (libro === '') {
        alert("en necesario escribir el nombre del libro")
    }

    if (libro.length > 30) {
        alert("el nombre es muy largo")
        inputLibro.value = ""
        // alerly return
        return
    }

    // TODO: 
    // NO REPETIR LIBROS
    // ALERTA AMIGABLE
    // GUARDAR DATOS


    // si el nombre es valido....
    // vamos a añadirlo a la lista
    // 
    // crear el elemento
    const li = document.createElement("li")
    li.innerText = libro

    console.log(li)
    // añadirlo dentro del contendor
    contenedorLibros.appendChild(li)
    // secuencial programacion imperativa
    inputLibro.value = ""
})