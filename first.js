
alert("Bienvenido :)");

let nombre = prompt("¿Cuál es tu nombre?");
alert("Bienvenido " + nombre);

var edad;
let edadCorrecta = false;

while (!edadCorrecta) {
    edad = parseInt(prompt("¿Cuál es tu edad?"));

    if (isNaN(edad) || edad>99 || edad < 1) {
        alert("Ingrese un número válido para la edad.");
        edadCorrecta = false;
    } else {
        edadCorrecta = true;
    }
}

console.log("Tu edad es "+edad);

console.log("Su nombre es "+nombre+" y tiene "+edad+ " años ");

