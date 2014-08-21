var crel = require('crel');
var fs = require('fs');
var insertCss = require('insert-css');

module.exports = function(opts) {
  var container = (opts || {}).container;
  var classes = [
    'rtc-localvideo',
    'align-' + ((opts || {}).align || 'bottomright')
  ];

  var video = crel('video', {
    class: classes.join(' ')
  });

  insertCss(fs.readFileSync(__dirname + '/css/localvideo.css'));

  // if a container has been specified add
  if (container) {
    container.appendChild(video);
  }

  return video;
};
