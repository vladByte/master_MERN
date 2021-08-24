'use strict'

// FUNCIONES

function mostrarTarea(tarea, urgencia){
  return `La tarea ${tarea} tiene una prioridad de ${urgencia}`;
}



// OBJETOS

// Object Literal. --------------------------------
const persona = {
    nombre: 'Vladimir',
    profesion: 'Desarrollador Web',
    edad: 37
}
// console.log(persona);

// Object constructor.   -------------------------
 function Tarea(nombre, urgencia){

    this.nombre=nombre;
    this.urgencia=urgencia;
 }

const tarea1 = Tarea('Aprender Js y React', 'Urgente');
const infoTarea = mostrarTarea(tarea1.nombre, tarea1.urgencia);
console.log(infoTarea);
