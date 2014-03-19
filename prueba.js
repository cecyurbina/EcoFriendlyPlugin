var html = ('<a id="menu-toggle" href="#" class="btn btn-success btn-lg toggle"><span class="glyphicon glyphicon-leaf"></span></a>' +
	    '<div id="sidebar-wrapper">'+
            '<div class="sidebar-nav">'+
            ''+
	    '<div class="row title">'+
	    '<div class="col-md-9"><h4 class="center-title">Asistente de compras ecológicas</h4></div>'+
	    '<div class="col-md-3"><h4><a id="menu-close" href="#" class="pull-right toggle"><span class="glyphicon glyphicon-chevron-right white"></span></a></h4></div>'+
	    '</div>'+
	    ''+
            '</div>'+
	    '</div>');

if ($("#boot_css").length == 0){
  $('head').append('<link id="boot_css" rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">');
}
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

