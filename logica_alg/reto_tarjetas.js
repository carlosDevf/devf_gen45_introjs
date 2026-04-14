const createCard = (
    nombre, puesto, empresa, correo, telefono
) => {
    return {
        nombre,
        puesto,
        empresa,
        correo,
        telefono
    }
}
// plural
const personas = [
    createCard("Carlos", "Programador", "devF", "cchavezmx@devf.com", "5524098574"),
    createCard("Carlos", "Programador", "devF", "cchavezmx@devf.com", "5524098574"),
    createCard("Carlos", "Programador", "devF", "cc@devf.com", "5524098574")
]

personas.map(persona => {
    const { nombre, puesto, empresa, correo, telefono } = persona
    const ancho = persona.correo.length + 10
    const fillLine = (value) => {
        const espacio = Math.ceil(ancho - value.length)
        return " ".repeat(Math.floor(espacio / 2))
    }

    console.log(`
            ${"*".repeat(ancho+2)}
            ${fillLine(nombre)} ${nombre} ${fillLine(nombre)}
            ${fillLine(puesto)} ${puesto} ${fillLine(puesto)}
            ${fillLine(empresa)} ${empresa} ${fillLine(empresa)}
            ${"*".repeat(ancho+2)}
        `)
})

const frutas = [{ fruta: "uva" }, "manzana"];

//
const canastamap = frutas.map((fruta) => fruta); // regresa un arreglo si se pude guardar en una variable
const canasta = frutas.forEach((fruta) => console.log(fruta)); // solo ejecuta

console.log(canastamap);
