"use strict";

(function(window, document, undefined){

  var MAX = 300;

  var frame = document.getElementById('frame');

  // A function that shows kittens.
  var showKitten = function() {
    var rand = Math.floor(Math.random() * MAX) + 1;

    var name = ('000' + rand).substr(-3, 3);

    var source_tag_mp4 = document.createElement('source');
    source_tag_mp4.setAttribute('src', '/images/' + name + '.mp4');
    source_tag_mp4.setAttribute('type', 'video/mp4');

    var source_tag_webm = document.createElement('source');
    source_tag_webm.setAttribute('src', '/images/' + name + '.webm');
    source_tag_webm.setAttribute('type', 'video/webm');

    var video_tag = document.createElement('video');
    video_tag.setAttribute('autoplay', 'autoplay');
    video_tag.setAttribute('autostart', 'autostart');
    video_tag.setAttribute('loop', 'loop');

    video_tag.appendChild(source_tag_mp4);
    video_tag.appendChild(source_tag_webm);

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
