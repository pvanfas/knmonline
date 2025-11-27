(function ($) {
	"use strict";

	//  Page Loading
	$(window).on("load", function (e) {
		$("#global-loader").fadeOut("slow");
	})

	//  Full screen
	$(document).on("click", ".fullscreen-button", function toggleFullScreen() {
		$('html').addClass('fullscreen-content');
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			}
		} else {
			$('html').removeClass('fullscreen-content');
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	})


	//  Cover Image
	$(".cover-image").each(function () {
		var attr = $(this).attr('data-bs-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});


	//  Horizonatl
	$(document).ready(function () {
		$("a[data-theme]").on('click', function () {
			$("head link#theme").attr("href", $(this).data("theme"));
			$(this).toggleClass('active').siblings().removeClass('active');
		});
		$("a[data-effect]").on('click', function () {
			$("head link#effect").attr("href", $(this).data("effect"));
			$(this).toggleClass('active').siblings().removeClass('active');
		});
	});

	//  Tooltip
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})



	//  POPOVER
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
	})


	//  MODAL
	// showing modal with effect
	$('.modal-effect').on('click', function (e) {
		e.preventDefault();
		var effect = $(this).attr('data-effect');
		$('#modaldemo8').addClass(effect);
	});

	// hide modal with effect
	$('#modaldemo8').on('hidden.bs.modal', function (e) {
		$(this).removeClass(function (index, className) {
			return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
		});
	});


	//  Back to top Button
	$(window).on("scroll", function (e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$("#back-to-top").on("click", function (e) {
		$("html, body").animate({
			scrollTop: 0
		}, 0);
		return false;
	});

	//  Chart-circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function () {
			let $this = $(this);

			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: '#e5e9f2',
				lineCap: 'round'
			});
		});
	}
	//  Chart-circle
	if ($('.chart-circle-primary').length) {
		$('.chart-circle-primary').each(function () {
			let $this = $(this);

			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: 'rgba(51, 102, 255, 0.4)',
				lineCap: 'round'
			});
		});
	}

	//  Chart-circle
	if ($('.chart-circle-secondary').length) {
		$('.chart-circle-secondary').each(function () {
			let $this = $(this);

			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: 'rgba(254, 127, 0, 0.4)',
				lineCap: 'round'
			});
		});
	}

	//  Chart-circle
	if ($('.chart-circle-success').length) {
		$('.chart-circle-success').each(function () {
			let $this = $(this);

			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: 'rgba(13, 205, 148, 0.5)',
				lineCap: 'round'
			});
		});
	}

	//  Chart-circle
	if ($('.chart-circle-warning').length) {
		$('.chart-circle-warning').each(function () {
			let $this = $(this);

			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: 'rgba(247, 40, 74, 0.4)',
				lineCap: 'round'
			});
		});
	}

	//  Chart-circle
	if ($('.chart-circle-danger').length) {
		$('.chart-circle-danger').each(function () {
			let $this = $(this);

			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: 'rgba(247, 40, 74, 0.4)',
				lineCap: 'round'
			});
		});
	}

	//  Global Search
	$(document).on("click", "[data-bs-toggle='search']", function (e) {
		var body = $("body");

		if (body.hasClass('search-gone')) {
			body.addClass('search-gone');
			body.removeClass('search-show');
		} else {
			body.removeClass('search-gone');
			body.addClass('search-show');
		}
	});
	var toggleSidebar = function () {
		var w = $(window);
		if (w.outerWidth() <= 1024) {
			$("body").addClass("sidebar-gone");
			$(document).off("click", "body").on("click", "body", function (e) {
				if ($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
					$("body").removeClass("sidebar-show");
					$("body").addClass("sidebar-gone");
					$("body").removeClass("search-show");
				}
			});
		} else {
			$("body").removeClass("sidebar-gone");
		}
	}
	toggleSidebar();
	$(window).resize(toggleSidebar);

	const DIV_CARD = 'div.card';

	//  Function for remove card
	$(document).on('click', '[data-bs-toggle="card-remove"]', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});
	//  Functions for collapsed card
	$(document).on('click', '[data-bs-toggle="card-collapse"]', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	//  Card full screen
	$(document).on('click', '[data-bs-toggle="card-fullscreen"]', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// Input file-browser
	$(document).on('change', '.file-browserinput', function () {
		var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});// We can watch for our custom `fileselect` event like this

	// File Upload
	$('.file-browserinput').on('fileselect', function (event, numFiles, label) {
		var input = $(this).parents('.input-group').find(':text'),
			log = numFiles > 1 ? numFiles + ' files selected' : label;
		if (input.length) {
			input.val(log);
		} else {
			if (log);
		}
	});

	// Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width: '100%',
		allowClear: true
	});

	//  Product carosuel
	$('.thumb').on('click', function () {
		if (!$(this).hasClass('active')) {
			$(".thumb.active").removeClass("active");
			$(this).addClass("active");
		}
	});

	$(document).ready(function () {
		$("#Password-toggle a").on('click', function (event) {
			event.preventDefault();
			if ($('#Password-toggle input').attr("type") == "text") {
				$('#Password-toggle input').attr('type', 'password');
				$('#Password-toggle i').addClass("fe-eye-off");
				$('#Password-toggle i').removeClass("fe-eye");
			} else if ($('#Password-toggle input').attr("type") == "password") {
				$('#Password-toggle input').attr('type', 'text');
				$('#Password-toggle i').removeClass("fe-eye-off");
				$('#Password-toggle i').addClass("fe-eye");
			}
		});

		$("#Password-toggle1 a").on('click', function (event) {
			event.preventDefault();
			if ($('#Password-toggle1 input').attr("type") == "text") {
				$('#Password-toggle1 input').attr('type', 'password');
				$('#Password-toggle1 i').addClass("fe-eye-off");
				$('#Password-toggle1 i').removeClass("fe-eye");
			} else if ($('#Password-toggle1 input').attr("type") == "password") {
				$('#Password-toggle1 input').attr('type', 'text');
				$('#Password-toggle1 i').removeClass("fe-eye-off");
				$('#Password-toggle1 i').addClass("fe-eye");
			}
		});

		$("#Password-toggle2 a").on('click', function (event) {
			event.preventDefault();
			if ($('#Password-toggle2 input').attr("type") == "text") {
				$('#Password-toggle2 input').attr('type', 'password');
				$('#Password-toggle2 i').addClass("fe-eye-off");
				$('#Password-toggle2 i').removeClass("fe-eye");
			} else if ($('#Password-toggle2 input').attr("type") == "password") {
				$('#Password-toggle2 input').attr('type', 'text');
				$('#Password-toggle2 i').removeClass("fe-eye-off");
				$('#Password-toggle2 i').addClass("fe-eye");
			}
		});
	});

})(jQuery);


