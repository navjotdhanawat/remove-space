/**
 * remove-space
 * 
 *
 * Copyright (c) 2017 Navjot Dhanawat
 * Licensed under the MIT license.
 */

/**
 * Remove space from given string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = {
  escapeSpace: function(str) {
    return str.replace(/ /g,'');
  }
};
