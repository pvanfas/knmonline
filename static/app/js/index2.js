

function chartbar(){
	'use strict';

	// Bar-Chart 
	var ctx = document.getElementById("chartbar").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
				barPercentage: .8,
				categoryPercentage: 0.38,
				label: 'TOTAL BUDGET',
				data: [27,17,19,23,17,19,23,17,13,28,22,27],
				borderWidth: 0,
				backgroundColor:hexToRgba(myVarVal, 0.2),
				borderColor: hexToRgba(myVarVal, 0.2),
				pointBackgroundColor: '#ffffff',
			},
			{
				label: 'AMOUNT USED',
				barPercentage: .8,
				categoryPercentage: 0.38,
				data: [28,22,21,18,13,22,24,18,16,21,18,24],
				borderWidth: 0,
				backgroundColor:myVarVal ,
				borderColor: myVarVal,
				pointBackgroundColor: myVarVal,

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
						min: 5,
						stepSize: 5,
						max: 30,
						fontColor: "#8492a6",
						fontFamily: 'Poppins',
					},
				}],
				xAxes: [{
					barValueSpacing :-2,
					barDatasetSpacing : 0,
					barRadius: 15,
					stacked: false,
					ticks: {
						beginAtZero: true,
						fontColor: "#8492a6",
						fontFamily: 'Poppins',
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


};

$(function(e){
	'use strict';

	// calendar
    $('.calendar').pignoseCalendar();


	// Datepicker
	$( ".fc-datepicker" ).datepicker({
		dateFormat: "dd M yy",
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ]
	});

	// Select2 
	$('.select2').select2({
		minimumResultsForSearch: Infinity
	});

 });