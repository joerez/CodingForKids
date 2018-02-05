/////////////////////////////////////////////////////////////////////////////
//

$(document).ready(function()
{
//$('.main').animate({ width: '80%'}), "slow";
//$('.title').delay(500).animate({ fontSize: '500%'});
//$('#subtitle').delay(600).animate({ fontSize: '200%'});
//$('#cover-photo').delay(700).animate({ width: '1080px'});


;
$(".headbox").addClass("animated pulse infinite");

$(".main").addClass("animated zoomIn");

$(".content").addClass("animated zoomIn")

$(".headerbt").hover(
    function () {
      $(this).addClass('animated shake infinite');
    },
    function () {
      $(this).removeClass("animated shake infinite");
    }
  );


//next animation for hover//

$(".portmation").hover(
    function () {
      $(this).addClass('animated pulse infinite');
    },
    function () {
      $(this).removeClass("animated pulse infinite");
    }
  );


$( function() {
    $( "#bluebox" ).draggable({ containment: "#panel1", scroll: false });
 

 

});
