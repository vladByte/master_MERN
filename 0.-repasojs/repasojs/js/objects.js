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
    this.urgencia = urgencia;
 }

 const tarea1 = Tarea('Aprender Js y React', 'Urgente');
 const tarea2 = Tarea('Hacer Ejercicio Diariamente', 'Urgente');
 const tarea3 = Tarea('Practicar el Romanticismo', 'Urgente');
 const tarea4 = Tarea('Pulir Habilidades Laravel', 'Urgente');


 'use strict'

// FUNCIONES

function mostrarTarea(tarea, urgencia){
  return `La tarea ${tarea} tiene una prioridad de ${urgencia}`;
}

// SEGUNDA PARTE

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

 // Agregar un prototype a tarea.
Tarea.prototype.mostrarTarea = function(){
  return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender Js y React', 'Urgente');
// const infoTarea = mostrarTarea(tarea1.nombre, tarea1.urgencia);
console.log(tarea1.mostrarTarea());




