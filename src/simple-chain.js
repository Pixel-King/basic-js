const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${value}`);
   return this;

  },
  removeLink(position) {
    if (typeof position != "number" || position<1 || position> this.chain.getLength()){
      this.chai =[];
    throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position-1,1);
    }
    
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const fin = this.chain.join(")~~(");
    this.chain = []
    return `(${fin})`;
  }
};

module.exports = {
  chainMaker
};
