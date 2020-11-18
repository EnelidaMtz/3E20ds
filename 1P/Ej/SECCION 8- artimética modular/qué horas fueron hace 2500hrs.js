//Manzo Martinez Enelida Natalia
//que horas fueron hace 2500hrs
let hora = new Date('November 11, 2020 10:00:00');
const tiempo=-2500;
hora = hora.getHours();
console.log('Hora actual: '+ hora); 
var nhora=hora-tiempo%24;
console.log('¿que horas fue hace 2500hrs?: '+ nhora);

