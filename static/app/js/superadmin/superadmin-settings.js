$(function(e){
	'use strict';

    // Select2
    $('.select2-show-search').select2({
        minimumResultsForSearch: '',
        placeholder: "Search",
        width: '100%'
    });

	// Email-SMTP
	$(document).on("click", '#email-smtp', function () {    
		if (this.checked) {
			$('body').toggleClass("add-smtpemail");
			localStorage.setItem("add-smtpemail", "True");
		}
		else {
			$('body').removeClass("add-smtpemail");
			localStorage.setItem("add-smtpemail", "false");
		}
	});
    $(document).on("click", '#email', function () {    
		if (this.checked) {
			$('body').removeClass("add-smtpemail");
			localStorage.setItem("add-smtpemail", "True");
		}
		else {
			$('body').removeClass("add-smtpemail");
			localStorage.setItem("add-smtpemail", "false");
		}
	});


	// Paypal
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

 });

 