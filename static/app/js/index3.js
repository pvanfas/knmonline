function balance(){
	/*-----Balance Statistics-----*/
	var myCanvas = document.getElementById("balance");

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 180, 0, 280);
	gradientStroke1.addColorStop(0, hexToRgba(myVarVal, 0.1));
	gradientStroke1.addColorStop(1, 'rgba(246, 247, 249, .05)');

	myCanvas.height="380";
    var myChart = new Chart( myCanvas, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
				label: 'on going',
				data: [11, 13, 13, 20, 22, 25,  17, 23, 16, 16, 15, 17, 15],
				backgroundColor: 'transparent',
				borderWidth: 3,
				borderColor: myVarVal,
				hoverBorderColor: myVarVal,
			},{
				label: 'Completed',
				data: [10, 12, 12.2, 16, 18, 12, 17, 15.2, 20.2, 15, 14, 16],
				backgroundColor: 'transparent',
				borderWidth: 3,
				borderColor: '#fe7f00',
				hoverBorderColor: '#fe7f00',

			}, {

			    label: '',
				data: [13, 18, 12, 22, 18, 22, 17, 21, 20, 22, 24, 19],
				backgroundColor: gradientStroke1,
				borderWidth: 3,
				borderColor:hexToRgba(myVarVal, 0.1),
			}
		  ]
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
					},
				}],
				xAxes: [{
					ticks: {
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
	/*-----Balance Statistics-----*/
}
function advancedtask(){
	"use strict";

	/*----- Advancedtask ------*/
	var options = {
		series: [74, 35],
		chart: {
			height:280,
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
				size: '80%',
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
						formatter: function (val) {
							return val + "%"
						}
					},
					total: {
						show: true,
						showAlways: false,
						label: 'Total Tasks',
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
		labels: ["Completed","Running"],
		colors: [myVarVal, '#fe7f00'],
	};
	document.getElementById('advancedtask').innerHTML = ''
	var chart = new ApexCharts(document.querySelector("#advancedtask"), options);
	chart.render();
}

function spenttask(){
	"use strict";

	/* Chartjs (#spenttask) */
	var myCanvas = document.getElementById("spenttask");
	myCanvas.height="310";
    var myChart = new Chart( myCanvas, {
		type: 'bar',
		data: {
			labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri" ,"Sat"],
			datasets: [{
				barPercentage: 0.2,
				label: 'Work',
				data: [8, 6.5, 7, 8.2, 7, 7.8, 6.5],
				backgroundColor: myVarVal,
				borderWidth: 2,
				hoverBackgroundColor: myVarVal,
				hoverBorderWidth: 0,
				borderColor: myVarVal,
				hoverBorderColor: myVarVal,
				borderDash: [5,2],
			},{
			   	label: 'Working Hours',
			   	barPercentage: 0.2,
				data: [10, 10, 10, 10, 10, 10, 10],
				backgroundColor:hexToRgba(myVarVal, 0.5),
				borderWidth: 2,
				hoverBackgroundColor:hexToRgba(myVarVal, 0.5),
				hoverBorderWidth: 0,
				borderColor:hexToRgba(myVarVal, 0.5),
				hoverBorderColor:hexToRgba(myVarVal, 0.5),
			}
		  ]
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
						min: 0,
						max:10,
						stepSize: 2,
						fontColor: "#8492a6",
						userCallback: function(tick) {
							return tick.toString() + 'hrs';
						}
					},
				}],
				xAxes: [{
					barValueSpacing :0,
					barDatasetSpacing : 0,
					barRadius: 0,
					stacked: true,
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

}


( function ( $ ) {
	"use strict";
	/* Data Table */
	$('#tasktable').DataTable({
		"paging":   false,
		searching: false,
		"info": false
	});
	/* End Data Table */

	/* Select2 */
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width:'100%'
	});

	// Datepicker
	$( '[data-toggle="datepicker"]').datepicker({
		autoHide: true,
		zIndex: 999998,
	});

	// Datepicker
	$( '.fc-datepicker').datepicker({
		autoHide: true,
		zIndex: 999998,
	})

})( jQuery );

