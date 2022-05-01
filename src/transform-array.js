const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * --discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.[i+1]
 * --discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.[i-1]
 * --double-next дублирует следующий за ней элемент исходного массива в преобразованном массиве.[i]=[i+1]
 * --double-prev дублирует предшествующий ей элемент исходного массива в преобразованном массиве.[i]=[i-1]
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const copy = [...arr];
  for(let i =0;i<arr.length;i++){
    if (arr[i]==="--discard-next" ){
      if(i<arr.length-1){
      arr.splice(i,2);
      }else{
        arr.splice(i,1);
      }
    }
    if (arr[i]==="--discard-prev"){
      if(i>0){
        arr.splice(i-1,2);
      }else{
        arr.splice(0,1);
      }
      
    }
    if (arr[i] === "--double-next"){
      if(i<arr.length-1){
        arr.splice(i,1,arr[i+1]);
      }else{
        arr.splice(i,1);
      }
      
    }
    if (arr[i]==="--double-prev"){
      if(i>0){
      arr.splice(i,1,arr[i-1]);
      }else{
        arr.splice(0,1);
      }
    }
  }
  return arr;

}

module.exports = {
  transform
};
