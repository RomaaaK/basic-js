const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!')
    }

    let counter = 0
    let result = ""

    for (let i = 0; i < str.length; i++) {
      let l1 = 0
      let l2 = 0
      if (str[i].toUpperCase().charCodeAt(0) > 64 && str[i].toUpperCase().charCodeAt(0) < 91) { 
        counter = counter > (key.length - 1) ? 0 : counter
        l1 = this.alphabet.indexOf(str[i].toUpperCase())
        l2 = this.alphabet.indexOf(key[counter++].toUpperCase())
        result += this.alphabet[(l1 + l2) > 25 ? (l1 + l2) - 26 : (l1 + l2)]
        continue
      }
      result += str[i]
    }

    if (!this.reverse) {
      return result.split('').reverse().join('')
    }

    return result
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!')
    }
    let result = ''
    let counter = 0
    
    for (let i = 0; i < str.length; i++) {
      if (str[i].toUpperCase().charCodeAt(0) > 64 && str[i].toUpperCase().charCodeAt(0) < 91) { 
        counter = counter > (key.length - 1) ? 0 : counter
        result += this.alphabet.slice(str[i].charCodeAt(0) - key[counter++].toUpperCase().charCodeAt(0))[0]
        continue
      }
        result += str[i]
    }

    if (!this.reverse) {
      return result.split('').reverse().join('')
    }

    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};