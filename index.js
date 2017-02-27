'use strict'

/**
 * Determine if a given string matches a given pattern.
 *
 * @param   {String}  pattern
 * @param   {String}  value
 * @returns {Boolean}
 * @throws  {TypeError}
 */
module.exports = function (pattern, value) {
  if (typeof pattern !== 'string' || typeof value !== 'string') {
    throw new TypeError('Expected all arguments to be strings')
  }

  if (pattern === value) {
    return true
  }

  var regexp = new RegExp(pattern.replace('/*', '/.*'))

  return regexp.test(value)
}
