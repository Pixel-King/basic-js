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
  constructor(type){
    this.type = (type == undefined) ? true : false;;
    this.alphovit ={
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25
    };
  }
  encrypt(str,key) {
    if ((str == undefined) || (key == undefined)) {
      throw new SyntaxError('Incorrect arguments!');
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let rez = "";
    while(str.length>key.length){
      key +=key;
    }
    for (let i =0,j =0;i<str.length;i++,j++){
        let keykod = ((this.alphovit[str[i]] + this.alphovit[key[j]])>25)
      ? this.alphovit[str[i]] + this.alphovit[key[j]] - 26 
      : this.alphovit[str[i]] + this.alphovit[key[j]];
      if (isNaN(keykod)){
          rez += str[i];
          j--;
        
      }else{
        for (let ky in this.alphovit){
          if (this.alphovit[ky] == keykod){
            rez += ky;
          }
        }
      }
    }
    return this.type?rez:rez.split('').reverse().join('');
  }
  decrypt(str,key) {
    if ((str == undefined) || (key == undefined)) {
      throw new SyntaxError('Incorrect arguments!');
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let rez = "";
    while(str.length>key.length){
      key +=key;
    }
    for (let i =0,j =0;i<str.length;i++,j++){
      let keykod = ((this.alphovit[str[i]] - this.alphovit[key[j]])<0)
    ? this.alphovit[str[i]] - this.alphovit[key[j]] + 26 
    : this.alphovit[str[i]] - this.alphovit[key[j]];
    if (isNaN(keykod)){
        rez += str[i];
        j--;
      
    }else{
      for (let ky in this.alphovit){
        if (this.alphovit[ky] == keykod){
          rez += ky;
        }
      }
    }
  }
  return this.type?rez:rez.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
