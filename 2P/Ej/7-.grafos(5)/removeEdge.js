//Manzo Martinez 
//ejercicio 5
class Grafo5 {
    constructor(o) {
        this.n = o}
    addVertex(v) {
        this.n[v] = 0 }
    addEdge(e, f) {
        if (typeof (this.n[e] === "numero")) {
            this.n[e] = []}
        this.n[e][f] = 1}
    toString() {
        let a = "\n"
        for (let i = 0; i < this.n.length; i++) {
            a += "\n"
            for (let j = 0; j < this.n.length; j++) {
                a += this.n[i][j];}}
        return a;}
 imprimir() {
        console.log(this.toString())}
    removeEdge(i, j) {
        this.n[i][j] = 0
        g.imprimir()
        console.log("Arco "+i +" - " +j+" removido")  }}
let g= new Grafo([
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1],
    [0,1,0,0],])
g.imprimir()
g.removeEdge(1,2)