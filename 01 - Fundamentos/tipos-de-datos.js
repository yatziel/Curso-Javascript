/* 
  Tipos de Datos

  Los tipos de datos se dividen dos categorías: Primitivos y Complejos


  1. Tipos de datos Primitivos

  Datos básicos que no se consideran "objetos" y no tienen "métodos".

  * Number o Número

  Representación de valores númericos ya sea enteros o con decimáles (punto flotante)

  * String o Cadena de Caracteres

  Se usa para representar texto. El texto se coloca entre comillas dobles o simples  "texto" 'text'

  * Boolean o Boleanos

  Estos represetan un valor lógico que puede ser 'true' o 'false'

  * Undefined o Indefinido

  Es el valor que se le asigna a una varibale que ha sido declarada pero no inicializada. 


  2. Tipos de Datos Complejos o de Objetos 

  * Array o Arreglo

  Es un conjunto de datos que los almacena en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados por comas ,

  * Object

  Es un conjunto de multiples datos en pares 'clave'-'valor'. Se escriben entre llaves {} y separados por comas ,

  * Functions o Funciones

  Es un tipo de dato que puede ser "invocado". Se declaran con la palabra reservada "function" y el código que ejecutan va entre llave {"codigo"}

*/

/* Numbers */

let miNumero = 5;
let miNumeroDecimal = 6.1416;

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */

let miNombre = 'Yatziel';
let miApellido = 'López';

console.log(miNombre);
console.log(miApellido);


/* Booleans */

let miVerdad = true;
let miMentira = false;

console.log(miVerdad);
console.log(miMentira);

/* Undefined */

let x; //  Declarar una variable sin inicializarla

console.log(x); // undefined

// x = prompt("Cual es tu número favorito?"); 

console.log(x); // Valor que el usuario introduzca.

/* Array */

let misFrutasFavoritas = ["Durazno", "Uvas", "Manzana"];
let misNumerosSuerte = [5, 10, 15, 1988];
let otroArray = ["Puchunguito", 56, true];


// Accedemos a los datos de un array
// Con la notación de corchetes []
console.log(misFrutasFavoritas[1]);
console.log(misNumerosSuerte);
console.log(otroArray);

/* Objeto */

let persona = {
  // clave : valor,
  nombre : "Yatziel",
  edad : 35,
  colorCabello: "castaño",
  colorOjos : "verdes",
  altura : 1.68,
  peso : undefined,
  vivo : true,
  novia : false,
}

console.log(persona);
// Accedemos al valor de una clave dentro de un objeto
// Con la notación de punto .
console.log(persona.nombre);
console.log(persona.altura);
console.log(persona.novia);

/* Function */

let mensajito = function () {
  // Pasamos el código que ejecuta la función
  console.log("Este es un mensaje lanzado por una función");
}

// Invocamos la función 
mensajito();