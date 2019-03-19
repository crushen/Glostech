// my javaScript
var navScroll = document.querySelector("nav");
var navToggle = document.getElementById("navBtn")

// adds color to navbar on scroll
window.onscroll = function (){
    if (window.pageYOffset >= 2){
        navScroll.classList.add("color");
        navScroll.classList.remove("transparent");
    }
    else {
        navScroll.classList.add("transparent");
        navScroll.classList.remove("color");
    }
}

// makes the menu not transparent when nav button clicked
// only works once?
navToggle.addEventListener("click", clickHandler);

function clickHandler(){
    navScroll.classList.add("color");
}


// open source scroll effect
(function($) {
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 75)
        }, 1200, "easeInOutExpo");
        return false;
      }
    }
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
})(jQuery); // End of use strict





