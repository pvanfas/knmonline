

$(function(e){
	'use strict'

	// Datepicker
	$( ".fc-datepicker" ).datepicker({
		dateFormat: "dd M yy",
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ]
	});

	// Timepiocker
	$('#tpBasic').timepicker();

	// Countdonwtimer
	$("#clocktimer").countdowntimer({
		currentTime : true,
		size : "md",
		borderColor : "transparent",
		backgroundColor : "transparent",
		fontColor : "#313e6a",
		//timeZone : -1 //
	});

 });
function index2(){
	"use strict";

	// Chartjs (#sales-summary) 
	var myCanvas = document.getElementById("sales-summary");
	myCanvas.height="300";
    var myChart = new Chart( myCanvas, {
		type: 'bar',
		data: {
			labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri" ,"Sat"],
			datasets: [{
				barPercentage: 0.15,
				label: 'This Month',
				data: [27, 50, 28,50,18,30,22],
				backgroundColor: myVarVal,
				borderWidth: 2,
				hoverBackgroundColor: myVarVal,
				hoverBorderWidth: 0,
				borderColor: myVarVal,
				hoverBorderColor: myVarVal,
				borderDash: [5,2],
			}, {
				barPercentage: 0.15,
			    label: 'Last Month',
				data: [68, 57, 53,58,23,75,28 ],
				backgroundColor: '#fe7f00',
				borderWidth: 2,
				hoverBackgroundColor: '#fe7f00',
				hoverBorderWidth: 0,
				borderColor: '#fe7f00',
				hoverBorderColor: '#fe7f00',
			},{
				barPercentage: 0.15,
			    label: 'Last Month',
				data: [100, 78, 68,95,0,98, 58],
				backgroundColor: hexToRgba(myVarVal, 0.2),
				borderWidth: 2,
				hoverBackgroundColor:hexToRgba(myVarVal, 0.2),
				hoverBorderWidth: 0,
				borderColor: hexToRgba(myVarVal, 0.2),
				hoverBorderColor: hexToRgba(myVarVal, 0.2),
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
						stepSize: 25,
						suggestedMin: 0,
						suggestedMax: 100,
						fontColor: "#8492a6",
						userCallback: function(tick) {
							return tick.toString() + '%';
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
function index1(){
	"use strict";
	

	/*----- Employees ------*/
	var options = {
		series: [74, 35],
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
						label: 'Total',
						fontSize: '22px',
						fontWeight: 600,
						color: '#373d3f',
					  }

				}
			}
		}
		},
		responsive: [{
			options: {
				legend: {
					show: false,
				}
			}
		}],
		labels: ["Male","Female"],
		colors: [myVarVal, '#fe7f00'],
	};
	document.getElementById('employees').innerHTML = ''; 
	var chart = new ApexCharts(document.querySelector("#employees"), options);
	chart.render();

}
 
function index(){
	// LIne-Chart 
	var ctx = document.getElementById("chartLine").getContext('2d');
	var myChart = new Chart(ctx, {

		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
				label: 'Total BUdget',
				data: [100, 210, 180, 454, 454, 230, 230,656,656,350,350, 210, 410],
				borderWidth: 3,
				backgroundColor: 'transparent',
				borderColor: myVarVal,
				pointBackgroundColor: '#ffffff',
				pointRadius: 0,
				type: 'line',
			},
			{
				
				label: 'Total Employess',
				data: [200, 530, 110, 110, 480, 520, 780,435,475,738, 454, 454, 230,],
				borderWidth: 3,
				backgroundColor: 'transparent',
				borderColor: hexToRgba(myVarVal, 0.2),
				pointBackgroundColor: '#ffffff',
				pointRadius: 0,
				type: 'line',
				borderDash: [7,3],

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
						min: 0,
						max: 1050,
						stepSize: 150,
						fontColor: "#8492a6",
					},
				}],
				xAxes: [{
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
