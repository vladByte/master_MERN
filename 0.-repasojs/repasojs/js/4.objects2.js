'use strict'

// OBJETOS AVANZADOS

// Object Literal Enhancement.
//

const banda = 'LP';
const genero = 'Pop Balada';
const canciones = [ 'Hallow', 'Lost On You', 'One Last Time' ];

// Forma Tradicional.
//
/* const bandaFavorita = {
  Banda : banda,
  Genero : genero,
  Canciones : canciones
}
*/

// Nueva Forma

// const bandaFavorita = {banda,genero,canciones}

// console.log(bandaFavorita);

// Funciones en Objetos ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//

// Manera Tradicional.
//
/*
const persona = {
  nombre : 'Vladimir',
  trabajo : 'Desarrollador',
  edad : 38,
  mostrarInfo: function(){
    console.log(`${this.nombre} es ${this.trabajo} web y tiene ${this.edad} años de edad`);
  }
}
*/



// Nueva Forma.
const persona2 = {
  nombre : 'Vladimir',
  trabajo : 'Desarrollador',
  edad : 37,
  mostrarInfo(){
    console.log(`${this.nombre} es ${this.trabajo} web y tiene ${this.edad} años de edad`);
  }
}
persona2.mostrarInfo(); 

