const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed ) {
  const res ={
    "turns":0,
    "seconds":0
  };
  let step = 2;
  for(let i =1;i<disksNumber;i++){
    step = step*2;
  }
  res['turns'] = step-1;
  res['seconds']= Math.floor((res['turns']/turnsSpeed)*3600); 
  return res;
}

module.exports = {
  calculateHanoi
};
