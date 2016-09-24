$(document).ready(function(){
	$('.list6').on('click', '.initial-button', function(e){
		e.preventDefault();
		$('.hidden-list').addClass('shown-list');
		$('.initial-button').addClass('secondary-button').removeClass('initial-button').text('Hide Full List');
		console.log ('itworked');
	});
	$('.list6').on('click', '.secondary-button', function(e){
		e.preventDefault();
		$('.hidden-list').removeClass('shown');
		$('.secondary-button').addClass('initial-button').removeClass('secondary-button').text('Full List of Services');
	});
});