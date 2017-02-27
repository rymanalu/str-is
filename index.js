'use strict'

/**
 * Determine if a given string matches a given pattern.
 *
 * @param   {String}  pattern
 * @param   {String}  value
 * @returns {Boolean}
 * @throws  {TypeError}
 */
function is(pattern, value) {
  if (typeof pattern !== 'string' || typeof value !== 'string') {
    throw new TypeError('Expected all arguments to be strings')
  }

  if (pattern === value) {
    return true
  }

  pattern = '^' + pattern.replace('*', '.*') + '$'

  var regexp = new RegExp(pattern)

  return regexp.test(value)
}

if (typeof String.prototype.is === 'undefined') {
  /**
   * Add the "is" method to the String class.
   *
   * @param   {String}  pattern
   * @returns {Boolean}
   * @throws  {TypeError}
   */
  String.prototype.is = function (pattern) {
    return is(pattern, this)
  }
}

module.exports = function (pattern, value) {
  return is(pattern, value)
}
