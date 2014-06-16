(function ($) {
  Drupal.behaviors.explore_menu = {
    attach: function (context, settings) {
    	// When collection explore link is clicked, id=collexplink is set in the shanti_sarvaka theme page.tpl.php
      $('#collexplink a').click(function () {
      	if($('section.collections').is(":hidden")) {
	      	$('#gen-search .on-flap').animate({top: "132px"});
      	} else {
      		$('#gen-search .on-flap').animate({top: "0px"});
      	}
        $('section.collections').slideToggle();
        
      });
      $('section.collections span.closecollection').on('click', function() {
      	$('#gen-search .on-flap').animate({top: "0px"});
      	$('section.collections').slideToggle();
      });
    }
  };
})(jQuery);