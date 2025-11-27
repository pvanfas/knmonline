
function statistics1(){
	"use strict";

	/*-----Statistics-----*/
	var myCanvas = document.getElementById("statistics1");

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 180, 0, 230);
	gradientStroke1.addColorStop(0, hexToRgba(myVarVal, 0.1));
	gradientStroke1.addColorStop(1, 'rgba(246, 247, 249, .05)');

	myCanvas.height="350";
    var myChart = new Chart( myCanvas, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
				label: 'Applications',
				data: [12.5, 17, 12.5, 15.5, 18, 14.5, 22, 11, 17.5, 15.5, 16, 12.5],
				backgroundColor: 'transparent',
				borderWidth: 3,
				borderColor: myVarVal,
				hoverBorderColor: myVarVal,
			},{
				label: 'Shortlisted',
				data: [9.5, 18, 11.2, 18, 14.5, 18, 11, 15.5, 13.5, 11.5, 13, 11],
				backgroundColor: 'transparent',
				borderWidth: 3,
				borderColor: hexToRgba(myVarVal, 0.5),
				hoverBorderColor: hexToRgba(myVarVal, 0.5),
				type: 'line',
				borderDash: [7,6],

			}, {

			    label: '',
				data: [17, 23, 18, 18.5, 14, 20.5, 18, 19, 22, 20, 18.5, 24],
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
						max: 25,
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
	/*-----Statistics-----*/
}

function overview(){
	"use strict";

	/*----- Advancedtask ------*/
	var options = {
		series: [64, 45, 28, 18],
		chart: {
			height:300,
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
						label: 'Total Overview',
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
		labels: ["Applications","Interviews", "Reject", "Hired"],
		colors: [ myVarVal, '#fe7f00', '#f7284a', '#27ad37'],
	};
	document.getElementById('overview').innerHTML = ''; 
	var chart = new ApexCharts(document.querySelector("#overview"), options);
	chart.render();

}
( function ( $ ) {
	"use strict";

	/* Data Table */
	$('#job-table').DataTable({
		order: [],
		columnDefs: [ { orderable: false, targets: [4] } ]
	});
	$('#job-table1').DataTable({
		order: [],
		columnDefs: [ { orderable: false, targets: [5] } ],
	});
	$('#job-table2').DataTable({
		order: [],
		columnDefs: [ { orderable: false, targets: [5] } ],
	});
	$('#job-table3').DataTable({
		order: [],
		columnDefs: [ { orderable: false, targets: [5] } ],
	});
	/* End Data Table */

	//______calendar
    $('.calendar').pignoseCalendar({
		disabledDates:[
			'2021-01-20'
		],
		format: 'YYY-MM-DD'
	});

})( jQuery );

