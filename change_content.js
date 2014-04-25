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

