$(function(e){
	'use strict';

    // Data Table
	$('#superadmin-list').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ 
			{ orderable: false, targets: [0, 4, 5] } 
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

 