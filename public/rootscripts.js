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

//Make a model appear, make parameters mimic jQuery syntax: '#modelname'
function modelMaker(buttonName, modelName, closeButton) {
  $(buttonName).on("click", function() {
    $(modelName).show(0);
    $(modelName).css("display", "flex");
  })

  $(closeButton).on("click", function() {
    $(modelName).hide(0);
  })

}

modelMaker('#track1', '#web', '#cloze1');
modelMaker('#track2', '#mobile', '#cloze2');
modelMaker('#track3', '#computerScience', '#cloze3');






//Must call this last
// heroSlide();



})
