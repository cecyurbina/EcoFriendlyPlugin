$('div.s9hl').attr("data-toggle", "popover");

$('div.s9hl').mouseover(function() {
  content = $(this).find('a').attr("title");
  content = content + '<br><br><span class="label label-danger">Reciclable</span>';
  content = content + '<span class="label label-success">Reutilizable</span>';
  content = content + '<span class="label label-danger">Biodegradable</span>'
  $(this).popover({
    trigger: 'hover', 
    placement : 'top',
    html: true,
    title : 'Información ecológica del producto',
    content : content
  });

    $(this).css('border','1px solid #f3f3f3');
});


$('div.s9hl').mouseout(function() {
  $(this).css('border','0px solid #f3f3f3');
});

var sidebar;
$('body').css({
    'padding-right': '350px'
});
sidebar = $("<div id='sidebar'></div>");
sidebar.css({
    'position': 'fixed',
    'right': '0px',
    'top': '0px',
    'z-index': 9999,
    'width': '290px',
    'height': '100%',
    'background-color': 'blue'  // Confirm it shows up
});
$('body').append(sidebar);