$(function(e){
	'use strict';
	
	// Data Table
	$('#job-list').DataTable({
		"order": [[ 3, "desc" ]],
		order: [],
		columnDefs: [ 
			{ orderable: false, targets: [7] },
			{ orderable: false, targets: [0] } 
		],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			
		}
	});
	
	// Datepicker
	$( '.fc-datepicker').datepicker({
		dateFormat: "dd M yy",
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
		zIndex: 999998,
	});
	

	// Select2 
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width:'100%'
	});
	
 });

 