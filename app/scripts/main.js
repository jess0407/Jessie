(function () {
  'use strict';
  var toggleMenu = function () {
    var $menu = $('nav ul'),
        isVisible = !$menu.hasClass('is-collapsed-mobile');
        isVisible ? $menu.addClass('is-collapsed-mobile'): $menu.removeClass('is-collapsed-mobile');

  };
  $('#toggle').click(toggleMenu);
  $('.nav__item').click(toggleMenu);

})();
