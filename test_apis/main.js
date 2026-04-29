const container = document.getElementById("root")


const requestOptions = {
  method: "GET",
  redirect: "follow" /// 
};

fetch("https://rickandmortyapi.com/api/character?search=rick", requestOptions)
  .then((response) => response.json()) // 200ok toma la respuesta y la va a PARSEAR
  .then((r) => {
    // el response es la respuesta del servidor / de la api / metodo
    console.log("estoy en el segundo then")
    /// metodo de interacion
    /// filter, find, forEach, map /// for 
    // map: crea un arreglo de otro arreglo
    const pResult = r.results.map((personaje) => {
        const name = personaje.name
        const image = personaje.image
        return {
            name,
            image
        }
    })
    // solamente buscamos el primer elemento
    const primerPesonaje = pResult[0]
    //  <div class="card">
    //      <h3>Rick Sanchez</h3>
    //      <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg">            
    //   </div>

    // for moderno
    pResult.forEach(element => {
        const card = document.createElement("div")
        // classList
        card.classList.add("card")
    
        const img = document.createElement("img")    
        img.src = element.image

        const h3 = document.createElement("h3")
        h3.innerText = element.name

        card.appendChild(img)
        card.appendChild(h3)

        container.appendChild(card) 
    });
    

  }) // si el PARSER fue OK
  .catch((error) => console.error(error));