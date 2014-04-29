console.log("hola");
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
  


///the other part

$('.seccion-principal:eq(3) table:eq(0)').width('85%');
//$('.tabla-cien-porciento').css('backgroundColor', 'yellow');



$(".tabla-cien-porciento tr").mouseover(function() {
  var marca = $(this).find("td").eq(1);
  marca = marca.find("div").eq(0).html();
  console.log(marca);

  var image_src = $($(this).find("td").eq(0).find("a").first().find("img").get(0).outerHTML).attr('src');
  console.log(image_src);

  var product = $(this).find("td").eq(1);
  product = product.find("div").eq(1).html();
  console.log(product);

  test(marca +" "+product, image_src);

});


function random_val()
{
    return Math.floor(Math.random()*(100-1+1)+1);
}




if ($("#boot_css").length == 0){
  $('head').append('<link id="boot_css" rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">');
}

//sidebar
var html = ('<a id="menu-toggle" href="#" class="btn btn-success btn-lg toggle"><span class="glyphicon glyphicon-leaf white"></span></a>' +
	    '<div id="sidebar-wrapper">'+
            '<div class="sidebar-nav">'+
	    '<div class="row title">'+
	    '<div class="col-xs-9 col-md-9"><h4 class="center-title">Asistente de compras ecológicas</h4></div>'+
	    '<div class="col-xs-3 col-md-3"><h4><a id="menu-close" href="#" class="pull-right toggle"><span class="glyphicon glyphicon-chevron-right white"></span></a></h4></div>'+
	    '</div>'+
	    '<div id="eco-info">'+
	    '</div>'+
            '</div>'+
	    '</div>');

if ($("#menu-toggle").length == 0){
  $('body').prepend(html);
}

