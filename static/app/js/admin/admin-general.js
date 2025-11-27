$(function(e){
	'use strict';

    // ______________Select2
    $('.select2-show-search').select2({
        minimumResultsForSearch: '',
        placeholder: "Search",
        width: '100%'
    });

    // ______________Color-Picker
	$('#colorpicker').spectrum({
		color: '#000'
	});
    $("#showAlpha").spectrum({
        showPalette: true,
        showSelectionPalette: true,
        showInput: true,
        preferredFormat: "hex",
        color:'#ff0000'
    });


    // ______________Auto Close
	$(document).on("click", '#autoclose', function () {    
		if (this.checked) {
			$('body').addClass('add-autoclose');
			localStorage.setItem("add-autoclose", "True");
		}
		else {
			$('body').removeClass('add-autoclose');
			localStorage.setItem("add-autoclose", "false");
		}
	});

    // ______________Paypal
	$(document).on("click", '#paypal', function () {    
		if (this.checked) {
			$('body').addClass('add-paypal');
			localStorage.setItem("add-paypal", "True");
		}
		else {
			$('body').removeClass('add-paypal');
			localStorage.setItem("add-paypal", "false");
		}
	});


     // ______________Old-Token
	$(document).on("click", '#old-token', function () {    
		if (this.checked) {
			$('body').toggleClass('add-oldtoken');
			localStorage.setItem("add-oldtoken", "True");
		}
		else {
			$('body').removeClass('add-oldtoken');
			localStorage.setItem("add-oldtoken", "false");
		}
	});
    $(document).on("click", '#per-token', function () {    
		if (this.checked) {
			$('body').removeClass('add-oldtoken');
			localStorage.setItem("add-oldtoken", "True");
		}
		else {
			$('body').removeClass('add-oldtoken');
			localStorage.setItem("add-oldtoken", "false");
		}
	});

 });

 