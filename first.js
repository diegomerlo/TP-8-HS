
alert("Bienvenido :)")
let nombre = prompt("¿Cuál es tu nombre?")

alert("Bienvenido "+{nombre})

// var num = 2;
// console.log(num);

// var num2 = 3;

// console.log(num2);

// var sumaNumeros = num + num2;

// console.log(sumaNumeros);

var edad;

let edadCorrecta = false;

while(!edadCorrecta){
    
    edad = parseInt(prompt("¿Cual es tu edad?"));

    if(isNaN(edad)){
        alert("Ingrese un numero para la edad")
        edadCorrecta = false;
    } else {
        edadCorrecta = true;
    }
}
