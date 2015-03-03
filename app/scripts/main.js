'use strict';



(function () {
  $('#toggle').click(function (){
      var $menu = $('nav ul'),
          isVisible = !$menu.hasClass('is-collapsed-mobile');
          isVisible ? $menu.addClass('is-collapsed-mobile'): $menu.removeClass('is-collapsed-mobile');
  });


})();
