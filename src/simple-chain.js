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
    this.currentChain.push(`( ${value} )`);
    return this; 
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  removeLink(position) {
    if (typeof(position) === 'number' && position <= this.currentChain.length && position > 0) {
      this.currentChain.splice(position - 1, 1);
    } else {
		  this.currentChain.length = 0;
      throw Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  
  reverseChain() {
    this.currentChain.reverse();
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  reverseChain() {
    this.currentChain.reverse();
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  finishChain() {
    let str = this.currentChain.join('~~');
    this.currentChain.length = 0;
    return str;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker,
};
