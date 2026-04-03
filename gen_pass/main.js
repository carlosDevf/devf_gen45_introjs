const getElement = (id) => document.getElementById(id)

//document.getElementById
const range = getElement("length_password")
const passWordValue = getElement("length_password_value")
const generatorBtn = getElement("password_generator")
const finalPassword = document.getElementById("final_password")

// inputs ve linea 3 
const inputMayus = getElement("letters_mayus")
const inputMinus = getElement("letters_mins")
const inputNumbers = getElement("letters_numbers")
const inputSymbols = getElement("letters_symbols")

const toogleBtn = getElement("theme-toggle")
const iconToogleBtn = getElement("theme-icon")

// spans de fuerza 
const level1 = getElement("level_1")
const level2 = getElement("level_2")
const level3 = getElement("level_3")
const level4 = getElement("level_4")

const DEFAULT_PASSWORD_LENGTH = 8
let globalPasswordValue = DEFAULT_PASSWORD_LENGTH

const syncPasswordLength = (value) => {
    const length = Number(value)
    globalPasswordValue = length
    range.value = length
    passWordValue.innerText = length
}

syncPasswordLength(DEFAULT_PASSWORD_LENGTH)
const genStore = function(){
 // abecedario["a", "b"]
    const minusculas = "abcdefghijklmnñopqrstuvwxyz"
    const maysuculas = "ABDEFGHIJLMLNÑOPQRSTUVWXUZ"
    const numbers = "1234567890"
    const symbols = "#@&%"

    let strong = 0
    let optionsSelected = 0

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    let caractersStore = ""
    console.log(inputMayus.checked, "input mayus")

    // switch
    if (inputMayus.checked) {
        caractersStore = caractersStore + maysuculas
        optionsSelected++
    }

    if (inputMinus.checked) {
        caractersStore = caractersStore + minusculas
        optionsSelected++
    } 
    
    if (inputNumbers.checked) {
        caractersStore = caractersStore + numbers
        optionsSelected++
    } 
    
    if (inputSymbols.checked) {
        caractersStore = caractersStore + symbols
        optionsSelected++
    }

    console.log("Opciones seleccionadas:", optionsSelected, "| Longitud:", globalPasswordValue)
    
    // --- INICIO LOGICA DE FORTALEZA TERMINADA ---

    // 1. Calculamos el nivel de fuerza (0 a 4)
    if (optionsSelected === 0 || globalPasswordValue === 0) {
        strong = 0
    } else if (globalPasswordValue < 8 || optionsSelected === 1) {
        strong = 1 // Muy dwbil
    } else if (globalPasswordValue < 10 || optionsSelected === 2) {
        strong = 2 // Debil
    } else if (globalPasswordValue < 12 || optionsSelected === 3) {
        strong = 3 // Media
    } else {
        strong = 4 // Fuerte
    }

    // 2. Función para remover/resetear los estilos previos (volvemos al color de borde original)
    const levels = [level1, level2, level3, level4]
    levels.forEach(level => {
        level.className = "w-[10px] h-[28px] border-2 border-app-text"
    })

    // 3. Función para setear los nuevos colores de las barras
    const strengthColors = [
        "", // Nivel 0 (vacío)
        "bg-red-500 border-red-500",       // Nivel 1
        "bg-orange-500 border-orange-500", // Nivel 2
        "bg-yellow-400 border-yellow-400", // Nivel 3
        "bg-app-green border-app-green"    // Nivel 4
    ]

    for (let i = 0; i < strong; i++) {
        // Pintamos el nnmero de barras correspondiente al nivel de fuerza con su respectivo color
        levels[i].className = `w-[10px] h-[28px] border-2 ${strengthColors[strong]}`
    }

    // --- FIN LÓGICA DE FORTALEZA TERMINADA ---

    console.log("Fuerza final:", strong)
    return caractersStore
}

range.addEventListener("change", (e) => {
    syncPasswordLength(e.target.value)
})

generatorBtn.addEventListener("click", () => {
    const caractersStore = genStore()
    let password = ""
    for (let i = 0; i < globalPasswordValue;i++) {
        const seed = Math.floor(Math.random() * caractersStore.length)
        const newValue = caractersStore[seed]

        // primera iteracion
        // seed = 2
        //   0    1    2         4  
        // ["a", "e", "i", "o", "u"]
        password = password + newValue
    }
    
    finalPassword.innerText = password
    const isDark = document.documentElement.classList.contains("dark")
    console.log(isDark)
    finalPassword.style.color = isDark ? "#000000" : "#0a4605"
})

const toogleDarkMode = function() {
    const html = document.documentElement  
    if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        iconToogleBtn.classList.replace("fa-moon", "fa-sun")
        localStorage.setItem("theme", "light")
    } else {
        html.classList.add("dark")
        iconToogleBtn.classList.replace("fa-sun", "fa-moon")
        // localStorage.setItem("theme", "light")
        localStorage.removeItem("theme")
    }   
}

toogleBtn.addEventListener("click", toogleDarkMode)

document.addEventListener("DOMContentLoaded", () => {
    // si nadie ha setado un valor en localStorage esta variable sera undefined
    const themeOnLocal = localStorage.getItem("theme")
    const html = document.documentElement 
    
    if (themeOnLocal === "light") {
        html.classList.remove("dark")
        iconToogleBtn.classList.replace("fa-moon", "fa-sun")
    }
})
