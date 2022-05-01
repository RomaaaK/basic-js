const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let currentLetter = str[0]
  let result = ""
  let count = 1

  for (let i = 1; i < str.length; i++) {
    if (currentLetter == str[i]) {
      count++
    } else {
      result += `${count > 1 ? count : ""}${currentLetter}`
      count = 1
      currentLetter = str[i]
    }

    if (i == str.length - 1) {
      result += `${count > 1 ? count : ""}${currentLetter}`
    }
  }

  return result
}

module.exports = {
  encodeLine
};
