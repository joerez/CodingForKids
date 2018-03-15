$(document).ready(function()
{

$('#dot2').on("click", function() {
  $('.hero').fadeOut(1000);
  $('.hero2').fadeIn(1000);
  $('.hero2').css("display", "flex");
})


function heroSlide() {

  $('.hero').delay(2000).fadeOut(1000);
  $('.hero2').delay(5000).fadeOut(1000);
    $('.hero').delay(5000).fadeIn(1000);
    $('.hero2').delay(2000).fadeIn(1000);



  heroSlide();

}

$('#fun').on("click", function() {
  $('#fun').hide();
  $('.cta').addClass('woah simpleEntrance');
  $('.cta').delay(11000).queue(function() {
    $('.cta').removeClass('woah simpleEntrance');
    $('#fun').show();
  })
})


heroSlide();

$('.footer').css("margin-top", "0px");

})
