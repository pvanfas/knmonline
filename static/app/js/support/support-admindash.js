function overview(){
	'use strict';

	// Ticketstatistics
	var options = {
		series: [64, 45],
		chart: {
			height:260,
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
						label: 'Total Tickets',
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
		labels: ["New Tickets", "Closed Tickets"],
		colors: [myVarVal, '#fe7f00'],
	};
	document.getElementById('overview').innerHTML = ''; 
	var chart = new ApexCharts(document.querySelector("#overview"), options);
	chart.render();

}


(function(){
	//________ Data Table
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

	//________ Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width:'100%'
	});
	
})()



