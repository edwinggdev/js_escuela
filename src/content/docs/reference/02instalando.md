---
title: Instalando un Editor de Codigo
description: Guia breve para crear un Hola mundo con una caja de texto.
---

Esta pagina explica como crear un Hola mundo en Javascript y probarlo con una caja de texto.

## Como probarlo en JSFiddle (sin escribir HTML)

1. Abre https://jsfiddle.net/ en el navegador.
2. En el panel **HTML**, pega esto:

```html
<input id="texto" type="text" placeholder="Escribe tu nombre" />
<button id="btn" aria-label="Run">&#9658; Run</button>
<p id="salida">Hola mundo</p>
```
3. En el panel **JavaScript**, pega este codigo:

```js
const input = document.getElementById("texto");
const button = document.getElementById("btn");
const salida = document.getElementById("salida");

button.addEventListener("click", () => {
	const valor = input.value.trim();
	salida.textContent = valor ? `Hola ${valor}` : "Hola mundo";
});
```

4. Presiona **Run**.
5. Escribe un texto en la caja y pulsa el boton para ver el resultado.

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
