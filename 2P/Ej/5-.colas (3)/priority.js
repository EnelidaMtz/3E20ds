function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back
    this.toString = toString;}
function enqueue(element){
    this.dataStore.push(element);}
function dequeue(){
    let priority = this.dataStore[0].code;
    for (let i = 1; i < this.dataStore.length; i++){
        if (this.dataStore[i].code < priority){
            priority = i;}}
    return this.dataStore.splice(priority, 1);}
function front(){
    return this.dataStore[0];}
function back(){
    return this.dataStore[this.dataStore.length-1];}
function toString(){
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i){
        retStr += this.dataStore[i].nombre+ ", code: "
               + this.dataStore[i].code + "\n";}
    return retStr;}
function Patient(name, code){
    this.nombre= name;
    this.code = code;}
let p = new Patient("Domingo", 5);
let ed = new Queue();
ed.enqueue(p);
p = new Patient("Natalia", 2);
ed.enqueue(p);
p = new Patient("Javier", 3 );
ed.enqueue(p);
p = new Patient("Emmanuel",2 );
ed.enqueue(p);
p = new Patient("Rosa",1 );
ed.enqueue(p);
console.log(ed.toString());
let seen = ed.dequeue();
console.log("Paciente que se está atendiendo: " + seen[0].name);
console.log("Pacientes en espera: ");
console.log(ed.toString());
let seen1 = ed.dequeue();
console.log("Paciente que se está atendiendo: " + seen1[0].name);
console.log("Pacientes en espera: ");
console.log(ed.toString());

