console.log("-----Simulación de cuello de botella------")

console.log(1) // sincrono
setTimeout(() =>{
    console.log(2) // asincrono
},1000 * 2)

for (let i = 0; i < 9999999999999999; i++) {
    console.log(i)
}

console.log(3) // sicrono
