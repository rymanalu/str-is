'use strict'

var expect = require('chai').expect
var str_is = require('./index')

describe('#str_is', function () {
  it('should throw an exception if one of the arguments are not string', function () {
    var argumentsAreNotString = function () {
      return str_is(1, Object.create(null))
    }

    expect(argumentsAreNotString).to.throw(TypeError)
  })

  it('should returns true if pattern and value are same', function () {
    var result = str_is('foo/bar', 'foo/bar')

    expect(result).to.be.true
  })

  it('should returns true if pattern is "foo/bar/*" and value is "foo/bar/baz"', function () {
    var result = str_is('foo/bar/*', 'foo/bar/baz')

    expect(result).to.be.true
  })

  it('should returns false if pattern is "foo/bar/*" and value is "foo/baz/bar"', function () {
    var result = str_is('foo/bar/*', 'foo/baz/bar')

    expect(result).to.be.false
  })

  it('can call the "is" method for the String instances', function () {
    var stringInstancesCanCallIsMethod = function () {
      return 'foobar'.is('foo*')
    }

    expect(stringInstancesCanCallIsMethod).to.not.throw(TypeError)
    expect(stringInstancesCanCallIsMethod()).to.be.true
  })
})
