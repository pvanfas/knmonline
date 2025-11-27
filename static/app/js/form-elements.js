$(function() {
	'use strict'

	// Toggles
	$('.toggle').toggles({
		on: true,
		height: 26
	});
	// Input Masks
	$('#dateMask').mask('99/99/9999');
	$('#phoneMask').mask('(999) 999-9999');
	$('#ssnMask').mask('999-99-9999');
	// Time Picker
	$('#tpBasic').timepicker();
	$('#tp2').timepicker({
		'scrollDefault': 'now'
	});
	$('#tp3').timepicker();
	$('#setTimeButton').on('click', function() {
		$('#tp3').timepicker('setTime', new Date());
	});
	// Color picker
	$('#colorpicker').spectrum({
		color: '#0061da'
	});
	$('#showAlpha').spectrum({
		color: 'rgba(0, 97, 218, 0.5)',
		showAlpha: true
	});
	$('#showPaletteOnly').spectrum({
		color: '#7512e9',
		showAlpha: true
	});
});
$(function(){
   'use strict'
   // Datepicker
   $('.fc-datepicker').datepicker({
	 showOtherMonths: true,
	 selectOtherMonths: true
   });

   $('#datepickerNoOfMonths').datepicker({
	 showOtherMonths: true,
	 selectOtherMonths: true,
	 numberOfMonths: 2
   });


   // Date picker
	$('#datepicker-date').bootstrapdatepicker({
		format: "dd-mm-yyyy",
		viewMode: "date",
		multidate: true,
		multidateSeparator: "-",
	})

	// Month picker
	$('#datepicker-month').bootstrapdatepicker({
		format: "MM",
		viewMode: "months",
		minViewMode: "months",
		multidate: true,
		multidateSeparator: "-",
	})

	// Year picker
	$('#datepicker-year').bootstrapdatepicker({
		format: "yyyy",
		viewMode: "year",
		minViewMode: "years",
		multidate: true,
		multidateSeparator: "-",
	})

 });