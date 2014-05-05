function sidebar_content(content, image_src) {
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
