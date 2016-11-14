"use strict";

(function(window, document, undefined){

  var MAX = 365;

  var USE_WEBP = false;

  var CACHE_BUST = 1478898654;

  var modernizr_ready = false;

  var frame = document.getElementById('frame');

  // A function that shows kittens.
  var showKitten = function() {
    var index = Math.floor(Math.random() * MAX) + 1;

    var kitten_imagery;

    if (USE_WEBP) {
      var image_tag = document.createElement('img');
      image_tag.setAttribute('src', window.kittens[index].webp + '?' + CACHE_BUST);

      kitten_imagery = image_tag;
    }
    else {
      var source_tag_mp4 = document.createElement('source');
      source_tag_mp4.setAttribute('src',  window.kittens[index].mp4 + '?' + CACHE_BUST);
      source_tag_mp4.setAttribute('type', 'video/mp4');

      var video_tag = document.createElement('video');
      video_tag.setAttribute('autoplay', 'autoplay');
      video_tag.setAttribute('autostart', 'autostart');
      video_tag.setAttribute('loop', 'loop');
      video_tag.setAttribute('preload', 'yes');

      video_tag.appendChild(source_tag_mp4);

      kitten_imagery = video_tag;
    }

    kitten_imagery.setAttribute('class', 'kitten')

    while (frame.firstChild) frame.removeChild(frame.firstChild);
    frame.appendChild(kitten_imagery);

  };

  // Bind to our friend the button.
  document.getElementById('funk').addEventListener('click', function(){
    if (modernizr_ready) {
      showKitten();
    }
    return false;
  });

  Modernizr.on('webpanimation', function(supported) {
    modernizr_ready = true;
    USE_WEBP = supported;
    showKitten();
  });

})(window, document);
