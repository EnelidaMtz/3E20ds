//Manzo Martinez Enelida Natalia
//diferencia
console.log("WeakMap")
const miWeakmap = new WeakMap(); 
let llave1 = {};         
let llave2 = {};              
let llave3 = {};               

miWeakmap.set(llave1,1)
         .set(llave2,2)
         .set(llave3,"Hola \n\n")                                      
 console.log(miWeakmap.get(llave1));
 console.log(miWeakmap.get(llave2));
 console.log(miWeakmap.get(llave3));   
for(i= 0; i < 2; i++)
{
    console.log(miWeakmap.has(llave1)); 
    console.log(miWeakmap.has(llave2)); 
    console.log(miWeakmap.has(llave3),"\n");
    miWeakmap.delete(llave1);
    miWeakmap.delete(llave2);
    miWeakmap.delete(llave3);           }
console.log("Map ");
let miMap = new Map();
let prop = 'hm'  
miMap.set('Soy', 95)                            
     .set('Nat', ":p")
      console.log("Tamaño del map : [", Map.length,"] velores")
console.log(miMap)                                      
for(i = 0; i < 2; i++)
{
  console.log(miMap.has('hm'))
  console.log(miMap.has('Soy'))
  console.log(miMap.has('Nat'))     
  console.log(miMap, "\n")
  miMap.clear();                       
}                                      