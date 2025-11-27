( function () {
	"use strict";

	//________ Data Table
	$('#client-list').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ { orderable: false, targets: [5] } ],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',

		}
	});

	//________ Datepicker
	$( '.fc-datepicker').datepicker({
		dateFormat: "dd M yy",
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
		zIndex: 999998,
	});



})( jQuery );

