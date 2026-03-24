
// getElementById solo va a buscar el primer elemento con ese nombre de ID
const btn_enviar = document.getElementById("btn_enviar")
const comment = document.querySelector("input")
const commenBox = document.querySelector("#comment_box")
// ACCDER A LAS CLASE O ESTILOS DE CSS
const notifySucces = document.getElementById("notify-succes")

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
    },3 * 1000)

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
// -b) TENER 3 CLASES EN 1 SEMANA

// REPASAR POSITION: 
// REVISAR LOS VIDEOS PASADOS *** 
// Checar si podemos cambiar horarios de el modulo : javascript avanzado // Vico