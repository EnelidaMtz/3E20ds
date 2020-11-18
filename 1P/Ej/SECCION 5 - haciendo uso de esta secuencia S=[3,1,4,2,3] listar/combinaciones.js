//Manzo Martinez Enelida Natalia//combinaciones
//Combinac
let secuencia = [3, 1, 4, 2, 3];

function combinaciones(list) { 
  var result = []; 
  var loop = function (start,depth,prefix) { 
    for(let i=start; i<secuencia.length; i++) 
      { 
        var next = prefix+secuencia[i]; 
        if (depth > 0) loop(i+1,depth-1,next); 
        else result.push(next); 
      } 
    } 
    for(let i=0; i<secuencia.length; i++) 
      { 
        loop(0,i,''); 
      } 
      return result; 
    }
console.log(combinaciones(secuencia)); 
console.log("Complejidad computacional : cuadratica");