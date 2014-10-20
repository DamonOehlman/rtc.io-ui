var attach = require('rtc-attach');
var kgo = require('kgo');
var chain = require('whisk/chain');
var append = require('fdom/append');
var tweak = require('fdom/classtweak');

var streamui = module.exports = function(qc, opts) {
  var container = (opts || {}).container || document.body;

  qc
  .on('stream:added', streamui.add(container, opts))
  .on('stream:removed', streamui.remove(container, opts))
  .on('call:ended', streamui.remove(container, opts));
};

streamui.local = function(container, opts) {
  return function(stream) {
    // use kgo to help with flow control
    kgo({ stream: stream, options: opts })
    ('attach', [ 'stream', 'options' ], attach.local)
    ('render-local', [ 'attach' ], chain([
      tweak('+rtc'),
      tweak('+localvideo'),
      append.to(container)
    ]))
    .on('error', console.error.bind(console));
  };
};

streamui.add = function(container, opts) {
  return function(id, stream) {
  };
};

streamui.remove = function(container, opts) {
  return function(id, stream) {
  };
};
