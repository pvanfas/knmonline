$(function(e){
	'use strict';

	// DataTable
	var table = $('#hr-attendance').DataTable( {
		rowReorder: true,
		columnDefs: [
			{ orderable: true, className: 'reorder', targets: 0 },
			{ orderable: false, targets: '_all' }
		]
	} );
	

	// DataTable
	$('#emp-attendance').DataTable({
		"order": [[ 0, "asec" ]],
		order: [],
		columnDefs: [ { orderable: false, targets: [5, 6] } ],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			
		}
	});

	//Timepicker
	$('.timepicker').timepicker({
		showInputs: false,
	});
	
	// Datepicker
	$( ".fc-datepicker" ).datepicker({
		dateFormat: "dd MM yy",
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ]
	});
	$('.fc-datepicker').datepicker('setDate', 'today');

	//Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width: '100%'
	});
	
 });