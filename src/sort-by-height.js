const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrSort = [...arr].sort((a, b) => a - b).filter(i => i != -1)
  let counter = 0

  return arr.map(i => {
    if (i != -1) {
      return arrSort[counter++]
    } else {
      return i
    }
  })
}

module.exports = {
  sortByHeight
};
