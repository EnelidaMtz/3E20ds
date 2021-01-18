//Manzo Martinez
class Transponer
{transposeArray(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push([]);
        }
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length; j++){
            newArray[j].push(array[i][j]);
            } }
        return newArray;
    }}
let a2= new Transponer();
console.log(a2.transposeArray([
    [1, 2, 3],
    [3, 4, 5],
    [4, 5, 6]
]));