$('.layout-setting').on("click", function(e) {
	if (!(document.querySelector('body').classList.contains('dark-mode'))) {
		$('body').addClass('dark-mode');
		$('body').removeClass('light-mode');
		$('body').removeClass('transparent-mode');

		localStorage.setItem('darkMode', true);
		localStorage.removeItem('lightMode');
		localStorage.removeItem('transparentMode');
	} else {
		$('body').removeClass('dark-mode');
		$('body').addClass('light-mode');

		localStorage.setItem('lightMode', true);
		localStorage.removeItem('transparentMode');
		localStorage.removeItem('darkMode');
	}
});


// Success Notification
function not1() {
	notif({
		msg: "<b><i class='fa fa-check fs-20 me-2'></i></b> Well done Details Submitted Successfully",
		type: "success"
	});
}


	//______Switcher

	/*Theme-layout*/

	// $('body').addClass('light-mode');
	// $('body').addClass('dark-mode');
    // $('body').addClass('transparent-mode');


	// Sidemenu layout Styles //

	// ***** Default menu *****//
	// $('body').addClass('default-menu');


	// ***** closed menu *****//
    // $('body').addClass('closed');
	// $('body').addClass('sidenav-toggled');


	// // ***** Hover submenu *****//
	//  $('body').addClass('hover-submenu');
	//  $('body').addClass('sidenav-toggled');
	// if(document.querySelector('.hover-submenu').firstElementChild.classList.contains('responsive-log') !== true){
	// hovermenu();
	// }

	// ***** Hover submenu1 *****//
	// $('body').addClass('hover-submenu1');
	// $('body').addClass('sidenav-toggled');
	// if(document.querySelector('.hover-submenu1').firstElementChild.classList.contains('responsive-log') !== true){
	// hovermenu();
	// }

	// ***** Icon-overlay *****//
	// $('body').addClass('icon-overlay');
	// $('body').addClass('sidenav-toggled');

	// ***** Icon with Text *****//
	// $('body').addClass('icon-text');
	// $('body').addClass('sidenav-toggled');
	// if(document.querySelector('.icon-text').firstElementChild.classList.contains('responsive-log') !== true){
	// icontext();
	// }

	/*Header Style*/

	// $('body').addClass('light-header');
	// $('body').addClass('color-header');
	// $('body').addClass('dark-header');
	// $('body').addClass('gradient-header');

	/*Leftmenu Style*/

	// $('body').addClass('light-menu');
    // $('body').addClass('color-menu');
	// $('body').addClass('dark-menu');
	// $('body').addClass('gradient-menu');

	/******* RTL VERSION *******/