$("#menu-close").click(function(e) {
  console.log("cierra");
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

$("#menu-toggle").click(function(e) {
  console.log("abre");
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
  $("#sidebar-wrapper").show();
});
//end sidebar


var product_selected = 'div.carR2'; // get product in soriana site
var image_src; //get the product image

$(product_selected).mouseover(function() {
  content = $(this).find("font").first().text();
  dictionaries(content);
  image_src = $($(this).find("a").first().find("img").get(0).outerHTML).attr('src');
  test(content, image_src);
});

$(product_selected).mouseout(function() {
  console.log("debug");
});

function test(content, image_src) {
  var image_html;
  var html_info = '';
  var product_title_html = '';
  var table_html = '';
  product_title_html = ('<div class="row"><div class="col-xs-12 col-md-12 text-center product-name">'+content+
			'</div></div>');
  image_html = ('<div class="row">'+
		'<div class="col-md-2 col-md-offset-2 col-xs-2 col-xs-offset-2">'+
		'<img src="'+image_src+'" class="small img-rounded">'+
		'</div>'+
		'</div>');

  table_html = ('<table class="table">'+
		'<thead>'+
		'<tr>'+
		'<th>Información <br>ambiental</th>'+
		'<th><h3><span class="glyphicon glyphicon-globe"></span></h3></th>'+
		'</tr>'+
		'</thead>'+
		'<tr>'+
		'<td>Energía<h4></h4></td>'+
		'<td><h4><span class="glyphicon glyphicon-flash"></span></h4></td>'+
		'</tr>'+
		'<tr>'+
		'<th>Agua</th>'+
		'<td><h4><span class="glyphicon glyphicon-tint"></span></h4></td>'+
		'</tr>'+
		'<tr>'+
		'<th>Social</th>'+
		'<td><h4><span class="glyphicon glyphicon-heart-empty"></span></h4></td>'+
		'</tr>'+
		'<tr>'+
		'<th>Recursos</th>'+
		'<td><h4><span class="glyphicon glyphicon-tree-deciduous"></span></h4></td>'+
		'</tr>'+
		'</table>');
  
  table_html = (
    '<br><div class="row">'+
      '<div class="col-xs-12 col-md-12">'+
      '<h4>Información ambiental <span class="glyphicon glyphicon-globe"></span></h4>'+
      '</div>'+
      '</div>'+
      '<div class="row">'+
      '<div class="col-xs-6 col-md-6">'+
      'Energía <span class="glyphicon glyphicon-flash"></span>'+
      '</div>'+
      '<div class="col-xs-6 col-md-6">'+
      '<div class="progress progress-striped active">'+
      '<div class="progress-bar"  role="progressbar" aria-valuenow="'+ random_val() +'" aria-valuemin="0" aria-valuemax="100" style="width: '+ random_val() +'%">'+
      '<span class="sr-only">45% Complete</span>'+
      '</div>'+
      '</div>'+
      '</div>'+
      '</div>'+

      '<div class="row">'+
      '<div class="col-xs-6 col-md-6">'+
      'Agua <span class="glyphicon glyphicon-tint"></span>'+
      '</div>'+
      '<div class="col-xs-6 col-md-6">'+
      '<div class="progress progress-striped active">'+
      '<div class="progress-bar"  role="progressbar" aria-valuenow="'+ random_val() +'" aria-valuemin="0" aria-valuemax="100" style="width: '+ random_val() +'%">'+
      '<span class="sr-only">45% Complete</span>'+
      '</div>'+
      '</div>'+
      '</div>'+
      '</div>'+


      '<div class="row">'+
      '<div class="col-xs-6 col-md-6">'+
      'Social <span class="glyphicon glyphicon-heart-empty"></span>'+
      '</div>'+
      '<div class="col-xs-6 col-md-6">'+
      '<div class="progress progress-striped active">'+
      '<div class="progress-bar"  role="progressbar" aria-valuenow="'+ random_val() +'" aria-valuemin="0" aria-valuemax="100" style="width: '+ random_val() +'%">'+
      '<span class="sr-only">45% Complete</span>'+
      '</div>'+
      '</div>'+
      '</div>'+
      '</div>'+

      '<div class="row">'+
      '<div class="col-xs-6 col-md-6">'+
      'Recursos <span class="glyphicon glyphicon-tree-deciduous"></span>'+
      '</div>'+
      '<div class="col-xs-6 col-md-6">'+
      '<div class="progress progress-striped active">'+
      '<div class="progress-bar"  role="progressbar" aria-valuenow="'+ random_val() +'" aria-valuemin="0" aria-valuemax="100" style="width: '+ random_val() +'%">'+
      '<span class="sr-only">45% Complete</span>'+
      '</div>'+
      '</div>'+
      '</div>'+
      '</div>'
  );

  html_info = ('<br><div class="row"><div class="col-xs-7 col-md-7 text-center product-name">'+content+'<br>'+ stars_generator()+'</div>'+
	       '<div class="col-md-5  col-xs-5">'+
	       '<img src="'+image_src+'" class="small img-rounded">'+
	       '</div>'+
	       '</div>'+
	       table_html);
  render_panel(html_info);

}

function render_panel(html_info) {
  $("#eco-info").html(html_info);
}

function dictionaries(string) {
  var trademark = ["Pam", "Capullo", "Oleico", " Valley Foods", "La gloria", "Cristal", "Zucaritas", ""];
  var type = ["aceite", "miel", "vino", "frijol", "arroz", "cereal"];
  var name_array = string.split(' ');
  var marca ;
  var tipo;
  console.log(name_array);
  $(name_array).each(function(i, name) {
    console.log(name);

    $(type).each(function(j, t) {
      console.log(t.search(name) != -1);
      if(t.search(name)) {
	tipo = t;
	return false;
      }
    });
    
    $(trademark).each(function(k, tm) {
      
      if(tm.search(name) != -1) {
	marca = tm;
	return false;
      }
    });

    
  });
  console.log("la marca es " + marca+ " y el tipo es "+tipo);
  
}

function stars_generator() {
  var stars = '';
  for (var i=0;i<5;i++){
    if (Math.round(Math.random())==1) {
      stars = stars + '<span class="glyphicon glyphicon-star"></span>'
    }
    else {
      stars = stars + '<span class="glyphicon glyphicon-star-empty"></span>'
    }
  }
  return stars;
}

