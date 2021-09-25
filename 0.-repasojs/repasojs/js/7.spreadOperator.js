'use strict'

// SPREAD OPERATOR
/**
 *  Creas una copia de un objeto o arreglo sin modificar el original.
 *  Combina arreglos
 */

let lenguajes  = ['javascript', 'PHP', 'python'];
let frameworks = ['reactjs', 'laravel', 'express'];
console.log(lenguajes);

let nuevoArreglo = [...lenguajes].reverse();
console.log(nuevoArreglo);

const arregloCombinado = [...lenguajes,...frameworks];
console.log(arregloCombinado);
