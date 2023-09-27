const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let result;
  if (!date) {
  return 'Unable to determine the time of year!';
  }
  let month = new Date(date).getMonth();
  if (month === 0 || month === 1 || month === 11) {
    result = 'winter';
  } else if (month === 2 || month === 3 || month === 4) {
    result = 'spring';
  } else if (month === 5 || month === 6 || month === 7) {
    result = 'summer';
  } else if (month === 8 || month === 9 || month === 10) {
    result = 'autumn';
  } else {
    throw new Error('Invalid date!');
  }
  return result;
}

module.exports = {
  getSeason
};
