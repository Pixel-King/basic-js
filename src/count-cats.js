const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
/*   throw new NotImplementedError('Not implemented'); */
  if (Array.isArray(matrix)){
        let sum =0
        for (let i =0;i<matrix.length;i++){
          for (let j = 0;j<matrix[i].length;j++){
            sum +=matrix[i][j]=="^^"?1:0;
          }
        }
        return sum;
      }else return 0;
  }
  

module.exports = {
  countCats
};
