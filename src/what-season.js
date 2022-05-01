/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (typeof date.getMonth !== 'function') throw new Error('Invalid date!')
  try {
    date > 0
  } catch (err) {
    throw new Error('Invalid date!')
  }

  const month = date.getMonth();
  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']

  return seasons[month]
}

module.exports = {
  getSeason
};
