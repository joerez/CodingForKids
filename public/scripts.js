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

$('.rootSec1').fadeOut(9000).css('zIndex', '60', function() {

});
$('.rootSec2').delay(3000).fadeIn(3000, function(){
  $('.rootSec2').css('display', 'flex');
  $('.sec2text').delay(100).fadeIn(1000);

})

})
