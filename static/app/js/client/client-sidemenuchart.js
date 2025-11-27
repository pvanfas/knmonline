$(function(e){
	'use strict';

	//________Chart
	var ctx = document.getElementById( "sidemenuchart" );
	var myChart = new Chart( ctx, {
		type: 'line',
		data: {
			labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
			type: 'line',
			datasets: [ {
				data: [15, 18, 15, 19, 22, 19, 20],
				label: 'Desktops',
				backgroundColor: 'rgba(71, 84, 242, 0.8)',
				borderColor: '#fff',
				borderWidth: '2',
				pointBackgroundColor:'rgba(71, 84, 242, 0.8)',
				pointBorderWidth :2,
				pointRadius :0,
				pointHoverRadius :4,
				pointHoverBackgroundColor:'#7512e9',
			}
			]
		},
		options: {
			responsive: true,
       		 maintainAspectRatio: false,
			legend: {
				display: false
			},
			responsive: true,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#7886a0',
				bodyFontColor: '#7886a0',
				backgroundColor: '#fff',
				titleFontFamily: 'Montserrat',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 3,
				intersect: false,
				enabled: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [ {
					gridLines: {
						display:false,
						color: 'rgba(45, 53, 160, 0.3)',
						zeroLineColor: 'rgba(45, 53, 160, 0.3)',
					},
					ticks: {
						display: false,
					}
				} ],
				yAxes: [ {
					gridLines: {
						color: 'rgba(45, 53, 160, 0.3)',
						zeroLineColor: 'rgba(45, 53, 160, 0.3)',
						display:false,
					},
					ticks: {
						display: false,
						beginAtZero: true,
						stepSize: 10,
						max: 30,
						min:0

					}
				} ]
			},
			elements: {
				line: {
					borderWidth: 1,
				},
				point: {
					radius: 4,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	} );


 });