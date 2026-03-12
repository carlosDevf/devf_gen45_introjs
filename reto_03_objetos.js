const frutas = [
  // Lote 1 (1 - 40)
  "Manzana ", "Plátano", "Naranja", "Fresa", "Uva", "Mango", "Piña", "Sandía", "Pera", "Kiwi",
  "Cereza", "Limón", "Papaya", "Ciruela", "Durazno", "Coco", "Guayaba", "Frambuesa", "Arándano", "Melón",
  "Fresa", "Mango", "Manzana", "Pera", "Uva", "Naranja", "Plátano", "Kiwi", "Piña", "Sandía",
  "Coco", "Melón", "Limón", "Ciruela", "Cereza", "Guayaba", "Arándano", "Papaya", "Durazno", "Frambuesa",
  // Lote 2 (41 - 80)
  " Manzana", "Plátano", "Naranja", "Fresa", "Uva", "Mango", "Piña", "Sandía", "Pera", "Kiwi",
  "Cereza", "Limón", "Papaya", "Ciruela", "Durazno", "Coco", "Guayaba", "Frambuesa", "Arándano", "Melón",
  "Fresa", "Mango", "Manzana", "Pera", "Uva", "Naranja", "Plátano", "Kiwi", "Piña", "Sandía",
  "Coco", "Melón", "Limón", "Ciruela", "Cereza", "Guayaba", "Arándano", "Papaya", "Durazno", "Frambuesa",
  // Lote 3 (81 - 120)
  "Manzana", "Plátano", "Naranja", "Fresa", "Uva", "Mango", "Piña", "Sandía", "Pera", "Kiwi",
  "Cereza", "Limón", "Papaya", "Ciruela", "Durazno", "Coco", "Guayaba", "Frambuesa", "Arándano", "Melón",
  "Fresa", "Mango", "Manzana", "Pera", "Uva", "Naranja", "Plátano", "Kiwi", "Piña", "Sandía",
  "Coco", "Melón", "Limón", "Ciruela", "Cereza", "Guayaba", "Arándano", "Papaya", "Durazno", "Frambuesa",
  // Lote 4 (121 - 160)
  "Manzana", "Plátano", "Naranja", "Fresa", "Uva", "Mango", "Piña", "Sandía", "Pera", "Kiwi",
  "Cereza", "Limón", "Papaya", "Ciruela", "Durazno", "Coco", "Guayaba", "Frambuesa", "Arándano", "Melón",
  "Fresa", "Mango", "Manzana", "Pera", "Uva", "Naranja", "Plátano", "Kiwi", "Piña", "Sandía",
  "Coco", "Melón", "Limón", "Ciruela", "Cereza", "Guayaba", "Arándano", "Papaya", "Durazno", "Frambuesa",
  // Lote 5 (161 - 200)
  "Manzana", "Plátano", "Naranja", "Fresa", "Uva", "Mango", "Piña", "Sandía", "Pera", "Kiwi",
  "Cereza", "Limón", "Papaya", "Ciruela", "Durazno", "Coco", "Guayaba", "Frambuesa", "Arándano", "Melón",
  "Fresa", "Mango", "Manzana", "Pera", "Uva", "Naranja", "Plátano", "Kiwi", "Piña", "Sandía",
  "Coco", "Melón", "Limón", "Ciruela", "Cereza", "Guayaba", "Arándano", "Papaya", "Durazno", "Frambuesa",
  "Manzana", "Lychee", "Manza na", "Plátano", "Platano", "plátano"
];

// AREA DE MEJORA O MEJORA CONTINUA O BLACKLOG O DEUDA TECNICA
// Es sensible a las mayusculas y minusculas: CHEK

// No es flexible para nuevos elementos dentro del arreglo principal

const nomalizador = function(palabra) {
  let palabraLimpia = palabra.toLowerCase().trim().replace(" ", "")  
  /// para quitar acentos 
  ///  1 .- reconocer si una letra de la cadena tiene acento
  ///  2 .- remplazar esa letra
  const acentos = ["á", "é", "í", "ó", "ú"]  
  // TAREA: SE DEN A LA TAREA: DE TERMINAR ESTA LOGICA
  for (let j = 0; j < palabraLimpia.length; j++){
    const letra = acentos[j]
    /// includes: si una cadena de texto contiene cierta palabra
    if (palabraLimpia.includes(letra)) {
      if (letra === 'á') {
        palabraLimpia = palabraLimpia.replace("á", "a")      
      }

      if (letra === 'é') {
        palabraLimpia = palabraLimpia.replace("é", "e")
      }
    }
  }
  return palabraLimpia
}

//  Problema: Clasificación de Frutas
//  Imagina que tienes un programa que clasifica*  las frutas según su tipo* y cuenta cuántas hay de cada tipo.
//
/* 
- Declara un arreglo llamado frutas con varios tipos de frutas. :check
- uva: 0
- manzana: 0
// 1 .- divide el problema en pequeños casos: 
// 2 .- como podria solucionarlo con papel y lapiz

Crea un objeto para almacenar la cantidad de cada tipo de fruta. ///
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while). */

const resultados = {}
for (let i = 0; i < frutas.length; i++) {
  const frutaRaw = frutas[i] // 0... frutas.length 
  // normalizar los datos
  // *** siempre hay que normalizar cuando se trata de entradas del usuario
  // NOTA: 
  let fruta = nomalizador(frutaRaw)  
  if (typeof resultados[fruta] === 'undefined') {
    resultados[fruta] = 1
  } else {
    resultados[fruta] = resultados[fruta] + 1 
  }
}

console.log(resultados)
const tienda = {
// propiedad: valor (number, string, boolean, objeto...)
// llave : valor
  manzana: 0,
  platano: 0,
  limon: 700,
}

// como asigno un valor a una propiedad dentro de un objeto
tienda.manzana = 10

// como accedo al valor o propiedad dentro de un objeto
// sitaxis de punto (siempre)
console.log(tienda.limon_saladel)
console.log(tienda["limon"])


// sintaxis de [] // puedo añadir una propiedad
tienda["naranja"] = 0

console.log(tienda)
console.log(tienda.naranja)


const tiendaLibros = {
  libros: [],
  addLibro: function(nuevoLibro) {
    // this: al mismo objeto
    return this.libros.push(nuevoLibro)
  },
  deleteLibro: function(){}
}

tiendaLibros.addLibro("el principito")
tiendaLibros.addLibro("la maquina del tiempo")
tiendaLibros.addLibro("La guerra y la paz")
console.log(tiendaLibros)
// seria el eliminar libro
// tip para crear la funcion de eliminar libro
// 1 buscar el elemento: if, 
// 1 reasignar el arreglo sin ese elemnto
// filter(), find(), slice(), indexOf()