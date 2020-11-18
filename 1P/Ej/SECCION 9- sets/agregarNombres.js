//Manzo Martinez Enelida Natalia
//agrega n nombres
let nombre = function ()
{
     let nombresAleatorios = new Set();
        nombresAleatorios 
                        .add('Emmanuel')
                        .add('Vianey')
                        .add('Javier')
                        .add('Alexa')
                        .add('Rosa')
                        .add('Enelida')
                        .add('Natalia')
                        .add('Gustavo');
       return    nombresAleatorios;     
}

console.log(nombre());