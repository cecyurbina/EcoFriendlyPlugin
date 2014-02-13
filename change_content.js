var content = '';


function render_panel() {
  $('#eco').remove();
  var sidebar;
  sidebar = $("<div id='eco' class='panel panel-success'><div class='panel-heading'><h4>Asistente de compras verdes</h4></div>"+
	      "<div class='panel-body bg-success'>"+
	      "<h5>"+content+"</h5>"+
	      im+
	      "</br></br><table class='table'>"+
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
