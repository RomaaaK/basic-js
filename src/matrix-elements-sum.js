/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0

  outer: for (let i = 0; i < matrix[0].length; i++) {
    for (let y = 0; y < matrix.length; y++) {
      if (matrix[y][i] === 0) continue outer

      result += matrix[y][i]
    }
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
