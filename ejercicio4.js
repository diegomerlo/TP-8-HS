let num1, num2, resultado;

let numIngresado = false;

while(!numIngresado){
    
    num1 = parseInt(prompt("Ingrese el primer numero: "));
    num2 = parseInt(prompt("Ingrese el segundo numero: "));
    
    if (!isNaN(num1) && !isNaN(num2)) {
        resultado = num1 + num2;
        console.log("La suma es:", resultado);
        numIngresado = true;
    } else {
        console.log("Por favor, ingrese números válidos.");
        numIngresado = false;
    }
}
