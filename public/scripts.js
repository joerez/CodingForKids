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
  $('.dropmenu').slideToggle(250);
  $('.dropmenu').css("display", "flex");
})

// ****************************************

// function getEl(selector) {
//   return document.querySelector(selector); // returns the first match
// }
//
// function getElAll() {
//   return document.querySelectorAll(selector); // returns the first match
// }

// const menudropper = geEl("#menudropper");
// const dropmenu = getEl('.dropmenu');
//
// menudropper.onclick = function(e) {
//   dropmenu.classList.toggle('is-open')
// }
//
// .dropmenu {
//   display: flex;
//   height: 0;
//   overflow: hidden;
//   transition: 250ms;
// }
//
// <div class="droppmenu is-open">
//
// .dropmenu.is-open {
//   height: auto;
// }
//
// <div class="spin" style="--time: 500; --angle:90deg">
//
// .spin {
//   --time: 400ms;
//   --angle: 360deg;
//   transform: rotate(var(--angle));
//   transition: var(--time);
// }

// **************************************


$('.skip').on("click", function() {
  $('.rootSec3').css("display", "flex");
  $('.signUpForm').css("display", "flex");
})

$('.square').mousedown(function(){
  $(this).css("transform", "scale(1.1)");
  $(this).css("border", "solid 2px #3498db");
  $(this).css("box-shadow", "0px 10px 40px rgba(0, 0, 0, 0.9)");
  $(this).css("cursor", "-webkit-grabbing");

})

$('.square').mouseup(function(){
  $(this).css("transform", "scale(1.0)");
  $(this).css("border", "solid 0px #3498db");
  $(this).css("box-shadow", "0px 5px 20px rgba(0, 0, 0, 0.3)")
  $(this).css("cursor", "-webkit-grab");
})

$( function() {
  $( "#sortable" ).sortable({scroll: false, revert: true});
} );

$( function() {
  $( "#sortable2" ).sortable({scroll: false, revert: true});
} );

$( function() {
  $( ".draggable" ).draggable({scroll: false/*, revert: true*/});
} );



$('.newReport').on("click", function() {
  $('.reportPanel').slideToggle(250);
  $('.reportPanel').css("display", "flex");
})


$('.replydiv').on("click", function() {
   // $('.'.commentForm'').slideToggle(250);
   $('.commentForm', this).removeClass('animated bounceOut');

   $('.commentForm', this).show(0);
  $('.commentForm', this).addClass('animated bounceIn');
  $('.commentForm', this).css('display', 'flex');
})

  $('.closerDiv', this).on("click", function() {
     $('.commentForm').parent('.replydiv', this).removeClass('animated bounceIn');
    $('.commentForm').parent('.replydiv', this).addClass('animated bounceOut');


})



})
