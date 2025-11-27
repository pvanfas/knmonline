$(function(e){
	'use strict';

	/* Data Table */
	$('#emp-attendance').DataTable({
		"order": [[ 0, "desc" ]],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',

		}
	});
	/* End Data Table */

	//________ Datepicker
	$( ".fc-datepicker" ).datepicker({
		dateFormat: "dd M yy",
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ]
	});

	//________ Countdonwtimer
	$("#clocktimer").countdowntimer({
		currentTime : true,
		size : "md",
		borderColor : "transparent",
		backgroundColor : "transparent",
		fontColor : "#313e6a",
		// timeZone : "+1"
	});

	//________ Countdonwtimer
	$("#clocktimer2").countdowntimer({
		currentTime : true,
		size : "md",
		borderColor : "transparent",
		backgroundColor : "transparent",
		fontColor : "#313e6a",
		// timeZone : "+1"
	});

	//________ Datepicker
	$('.fc-datepicker').datepicker('setDate', 'today');

	/* Select2 */
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width:'100%'
	});

 });