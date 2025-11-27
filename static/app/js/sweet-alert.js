$(function(){
   'use strict'

	// Message
	$("#but1").on("click", function(e){
		var message = $("#message").val();
		if(message == ""){
			message  = "New Notification from GManager";
		}
		swal(message);
	});

	// With message and title
	$("#but2").on("click", function(e){
		var message = $("#message").val();
		var title = $("#title").val();
		if(message == ""){
			message  = "New Notification from GManager";
		}
		if(title == ""){
			title = "Notifiaction Styles";
		}
		swal(title,message);
	});

	// Show image
	$("#but3").on("click", function(e){
		var message = $("#message").val();
		var title = $("#title").val();
		if(message == ""){
			message  = "New Notification from GManager";
		}
		if(title == ""){
			title = "Notifiaction Styles";
		}
		swal({
			title: title,
			text: message,
			icon: '../assets/images/brand/favicon.png'
		});
	});

	// Timer
	$("#but4").on("click", function(e){
		var message = $("#message").val();
		var title = $("#title").val();
		if(message == ""){
			message  = "New Notification from GManager";
		}
		if(title == ""){
			title = "Notifiaction Styles";
		}
		message += "(close after 2 seconds)";
		swal({
			title: title,
			text: message,
			timer: 2000,
			showConfirmButton: false
		});
	});

	//
	$("#click").on("click", function(e){
		var type = $("#type").val();
		swal({
			title: "Notifiaction Styles",
			text: "New Notification from GManager",
			type: type
		});
	});



	$("#click").on("click", function(e){
		swal('Congratulations!', 'Your message has been succesfully sent', 'success');
	});
	$("#click1").on("click", function(e){
		swal({
			title: "Some Risk File Is Founded",
			text: "Some Virus file is detected your system going to be in Risk",
			icon: "warning",
			type: "warning",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});
	$("#click2").on("click", function(e){
		swal({
			title: "Something Went Wrong",
			text: "Please fix the issue the issue file not loaded & items not found",
			icon: "error",
			type: "error",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});
	$("#click3").on("click", function(e){
		swal({
			title: "Notification Alert",
			text: "your getting some notification from mail please check it",
			icon: "info",
			type: "info",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});

	//______________
	$(".role").on("click", function(e){
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this file!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then((willDelete) => {
			if (willDelete) {
			swal({
				title: "Success",
				text: "Successfully Updated",
				icon: "success",
			});
			} else {
			swal("Your  file is safe!");
			}
		});
	});
});
