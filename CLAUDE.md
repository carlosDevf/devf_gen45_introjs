# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Teaching material for the DEVF bootcamp "Intro G45" JavaScript module. It is **not** a product: there is no `package.json`, no bundler, no test suite, no lint config. Files are read directly by the browser or by plain `node`. All comments, identifiers, and prose are in Spanish — keep that convention when adding examples.

## Running the code

No install step. Pick the right runner based on where the file lives:

- **Standalone lesson / reto scripts at the repo root** (`clase_02.js`, `reto_03.js`, `reto_03_objetos.js`, `reto_04_funciones.js`, `main.js`) and `event_loop/*.js`, `logica_alg/*.js`, `metodos_arreglos/*.js` — run with Node: `node clase_02.js`. They use `console.log` only, no DOM.
- **Mini-apps** (`DOM/`, `gen_pass/`, `comenta_app/`, `test_apis/`, `event_loop/`) — each has its own `index.html` that loads `./main.js`. Open the HTML directly in a browser (`xdg-open DOM/index.html`) or serve the folder (`python3 -m http.server` then visit `/DOM/`). They rely on CDN Tailwind/Bulma/Font Awesome — needs network. `test_apis/` also requires internet access to hit the Rick and Morty API.
- **Root `index.html`** is a scratchpad whose `<script src>` is rewritten per class to point at whichever root-level file is being demoed that day. Don't treat its current target as canonical; update the tag to match what you're demonstrating.
- **Regenerate `README.docx`** from the embedded base64: `python save_README_docx.py` (or `python decode_and_save.py`, which self-deletes after running). Both exist because the docx is distributed as a self-extracting Python script.

## Structure of the teaching material

Lessons accumulate over the course. Files are ordered by topic, not by dependency — each is self-contained and nothing imports anything else. A rough map (`README.md` has the authoritative per-file summary):

- Root: `clase_02.js` (condicionales/bucles), `clase_03.js` (arrays), `clase_04.js` (funciones), `reto_03*.js` (conteo de frutas), `reto_04_funciones.js` (librería de libros), `main.js` (intro a tipos).
- `DOM/` — primer ejemplo de manipulación del DOM (formulario de libros, Bulma).
- `comenta_app/` — DOM + `classList` API + eventos (Tailwind via CDN).
- `gen_pass/` — generador de contraseñas con UI de fortaleza, dark mode vía `localStorage`, Tailwind config inline.
- `event_loop/` — `setTimeout`, stack, promesas (`promesas.js`). También tiene `index.html`: un Simulador de Pedidos visual que carga `promesas.js` en el navegador para ver el event loop con UI en tiempo real.
- `logica_alg/` — destructuring, `map`/`forEach`, ejemplo de "tarjetas" con template strings.
- `metodos_arreglos/` — métodos de arreglos: `find`, `filter`, `map`, `forEach`, `some`, `every`, `sort`, `reduce`. `main.js` es la clase; `reto.js` es el ejercicio resuelto por alumnos.
- `test_apis/` — mini-app de búsqueda de personajes de Rick and Morty. Demuestra `fetch`, promesas, debounce, paginación y renderizado dinámico de DOM. `SEARCH_GUIDE.md` es la guía de referencia de la API que se entrega a los alumnos.
- `respuestas/` — fragmentos de soluciones en Markdown (e.g. `pedidos.js.md` contiene el script UI que complementa `event_loop/index.html`).

## Conventions to respect

- **Spanish everywhere** — variable names (`alumnos`, `edad`, `librosLeidos`), console strings, comments. Don't translate to English when editing existing files.
- **No build tooling.** Don't introduce `package.json`, TypeScript, bundlers, or npm deps. If a feature needs a library, pull it from a CDN in the HTML (as `gen_pass` and `comenta_app` already do).
- **Teaching-oriented code** — existing files contain intentional pedagogical artifacts: commented-out alternatives, TODO lists for students, typos left in to discuss (`consol.log` in `event_loop/promesas.js`, `dwbil` in `gen_pass/main.js`). Do not "clean up" these unless explicitly asked — they are part of the lesson.
- **Scripts are standalone.** Never add `import`/`require` between lesson files. If shared code is needed for an example, duplicate it.