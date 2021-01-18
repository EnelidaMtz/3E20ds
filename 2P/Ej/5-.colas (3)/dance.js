function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;}
function enqueue(element) {
    this.dataStore.push(element);}
function dequeue() {
    return this.dataStore.shift();}
function front() {
    return this.dataStore[0];}
function back() {
    return this.dataStore[this.dataStore.length-1];}
function toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";}
    return retStr;}
function empty() {
    return this.dataStore.length === 0;}
function Dancer(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;}
function getDancers(male, female) {
    let nombres = dancers.split("\n");
    for (let i = 0; i < nombres.length; ++i) {
        nombres[i] = nombres[i].trim();}
    for (let j = 0; j < nombres.length; ++j) {
        let dancer = nombres[j].split(" ");
        let sexo= dancer[0];
        let nombre = dancer[1];
        if (sexo=== "F") {
            femaleDancers.enqueue(new Dancer(nombre, sexo));}
        else {
            maleDancers.enqueue(new Dancer(nombre, sexo)); } }}
function dance(males, females) {
    console.log("Las parejas son: \n");
    let persona;
    while (!females.empty() && !males.empty()) {
        persona = females.dequeue();
        console.log("\nLa bailarina es: " + persona.nombre);
        persona = males.dequeue();
        console.log("y su acompañante es: " + persona.nombre);}
    console.log();}
let dancers =
    'F Natalia Manzo\n' +
    'M Javier Mota\n' +
    'M Gustavo Manzo\n' +
    'M Jose Martinez\n' +
    'F Rosa Martinez\n' +
    'M Jorge Blanco\n' +
    'F Violetta Isfel\n' +
    'M Carlos Rivera\n' +
    'M Yoih Yu\n' +
    'M Josue Santos\n' +
    'F Alexa Rodriguez';
let maleDancers = new Queue();
let femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()){
    console.log(femaleDancers.front().nombre + " está esperando para bailar");}
if (!maleDancers.empty()){
    console.log(maleDancers.front().nombre+ " está esperando para bailar");}