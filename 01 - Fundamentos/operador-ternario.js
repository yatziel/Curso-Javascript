/* 

  Ejemplo condicionales if / else

  1. Declarar una variable edad y le asignamos un valor númerico.
  2. Comprobamos si edad es igual o mayor que 18, mostramos el mensaje: "Eres mayor de edad! 👴🏻".
  3. Si edad no es mayor que 18, mostramos el mensaje: "Eres un bebe! 👶"

*/

/* let edad = 7;

if (edad >= 18){
  console.log("Eres mayor de edad! 👴🏻");
} else {
  console.log("Eres un bebe! 👶");
} */

/* 

  El operador ternario es un forma másconcisa de escribir una condición if / else.

  Trabaja con tres operandos:

  1. Una condición
  2. La expresión si la condición es verdadera.
  3. La espresión si la condición es falsa.

  Sintanxis:

  condicion ? expresionSiVerdadera : expresionSiFalsa

*/

let edad = 5;

let resultado = edad >= 18 ? "Eres mayor de edad! 👴🏻" : "Eres un bebe! 👶";

console.log(resultado)


let comprobarEdad =
(edad >= 18) && (edad < 30) ? "Eres joven." : 
(edad >= 30) && (edad < 60) ? "Eres adulto" :
(edad >= 60) && (edad < 90) ? "Eres viejito": "Eres inmortal!";