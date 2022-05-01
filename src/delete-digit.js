
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
  const numbersArr = []

  for (let i = 0; i < `${n}`.length; i++) {
    numbersArr.push(+`${n}`.split('').filter((_, index) => index != i).join(''))    
  }

  return Math.max(...numbersArr)
}

module.exports = {
  deleteDigit
};
