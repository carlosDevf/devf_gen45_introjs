// arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];


// Usa filter() para obtener los productos que cuesten menos de $100.
const under100 = productos.filter(item => item.precio < 100)
console.log({ under100 })

// Usa sort() para ordenar esos productos alfabéticamente por su nombre.
// localeCompare compara dos strings según el idioma local (maneja acentos y ñ correctamente).
// Regresa negativo si a < b (a va primero), positivo si a > b (b va primero), 0 si son iguales.
// 
const under100Ordenados = productos.sort((current, nextValue) => current.nombre.localeCompare(nextValue.nombre))
console.log({ under100Ordenados })


// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nombres = productos.map(item => item.nombre)
console.log({ nombres })
// Muestra los resultados de la aplicación de cada métiodo en consola.


// (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.
const totalProductos = productos.reduce((acc, current) => acc + current.precio,0)
console.log({ totalProductos })