$(function(e){
	'use strict';

	// Data Table
	$('#support-assignticketlist').DataTable({
		"order": [
			[ 0, "desc"]
		],
		order: [],
		columnDefs: [ 
			{ orderable: false, targets: [0, 4] } ,
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

 