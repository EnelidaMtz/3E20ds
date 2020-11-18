//Manzo Martinez Enelida Natalia
//10e4
let n = [];
var x = 10; 
let inver = 0;
for(i = 0; i < x; i++) {
    n.push(Math.round(Math.random()*Math.pow(10,4))); 
}
console.log("Primer arreglo :"); 
for(i = 0; i < n.length; i++){
   console.log( "posición [",i,"] =",n[i] );
}
function ordenamiento (){
 for(i = 0; i < n.length; i++){
   for(m = 0; m< n.length ; m++)
   {
      if(n[m]>n[m+1])
      {
          let a = n[m]        
          n[m] = n[m + 1];   
          n[m + 1] = a        
      
          inver++;
        }
    }
 console.log("\nArreglo ordenado : ")
 for(i = 0; i < n.length; i++){
   console.log( "posición [",i,"] =",n[i] );
}
}}
console.time();
ordenamiento();
console.timeEnd();
console.log("inver : ", inver);