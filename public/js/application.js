$(function(){
       $('.curtains').curtain({
           scrollSpeed: 200,
           controls: '.menu',
           curtainLinks: '.curtain-links',
           nextSlide: function(){
            console.log("ok");
           }
       });
    });