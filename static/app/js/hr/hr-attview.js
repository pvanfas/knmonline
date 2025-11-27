$(function(e){
	'use strict';
	
	//DataTable
	var table = $('#hr-attendance1').DataTable( {
		rowReorder: true,
		columnDefs: [
			{ orderable: true, className: 'reorder', targets: [0,1] },
			{ orderable: false, targets: '_all' }
		]
	} );
	
	// Datepicker
	$( ".fc-datepicker" ).datepicker({
		dateFormat: "dd MM yy",
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
	});
	
	//Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width:'100%'
	});

 });