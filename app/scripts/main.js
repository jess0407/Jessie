'use strict';

var inviewHandler = function($ele) {
  if ($(window).scrollTop() + $(window).height() >= $ele.offset().top) {
      if(!$ele.attr('inview')) {
          $ele.attr('inview', true);
          $ele.hide().fadeIn(3000);
      }
  }
};


(function () {
  var navMenu = $('nav ul'),
      isDisplayed = 'is-displayed-mobile',
      isCollapsed = 'is-collapsed-mobile';
  var menuToggle = function () {
    if(navMenu.hasClass(isCollapsed)){
      navMenu.removeClass(isCollapsed);
      navMenu.addClass(isDisplayed);
    } else {
      navMenu.removeClass(isDisplayed);
      navMenu.addClass(isCollapsed);
    }
  };

  var $proj = $('#projects');
  $(window).scroll(function(){
    inviewHandler($proj);
  });


})();
