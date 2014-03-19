var html = ('<a id="menu-toggle" href="#" class="btn btn-primary btn-lg toggle">otro</a>' +
	    '<div id="sidebar-wrapper">'+
            '<ul class="sidebar-nav">'+
            '<a id="menu-close" href="#" class="btn btn-default btn-lg pull-right toggle">algo</a>'+
            '<li class="sidebar-brand"><a href="http://startbootstrap.com">Start Bootstrap</a>'+
            '</li>'+
            '<li><a href="#top">Home</a>'+
            '</li>'+
            '<li><a href="#about">About</a>'+
            '</li>'+
            '<li><a href="#services">Services</a>'+
            '</li>'+
            '<li><a href="#portfolio">Portfolio</a>'+
            '</li>'+
            '<li><a href="#contact">Contact</a>'+
            '</li>'+
            '</ul>'+
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

