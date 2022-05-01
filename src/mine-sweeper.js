/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const copyMatrix = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      copyMatrix[i][y] = 0
      copyMatrix[i][y] += matrix?.[i - 1]?.[y - 1] ? 1 : 0
      copyMatrix[i][y] += matrix?.[i - 1]?.[y] ? 1 : 0
      copyMatrix[i][y] += matrix?.[i - 1]?.[y + 1] ? 1 : 0
      copyMatrix[i][y] += matrix?.[i]?.[y - 1] ? 1 : 0
      copyMatrix[i][y] += matrix?.[i]?.[y + 1] ? 1 : 0
      copyMatrix[i][y] += matrix?.[i + 1]?.[y - 1] ? 1 : 0
      copyMatrix[i][y] += matrix?.[i + 1]?.[y] ? 1 : 0
      copyMatrix[i][y] += matrix?.[i + 1]?.[y + 1] ? 1 : 0
    }
  }
  return copyMatrix
}

module.exports = {
  minesweeper
};
