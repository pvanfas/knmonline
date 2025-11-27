$(function(e){
	'use strict';
	
	//________ Data tables
	$('#task-list').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ { orderable: false, targets: [7] } ],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',

		}
	});

	//________ Data tables
	$('#project-list').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ { orderable: false, targets: [7] } ],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',

		}
	});


	//________ Data tables
	$('#payment-tables').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ { orderable: false, targets: [5] } ],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',

		}
	});

	//________ Data tables
	$('#invoice-tables').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ { orderable: false, targets: [6] } ],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',

		}
	});

	//________ Data tables
	$('#ticket-tables').DataTable({
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


	/* Select2 */
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width:'100%'
	});

	//______Sidebar
	$(document).on("ready", function () {
		$('.dismiss').on('click', function () {
			$('.sidebar-modal').removeClass('active');
			$('body').removeClass('overlay-open');
		});
		$('.sidebarmodal-collpase').on('click', function () {
			$('.sidebar-modal').addClass('active');
			$('body').addClass('overlay-open');
		});
		$('body').append('<div class="overlay"></div>');
		$('.overlay').on('click touchstart', function() {
			$('body').removeClass('overlay-open');
			$('.sidebar-modal').removeClass('active');
		});
	});


 });