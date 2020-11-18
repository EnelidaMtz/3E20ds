//Manzo Martinez Enelida Natalia
//nombres aleatorios
function nombresAle()
{
 let guardar = new Map();
 var esp = ""; 
 var vocales = "aeiou"
 var abecedario = "abcdefghijklmnñopqrstuvwxyz";
 var vocales = "aeiou";
 for(x = 0; x < 10;x++)
 {  
  longitud =  Math.round(Math.random()*6);
  if (longitud < 2)longitud = 2;  
 for (var i = 0; i < longitud; i++) 
  {
     esp += abecedario.charAt(Math.floor(Math.random()* abecedario.length));
     esp += vocales.charAt(Math.floor(Math.random()* vocales.length));
  } 
  if (x ==0 )guardar.set('Nombre1', esp);
  else if (x ==1 )guardar.set('Nombre2', esp)
  else if (x ==2 )guardar.set('Nombre3', esp)
  else if (x ==3 )guardar.set('Nombre4', esp)
  else if (x ==4 )guardar.set('Nombre5', esp)
  else if (x ==5 )guardar.set('Nombre6', esp)
  else if (x ==6 )guardar.set('Nombre7', esp)
  else if (x ==7 )guardar.set('Nombre8', esp)
  else if (x ==8 )guardar.set('Nombre9', esp)
  else if (x ==9 )guardar.set('Nombre0', esp);
   esp = "";
}
  return guardar;
}
console.log(nombresAle());