//Manzo Martinez Enelida Natalia
//existen repetidos
var vector = [3,1,4,2,3];
var repetidos = false;
for(let i = 0; i < vector.length; i++){
    for(let x = 0; x < vector.length; x++){
        if(i != x){
            if(vector[i] == vector[x]){
                repetidos = true;
            }
        }
    }
}
if(repetidos){
    console.log("Existen elementos repetidos");
    console.log("Complejidad computacional : cuadratica ");
}else{
    console.log("No existen elementos repetidos");
    console.log("Complejidad computacional : cuadratica ");
}