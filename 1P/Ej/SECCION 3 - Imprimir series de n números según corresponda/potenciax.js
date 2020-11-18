//Manzo Martinez Enelida Natalia
let n = Number(prompt("¿cuantas potencias desea generar? : "))
let num = [];
let x = 10;
    for (let m = 1; m <= n; m++) {
       num[m] = (x + " ^ " + m + " = " + Math.pow(x,m));
       console.log(num[m]);
    }
