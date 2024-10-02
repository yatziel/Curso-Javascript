/* 

  Práctica condicionales.

  Sigue las instrucciones y escribe el código.

  1. Declarar una variable llamada "edad" y asignarle un valor numerico.

  2. Imprimir/mostrar por consola el valor de la varible "edad".

  3. Con el bloque "if", evaluar si "edad" es "mayor o igual" que "18".

  4. Si esta condicion es "true", mostrar por consola el mensaje: "Eres Mayor de Edad! 👴🏻"

  5. Agregar otra condición con el bloque "else if" y evaluar si "edad" es menor que 18.

  6. Si esta condición es "true", mostrar por consola el mensaje: "Eres Menor de Edad! 👶"

  7. Con el boque "else", evaluar cualquier otro dato y en caso de que las condiciones anteriores sean "false", mostrar por consola el mensaje: "Eres un alien! 👽"

  8. Dentro de los bloques if, else if y else, cambiar los "console.log", por "alert". 

  9. Cabiar el valor de la variable "edad" por un "promt". Para que este dato sea introducido por el usuario y evaluado por las condicionales:
  
     promt("¿Qué edad tienes?");

  10. Tienen 5 min para hacer su commit y push con el mensaje "Esta es mi práctica de js, si no es correcta repruébeme, no guardo rencor"


*/






























let edad = prompt("¿Qué edad tienes?");

console.log(edad);

if (edad >= 18) {
  alert("Eres Mayor de Edad! 👴🏻")
} else if (edad < 18) {
  alert("Eres Menor de Edad! 👶");
} else {
  alert("Eres un alien! 👽")
}