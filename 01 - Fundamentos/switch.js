/* 
  Instrucciones Condicionales if / else if / else

  1. Crear una variable día y asignarle un valor númerico.
  2. Con la sentencias if, else if y else, evaluar el valor de la variable día con las siguientes condiciones:

  - dia === 1 // Lunes
  - dia === 2 // Martes
  - dia === 3 // Miércoles
  - dia === 4 // Jueves
  - dia === 5 // Viernes
  - dia === ? // Día no válido

*/

/* 

let dia = 1;

if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miércoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === 5) {
  console.log ("Viernes");
} else {
  console.log("Día no válido!")
} 

*/


/* 

  Switch

  Es una estructura de control de flujo condicional, pero se utiliza cuando tenemos multiples casos posibles para evaluar una expresión.

  Es más eficiente y legible en situaciones donde se quiere comparar una sola variable con varios valores posibles.

  Sintaxis:

  switch (expresion) {
    case valor1:
      // Código que se ejecuta
      break;
    case valor2: 
      // Código que se ejecuta
      break;
    case valor3:
      // Código que se ejecuta
      break;
    default:
      // Código que se ejecuta por default
  }

*/

let dia = 5;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  default:
    console.log("Día no válido!")
}

/* 

  Ejercicio Switch

  1. Crear una variable pokemon y asignarle un valor en string con el nombre  de un pokemon.

*/

let pokemon = "pikachu";

switch (pokemon) {
  case "pikachu":
    console.log(`Tu pokemon es ${pokemon} y es de tipo electrico! ⚡️`);
    break;
  case "charmander":
    console.log(`Tu pokemon es  ${pokemon} y es de tipo fuego! 🔥`);
    break;
  case "snorlax":
    console.log(`Tu pokemon es ${pokemon} y es de tipo normal! 🌝`);
  default:
    console.log('¿Quién es ese pokemon? 🧐');
}

