# str-is [![Build Status](https://travis-ci.org/rymanalu/str-is.svg?branch=master)](https://travis-ci.org/rymanalu/str-is)

Determine if a string matches a pattern.

## Install
```
npm install --save str-is
```

## Usage
```javascript
var str_is = require('str-is')

str_is('foo/bar', 'foo/bar')
// => true

str_is('foo*', 'foobar')
// => true

str_is('baz*', 'foobar')
// => false
```
