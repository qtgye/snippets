// Checker utility
//
// Snippet taken from https://raw.githubusercontent.com/juliangarnier/anime/master/anime.js

var is = (function() {
    return {
      array:  function(a) { return Array.isArray(a) },
      object: function(a) { return Object.prototype.toString.call(a).indexOf('Object') > -1 },
      html:   function(a) { return (a instanceof NodeList || a instanceof HTMLCollection) },
      node:   function(a) { return a.nodeType },
      svg:    function(a) { return a instanceof SVGElement },
      number: function(a) { return !isNaN(parseInt(a)) },
      string: function(a) { return typeof a === 'string' },
      func:   function(a) { return typeof a === 'function' },
      undef:  function(a) { return typeof a === 'undefined' },
      null:   function(a) { return typeof a === 'null' },
      hex:    function(a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a) },
      rgb:    function(a) { return /^rgb/.test(a) },
      rgba:   function(a) { return /^rgba/.test(a) },
      hsl:    function(a) { return /^hsl/.test(a) },
      color:  function(a) { return (is.hex(a) || is.rgb(a) || is.rgba(a) || is.hsl(a))}
    }
  })();
