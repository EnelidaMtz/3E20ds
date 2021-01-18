//Manzo Martinez 
//ejercicio 1
class graph {   
    constructor(o) {
        this.m=o;
        this.length=this.m.length;}
    addvertex(v){ 
        this.m[v]=0; }
 addedge(e,f){  
        if(typeof (this.m[e])==='numero'){
            this.m[e]=[]}
        this.m[e][f]=1}
    fill(){
        for (let i = 0; i < this.m.length; i++){
            for (let j = 0;j < this.m.length; j++){
                if (this.m[i][j] === undefined)
                    this.m[i][j] = 0 } } }
    tostring(){ 
        let s='\n';
        for (let i = 0;i < this.m.length; i++){
            s += '\n'
            for (let j = 0; j < this.m.length; j++){
                s += this.m[i][j]+' '} }
        return s;}
    sizevertex(){
        let numV=0;
        for (let i = 0;i < this.m.length; i++){
            numV++;}
        return numV;}
    print(){    
        console.log(this.tostring())}}
class graphSample{
    aNew(){
        return []; }}  
let s = new graphSample()       
let a = new graph(s.aNew());   
a.addvertex(0); 
a.addvertex(1);
a.addvertex(2);
a.addedge(0,1);
a.addedge(1,2);
a.addedge(2,0);
a.fill();
console.log("El grafo: ");
a.print();
console.log("la cantidad de vertices es : "+a.sizevertex())