(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.clipd = factory());
}(this, (function () { 'use strict';

function clipd (target, opts) {
  if ( opts === void 0 ) opts = {};

  if (
    target.nodeType !== window.Node.ELEMENT_NODE &&
    typeof target !== 'string'
  ) {
    throw new Error('clipd requires a valid target')
  }

  if (!document.execCommand) {
    throw new Error('clipd requires the document.execCommand method')
  }

  var elem = typeof target === 'string'
    ? document.querySelector(target)
    : target;

  var handler = function (event) {
    var range = document.createRange();
    var selection = window.getSelection();

    elem.tagName === 'A' && event.preventDefault();

    range.selectNode(elem);

    if (selection.rangeCount > 0) {
      selection.removeAllRanges();
    }

    selection.addRange(range);

    var executed = document.execCommand('copy');
    opts.callback && opts.callback(executed);
  };

  elem.addEventListener(opts.event || 'click', handler);
}

return clipd;

})));
