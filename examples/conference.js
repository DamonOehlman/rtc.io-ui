var quickconnect = require('rtc-quickconnect');
var capture = require('rtc-capture');
var streamui = require('../stream');
var conference;

capture({ video: true, audio: true }, function(err, stream) {
  if (err) {
    return console.error(err);
  }

  // create the conference
  conference = quickconnect('https://switchboard.rtc.io/', {
    room: 'rtc-ui:conference-example'
  });

  // add the local stream to the conference
  conference.addStream(stream);

  // render the local stream using the stream ui
  streamui.local(document.body)(stream);

  // use streamui to automatically handle element creation and removal
  streamui(conference, { container: document.body });
});

