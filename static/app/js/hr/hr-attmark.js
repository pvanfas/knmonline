$(function(e){
	'use strict';

	// Data Table
	$('#hr-table').DataTable({
		columnDefs: [ { orderable: false, targets: [8] } ],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			
		}
	});
	
	//Datepicker
	$( ".fc-datepicker" ).datepicker({
		dateFormat: "dd MM yy",
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ]
	});
	$('.fc-datepicker').datepicker('setDate', 'today');

	
	//Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity
	});

	//Check all
	$('#checkAll').on('click', function() {
		if ($(this).is(':checked')) {
			$('input[type="checkbox"]').each(function() {
				$(this).closest('#hr-table').addClass('selected-check');
				$(this).attr('checked', true);
			});
		} else {
			$('input[type="checkbox"]').each(function() {
				$(this).closest('#hr-table').removeClass('selected-check');
				$(this).attr('checked', false);
			});
		}
	});

 });