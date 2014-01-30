var content = '';
$('div.s9hl').mouseover(function() {
  console.log("mimi");
  content = $(this).find('a').attr("title");
  console.log(content);
  render_panel();
});


$('div.s9hl').mouseout(function() {
  console.log("sisi");
});


if($('#eco').length!==0){
  $('#eco').remove();
  $('body').css({
    'padding-right': '0px'
  });
}
else {
  render_panel();
}


function render_panel() {
  $('#eco').remove();
  console.log("hola");
  var sidebar;
  sidebar = $("<div id='eco' class='panel panel-success'><div class='panel-heading'>EcoFriendly</div>"+
	      "<div class='panel-body'>"+
	      "<h4>"+content+"</h4></br>"+
	      "<table class='table'>"+
	      "<tr>"+
	      "<td class='active'>Reciclable</td>"+
	      "<td class='success'>Reutilizable</td>"+
	      "<td class='danger'>Biodegradable</td>"+
	      "</tr>"+
	      "</table>"+
	      "</div>"+
	      "<div id='sidebar'></div></div>");
  sidebar.css({
    'position': 'fixed',
    'right': '0px',
    'top': '0px',
    'z-index': 9999,
    'width': '25%',
    'height': '100%',
  });
  
  $('body').append(sidebar);
  

}
