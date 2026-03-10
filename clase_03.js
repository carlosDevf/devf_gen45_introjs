console.log("Clase 3, Arreglos")
// funciones recursivas **
// contador = contador + 1  = contador++
// contar de 0 al 100


// while
/* let contador = 0
while (contador <= 100) {
    console.log("dentro del cliclo while", contador)   
    contador++
} */

/* let contadorFor = 0
for (contadorFor; contadorFor <= 200; contadorFor++) {
    console.log("contador 2", contadorFor)    
}
 */
const recuaderia = ['manzana', 'plátano', 'naranja', 'espinaca', 'calabaza', 'chayote', 'calabaza']; /* length = 6 != INDEX */
// index          
//                       0           1         2           3          4            5         6
// RETO: Queremos buscar un producto en específico
// PROGRAMACION SE APRENDE CON LAS MANOS //
// que elementos y objetos en Js son interables
const productoBuscado = 'calabaza';
// vean que es lo que pasa? 
// TAREA: BUSCAR EL POR QUE PUEDO HACER ESTO?
/* recuaderia[1250] = 'calabaza' */
// consultar base de datos
// poder menejar esa cantida de datos
// "pintar" ejecutar operaciones
// siempre sea desde cero 
// buscador, acomodador, validacion
for (let i = 0; i < productoBuscado.length; i++) {    
    // cuando i = 0 ; recuaderia[0]  // Manzana
    // cuando i = 1   recuaderia[1]  // platano
    // ...
    // cuando i = 5   recuaderia[5]  // chayote    
    const fruta = recuaderia[i] // el valor que voy iterando se asigna a una nueva variable
    console.log(fruta, '-----', i)
    if (fruta === productoBuscado) {
        console.log("si hay una ", productoBuscado)
    }
}

/// metodos de arreglos
// añadir elementos dentro de un arreglo push
// METODO PUSH: añade un nuevo valor al final del arreglo
recuaderia.push("sandia")
console.log(recuaderia)

recuaderia.push("mango")
console.log(recuaderia)
/* // Peligroso "mutando mi arreglo"
recuaderia[2] = "pepino"
console.log(recuaderia) */
// 
// METODO unshift: añade un nuevo valor al principo del arreglo
recuaderia.unshift("cereza")
console.log(recuaderia)
// colas: 
// 1 2 3 4 5 6 *7

// eliminar elementos dentro de un arreglo
// METODO: pop(): eliminar el ultimo valor en entrar al arreglo
// muta el arreglo
const ultimoElemento = recuaderia.pop()
console.log(recuaderia)

// tambien el metodo pop nos puede ayudar a asignar ese valor que fue eliminado dentro de una variable

console.log(ultimoElemento)
// PONGALO A PRUEBA
/* recuaderia.pop()
recuaderia.pop()
recuaderia.pop()
recuaderia.pop()
recuaderia.pop()
recuaderia.pop() */

// METODO: SHIFT: elimina el primer elemento del arreglo array[i]
recuaderia.shift()
console.log(recuaderia)

// buenas practicas para escribir variables
// no puedo crear una varaible que tegan numeros o caracters extraños
// estilo recomendado para JS es el cameCase
// que el nombre de la variable sea en relacion a el valor que se le asignara
// respetando plural del singular
let n9 = 89

