'use strict'

// funciton declaration, son leidas por el compilador primero.
// asi que pueden llamarse y declararse donde sea
function saludo(nombre){
     console.log(`Funcion de tipo ${nombre}`);
}

saludo("Tradicional");

// function expresion
// Debe ser primero declarada para ser llamada.

const expresion = function(){
    console.log(`function expresion tipo reactjs`);
}

expresion();

// --------------Version Clasica----------------------------------

const viajando = function(destino = "una nueve Ciudad"){
    return `viajando a la ciudad de:  ${destino}`;
}

let viaje = viajando("Buenos Aires");

console.log(viaje);

// -------------Version Arrow Functions----------------------------------

const viajando2 = (destino) => `viajando a la ciudad de:  ${destino}`;


let viaje2 = viajando2('Buenos Aires');
console.log(viaje2);