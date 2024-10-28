/* 

  Ejericio funciones

  1. Vamos a definir una variable llamada 'heroe' que tenga un dato en 'string' con el nombre de un superheroe.

  2. Definimos una función llamada 'obtenerPoder'.

  3. Esta función recibe el parametro 'heroe' que sera validado en el cuerpo de la función.
    
  4. En el cuerpo de la función validar:

    si heroe === "superman" -> "Tu poder es superfuerza"
    si heroe === "flash" -> "Tu poder es supervelocidad"
    si heroe === "batman" -> "Tu poder es supermillonario"
    si no -> "No te invitaron a la fiesta!"

  5. Invocar a la función con su parametro 'heroe' 

  6. Deben cambiar el valor de la variable 'heroe'

  Reto Extra: 

  ** Hacer que el valor de la variable 'heroe' la asigne el usuario.

*/


let miHeroe = prompt("Elige un héroe!");

function obtenerPoder(heroe) {
  // Cuerpo de la función
  if (heroe === "superman") {
    console.log("Tu poder es supefuerza!")
  } else if (heroe === "flash") {
    console.log("Tu poder es supervelocidad!")
  } else if (heroe === "batman") {
    console.log("Tu poder es ser supermillonario!")
  } else {
    console.log("No te invitaron a la fiesta!")
  }
}

obtenerPoder(miHeroe) // Así invocamos la función


