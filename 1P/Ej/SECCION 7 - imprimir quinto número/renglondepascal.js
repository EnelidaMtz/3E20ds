//Manzo Martinez Enelida Natalia
//renglon de pascal
var n=5; //número de filas  
var A= new Array(n);  
for (var i=1;i<=n;i++) 
{  
 A[i] = new Array(n);  
}  
for(i=1;i<=n;i++)  
 for(x=1;x<=i;x++)
 { 
  A[i][x]=combina(i-1,x-1);  
 }  
console.log("El quinto renglón del triangulo de pascal es : ")
for(i=1;i<=n;i++)
{  
 for(x=1;x<=i;x++)
 {  
  if (i == 5 )
  {
    console.log(A[i][x]);   
  } 
}    
}  