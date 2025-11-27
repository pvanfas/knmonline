$(function(e){
	'use strict';

	//LIne-Chart 
	var ctx = document.getElementById("chartLine").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
				label: 'Total Open Tickets',
				data: [20,17,27,23,17,19,23,17,13,28,22,27],
				borderWidth: 2,
				backgroundColor: '#2e3471',
				borderColor: '#2e3471',
				pointBackgroundColor: '#2e3471',
				pointRadius: 0,
				type: 'bar',
			},
			{

				label: 'Total Closed Tickets',
				data: [28,22,21,18,13,22,24,18,16,21,18,24],
				borderWidth: 3,
				backgroundColor: '#7512e9',
				borderColor: '#7512e9',
				pointBackgroundColor: '#7512e9',
				pointRadius: 0,
				type: 'bar',

			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}
			},
			tooltips: {
				enabled: false,
			},
			scales: {
				yAxes: [{
					gridLines: {
						display: true,
						drawBorder: false,
						zeroLineColor: 'rgba(142, 156, 173,0.1)',
						color: "rgba(142, 156, 173,0.1)",
					},
					scaleLabel: {
						display: false,
					},
					ticks: {
						beginAtZero: true,
						stepSize: 5,
						suggestedMin: 5,
						suggestedMax: 30,
						fontColor: "#8492a6",
					},
				}],
				xAxes: [{
					barValueSpacing :-2,
					barDatasetSpacing : 0,
					barRadius: 15,
					stacked: false,
					categoryPercentage: 0.4,
					barPercentage: 0.8,
					ticks: {
						beginAtZero: true,
						fontColor: "#8492a6",
					},
					gridLines: {
						color: "rgba(142, 156, 173,0.1)",
						display: false
					},

				}]
			},
			legend: {
				display: false
			},
			elements: {
				point: {
					radius: 0
				}
			}
		}
	});

	// Data Table
	$('#supportticket-dash').DataTable({
		"order": [[ 0, "desc" ]],
		order: [],
		columnDefs: [
			{ orderable: false, targets: [5] },
			{ orderable: false, targets: [0] }
		],
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',

		}
	});

	// Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity
	});

 });

