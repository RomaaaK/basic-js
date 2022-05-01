const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    console.log(value)
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof position != 'number' || position > this.chain.length || position <= 0) {
      this.chain.splice(0, this.chain.length)
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let res = this.chain.join('~~')
    this.chain.splice(0, this.chain.length)
    return res
  }
};

module.exports = {
  chainMaker
};
