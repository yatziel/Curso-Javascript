/* 
  Condicionales

  Son estructuras que premiten ejecturar diferentes bloques de código en función de si una condición (expresión) es verdadera o falsa.

  Estas estructuras controlan el flujo de los programas.

  1. if -> si condicional
  
  El bloque if se ejecuta solo si la condicion que se le pasa es verdadera 'true'. Si la condicion es falsa 'false' el código dentro de if se omite.

  if (condición) { 
    codigo que se ejecuta si es verdadera
  }

  2. else -> de lo contrario

  Este bloque ejecuta un código cuando las condiciones anteriores no son verdaderas. 

  if (condición) {
    Codigo que se ejecuta en caso de que la condición sea verdadera
  } else {
    Código que se ejecuta en caso de que la condición anteriore o anteriores sean falsa. 
  }


  3. else if -> si no 
  
  Else 'if' nos ayuda a comprobar condiciones adicionales si la condición 'if' es falsa. Podemos tener tantos 'else if' como necesitemos. Los 'else if' se escriben entre el 'if' y el 'else'

  if (condicional) {
    // codigo...

  } else if (condicional) {
    // codigo ejecutar... 
  } else if (condicinoal) {
    // codigo ejecutar... 
  } else {
    // codigo...

  } 


*/


// Sentencia o bloque if

let numero = 300;

if (false) {
  console.log("Me ejecute porque la primera condición es verdadera")
} else if (numero > 100) {
  console.log("Me ejecute porque la segunda condición es verdadera");
} else {
  console.log("Me ejecute porque las condiciones anteriores son falsas")
}