/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  const nameTeam = []

    for (let name of members) {
      if (typeof name === 'string') {
        nameTeam.push(name.trimStart()[0].toUpperCase())
      }
    }

    nameTeam.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))

    return nameTeam.join('')
}

module.exports = {
  createDreamTeam
};
