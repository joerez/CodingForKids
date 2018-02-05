


$(document).ready(function()
{

//  var image = document.getElementById("#searchBar").value;
  var image = $('#searchBar').val();


$('#searchSubmit').click(function(){

  $('#ImageFromSearch').attr('src', $('#searchBar').val());
  console.log(image)

})

});
