const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newN = [];
  for(let i =0;i<`${n}`.length;i++){
    const newA = `${n}`.split('');
    newA.splice(i,1)
    newN.push(newA.join(''));
  }
  return +newN.sort((a,b)=>b-a).splice(0,1).join('');
}


module.exports = {
  deleteDigit
};
