(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  var screenHeight =  window.screen.height;

  Array.prototype.forEach.call(section, function(e) {
    if(screenHeight >= 900) {
      sections[e.id] = e.offsetTop - 400;
    } else {
      sections[e.id] = e.offsetTop - 260;
    }
    
  });

  var posFunction = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    //var x;
    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.activescrollspy').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'activescrollspy');
        window.location.hash = '';
      }
    }
  };
  window.onscroll = function() { posFunction(); }
  window.onload = function() { posFunction(); }
})();