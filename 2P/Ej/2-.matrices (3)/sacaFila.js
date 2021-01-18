//Manzo Martinez
class row{
    constructor(matrix, columna, row){
        this.matrix = matrix;
        this.row = row;
        this.columna = columna;
    }
    sacarRow() {
        let row = [];
        for (let i = 0; i < this.matrix.length; i++)
            row.push(this.matrix[i][this.row]);
        return row;  }}
let array = new row(
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]],
                1, 0);
console.log(array.sacarRow());
