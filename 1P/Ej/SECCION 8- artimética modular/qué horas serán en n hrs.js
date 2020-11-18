//Manzo Martinez Enelida Natalia
//que horas seran en n horas
let hora = new Date('November 11, 2020 10:00:00');
const n=5;
hora = hora.getHours();
console.log('Hora actual: '+ hora); 
var nhora=hora+n%24;
console.log('la hora despues de '+ n +' es:'+ nhora);

