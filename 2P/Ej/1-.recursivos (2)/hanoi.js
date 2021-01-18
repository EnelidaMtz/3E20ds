//manzo martinez
let anillos = 5;
Hanoi(anillos, 1, 3, 2);
function Hanoi(n, a, b, c){
    if (n > 0)
    {
        Hanoi(n-1, a, c, b);
        console.log("El anillo desde la torre: " + a + " hasta la torre " + b);
        Hanoi(n-1, c, b, a);
    }
}
