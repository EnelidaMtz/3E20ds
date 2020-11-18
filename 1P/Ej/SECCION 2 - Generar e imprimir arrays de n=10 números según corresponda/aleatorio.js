//Manzo Martinez Enelida Natalia
//aleatorios
let ale = new Array(10);
let max = 10;
let min = 1;
for ( let i=1; i<= ale.length; i++) {
	let num = Math.floor(Math.random() * (max - min))+ min;
	console.log(num);
}