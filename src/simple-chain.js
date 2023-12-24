const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  currentChain: [],

  getLength() {
    return this.currentChain.length;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  addLink(value) {
    this.currentChain.push(`${value}`);
    return this.currentChain; 
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  removeLink(position) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
