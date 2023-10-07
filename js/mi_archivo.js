let nombre = prompt("Ingresa tu Nombre y Apellido");
let dni = Number(prompt("Ingresa tu DNI "));
let deuda = alert(nombre + " " + "DNI: " + dni + " " + "Registras deuda de $11.000,00 total");
let totalDeuda = 11000;
let abonar = prompt('¿Cuanto abonas?', '');

if (abonar < 4000) {
  alert('Muy poco, no puedes cancelar');
} else if (abonar > 4000) {
  alert('¡Puedes cancelar con quita de intereses!');
} else {
  alert('¡Vuelve a intentar!');
}
alert(nombre + " " + "DNI: " + dni + " " + "Puedes abonar en cuotas!");



let cuotas = Number(prompt("En cuantas cuotas abonas?"));
let resultadoCuotas = totalDeuda / cuotas;

console.log("Podes abonar en " + cuotas + " " + "cuotas sin interés de $" + resultadoCuotas);
alert("Podes abonar en " + cuotas + " " + "cuotas sin interés de $" + resultadoCuotas);



switch (cuotas) {
  case "8":
    alert("Abonas en" + " " + "cuotas");
    break;
  case "6":
    alert("Abonas en" + " " + "cuotas");
    break;
  case "4":
    alert("Abonas en" + " " + "cuotas");
    break;

}
