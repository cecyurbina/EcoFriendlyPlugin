//BOOTSTRAP CSS ADDED
if ($("#boot_css").length == 0){
  $('head').append('<link id="boot_css" rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">');
}
change_buttons();

//SORIANA SITE EVENTS
var product_selected = 'div.carR2'; // get product in soriana site
var image_src; //get the product image
$(product_selected).mouseover(function() {
    content = $(this).find("font").first().text();
    precio = $(this).find("font:eq(1)").text();
    dictionaries(content);
    image_src = $($(this).find("a").first().find("img").get(0).outerHTML).attr('src');
    $.get( "http://localhost:8080/?product="+content, function( data ) {
	sidebar_content(content, image_src, data.califecol);
	if(!$("#sidebar-wrapper").hasClass("active")){
	    $("#sidebar-wrapper").addClass("active");
	}

	$("#sidebar-wrapper").show();

    });  
});
$(product_selected).mouseout(function() {
  console.log("debug");
});


//HEB SITE EVENTS
$('.seccion-principal:eq(3) table:eq(0)').width('85%');
$(".tabla-cien-porciento tr").mouseover(function() {
  var marca = $(this).find("td").eq(1);
  marca = marca.find("div").eq(0).html();
  var image_src = $($(this).find("td").eq(0).find("a").first().find("img").get(0).outerHTML).attr('src');
  var product = $(this).find("td").eq(1);
  product = product.find("div").eq(1).html();
  sidebar_content(marca +" "+product, image_src);
});

function random_val(){
  return Math.floor(Math.random()*(100-1+1)+1);
}


//change buttons
function change_buttons(){
    var $eles = $('div[id^="botoncc"]')
    $eles.each(function() {
	$(this).replaceWith("<button type='button' class='btn btn-success comprar'>Comprar</button>");
    });
}

//sidebar
var html = ('<a id="menu-toggle" href="#" class="btn btn-success btn-lg toggle"><span class="glyphicon glyphicon-leaf white"></span></a>' +
	    '<div id="sidebar-wrapper">'+
            '<div class="sidebar-nav">'+
	    '<div class="row title">'+
	    '<div class="col-xs-9 col-md-9"><h4 class="center-title"><b>Asistente de compras ecológicas</b></h4></div>'+
	    '<div class="col-xs-3 col-md-3"><h4><a id="menu-close" href="#" class="pull-right toggle"><span class="glyphicon glyphicon-chevron-right green"></span></a></h4></div>'+
	    '</div>'+
	    '<div id="eco-info">'+
	    '</div>'+
            '</div>'+
	    '</div>');

if ($("#menu-toggle").length == 0){
  $('body').prepend(html);
}

$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
  $("#sidebar-wrapper").show();
});
//end sidebar


function sidebar_content(content, image_src, calif) {
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

  table_html = (
    '<br><div class="row">'+
      '<div class="col-xs-12 col-md-12">'+
      '<h4 class="subtitle"><b>Calificación ambiental</b>&nbsp;<span class="glyphicon glyphicon-globe"></span><br><small>Escala del 1 al 10 (El más ecológico tiene un 10)</small></h4>'+
      '</div>'+
      '</div>'
  );

  html_info = ('<br><div class="row"><div class="col-xs-7 col-md-7 text-center product-name">'+content+'</div>'+
	       '<div class="col-md-5  col-xs-5">'+
	       '<img src="'+image_src+'" class="small img-rounded">'+
	       '</div>'+
	       '</div>'+
	       table_html);
    html_info = html_info + '<div class="row">'+
	'<div class="col-xs-12 col-md-12"><div id="circle" class="centered"><b>'+calif+'</b></div></div></div>';
    html_info = html_info + '<div class="col-xs-12 col-md-12">Factores tomados en cuenta:</div></div>';
    ///////////////////
    html_info = html_info + '<div class="col-xs-12 col-md-12"><span class="glyphicon glyphicon-road"></span>&nbsp;Gastos de transportación&nbsp;'
    temp = calif
    html_info = asig_calif(html_info)
    html_info = html_info + '</div></div>'
    //////////////////
    html_info = html_info + '<div class="col-xs-12 col-md-12"><span class="glyphicon glyphicon-flash"></span>&nbsp;Ahorro de energía'
    html_info = asig_calif(html_info)
    html_info = html_info + '</div></div>'
    ///////////////////
    html_info = html_info + '<div class="col-xs-12 col-md-12"><span class="glyphicon glyphicon-tint"></span>&nbsp;Ahorro de agua'
    html_info = asig_calif(html_info)
    html_info = html_info + '</div></div>'
    ///////////////////
    html_info = html_info + '<div class="col-xs-12 col-md-12"><span class="glyphicon glyphicon-heart"></span>&nbsp;Ayuda a la sociedad'
    html_info = asig_calif(html_info)
    html_info = html_info + '</div></div>'
    ///////////////////
    html_info = html_info +'<div class="col-xs-12 col-md-12"><span class="glyphicon glyphicon-refresh"></span>&nbsp;Es un producto reciclable'
    html_info = asig_calif(html_info)
    html_info = html_info + '</div></div>'
    /////////
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
  $(name_array).each(function(i, name) {

    $(type).each(function(j, t) {
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
}

$(".comprar").click(function(){
    var r = confirm("Comprar el producto "+content );
    if (r == true) {
        $.get( "http://localhost:8080/savep?product="+content+"&precio="+precio, function( data ) {
	});  
	$(this).replaceWith("<button type='button' class='btn btn-warning disabled'>Comprado</button>");
    }
});

function asig_calif(html_info){
    if (temp > 0) {
	if (temp == 1) {
	    temp = temp - 1
	    return html_info = html_info + '&nbsp;<span class="glyphicon glyphicon-minus-sign calif-neutra"></span>'
	}
	else {
	    temp = temp - 2
	    return html_info = html_info + '&nbsp;<span class="glyphicon glyphicon-ok-sign calif-ok"></span>'
	}
    }
    else {
	return html_info = html_info + '&nbsp;<span class="glyphicon glyphicon-remove-sign calif-no"></span>'
    }


}