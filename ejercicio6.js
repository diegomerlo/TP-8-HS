alert("Bienvenido al calculador de presupuesto de viaje");

let diasViaje, presupuestoMaximo, cantidadComidas, gastoPorComida;

diasViaje = parseInt(prompt("Ingrese la cantidad de días que estará de viaje: "));
presupuestoMaximo = parseFloat(prompt("Ingrese su presupuesto máximo para todo el viaje: "));

cantidadComidas = parseInt(prompt("Estime cuántas comidas tendrá durante todo su viaje: "));

gastoPorComida = presupuestoMaximo / cantidadComidas;

alert(`Puedes gastar $${gastoPorComida.toFixed(2)} en cada comida para que te alcance durante los ${diasViaje} días de viaje.`);
