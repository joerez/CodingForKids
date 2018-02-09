// Can also be included with a regular script tag
//import Typed from 'typed.js';



// var typed = new Typed('#typed', {
//   stringsElement: '#typed-strings'
// });



var options = {
  strings: ["Hey", "Welcome<br>To", "Coding<br>For<br>Kids"],
  typeSpeed: 50
}

var typed2 = new Typed("#typed", options);



$(document).ready(function()
{

$('.rootSec1').fadeOut(9000).css('zIndex', '50', function() {

});
$('.rootSec2').delay(3000).fadeIn(3000, function(){
  $('.rootSec2').css('display', 'flex');
  $('.sec2text').delay(100).fadeIn(1000, function() {


      $('.rootSec2').fadeOut(3000, function() {


        $('.rootSec3').fadeIn(3000);
        $('.rootSec3').css('display', 'flex');
        $('.sec3text').delay(100).fadeIn(4000, function() {


        $('.sec3text').addClass('animated pulse infinite').delay(2000).removeClass('pulse infinite').addClass('fadeOutUpBig')

          $('.signUpForm').fadeIn(500);
          $('.signUpForm').addClass('animated fadeInUpBig');





      })

  });

})


})



$('.accountbtn').on("click", function() {
  $('.logInForm').removeClass('animated zoomOutDown');
  $('.signUpForm').removeClass('animated fadeInUpBig');
  $('.signUpForm').removeClass('animated fadeInDownBig');
  $('.signUpForm').addClass('animated fadeOutUpBig');
  $('.signUpForm').fadeOut(1000);

  $('.logInForm').fadeIn(500);

  $('.logInForm').addClass('animated zoomInUp');
})


$('.accountbtn2').on("click", function() {
  $('.logInForm').removeClass('animated zoomInUp');
  $('.logInForm').addClass('animated zoomOutDown');
  $('.signUpForm').removeClass('animated fadeOutUpBig');
  $('.signUpForm').fadeIn(500);
  $('.logInForm').fadeOut(1000);


  $('.signUpForm').addClass('animated fadeInDownBig');
})


$('#menudropper').on("click", function() {
  $('.dropmenu').slideToggle(500);
  $('.dropmenu').css("display", "flex");
})

$('.skip').on("click", function() {
  $('.rootSec3').css("display", "flex");
  $('.signUpForm').css("display", "flex");
})

})
