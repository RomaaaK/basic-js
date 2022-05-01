/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {}

  domains.forEach(i => {
    let dnsName = ""
    i.split('.').reverse().forEach(y => {
        dnsName += `.${y}`
        dns[dnsName] = dns[dnsName] ? dns[dnsName] + 1 : 1
    })
  })

  return dns
}

module.exports = {
  getDNSStats
};
