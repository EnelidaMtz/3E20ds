//Manzo Martinez
class Columna{
    constructor(matrix, columna){
        this.matrix = matrix;
        this.columna = columna;  }
    sacarColumna() {
        let columna2 = [];
        for (let i = 0; i < this.matrix.length; i++) {
            columna2.push(this.matrix[i][this.columna]);
        }
        return columna2;
    }}
let array = new Columna(
    [
            [1,2,3],
            [4,5,6],
            [7,8,9]],
                        0);
console.log(array.sacarColumna());

