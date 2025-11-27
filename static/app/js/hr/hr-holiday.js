$(function(e){ 
	'use strict'; 
 
	// Datepicker 
	$( '.fc-datepicker').datepicker({ 
		dateFormat: "dd MM yy", 
		zIndex: 1, 
	}); 
 
 
	// Datepicker 
	$( '[data-bs-toggle="modaldatepicker"]').datepicker({ 
		autoHide: true, 
		zIndex: 999998, 
	}); 
 
	// Data Table 
	$('#hr-holiday').DataTable({ 
		"order": [[ 0, "desc" ]], 
		order: [], 
		columnDefs: [ { orderable: false, targets: [4] } ], 
		language: { 
			searchPlaceholder: 'Search...', 
			sSearch: '', 
			 
		} 
	}); 
	 
 
	// Select2 
	$('.select2').select2({ 
		minimumResultsForSearch: Infinity, 
		width:'100%' 
	}); 
 
}); 
 
/*---- Full Calendar -----*/ 
document.addEventListener('DOMContentLoaded', function() { 
	var calendarEl = document.getElementById('calendar1'); 
	var calendar = new FullCalendar.Calendar(calendarEl, { 
	   headerToolbar: { 
		left: 'prev', 
		center: 'title', 
		right: 'next' 
	  }, 
	  navLinks: true, // can click day/week names to navigate views 
	  businessHours: true, // display business hours 
	  editable: true, 
	  selectable: true, 
	  selectMirror: true, 
	  droppable: true, // this allows things to be dropped onto the calendar 
	  drop: function(arg) { 
		// is the "remove after drop" checkbox checked? 
		if (document.getElementById('drop-remove').checked) { 
		  // if so, remove the element from the "Draggable Events" list 
		  arg.draggedEl.parentNode.removeChild(arg.draggedEl); 
		} 
	  }, 
	  select: function(arg) { 
		var title = prompt('Event Title:'); 
		if (title) { 
		  calendar.addEvent({ 
			title: title, 
			start: arg.start, 
			end: arg.end, 
			allDay: arg.allDay 
		  }) 
		} 
		calendar.unselect() 
	  }, 
	  eventClick: function(arg) { 
		if (confirm('Are you sure you want to delete this event?')) { 
		  arg.event.remove() 
		} 
	  }, 
	  editable: true, 
	  dayMaxEvents: true, // allow "more" link when too many events 
	  eventRender: function (event, element) { 
		 
		if ((event.description).toString() == "Halfday"){ 
			element.find(".fc-event-time").after($("<span class=\"fc-event-icons\"></span>").html("<i class='fe fe-view'></i> ")); 
		} 
	  }, 
	  events: [ 
		{ 
			title: 'Pongal', 
			start: '2021-01-14', 
			color:'rgba(255, 173, 0, 0.1)', 
		}, 
		{ 
			title: 'Republic', 
			start: '2021-01-26', 
			color:'rgba(255, 173, 0, 0.1)', 
		}, 
	  ] 
	}); 
	calendar.render(); 
});	