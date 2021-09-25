'use strict'

// Metodos para arreglos.


const personas = [
    {nombre: 'Vlad', edad: 37, aprendiendo: 'react'},
    {nombre: 'Victor', edad: 31, aprendiendo: 'react'},
    {nombre: 'Gigi', edad: 30, aprendiendo: 'fisioterapia'},
    {nombre: 'Vladimir', edad: 29, aprendiendo: 'Laravel'},
    {nombre: 'Luis', edad: 40, aprendiendo: 'Tailwin'}
];

console.log(personas);

// Filtrar Mayores de 31.

let mayores = personas.filter(persona => {
    return(persona.edad >= 31);
});

// console.log(mayores);

// Find

const Gigi = personas.find(persona => {
    return persona.nombre === 'Gigi';
});
// console.log(Gigi);
// console.log('Gigi esta aprendiendo ' + Gigi.aprendiendo);


// REDUCE para sacar totales.find

let total = personas.reduce((sumaEdades, persona) => {
    return sumaEdades + persona.edad;
},0);

console.log(total/ personas.length);
