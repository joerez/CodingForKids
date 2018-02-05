/////////////////////////////////////////////////////////////////////////////
//

let person = ['1','2','3'];

for (i = 0; i >= person.length; i++);

$(document).ready(function()
{

//  $("#person").attr("src", "");




  $('.leave').click(function(){
      $('#person').removeClass('animated rollin');
      $('#person').addClass('animated hinge');
  });

  $('.enter').click(function(){
      $('#person').removeClass('animated hinge');
      $('#person').addClass('animated rollin');
  });

});
