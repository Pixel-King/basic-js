const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let sres = new Array(),
      addRes = new Array();
  let opt = {
    repeatTimes: 1,
    separator : '+',
    addition : '',
    additionRepeatTimes : 1,
    additionSeparator : '|'
  }
  opt["repeatTimes"] = options["repeatTimes"]?options["repeatTimes"]:opt["repeatTimes"];
  opt["separator"] = options["separator"]?options["separator"]:opt["separator"];
  opt["addition"] = options["addition"]?options["addition"]:opt["addition"];
  opt["additionRepeatTimes"] = options["additionRepeatTimes"]?options["additionRepeatTimes"]:opt["additionRepeatTimes"];
  opt["additionSeparator"] = options["additionSeparator"]?options["additionSeparator"]:opt["additionSeparator"];
  for ( let i = 1; i <=opt["additionRepeatTimes"]; i++) {
    addRes.push(opt["addition"]);

  }
  for (let j = 1; j <=opt["repeatTimes"]; j++) {
    sres.push(str + addRes.join(`${opt["additionSeparator"]}`));
  }

  return sres.join(`${opt["separator"]}`);

}

module.exports = {
  repeater
};
