//Manzo Martinez
function fact(n) {
    var a = new Array();
    while (n > 1) {
    a.push(n--);}
    var producto = 1;
    while (a.length > 0) {
    producto *= a.pop();
    }
    return producto;
   }
   console.log(fact(3)); 