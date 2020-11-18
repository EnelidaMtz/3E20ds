//Manzo Martinez Enelida Natalia
//generar 1O nombresaleatorios
function nombresAle(){
 let guardar = new Set();
 var esp = ""; 
 var vocales = "aeiou";
 var abecedario = "abcdefghijklmnñopqrstuvwxyz"; 
 for(x = 1; x < 11;x++)
 {  
    let longitud = Math.round(Math.random()*6);
    if (longitud < 2) longitud = 2;
 for (var i = 0; i < longitud; i++) 
  {
     esp += abecedario.charAt(Math.floor(Math.random()* abecedario.length));
     esp += vocales.charAt(Math.floor(Math.random()* vocales.length));
  } 
  guardar.add(esp)
   esp = "";
}
  return guardar;
}
console.log(nombresAle())
