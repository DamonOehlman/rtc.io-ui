var qsa = require('fdom/qsa');

/**
  ### `removePeerVideo(peerId)`

  Remove video elements that have been created with the `data-peer` attribute,
  and where the value of that attribute matches `peerId`.

**/
module.exports = function(peerId) {
  qsa('video[data-peer="' + peerId + '"]').forEach(function(el) {
    el.parentNode.removeChild(el);
  });
};
