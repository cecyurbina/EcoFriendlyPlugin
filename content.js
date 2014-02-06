$('div.carR2').attr("data-toggle", "popover");

$('div.carR2').mouseover(function() {
  content = $(this).find("font").first().text();;
  content = content + '<br><br><span class="label label-danger">Reciclable</span>';
  content = content + '<span class="label label-success">Reutilizable</span>';
  content = content + '<span class="label label-danger">Biodegradable</span>';
  $(this).popover({
    trigger: 'hover', 
    placement : 'top',
    html: true,
    title : 'Información ecológica',
    content : content
  });
  
  $(this).css('border','1px solid #f3f3f3');
});


$('div.carR2').mouseout(function() {
  $(this).css('border','0px solid #f3f3f3');
});
