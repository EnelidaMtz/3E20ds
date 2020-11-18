//Manzo Martinez Enelida Natalia
//agregar nombres aleatorios
let nombres = function ()
{
     let nombresAleatorios = new Map();
        nombresAleatorios 
                        .set('nombre1','Enelida')
                        .set('nombre2','Natalia')
                        .set('nombre3','Javier')
                        .set('nombre4','Alexa')
                        .set('nombre5','Vianey')
                        .set('nombre6','Rosa')
                        .set('nombre7','VIaney');
       return    nombresAleatorios;     
}
console.log(nombres());