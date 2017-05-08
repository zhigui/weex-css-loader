var styler = require('weex-styler')

module.exports = function (content) {
  this.cacheable && this.cacheable();
  var callback = this.async();
  var output = '{}';
  styler.parse(content, function (err, obj) {
    if (err) {
      return callback(err);
    }
    if (obj && obj.jsonStyle) {
      try {
        output = JSON.stringify(obj.jsonStyle, convertLength, 2)
          .replace(/"([-+]?[0-9]*\.?[0-9]+)CSS_UNIT_([A-Z]+)"/g, '$1 * CSS_UNIT.$2')
      } catch (e) {
        return callback(e);
      }
    }
  })
  var result = 'module.exports = ' + output
  callback(null, result)
}

var REGEXP_LENGTH = /^([-+]?[0-9]*\.?[0-9]+)(rem|vw|vh|vmin|vmax|cm|mm|q|in|pt|pc|px)$/

function convertLength (k, v) {
  if (typeof v !== 'string') {
    return v
  }
  var result = v.match(REGEXP_LENGTH)
  if (result) {
    if (result[2] === 'px') {
      return result[1]
    }
    return result[1] + 'CSS_UNIT_' + result[2].toUpperCase()
  }
  return v
}
