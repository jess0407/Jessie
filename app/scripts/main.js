'use strict';
(function () {
  var navMenu = $('nav ul'),
      isDisplayed = 'is-displayed-mobile',
      isCollapsed = 'is-collapsed-mobile';
  var menuToggle = function () {
    if(navMenu.hasClass(isCollapsed)){
      navMenu.removeClass(isCollapsed);
      navMenu.addClass(isDisplayed)
    } else {
      navMenu.removeClass(isDisplayed);
      navMenu.addClass(isCollapsed);
    }
  };

  $('#toggle').on('click', menuToggle);

})();
