//Manzo Martinez Enelida Natalia
//En una fiesta hay n invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron?
function saludos (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
var n = 18;
    let sal = saludos(n);
    let sal2 = saludos(n-2);
var saludos = sal/(2*sal2);
console.log('De ' + n + ' personas que asistieron, '  + 'ocurrieron ' + saludos + ' saludos');

