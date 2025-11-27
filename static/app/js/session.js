$(function() {
	'use strict'

	
	//  Modal
	$("#myModal").modal('show');
	setTimeout(function(e) {
		$('#myModal').modal('hide');
	}, 20000);
	
	setInterval(function () {
          var progress = document.getElementById('custom-bar');
          if (progress.value < progress.max) {
              progress.value += 2;
          }
    }, 1000);
});