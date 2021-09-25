'use strict'

// Arreglos y .map

var carrito = ['producto','producto2','producto3'];

console.log(carrito);

let html = '';
let appContainer = document.querySelector('#app');
appContainer.innerHTML = carrito;

// recorriendo un elemento con foreach
carrito.forEach(producto => {
    html += `<li> ${producto}</li>`
});

appContainer.innerHTML = html;

// usando MAP (crea una copia sin alterar el original)

carrito.map(producto => {
    return `mostando ${producto}`;
});

// Desctructuracion del nombre.

const persona = {
    'nombre' : 'Vlad',
    'profesion' : 'Desarrollador FullStack',
    'Edad' : 37
}

const {nombre} = persona;
console.log(nombre);

// Object Key
console.log(Object.keys(persona));