function prepararPedido(id) {
    return new Promise((resolver, rejected) => {
        const errorFatal = Math.floor(Math.random() * 3) === 2
        console.log("Preparando pedido...")
        setTimeout(() => {            
            try {
                if (!errorFatal) {
                    resolver(console.log(`El pedido ${id} esta listo, favor de pasar`))
                }

                if (errorFatal) {
                    rejected(console.log(`El pedido ${id} fallo por que no hay leche`))
                }
            } catch (err) {
                console.log("este es el error de try cathc", err)
            }
        }, 1000 * 5)
    })
}

// async await => 
function main() {
    console.log("----------Preparando tus alimentos-----------")
    prepararPedido(1)
        .then(() => console.log("todo sin problemas"))
        .catch(err => console.error(err)) // 
        .finally(() => console.log("ya termine de ejecutar la funcion de preparar pedido"))
    console.log("-----Siguiente pedido------")
}

main()