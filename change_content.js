if ($("#boot_css").length == 0){
  $('head').append('<link id="boot_css" rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">');
}



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
  sidebar = $("<div id='eco' class='panel panel-success'><div class='panel-heading'><h4><span class='glyphicon glyphicon-shopping-cart'></span> Asistente de compras verdes</h4></div>"+
	      "<div class='panel-body'>"+
	      "<h5>"+content+"</h5>"+
	      image+
	      "</br></br><table class='table'>"+
	      "<tr>"+
	      "<td class='active'><span class='glyphicon glyphicon glyphicon-refresh'></span>Reciclable</td>"+
	      "<td class='success'><span class='glyphicon glyphicon-repeat'></span>Reutilizable</td>"+
	      "<td class='danger'><span class='glyphicon glyphicon-leaf'></span>Biodegradable</td>"+
	      "</tr>"+
	      "</table>"+
	      "Certificados <span class='glyphicon glyphicon-certificate'></span>"+
	      "</div>"+
	      "<div id='sidebar'></div></div>");

  $('body').append(sidebar);
  $("#eco").toggleClass("hidebar");
  $("#eco").css({
    'position': 'fixed',
    'right': '0px',
    'top': '0px',
    'z-index': 9999,
    'width': '25%',
    'height': '100%',
    'transition': 'margin 3s ease'
  });
  $('#eco.hidebar').css({
    'margin-left': '75%',
    'width': '20%'
  });


}







