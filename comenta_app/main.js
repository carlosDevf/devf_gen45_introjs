
// getElementById solo va a buscar el primer elemento con ese nombre de ID
const btn_enviar = document.getElementById("btn_enviar")
const comment = document.querySelector("#user_comment")
const commenBox = document.querySelector("#comment_box")
// ACCDER A LAS CLASE O ESTILOS DE CSS
const notifySucces = document.getElementById("notify-succes")
//
const botonColors = document.getElementById("btb_colors")
//
const btnSelectColor = document.getElementById("btn_select_color")
// variable globlal del nuevo color seleccionado para el navbar
let selectColor = ""

/* NodeList
const commentarios_class = document.getElementsByClassName("flex") // => arreglo de NODOS: NodeList // for, forEach
/* const commentarios = document.querySelectorAll() // => arreglo de NODOS: NodeList // for, forEach, Array... */

const btn_send = document.querySelector("#btn_enviar")
console.log(btn_send)

const btn_like = document.querySelector(".comment_user > div > button")
console.log(btn_like)

const all_likes = document.querySelectorAll("ul > li > button")
console.log(all_likes)

console.log(comment)
comment.addEventListener("change", (evento) => {
    const comentario = evento.target.value

    // crear un nood
    const li = document.createElement("li")
    // darle un valor al nodo

    // innerHTML + template string
    li.innerHTML = `<div class="comment_user border rounded-sm p-2 m-4">
                <div class="flex items-end">
                    <img class="w-[40px] bg-blue-700 hover:bg-blue-300 hover:cursor-pointer rounded-full"
                        src="https://static.vecteezy.com/system/resources/thumbnails/027/842/188/small/user-ecommerce-icon-fill-style-png.png">
                    <span class="text-lg">@cchavezmx</span>
                    <span class="text-sm text-slate-500">7 min ago</span>
                </div>
                <p>${comentario}</p>
                <div>
                    <button>👍</button>
                    <button>👎</button>
                </div>
            </div>`
    // añadirlo dentro de el HMTL (previamente ya guarde dentro de una variable "commenBox")
    commenBox.appendChild(li)
    // limpiamos el input
    comment.value = ""
    // mostramos el comentario
    notifySucces.style.visibility = "visible"
    // ocultar de nuevo el comentario
    setTimeout(() => {
        notifySucces.style.visibility = "hidden"
    }, 3 * 1000)
    // API classList Javascript
})

const edad = 40

const comentario1 = "comillas dobles" + " " + edad
console.log(comentario1)
const comentario2 = 'comillas simples' + " " + edad
console.log(comentario2)

// acento grave alt + 96
const comentario3 = `hola como estas ${edad}`
console.log(comentario3)

// nos retorna todas las clases que tiene el elemento
console.log(notifySucces.className)
// checkVisibility: boolean ****
console.log(notifySucces.checkVisibility())
// classList: Arreglo de clase CSS
console.log(notifySucces.classList)
// stlye => interactuar con las clases de el elemento
/* notifySucces.style.visibility = "visible" */

console.log(notifySucces.className)


// VER EL DIA Y HORARIO DE LA REPOSICION: DIA LABORAL
// -a) RECORRER EL FINAL DEL modulo *** 31 de marzo 

// REPASAR POSITION: 
// REVISAR LOS VIDEOS PASADOS *** <>
// Checar si podemos cambiar horarios de el modulo: javascript avanzado // Vico => 


const navBar = document.getElementById("nav_bar")
// API CLASS LIST CLASE 07 el API ClassList
// listar - observar
console.log(navBar.classList.length, 'classList')
console.log(navBar.classList.item(0))
console.log(navBar.classList.item[1])
// for Of 
for (const style of navBar.classList) {
    console.log(style, "----- estilo")
}

// Array form crea un Array de una lista iterable
Array.from(navBar.classList).map(style => console.log(style))

// añadir - remover
navBar.classList.add("text-2xl", "text-white")
/* navBar.classList.remove("bg-green-700", "text-white") */
/* navBar.remove() */

// listar - contains - 
const is2XL = navBar.classList.contains("text-2xl")
console.log(is2XL)
if (is2XL) {
    navBar.classList.add("text-5xl")
}

// crear un boton que pueda cambiar el color de la cabecera
const changeColorNavBar = function () {
    if (navBar.classList.contains("bg-red-100")) {
        // se pdria cambiar por el replace ** probar    
        navBar.classList.remove("bg-red-100")
        navBar.classList.add("bg-green-100")
    } else {
        // se pdria cambiar por el replace ** probar
        navBar.classList.remove("bg-green-100")
        navBar.classList.add("bg-red-100")
    }
}

const changeToggleNavBar = function () {
    // el segundo parametro es el force que recibe un boolean.    
    navBar.classList.toggle("bg-red-100")
    navBar.classList.replace("text-5xl", "text-sm")
}

const changeColorAbsolute = () => {
    //style="background-color: powderblue;"
    navBar.style.backgroundColor = selectColor
}

botonColors.addEventListener('click', changeColorAbsolute)

btnSelectColor.addEventListener('change', (evento) => {
    selectColor = evento.target.value
})

// Buscar
// Escuchar
// ** ---> INTERNET => BUSQUEDA
// Ejecutar => TRANSFORMACION => 