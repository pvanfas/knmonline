jQuery(function(e){
	'use strict'
			$('[data-bs-popover-color="head-primary"]').popover({
				template: '<div class="popover popover-head-primary" role="popover"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
			});
			$('[data-bs-popover-color="head-secondary"]').popover({
				template: '<div class="popover popover-head-secondary" role="popover"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
			});
			$('[data-bs-popover-color="primary"]').popover({
				template: '<div class="popover popover-primary" role="popover"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
			});
			$('[data-bs-popover-color="secondary"]').popover({
				template: '<div class="popover popover-secondary" role="popover"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
			});

			$(document).on('click', function (e) {
				$('[data-bs-toggle="popover"]').each(function () {
					//the 'is' for buttons that trigger popups
					//the 'has' for icons within a button that triggers a popup
					if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
						(($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  // fix for BS 3.3.6
					}
					console.log($(this));
				});
			});
			
		   
  });