$(document).foundation()

$('[data-toggle-dia]').click(function (ev) {
	const panel = $(this).data('toggleDia')	
	// console.log(panel)
	$('#lineup-tabs').foundation('selectTab', panel)
})


// Cerrar offcanvas cuando se hace click


const $offCanvas = $('#offCanvas')
$offCanvas.find('li').click(function (ev){
	$offCanvas.foundation('close')
})
