$(function(e){
	'use strict';

    //________ Data Table
	$('#role-list').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [ 
			{ orderable: false, targets: [0] } 
		],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			
		}
	});
	
	//________ Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width:'100%'
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

 