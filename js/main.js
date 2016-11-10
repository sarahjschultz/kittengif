"use strict";

(function(window, document, undefined){

  var MAX = 300;

  var frame = document.getElementById('frame');

  // A function that shows kittens.
  var showKitten = function() {
    var rand = Math.floor(Math.random() * MAX) + 1;

    var name = ('000' + rand).substr(-3, 3);

    var source_tag = document.createElement('source');
    source_tag.setAttribute('src', '/images/' + name + '.mp4');
    source_tag.setAttribute('type', 'video/mp4');

    var video_tag = document.createElement('video');
    video_tag.setAttribute('autoplay', 'autoplay');
    video_tag.setAttribute('autostart', 'autostart');
    video_tag.setAttribute('loop', 'loop');

    video_tag.appendChild(source_tag);

    while (frame.firstChild) frame.removeChild(frame.firstChild);
    frame.appendChild(video_tag);

  };

  // Bind to our friend the button.
  document.getElementById('funk').addEventListener('click', function(){
    showKitten();
    return false;
  });

  // Initial.
  showKitten();

})(window, document);
