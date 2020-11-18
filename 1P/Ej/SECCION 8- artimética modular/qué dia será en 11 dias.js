//Manzo Martinez Enelida Natalia
//que dias seran en 11
const hoy = new Date('November 2, 2020 10:00:00');
const incremento=11;
const dhoy = hoy.getDay();
const dia=dhoy+incremento%7;

if(dhoy==0){
    console.log('El dia de hoy es Domingo ');
}
else if (dhoy==1){
    console.log('El dia de hoy es Lunes');
}
else if(dhoy==2){
    console.log('El dia de hoy es Martes');
}
else if(dhoy==3){
    console.log('El dia de hoy es Miercoles ');
}
else if(dhoy==4){
    console.log('El dia de hoy es Jueves ');
}
else if (dhoy==5){
    console.log('El dia de hoy es Vienes ');
}
else if (dhoy==6){
    console.log('El dia de hoy es Sabado ');
}
else{
    console.log('error')
}
/////////////////////////////
if(dia==0){
    console.log('El dia despues de 11 es Domingo');
}
else if (dia==1){
    console.log('El dia despues de 11 es Lunes');
}
else if(dia==2){
    console.log('El dia despues de 11 es Martes');
}
else if(dia==3){
    console.log('El dia despues de 11 es Miercoles');
}
else if(dia==4){
    console.log('El dia despues de 11 es Jueves');
}
else if (dia==5){
    console.log('El dia despues de 11 es Viernes');
}
else if (dia==6){
    console.log('El dia despues de 11 es Sabado');
}
else{
    console.log('error')
}