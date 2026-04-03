# Intro G45 - Resumen de Clases y Retos

## Clase 1 (Introducción a JS)
- Tipos primitivos: `number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol`.
- Conversión de tipos con `Number`, `parseInt`, `parseFloat`, coerción con `+`.
- Consola: `log`, `error`, `warn`, `table`.
- Arrays y objetos básicos; acceso por índice y por propiedad (`.` y `[]`).

## Clase 2 (Condicionales y Bucles) — `clase_02.js`
- Operadores de comparación y lógicos (`===`, `>=`, `&&`, `||`, `!`, `??`).
- Truthy/falsy y uso de OR/nullish para valores por defecto.
- Control de flujo: `if / else if / else`.
- Reto fizzbuzz dentro de un `for`.
- Bucles `for` con contador clásico y ejemplos de incremento/decremento.

## Clase 3 (Arreglos) — `clase_03.js`
- Recorrido secuencial de arrays para búsqueda manual.
- Métodos que mutan: `push`, `pop`, `unshift`, `shift`.
- Ejemplo de cola/pila y notas sobre buenas prácticas de nombres.
- Iteración con `for` para detectar coincidencias en inventario.

## Clase 4 (Funciones) — `clase_04.js`
- Declaración de funciones anónimas asignadas a constantes.
- `return` explícito vs. ternario.
- Ejemplos de suma/resta con validaciones.
- Ejecución de funciones y reutilización de resultados.

## DOM (Formulario de libros) — `DOM/main.js`
- Selección de nodos con `getElementById`.
- Manejo de eventos con `addEventListener("click")`.
- Validaciones básicas (campo vacío, longitud máxima).
- Creación e inserción de elementos (`document.createElement`, `appendChild`).
- Uso de `preventDefault` en formularios.

## Reto 03 (Conteo de frutas) — `reto_03.js`
- Normalización de texto (minúsculas, `trim`, `replace`) y plan para quitar acentos.
- Conteo manual con variables por tipo en un bucle `for`.
- Ejemplos de `includes` e `indexOf` para búsqueda de cadenas.

## Reto 03 (Versión con objetos) — `reto_03_objetos.js`
- Uso de un objeto dinámico `resultados` para conteo por llave.
- Normalizador reutilizado para homogenizar entradas.
- Introducción a objetos literales y acceso/creación de propiedades (`obj.prop`, `obj["prop"]`).
- Ejemplo de objeto con métodos (`tiendaLibros.addLibro`, etc.) y `this`.

## Reto 04 (Funciones y libros) — `reto_04_funciones.js`
- Gestión de una lista `librosLeidos` con `agregarLibro` y `mostrarLibrosLeidos`.
- Funciones flecha con retorno implícito; uso de `Array.at(-1)` para el último elemento.
- Búsqueda lineal y ejemplo de partición de array (`slice`) como base para búsquedas.
- Objeto `libreriaFunciones` que expone métodos y estado interno.

## Generador de contraseñas — `gen_pass/`
- UI con Tailwind: selector de longitud, checkboxes de tipos de caracteres, indicador de fuerza.
- Lógica en `gen_pass/main.js`: armado de almacén de caracteres según checkboxes, cálculo de fortaleza (0-4), y sincronización de longitud entre slider, etiqueta y variable global.
