$(function(e){
	'use strict';

	// Data Table 
	$('#hr-table').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ { orderable: false, targets: [0, 2] } ],
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