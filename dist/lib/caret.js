"use strict";

module.exports = {
  start: function start(el) {
    return el.selectionStart;
  },
  end: function end(el) {
    return el.selectionEnd;
  },
  set: function set(el, start, end) {
    el.setSelectionRange(start, end || start);
  }
};