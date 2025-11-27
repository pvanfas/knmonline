$(function(e){
	'use strict';

	/*----- Overview ------*/
	var options = {
		series: [14, 8, 20, 18],
		chart: {
			height:310,
			type: 'donut',
		},
		dataLabels: {
			enabled: false
		},

		legend: {
			show: false,
		},
		 stroke: {
			show: true,
			width:0
		},
		plotOptions: {
		pie: {
			donut: {
				size: '85%',
				background: 'transparent',
				labels: {
					show: true,
					name: {
						show: true,
						fontSize: '29px',
						color:'#6c6f9a',
						offsetY: -10
					},
					value: {
						show: true,
						fontSize: '26px',
						color: undefined,
						offsetY: 16,
					},
					total: {
						show: true,
						showAlways: false,
						label: 'Total Leaves',
						fontSize: '22px',
						fontWeight: 600,
						color: '#373d3f',
						// formatter: function (w) {
						//   return w.globals.seriesTotals.reduce((a, b) => {
						// 	return a + b
						//   }, 0)
						// }
					  }

				}
			}
		}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false,
				}
			}
		}],
		labels: ["Casual Leaves","Sick Leaves", "Gifted Leaves", "Remaining Leaves"],
		colors: ['#7512e9', '#f7284a', '#fe7f00', '#01c353'],
	};
	var chart = new ApexCharts(document.querySelector("#leavesoverview"), options);
	chart.render();

	//Daterangepicker with Callback
	$('input[name="singledaterange"]').daterangepicker({
		singleDatePicker: true,
	});
	$('input[name="daterange"]').daterangepicker({
		opens: 'left'
	}, function(start, end, label) {
		console.log("A new date selection was made: " + start.format('MMMM D, YYYY') + ' to ' + end.format('MMMM D, YYYY'));
	});

	$('#daterange-categories').on('change', function() {
		$('.leave-content').hide();
		$('#' + $(this).val()).show();
	});

	// Select2 
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width:'100%'
	});

	//calendar
	$('.leave-calendar').pignoseCalendar();
 });