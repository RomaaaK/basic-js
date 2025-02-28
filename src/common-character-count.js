/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (!s1 || !s2) return 0

  s1.split('').forEach(l => s2 = s2.replace(l, 1))

  return s2.split("").filter(l => l == 1).length
}

module.exports = {
  getCommonCharacterCount
};
