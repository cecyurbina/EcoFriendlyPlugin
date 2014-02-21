var content = ''; //html in panel
var sidebar; //panel with ecofriendly information
var product_selected = 'div.carR2'; // get product in soriana site
var image; //get the product image

$(product_selected).mouseover(function() {
  content = $(this).find("font").first().text();
  image = $(this).find("a").first().find("img").get(0).outerHTML;
  console.log(image);
  render_panel();
});

$(product_selected).mouseout(function() {
  console.log("debug");
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
  sidebar = $("<div id='eco' class='panel panel-success'><div class='panel-heading'><h4>Asistente de compras verdes</h4></div>"+
	      "<div class='panel-body bg-success'>"+
	      "<h5>"+content+"</h5>"+
	      image+
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
