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
		width: '100%'
	});

	//  Product carosuel
	$('.thumb').on('click', function () {
		if (!$(this).hasClass('active')) {
			$(".thumb.active").removeClass("active");
			$(this).addClass("active");
		}
	});
	$('#myonoffswitch54').on('click', function () {
		if (this.checked) {
			$("#global-loader").fadeOut("slow");
			$('body').addClass('ltr');
			$('body').removeClass('rtl');
			$("html[lang=en]").attr("dir", "ltr");
			localStorage.setItem("ltr", "True");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.css"));
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = false; //don't know if both are necessary
				carouselData.options.rtl = false;
				$(element).trigger('refresh.owl.carousel');
			});
			localStorage.setItem('dayonertl', true)
			localStorage.removeItem('dayoneltr')
		} else {
			$('body').removeClass('ltr');
			$('body').addClass('rtl');
			$("html[lang=en]").attr("dir", "rtl");
			localStorage.setItem("ltr", "false");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.css"));
		}
	});



	// Header Style
	$('#background1').on('click', function () {
		if (this.checked) {
			$('body').addClass('light-header');
			$('body').removeClass('color-header');
			$('body').removeClass('dark-header');
			$('body').removeClass('gradient-header');
		} else {
			$('body').removeClass('light-header');
		}
	});

	$('#background2').on('click', function () {
		if (this.checked) {
			$('body').addClass('color-header');
			$('body').removeClass('light-header');
			$('body').removeClass('dark-header');
			$('body').removeClass('gradient-header');
		} else {
			$('body').removeClass('color-header');
		}
	});
	$('#background3').on('click', function () {
		if (this.checked) {
			$('body').addClass('dark-header');
			$('body').removeClass('light-header');
			$('body').removeClass('color-header');
			$('body').removeClass('gradient-header');
		} else {
			$('body').removeClass('dark-header');
		}
	});
	$('#background11').on('click', function () {
		if (this.checked) {
			$('body').addClass('gradient-header');
			$('body').removeClass('light-header');
			$('body').removeClass('color-header');
			$('body').removeClass('dark-header');
		} else {
			$('body').removeClass('gradient-header');
		}
	});


	// Leftmenu Style 
	$('#background4').on('click', function () {
		if (this.checked) {
			$('body').addClass('light-menu');
			$('body').removeClass('color-menu');
			$('body').removeClass('dark-menu');
			$('body').removeClass('gradient-menu');
			$('body').removeClass('light-hormenu');
			$('body').removeClass('dark-hormenu');
			$('body').removeClass('color-hormenu');
		} else {
			$('body').removeClass('light-menu');
		}
	});

	$('#background5').on('click', function () {
		if (this.checked) {
			$('body').addClass('color-menu');
			$('body').removeClass('light-menu');
			$('body').removeClass('dark-menu');
			$('body').removeClass('gradient-menu');
			$('body').removeClass('light-hormenu');
			$('body').removeClass('dark-hormenu');
			$('body').removeClass('color-hormenu');
		} else {
			$('body').removeClass('color-menu');
		}
	});


	$('#background6').on('click', function () {
		if (this.checked) {
			$('body').addClass('dark-menu');
			$('body').removeClass('light-menu');
			$('body').removeClass('color-menu');
			$('body').removeClass('gradient-menu');
			$('body').removeClass('light-hormenu');
			$('body').removeClass('dark-hormenu');
			$('body').removeClass('color-hormenu');
		} else {
			$('body').removeClass('dark-menu');
		}
	});

	$('#background10').on('click', function () {
		if (this.checked) {
			$('body').addClass('gradient-menu');
			$('body').removeClass('light-menu');
			$('body').removeClass('color-menu');
			$('body').removeClass('dark-menu');
			$('body').removeClass('light-hormenu');
			$('body').removeClass('gradient-hormenu');
			$('body').removeClass('color-hormenu');
		} else {
			$('body').removeClass('gradient-menu');
		}
	});

	// LTR AND 
	$('#myonoffswitch55').on('click', function () {
		if (this.checked) {
			$("#global-loader").fadeOut("slow");
			$('body').addClass('rtl');
			$('body').removeClass('ltr');
			$("html[lang=en]").attr("dir", "rtl");
			localStorage.setItem("dayonertl", "True");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.css"));
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = true; //don't know if both are necessary
				carouselData.options.rtl = true;
				$(element).trigger('refresh.owl.carousel');
			});
		} else {
			$('body').removeClass('rtl');
			$('body').addClass('ltr');
			$("html[lang=en]").attr("dir", "ltr");
			localStorage.setItem("dayonertl", "false");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.css"));
		}
	});

	// width styles
	$('#myonoffswitch18').on('click', function () {
		if (this.checked) {
			$('body').addClass('default');
			$('body').removeClass('boxed');
			localStorage.setItem("dayonedefault", "True");
		} else {
			$('body').removeClass('default');
			localStorage.setItem("dayonedefault", "false");
		}
	});
	$('#myonoffswitch19').on('click', function () {
		if (this.checked) {
			$('body').addClass('boxed');
			$('body').removeClass('default');
			localStorage.setItem("dayoneboxed", "True");
		} else {
			$('body').removeClass('boxed');
			localStorage.setItem("dayoneboxed", "false");
		}
	});

	// Theme-layout 
	$('#onoffswitch1').on('click', function () {
		if (this.checked) {
			$('body').addClass('light-mode');
			$('body').removeClass('gradient-hormenu');
			$('body').removeClass('dark-mode');
			$('body').removeClass('color-header');
			$('body').removeClass('dark-header');
			$('body').removeClass('dark-menu');
			$('body').removeClass('gradient-menu');
			$('body').removeClass('gradient-header');
			$('body').removeClass('color-menu');
			localStorage.setItem("dayonelight-mode", "True");
			$('#background1').prop('checked', true);
			$('#background3').prop('checked', false);
		} else {
			$('body').removeClass('light-mode');
			localStorage.setItem("dayonelight-mode", "false");
		}
	});

	$('#myonoffswitch2').on('click', function () {
		if (this.checked) {
			$('body').addClass('dark-mode');
			$('body').removeClass('light-mode');
			$('body').removeClass('light-menu');
			$('body').removeClass('color-menu');
			$('body').removeClass('dark-header');
			$('body').removeClass('color-header');
			$('body').removeClass('light-header');
			$('body').removeClass('dark-menu');
			$('body').removeClass('light-hormenu');
			$('body').removeClass('gradient-hormenu');
			$('body').removeClass('gradient-menu');
			localStorage.setItem("dayonedark-mode", "True");
			$('#background3').prop('checked', true);
			$('#background4').prop('checked', false);
			$('#background6').prop('checked', true);

		} else {
			$('body').removeClass('dark-mode');
			localStorage.setItem("dayonedark-mode", "false");
		}
	});

	/*********************Horizontal Versions********************/
	$('#myonoffswitch20').on('click', function () {
		if (this.checked) {
			$("#global-loader").fadeOut("slow");
			$('body').addClass('default-horizontal');
			$('body').removeClass('centerlogo-horizontal');
			localStorage.setItem("dayonedefault-horizontal", "True");
		} else {
			$('body').removeClass('default-horizontal');
			localStorage.setItem("dayonedefault-horizontal", "false");
		}
	});
	$('#myonoffswitch21').on('click', function () {
		if (this.checked) {
			$('body').addClass('centerlogo-horizontal');
			$('body').removeClass('default-horizontal');
			localStorage.setItem("dayonecenterlogo-horizontal", "True");
		} else {
			$('body').removeClass('centerlogo-horizontal');
			localStorage.setItem("dayonecenterlogo-horizontal", "false");
		}
	});

	/*********************Default-menu open********************/
	$('#myonoffswitch22').on('click', function () {
		if (this.checked) {
			$("#global-loader").fadeOut("slow");
			$('body').addClass('default-sidemenu');
			hovermenu();
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('closed');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('default-sidebar');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('icon-text');
		} else {
			$('body').removeClass('default-sidemenu');
		}
	});

	/*********************closed-menu open********************/

	$('#myonoffswitch23').on('click', function () {
		if (this.checked) {
			$("#global-loader").fadeOut("slow");
			$('body').addClass('closed');
			$('body').addClass('sidenav-toggled');
			hovermenu();
			$('body').removeClass('default-sidemenu');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('default-sidebar');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('icon-text');
		} else {
			$('body').removeClass('closed');
			$('body').removeClass('sidenav-toggled');
			$('body').addClass('default-sidemenu');
		}
	});

	/*********************hover-menu open********************/

	$('#myonoffswitch24').on('click', function () {
		if (this.checked) {
			$("#global-loader").fadeOut("slow");
			$('body').addClass('hover-submenu');
			hovermenu();
			$('body').addClass('sidenav-toggled');
			$('body').removeClass('default-sidemenu');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('default-sidebar');
			$('body').removeClass('closed');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('icon-text');
		} else {
			$('body').removeClass('hover-submenu');
			$('body').removeClass('sidenav-toggled');
			$('body').addClass('default-sidemenu');
		}
	});

	/*********************hover-menu-1 open********************/

	$('#myonoffswitch30').on('click', function () {
		if (this.checked) {
			$("#global-loader").fadeOut("slow");
			$('body').addClass('hover-submenu1');
			hovermenu();
			$('body').addClass('sidenav-toggled');
			$('body').removeClass('default-sidemenu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('default-sidebar');
			$('body').removeClass('closed');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('icon-text');
		} else {
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('sidenav-toggled');
			$('body').addClass('default-sidemenu');
		}
	});

	/*********************icon-overlay open********************/

	$('#myonoffswitch25').on('click', function () {
		if (this.checked) {
			$("#global-loader").fadeOut("slow");
			$('body').addClass('icon-overlay');
			hovermenu();
			$('body').addClass('sidenav-toggled');
			$('body').removeClass('default-sidemenu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('default-sidebar');
			$('body').removeClass('closed');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('icon-text');
		} else {
			$('body').removeClass('icon-overlay');
			$('body').removeClass('sidenav-toggled');
			$('body').addClass('default-sidemenu');
		}
	});

	/*********************icon-text open********************/

	$('#myonoffswitch29').on('click', function () {
		if (this.checked) {
			$("#global-loader").fadeOut("slow");
			$('body').addClass('icon-text');
			icontext();
			$('body').addClass('sidenav-toggled');
			$('body').removeClass('default-sidemenu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('default-sidebar');
			$('body').removeClass('closed');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('icon-overlay');
		} else {
			$('body').removeClass('icon-text');
			$('body').removeClass('sidenav-toggled');
			$('body').addClass('default-sidemenu');
		}
	});

	/*********************vertical-menu********************/

	$('#myonoffswitch34').on('click', function () {
		if (this.checked) {
			ActiveSubmenu();
			$('body').removeClass('horizontal');
			$('body').removeClass('horizontal-hover');
			$('body').addClass('default-menu');
			$('body').addClass('sidebar-mini');
			$('sidebar-mini').removeClass('hor-content');
			$('sidebar-mini').addClass('main-content"');
			$(".app-sidebar3").removeClass("horizontal-mainwrapper container");
			$(".main-content").removeClass("hor-content");
			$(".main-content").addClass("app-content");
			$(".main-container").removeClass("container");
			$(".main-container").addClass("container-fluid");
			$(".angle").removeClass("horizontal-icon");
			$(".main-menu").removeClass("horizontalMenu");
			$(".main-container").addClass("side-app");
			$(".header").removeClass("hor-header");
			$(".header").addClass("app-header");
			$(".app-sidebar").removeClass("horizontal-main");
			$(".main-sidemenu").removeClass("container");
			$(".app-sidebar").removeClass("hor-menu ");
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			localStorage.setItem("dayonesidebar-mini", "True");
			menuClick();
			responsive();
		} else {
			$('body').removeClass('sidebar-mini');
			localStorage.setItem("dayonesidebar-mini", "False");
		}
	});

	/*********************horizontal ********************/

	$('#myonoffswitch35').on('click', function () {
		if (this.checked) {
			ActiveSubmenu();
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
			localStorage.setItem("dayonehorizontal", "true");
			localStorage.removeItem("dayonesidebarMini");
			localStorage.removeItem("dayonehorizontalHover");
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			if (document.querySelector('.horizontal').firstElementChild.classList.contains('login-img') !== true) {
				document.querySelector('.horizontal .side-menu').style.flexWrap = 'nowrap'
			}
			menuClick();
			checkHoriMenu();
			responsive();
			
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
			$('body').removeClass('horizontal');
			localStorage.setItem("dayonehorizontal", "False");
		}
	});

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
		localStorage.setItem("dayonehorizontal", "true");
		localStorage.removeItem("dayonesidebarMini");
		localStorage.removeItem("dayonehorizontalHover");
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

	let darkMode = $('body').hasClass('dark-mode');
	if (darkMode) {
		$('body').addClass('dark-mode');
		$('#myonoffswitch1').prop('checked', false);
		$('#myonoffswitch2').prop('checked', true);
		$('#myonoffswitchTransparent').prop('checked', false);
		$('#background1').prop('checked', false);
		$('#background3').prop('checked', true);
		$('#background4').prop('checked', false);
		$('#background6').prop('checked', true);
	}

	/********************* Horizontal Hover Menu ********************/

	$('#myonoffswitch111').on('click', function () {
		if (this.checked) {
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

				setTimeout(()=>{
					var sub = $(".sub-slide-menu.open");
					sub.slideUp(animationSpeed);
					sub.removeClass('open')
					var sub2 = $(".sub-slide-menu2.open");
					sub2.slideUp(animationSpeed);
					sub2.removeClass('open')
				}, 500)
				

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
			localStorage.removeItem("dayonehorizontal");
			localStorage.removeItem("dayonesidebarMini");
			localStorage.setItem("dayonehorizontalHover", "true");
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			if (document.querySelector('.horizontal').firstElementChild.classList.contains('login-img') !== true) {
				document.querySelector('.horizontal .side-menu').style.flexWrap = 'nowrap'
			}
			HorizontalHovermenu();
			checkHoriMenu();
			responsive();

		} else {
			$('body').removeClass('horizontal-hover');
			localStorage.setItem("dayonehorizontal-hover", "False");
		}

	});
	
		// $('body').addClass('horizontal-hover');

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
				localStorage.removeItem("dayonehorizontal");
				localStorage.removeItem("dayonesidebarMini");
				localStorage.setItem("dayonehorizontalHover", "true");
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

})(jQuery);


// Success Notification
function not1() {
	notif({
		msg: "<b><i class='fa fa-check fs-20 me-2'></i></b> Well done Details Submitted Successfully",
		type: "success"
	});
}


// ______________ SWITCHER-toggle ______________//


$('.layout-setting').on("click", function (e) {
	if (!(document.querySelector('body').classList.contains('dark-mode'))) {
		$('body').addClass('dark-mode');
		$('body').removeClass('light-mode');
		$('body').removeClass('transparent-mode');
		$('#background4').prop('checked', false);

		localStorage.setItem('dayonedarkMode', true);
		localStorage.removeItem('dayonelightMode');
		localStorage.removeItem('dayonetransparentMode');
		$('#myonoffswitch2').prop('checked', true);
		$('#background3').prop('checked', true);
		$('#background6').prop('checked', true);
	} else {
		$('body').removeClass('dark-mode');
		$('body').addClass('light-mode');

		localStorage.setItem('dayonelightMode', true);
		localStorage.removeItem('dayonetransparentMode');
		localStorage.removeItem('dayonedarkMode');
		$('#myonoffswitch1').prop('checked', true);
		$('#background1').prop('checked', true);
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
// $('body').addClass('horizontal');

// Transparent Layout Start

$(document).on("click", '#myonoffswitchTransparent', function () {
	if (this.checked) {
		$('body').addClass('transparent-mode');
		$('#myonoffswitch3').prop('checked', false);
		$('#myonoffswitch6').prop('checked', false);
		$('#myonoffswitch5').prop('checked', false);
		$('#myonoffswitch8').prop('checked', false);
		$('body').removeClass('dark-mode');
		$('body').removeClass('light-theme');
		// remove light theme properties
		localStorage.removeItem('dayoneprimaryColor')
		localStorage.removeItem('dayoneprimaryHoverColor')
		localStorage.removeItem('dayoneprimaryBorderColor')

		// reseting the menu and header switcher

		document.querySelector('.lightMenu')?.classList.remove('d-none')
		document.querySelector('.lightMenu')?.classList.add('d-flex')
		document.querySelector('.lightHeader')?.classList.remove('d-none')
		document.querySelector('.lightHeader')?.classList.add('d-flex')

		document.querySelector('.darkMenu')?.classList.remove('d-none')
		document.querySelector('.darkMenu')?.classList.add('d-flex')
		document.querySelector('.darkHeader')?.classList.remove('d-none')
		document.querySelector('.darkHeader')?.classList.add('d-flex')

		// removing light theme data 
		localStorage.removeItem('dayonedarkPrimary');
		localStorage.removeItem('dayoneprimaryColor')
		localStorage.removeItem('dayoneprimaryHoverColor')
		localStorage.removeItem('dayoneprimaryBorderColor')
		localStorage.removeItem('dayoneprimaryTransparent');
		localStorage.removeItem('dayonetransparentPrimary');
		localStorage.removeItem('dayonedarkprimaryTransparent');
		localStorage.removeItem('dayonetransparentBgImgPrimary')
		localStorage.removeItem('dayonetransparentBgImgprimaryTransparent')

		$('#myonoffswitch2').prop('checked', false);
		$('#myonoffswitch1').prop('checked', false);
		$('#myonoffswitchTransparent').prop('checked', true);
		//
		// checkOptions();
		// removeForTransparent();
		const root = document.querySelector(':root');
		root.style = "";
		names()
	} else {
		$('body').removeClass('transparent-mode');
		localStorage.removeItem("dayonetransparent-mode");
	}
	localStorageBackup()
	$('body').removeClass('bg-img1');
	$('body').removeClass('bg-img2');
	$('body').removeClass('bg-img3');
	$('body').removeClass('bg-img4');
});


// Transparent Bg-Image Style Start
$(document).on("click", '#bgimage1', function () {
	$('body').addClass('bg-img1');
	$('body').removeClass('bg-img2');
	$('body').removeClass('bg-img3');
	$('body').removeClass('bg-img4');
	$('body').removeClass('light-menu');
	$('body').removeClass('color-menu');
	$('body').removeClass('gradient-menu');
	$('body').removeClass('dark-menu');
	$('body').removeClass('dark-header');
	$('body').removeClass('color-header');
	$('body').removeClass('light-header');
	$('body').removeClass('gradient-header');

	document.querySelector('body').classList.add('transparent-mode');
	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.remove('dark-mode');

	$('#myonoffswitch2').prop('checked', false);
	$('#myonoffswitch1').prop('checked', false);
	$('#myonoffswitchTransparent').prop('checked', true);
	// checkOptions();
	// removeForTransparent();
})

$(document).on("click", '#bgimage2', function () {
	$('body').addClass('bg-img2');
	$('body').removeClass('bg-img1');
	$('body').removeClass('bg-img3');
	$('body').removeClass('bg-img4');
	$('body').removeClass('light-menu');
	$('body').removeClass('color-menu');
	$('body').removeClass('gradient-menu');
	$('body').removeClass('dark-menu');
	$('body').removeClass('dark-header');
	$('body').removeClass('color-header');
	$('body').removeClass('light-header');
	$('body').removeClass('gradient-header');

	document.querySelector('body').classList.add('transparent-mode');
	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.remove('dark-mode');

	$('#myonoffswitch2').prop('checked', false);
	$('#myonoffswitch1').prop('checked', false);
	$('#myonoffswitchTransparent').prop('checked', true);
	// checkOptions();
	// removeForTransparent();
})

$(document).on("click", '#bgimage3', function () {
	$('body').addClass('bg-img3');
	$('body').removeClass('bg-img1');
	$('body').removeClass('bg-img2');
	$('body').removeClass('bg-img4');
	$('body').removeClass('light-menu');
	$('body').removeClass('color-menu');
	$('body').removeClass('gradient-menu');
	$('body').removeClass('dark-menu');
	$('body').removeClass('dark-header');
	$('body').removeClass('color-header');
	$('body').removeClass('light-header');
	$('body').removeClass('gradient-header');

	document.querySelector('body').classList.add('transparent-mode');
	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.remove('dark-mode');

	$('#myonoffswitch2').prop('checked', false);
	$('#myonoffswitch1').prop('checked', false);
	$('#myonoffswitchTransparent').prop('checked', true);
	// checkOptions();
	// removeForTransparent();
})

$(document).on("click", '#bgimage4', function () {
	$('body').addClass('bg-img4');
	$('body').removeClass('bg-img1');
	$('body').removeClass('bg-img2');
	$('body').removeClass('bg-img3');
	$('body').removeClass('light-menu');
	$('body').removeClass('color-menu');
	$('body').removeClass('gradient-menu');
	$('body').removeClass('dark-menu');
	$('body').removeClass('dark-header');
	$('body').removeClass('color-header');
	$('body').removeClass('light-header');
	$('body').removeClass('gradient-header');

	document.querySelector('body').classList.add('transparent-mode');
	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.remove('dark-mode');
	$('#myonoffswitch2').prop('checked', false);
	$('#myonoffswitch1').prop('checked', false);
	$('#myonoffswitchTransparent').prop('checked', true);
	// checkOptions();
	// removeForTransparent();
})
// Transparent Bg-Image Style End


// CHECK OPTIONS
function checkOptions() {
    "use strict";
    // rtl
	if (document.querySelector('body').classList.contains('rtl')) {
		$('#myonoffswitch55').prop('checked', true);
	}
	// horizontal
	if (document.querySelector('body').classList.contains('horizontal')) {
		$('#myonoffswitch35').prop('checked', true);
	}
	// horizontal-hover
	if (document.querySelector('body').classList.contains('horizontal-hover')) {
		$('#myonoffswitch111').prop('checked', true);
	}

}checkOptions();
function resetData() {
    $('#myonoffswitch34').prop('checked', true);
	$('#myonoffswitch54').prop('checked', true);
	$('#myonoffswitch3').prop('checked', true);
	$('#myonoffswitch6').prop('checked', true);
	$('#myonoffswitch1').prop('checked', true);
	$('#myonoffswitch9').prop('checked', true);
	$('#background1').prop('checked', true);
	$('#background6').prop('checked', true);
	$('#onoffswitch1').prop('checked', true);
	$('#myonoffswitch10').prop('checked', false);
	$('#myonoffswitch11').prop('checked', true);
	$('#myonoffswitch12').prop('checked', false);
	$('#myonoffswitch13').prop('checked', true);
	$('#myonoffswitch14').prop('checked', false);
	$('#myonoffswitch15').prop('checked', false);
	$('#myonoffswitch16').prop('checked', false);
	$('#myonoffswitch17').prop('checked', false);
	$('#myonoffswitch18').prop('checked', false);
	$('#background3').prop('checked', false);
	$('#myonoffswitch2').prop('checked', false);
	$('body')?.removeClass('bg-img4');
	$('body')?.removeClass('bg-img1');
	$('body')?.removeClass('bg-img2');
	$('body')?.removeClass('bg-img3');
	$('body')?.removeClass('transparent-mode');
	$('body')?.removeClass('dark-mode');
	$('body')?.removeClass('dark-menu');
	$('body')?.removeClass('color-menu');
	$('body')?.removeClass('gradient-menu');
	$('body')?.removeClass('dark-header');
	$('body')?.removeClass('color-header');
	$('body')?.removeClass('gradient-header');
	$('body')?.removeClass('layout-boxed');
	$('body')?.removeClass('icon-text');
	$('body')?.removeClass('icon-overlay');
	$('body')?.removeClass('closed');
	$('body')?.removeClass('hover-submenu');
	$('body')?.removeClass('hover-submenu1');
	$('body')?.removeClass('sidenav-toggled');
	$('body')?.removeClass('scrollable-layout');
	$('body')?.removeClass('rtl');
	
	// resetting horizontal to vertical
	ActiveSubmenu();
	$('body').removeClass('horizontal');
	$('body').removeClass('horizontal-hover');
	$('body').addClass('default-menu');
	$('body').addClass('sidebar-mini');
	$('sidebar-mini').removeClass('hor-content');
	$('sidebar-mini').addClass('main-content"');
	$(".app-sidebar3").removeClass("horizontal-mainwrapper container");
	$(".main-content").removeClass("hor-content");
	$(".main-content").addClass("app-content");
	$(".main-container").removeClass("container");
	$(".main-container").addClass("container-fluid");
	$(".angle").removeClass("horizontal-icon");
	$(".main-menu").removeClass("horizontalMenu");
	$(".main-container").addClass("side-app");
	$(".header").removeClass("hor-header");
	$(".header").addClass("app-header");
	$(".app-sidebar").removeClass("horizontal-main");
	$(".main-sidemenu").removeClass("container");
	$(".app-sidebar").removeClass("hor-menu ");
	$('#slide-left').removeClass('d-none');
	$('#slide-right').removeClass('d-none');
	localStorage.setItem("dayonesidebar-mini", "True");
	menuClick();
	responsive();

	$('body').addClass('ltr');
		$('body').removeClass('rtl');
		$("html[lang=en]").attr("dir", "ltr");
		localStorage.setItem("ltr", "True");
		$("head link#style").attr("href", $(this));
		(document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.css"));
		var carousel = $('.owl-carousel');
		$.each(carousel, function (index, element) {
			// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = false; //don't know if both are necessary
			carouselData.options.rtl = false;
			$(element).trigger('refresh.owl.carousel');
		});

}
