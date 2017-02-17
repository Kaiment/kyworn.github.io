(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    jQuery(document).ready(function(){
    	jQuery('.skillbar').each(function(){
    		jQuery(this).find('.skillbar-bar').animate({
    			width:jQuery(this).attr('data-percent')
    		},6000);
    	});
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
