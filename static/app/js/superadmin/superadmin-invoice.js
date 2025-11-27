$(function(e){
	'use strict';

    // Data Table
	$('#invoice-list').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ 
			{ orderable: false, targets: [0, 8, 9] } 
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

 });

 