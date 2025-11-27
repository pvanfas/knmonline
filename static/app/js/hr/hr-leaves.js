$(function(e){
	'use strict';

	// Data Table
	$('#hr-leaves').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ { orderable: false, targets: [9] } ],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			
		}
	});

	// Data Table
	$('#hr-leavestypes').DataTable({
		"order": [[ 0, "desc" ]],
		"paging":   false,
		 searching: false,
		"info": false,
		"ordering": false
	});

	// Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity
	});

	
 });