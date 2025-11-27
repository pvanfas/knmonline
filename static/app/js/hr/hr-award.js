$(function(e){
	'use strict';

	//Data Table
	$('#hr-award').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ { orderable: false, targets: [0, 7, 9] } ],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			
		}
	});
	
	// Daterangepicker with Callback
	$('input[name="singledaterange"]').daterangepicker({
		singleDatePicker: true,
	});
	
	//Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity
	});

 });