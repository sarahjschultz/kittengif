"use strict";

(function(window, document, undefined){

  var MAX = 300;

  var USE_WEBP = false;

  var modernizr_ready = false;

  var frame = document.getElementById('frame');

  // A function that shows kittens.
  var showKitten = function() {
    var rand = Math.floor(Math.random() * MAX) + 1;

    var name = ('000' + rand).substr(-3, 3);

    var kitten_imagery;

    if (USE_WEBP) {
      var image_tag = document.createElement('img');
      image_tag.setAttribute('src', '/images/' + name + '.webp');

      kitten_imagery = image_tag;
    }
    else {
      var source_tag_mp4 = document.createElement('source');
      source_tag_mp4.setAttribute('src', '/images/' + name + '.mp4');
      source_tag_mp4.setAttribute('type', 'video/mp4');

      var video_tag = document.createElement('video');
      video_tag.setAttribute('autoplay', 'autoplay');
      video_tag.setAttribute('autostart', 'autostart');
      video_tag.setAttribute('loop', 'loop');

      video_tag.appendChild(source_tag_mp4);

      kitten_imagery = video_tag;
    }


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
    USE_WEBP = !!supported;
    console.log('USE_WEBP');
    console.log(USE_WEBP);
    showKitten();
  });

})(window, document);
