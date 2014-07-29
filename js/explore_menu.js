(function ($) {
  Drupal.behaviors.explore_menu = {
    attach: function (context, settings) {
    	// When collection explore link is clicked, id=collexplink is set in the shanti_sarvaka theme page.tpl.php
     /* $('#collexplink a').click(function () {
        $('section.collections').slideToggle();
      });
      $('section.collections span.closecollection').on('click', function() {
      	$('section.collections').slideToggle();
      });*/
     $('body').on('click','.explore>a, .collections .close',function(){
				$(".collections").slideToggle(200);
			});
    }
  };
})(jQuery);