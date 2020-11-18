//Manzo Martinez Enelida Natalia
//potencia
var potencias = new Array(10);
var x = 3;
for(let i= 1; i<= potencias.length; i++){
	let total = Math.pow(x,i);
	console.log(x + " elevado a la potencia " + i + " es = " + total);
}