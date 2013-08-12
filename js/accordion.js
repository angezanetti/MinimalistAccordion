(function($) {
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {

    if ( $(this).hasClass('open')) {
      $(this).parent().next().slideUp();
      $(this).removeClass('open');
      return false;
    } 
    else {
      allPanels.slideUp();
      $(this).parent().next().slideDown();
      $(this).addClass('open');
      return false;
    }
  });
})(jQuery);
