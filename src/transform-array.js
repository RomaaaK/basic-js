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
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  if (!arr.length) return []
  const newArr = [...arr]
  const commands = ["--discard-prev", "--discard-next", "--double-prev", "--double-next", "--nothing"]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-prev" && i > 0) {
      newArr[i - 1] = "--nothing"
    }
    if (arr[i] == "--discard-next" && i < (arr.length - 1)) {
      newArr[i + 1] = "--nothing"
    }
    if (arr[i] == "--double-prev" && i > 0) {
      newArr[i] = newArr[i - 1]
    }
    if (arr[i] == "--double-next" && i < (arr.length - 1)) {
      newArr[i] = newArr[i + 1]
    }
  }

  return newArr.filter(i => !commands.includes(i))
}

module.exports = {
  transform
};
