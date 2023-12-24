const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

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
  },

  reverseChain() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  },

  finishChain() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  },
};

module.exports = {
  chainMaker,
};
