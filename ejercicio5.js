alert("Bienvenido al calculador de snacks");
let edadActual, edadMax, snacksPromDiario, snackValorUnidad, gastoTotal;

edadActual = parseInt(prompt("Ingresa tu edad: "));
edadMax = parseInt(prompt("Ingrese hasta que edad va a vivir: "));

snacksPromDiario = parseInt(prompt ("Cuantos snacks comes por dias? Promedio: "));

edadVivo = edadMax - edadActual;

totalSnacks = (edadVivo * 365) * snacksPromDiario;

alert("Vas a comer "+totalSnacks+" hasta los "+edadMax+" años");

snackValorUnidad = parseInt(prompt("Ingrese el valor por unidad del snack: "))

gastoTotal = snackValorUnidad*totalSnacks;

alert("El gasto en snacks sería de : $"+gastoTotal);