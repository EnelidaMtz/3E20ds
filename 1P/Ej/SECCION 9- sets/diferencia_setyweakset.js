//Enelida Natalia Manzo Martinez
//set y weakset
var x = new WeakSet();
x.add({});
let Objeto1 = {nombre:'Enelida'};
let Objeto2 = {nombre:'Gustavo'};
x.add(Objeto1);
x.add(Objeto2);
console.log("WeakSet ")
 for (i = 0; i <2; i++) {
  console.log(x);
  console.log(x.has(Objeto1));
  console.log(x.has(Objeto2),"\n");
    x.delete(Objeto1);
    x.delete(Objeto2);
}
 console.log("Set")
  y.add('Natalia');
  y.add('Rocio');
  y.add('Alejandra');
  y.add('Vanesa');
  y.add('Fernando');
  y.add('natasha');
  y.add('Natalia')    
let arreglo = [...y] 
console.log(y) 
for (i = 0; i < 2; i++) 
 {                                 
    console.log(y.has('Javier'));
    console.log(y.has('Natalia'));
    console.log(y.has('Rocio'));
    console.log(y.has('Alejandra'));
    console.log(y.has('Fernando'));
    console.log(y.has('Vanesa'));
    console.log(y.has('natasha'),"\n");   
    y.clear();   
 }

 
