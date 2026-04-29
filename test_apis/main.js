const container = document.getElementById("root")
const searchInput = document.getElementById("searchInput")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const statusMessage = document.getElementById("statusMessage")

const requestOptions = {
  method: "GET",
  redirect: "follow"
}

let timer
let currentPage = 1
let currentName = "rick"
let currentInfo = null

function renderCharacters(characters) {
  container.innerHTML = ""

  characters.forEach((element) => {
    const card = document.createElement("div")
    card.classList.add("card")

    const img = document.createElement("img")
    img.src = element.image
    img.alt = element.name

    const h3 = document.createElement("h3")
    h3.innerText = element.name

    card.appendChild(img)
    card.appendChild(h3)

    container.appendChild(card)
  })
}

function updatePagination(info) {
  prevBtn.disabled = !info || !info.prev
  nextBtn.disabled = !info || !info.next
}

function updateStatus(total) {
  const cleanName = currentName.trim()

  if (!total) {
    statusMessage.innerText = cleanName
      ? `No se encontraron personajes para "${cleanName}".`
      : "No se encontraron personajes."
    return
  }

  statusMessage.innerText = `Página ${currentPage} de ${currentInfo.pages} · ${total} resultados`
}

function searchCharacters(searchName = "", page = 1) {
  const params = new URLSearchParams()
  params.set("page", page)

  if (searchName.trim()) {
    params.set("name", searchName.trim())
  }

  return fetch(`https://rickandmortyapi.com/api/character?${params.toString()}`, requestOptions)
    .then((response) => {
      if (response.status === 404) {
        return {
          info: null,
          results: []
        }
      }

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      return response.json()
    })
}

function loadCharacters(searchName = currentName, page = currentPage) {
  currentName = searchName
  currentPage = page
  statusMessage.innerText = "Buscando..."

  searchCharacters(searchName, page)
    .then((response) => {
      currentInfo = response.info
      renderCharacters(response.results)
      updatePagination(response.info)
      updateStatus(response.results.length ? response.info.count : 0)
    })
    .catch((error) => {
      console.error(error)
      currentInfo = null
      container.innerHTML = ""
      updatePagination(null)
      statusMessage.innerText = "Ocurrió un error al consultar la API."
    })
}

searchInput.value = currentName

searchInput.addEventListener("input", (event) => {
  clearTimeout(timer)

  timer = setTimeout(() => {
    loadCharacters(event.target.value, 1)
  }, 300)
})

prevBtn.addEventListener("click", () => {
  if (currentInfo && currentInfo.prev) {
    loadCharacters(currentName, currentPage - 1)
  }
})

nextBtn.addEventListener("click", () => {
  if (currentInfo && currentInfo.next) {
    loadCharacters(currentName, currentPage + 1)
  }
})

loadCharacters(currentName, currentPage)
