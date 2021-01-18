//Manzo Martinez
const mergeSort = array => {
    if(array.length < 2) return array;
    const middle = Math.floor(array.length / 2);
    //Dividir matriz
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
  const merge = (left, right) => {
    const result = [];
    while(left.length && right.length) {
      if(left[0] <= right[0]) {
        //Agregar a la derecha
        result.push(left.shift());
      } else {
         //Agregar a la izquierda
        result.push(right.shift());
      }
    }
    //matriz izquierda
    while(left.length) result.push(left.shift());
    //matriz derecha
    while(right.length) result.push(right.shift());
    //retornar array
    console.log('result:', result);
    return result;
  }
  console.log(mergeSort([5, 3, 7, 10, 4, 1, 8]));