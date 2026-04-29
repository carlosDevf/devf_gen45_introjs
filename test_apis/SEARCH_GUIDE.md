# Buscador de Personajes — Guía de Integración

## Endpoint

```
GET https://rickandmortyapi.com/api/character?name={término}
```

No requiere autenticación. Todas las peticiones son GET sobre HTTPS.

---

## Parámetros disponibles

| Parámetro | Tipo   | Descripción |
|-----------|--------|-------------|
| `name`    | string | Nombre del personaje (búsqueda parcial) |
| `status`  | string | `alive` · `dead` · `unknown` |
| `species` | string | Ej: `Human`, `Alien` |
| `gender`  | string | `female` · `male` · `genderless` · `unknown` |
| `page`    | number | Página de resultados (20 por página) |

Se pueden combinar: `?name=rick&status=alive`

---

## Estructura de la respuesta

```json
{
  "info": {
    "count": 29,
    "pages": 2,
    "next": "https://rickandmortyapi.com/api/character?page=2&name=rick",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "origin": { "name": "Earth (C-137)" },
      "location": { "name": "Citadel of Ricks" }
    }
  ]
}
```

Cuando no hay resultados la API responde `404` con:
```json
{ "error": "There is nothing here" }
```

---

## Implementación paso a paso

### 1. Función de búsqueda

```js
async function searchCharacters({ name = '', status = '', page = 1 } = {}) {
  const params = new URLSearchParams({ page });
  if (name)   params.set('name', name);
  if (status) params.set('status', status);

  const res = await fetch(`https://rickandmortyapi.com/api/character?${params}`);
  if (res.status === 404) return { info: null, results: [] };
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
```

### 2. Conectar al input con debounce

Espera 300 ms después de que el usuario deja de escribir antes de llamar a la API.

```js
let timer;

inputEl.addEventListener('input', (e) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    searchCharacters({ name: e.target.value }).then(renderResults);
  }, 300);
});
```

### 3. Renderizar resultados

```js
function renderResults({ results, info }) {
  if (!results.length) {
    listEl.innerHTML = '<p>No se encontraron personajes.</p>';
    return;
  }

  listEl.innerHTML = results.map(char => `
    <div class="character-card">
      <img src="${char.image}" alt="${char.name}" />
      <h3>${char.name}</h3>
      <p>${char.status} · ${char.species}</p>
    </div>
  `).join('');

  // info.next y info.prev contienen la URL de la página siguiente/anterior
}
```

### 4. Paginación

Usa `info.next` y `info.prev` que vienen en la respuesta para navegar entre páginas.

```js
let currentPage = 1;
let currentName = '';

nextBtn.addEventListener('click', () => {
  currentPage++;
  searchCharacters({ name: currentName, page: currentPage }).then(renderResults);
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    searchCharacters({ name: currentName, page: currentPage }).then(renderResults);
  }
});
```

---

## Notas importantes

- **Búsqueda parcial**: `?name=ri` devuelve "Rick", "Morty", etc. — no necesitas el nombre exacto.
- **Mayúsculas/minúsculas**: el filtro `name` no es case-sensitive.
- **Sin resultados**: la API responde `404`, no un array vacío — maneja ese caso o el fetch fallará.
- **Rate limit**: la API es pública y sin límite documentado, pero el debounce de 300 ms es suficiente para no sobrecargarla.
