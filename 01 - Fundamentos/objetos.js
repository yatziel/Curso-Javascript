/* 

  Objetos

  Es una coleccion de propiedades y métodos.

  Las propiedades describen las características del objeto. 

  Los métodos describen los comportamientos del objeto.

  Los objetos pueden contener distintos tipos de datos: strings, numbers, arrays, booleans, "undefined", otros objetos e incluso funciones.
  
  Sintaxis:

  let nombreObjeto = {
    // Propiedades y Métodos
  };

  Propiedades dentro de un objeto se escriben en pares "clave" : "valor"

    nombre : "Yatto" // Propiedad

    let nombre = "Yatto" // Variable

  Las propiedades de un objeto se separan por comas ',' después del valor.

  Las claves de las propiedades pueden tener más de una palabra. Pero se deberán escribir entre comillas "" o ''

    "nombre real" = "Yatto",

  Tambien se pueden escribir en formato Camel Case y sin comillas

    nombreReal = "Yattito",

*/


/* Definir un objeto */

let personaje = {
  nombre : "Frodo Bolsón",
  edad : 52,
  residencia : "La Comarca",
  poderes : false,
  // "Habilidades Humanas" : ["valor", "determinación", "compañerismo"], 
  habilidadesHumanas : ["valor", "determinación", "compañerismo"]
}

/* Accedemos al valor de las propiedaes del objeto */

console.log(personaje.nombre);
// console.log(personaje["habilidades humanas"][2] );
console.log(personaje.habilidadesHumanas[0]);

/* Agregar y borrar propiedades de objetos */

personaje.enemigos = ["Saurón", "Gollum"]; // Agregar
delete personaje.poderes; // Borrar




/* 

  Creer solitas y solitos un objeto llamado mascota que tenga tres propiedades: nombre, tipo y edad, con sus respectivos valores.

  Anidamos objetos

  Nombramos al objeto anidado y lo definos con las llaves {} - Dentro de las llaves se declaran las propiedades en pares "clave" : "valor"

  Métodos 

  Un método es una función que se define como propiedad de un objeto.

  Sintaxis

  nombreClave : function(parametros) {
    //Código que se ejecuta
  }

  this

  Es una palabra reservada que se refiere al objeto actual y sirve para acceder a sus propiedades del mismo.

*/


let mascota = {
  nombre : "Tonche",
  tipo : "Gato",
  edad : 3,

  // Objeto Anidado
  fisico : {
    estatura : 20,
    peso : 3,
    color : "negro"
  },

  // Declaramos un método
  saludo : function(amo) {
    // Codigo que se ejecuta al invocar la función
    alert(`Miau miau miau! Me llamo ${this.nombre} y mi amo es ${amo} ❤️`);
  }

}

console.log(mascota.fisico.peso);
console.log(mascota.fisico.estatura);
console.log(mascota.fisico.color);

mascota.fisico.colorOjos = "verde"; // Agregar
delete mascota.fisico.color; // Eliminamos


/* Accedemos al método saludo del objeto mascota */

mascota.saludo("Yato");