//    $('body').addClass('rtl');

	/*Boxed Layout Start*/
	// $('body').addClass('boxed');


// ***** Horizontal Menu ***** //

// $('body').addClass('horizontal');

	let bodyhorizontal = $('body').hasClass('horizontal');
	if (bodyhorizontal) {
		$('body').addClass('horizontal');
		$(".main-content").addClass("hor-content");
		$(".main-content").removeClass("app-content");
		$(".main-container").addClass("container");
		$(".main-container").removeClass("container-fluid");
		$(".app-sidebar3").addClass("horizontal-mainwrapper container");
		$(".angle").addClass("horizontal-icon");
		$(".main-menu").addClass("horizontalMenu");
		$(".main-container").removeClass("side-app");
		$(".app-header").addClass("hor-header");
		$(".hor-header").removeClass("app-header");
		$(".app-sidebar").addClass("horizontal-main");
		$(".app-sidebar").addClass("hor-menu ");
		$(".main-sidemenu").addClass("container");
		$('body').removeClass('sidebar-mini');
		$('body').removeClass('sidenav-toggled');
		$('body').removeClass('horizontal-hover');
		$('body').removeClass('default-menu');
		$('body').removeClass('icon-text');
		$('body').removeClass('icon-overlay');
		$('body').removeClass('closed');
		$('body').removeClass('hover-submenu');
		$('body').removeClass('hover-submenu1');
		$('#slide-left').removeClass('d-none');
		$('#slide-right').removeClass('d-none');
		if (document.querySelector('.horizontal').firstElementChild.classList.contains('login-img') !== true) {
			document.querySelector('.horizontal .side-menu').style.flexWrap = 'nowrap'
			responsive();
		}
		let li = document.querySelectorAll('.side-menu li')
				li.forEach((e, i) => {
					e.classList.remove('is-expanded')
				})
				var animationSpeed = 300;
				// first level
				var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
				var ul = parent.find('ul:visible').slideUp(animationSpeed);
				ul.removeClass('open');
				var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
				var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
				ul1.removeClass('open');

				var sub = $(".sub-slide-menu.open");
				sub.slideUp(animationSpeed);
				sub.removeClass('open')
				var sub2 = $(".sub-slide-menu2.open");
				sub2.slideUp(animationSpeed);
				sub2.removeClass('open')
	} else {
	}

// ***** Horizontal Hover Menu ***** //

// $('body').addClass('horizontal-hover');

$(document).ready (function(){

    let bodyhorizontalHover = $('body').hasClass('horizontal-hover');
    if (bodyhorizontalHover) {
		ActiveSubmenu();
		$('body').addClass('horizontal-hover');
			$('body').addClass('horizontal');
			$(".main-content").addClass("hor-content");
			$(".main-content").removeClass("app-content");
			$(".main-container").addClass("container");
			$(".main-container").removeClass("container-fluid");
			$(".app-sidebar3").addClass("horizontal-mainwrapper container");
			$(".angle").addClass("horizontal-icon");
			$(".main-menu").addClass("horizontalMenu");
			$(".main-container").removeClass("side-app");
			$(".app-header").addClass("hor-header");
			$(".hor-header").removeClass("app-header");
			$(".app-sidebar").addClass("horizontal-main");
			$(".app-sidebar").addClass("hor-menu ");
			$(".main-sidemenu").addClass("container");
			$('body').removeClass('sidebar-mini');
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('default-menu');
			$('body').removeClass('icon-text');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			// $('#slide-left').addClass('d-none');
			// $('#slide-right').addClass('d-none');
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			if (document.querySelector('.horizontal-hover').firstElementChild.classList.contains('login-img') !== true) {
				document.querySelector('.horizontal-hover .side-menu').style.flexWrap = 'nowrap'
				HorizontalHovermenu();
				checkHoriMenu();
				responsive();
			}

		} else {
		}

});

/******* Transparent Bg-Image Style *******/

// Bg-Image1 Style
// $('body').addClass('bg-img1');
// $('body').addClass('transparent-mode');

// Bg-Image2 Style
// $('body').addClass('bg-img2');
// $('body').addClass('transparent-mode');

// Bg-Image3 Style
// $('body').addClass('bg-img3');
// $('body').addClass('transparent-mode');

// Bg-Image4 Style
// $('body').addClass('bg-img4');
// $('body').addClass('transparent-mode');
