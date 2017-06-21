(function() {
    'use strict';

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function(e) {
        var screenH = 768;
        var screenHeightDetect = function() {
            screenH = window.screen.height;
            if (screenH >= 1024 && screenH <= 1299) {
                sections[e.id] = e.offsetTop - 400;
            } else if (screenH >= 1300) {
                sections[e.id] = e.offsetTop - 610;
            } else {
                sections[e.id] = e.offsetTop - 260;
            }
        };
        window.addEventListener("load", screenHeightDetect);
        window.addEventListener("resize", screenHeightDetect);
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
