'use strict'

// OBJETOS

// Object Literal. --------------------------------

const persona = {
    nombre: 'Vladimir',
    profesion: 'Desarrollador Web',
    edad: 37
}
console.log(persona);

// Object constructor.   -------------------------

 function Tarea(nombre, urgencia){

    this.nombre = nombre;
    this.urgencia = urgencia
 }

 const tarea1 = Tarea('Aprender Js y React', 'Urgente');
 const tarea2 = Tarea('Hacer Ejercicio Diariamente', 'Urgente');
 const tarea3 = Tarea('Practicar el Romanticismo', 'Urgente');
 const tarea4 = Tarea('Pulir Habilidades Laravel', 'Urgente');

