console.log("Funciones ")

// funcion o metodo
// consejo de buenas practicas: "no te repitas"
// dentro de los parentesis puedo mandar variables
const funcionSuma = function (numero1, numero2) {
    const resultado = numero1 + numero2
    console.log(resultado)
    // todas las funciones debe tener un return
    // independientemente si si o no retorna informacion    
    return resultado
}

const funcionResta = function (numero1, numero2, parametro3) {
    // caso para la resta: 
    // siempre ubicar el numero mayor primero
    /* const resultado = numero1 - numero2
    console.log(resultado)
    console.log(parametro3) */
    // estilo 1: 
    /* if (numero1 > numero2) {
        console.log(numero1 - numero2)
        const res = numero1 - numero2
        return res
    } else {
        const res = numero2 - numero1
        return res
    } */

    // estilo 2 GO: 
    /* let resutadaoResta = 0

    if (numero1 > numero2) {        
        resutadaoResta = numero1 - numero2        
    } else {
        resutadaoResta = numero2 - numero1        
    }

    return resutadaoResta */

    // if: ternarios
    return numero1 > numero2
        // ? if 
        ? numero1 - numero2
        // else 
        : numero2 === numero1         
}

const numero1 = 10
const numero2 = 70
funcionSuma(numero1, numero2)
funcionSuma(890, 852212)

//
funcionResta(1000, 10000, 200)


const sumaDato = funcionSuma(70, 120)
console.log(sumaDato)