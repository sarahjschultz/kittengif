"use strict";

(function(window, document, undefined){

  var MAX = 100;

  // A function that shows kittens.
  var showKitten = function() {
    var rand = Math.floor(Math.random() * MAX) + 1;

    var img = new Image();
    var name = ('000' + rand).substr(-3, 3);
    img.src = '/images/' + name + '.gif'

    var img_tag = document.createElement('img');
    img_tag.setAttribute('src', img.src);

    // @todo Preloading.
    var frame = document.getElementById('frame');
    while (frame.firstChild) frame.removeChild(frame.firstChild);
    frame.appendChild(img_tag);
  };

  // Bind to our friend the button.
  document.getElementById('funk').addEventListener('click', function(){
    showKitten();
    return false;
  });

  // Initial.
  showKitten();

})(window, document);
