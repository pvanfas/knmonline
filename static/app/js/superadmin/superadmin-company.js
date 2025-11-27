$(function(e){
	'use strict';

    // Data Table
	$('#company-list').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [
			{ orderable: false, targets: [0, 6] }
		],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',

		}
	});

	// Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width:'100%'
	});

	// Datepicker
	$( '.fc-datepicker').datepicker({
		dateFormat: "dd M yy",
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
		zIndex: 999998,
	});

	// Sidebar
	$(document).ready(function () {
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

