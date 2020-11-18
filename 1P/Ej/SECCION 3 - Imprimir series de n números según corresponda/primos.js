//Manzo Martinez Enelida Natalia
//Primos
let n = Number(prompt("Introduzca un numero para sacar los numero primos :"))
let numerosP = [];
    function Primo(n) {
      let i = 1;
      while (n % ++i != 0);
      return n == i;
      }
      for (let i = 2; i < n; i++)
      if (Primo(i)){
      numerosP[i] = i
      console.log(numerosP[i])
      }