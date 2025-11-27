$(function(e){
	'use strict';

    // Data Table
	$('#company-list').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ 
			{ orderable: false, targets: [0, 7, 8] } 
		],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			
		}
	});
	
	// Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity
	});

	// Datepicker
	$( '.fc-datepicker').datepicker({
		dateFormat: "dd M yy",
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
		zIndex: 999998,
	});
	

 });

 