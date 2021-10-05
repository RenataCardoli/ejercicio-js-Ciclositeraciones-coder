
let sum = 0;

alert("¡¡¡¡Importante: Este bucle suma los números ingresados, para detenerlo NO escriba ningún número y click en el buton aceptar!!!!");

while (true) {

let value = +prompt("Ingresa un número", '');

if (!value) break; // (*)

sum += value;

}
alert( 'La suma de los numeros ingresados es: ' + sum );
