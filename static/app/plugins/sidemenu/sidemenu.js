(function () {
	"use strict";

	var slideMenu = $('.side-menu');
	$(document).on('click', '[data-bs-toggle="sidebar"]', function (event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});
	responsive();

})();

function responsive() {
	if (window.innerWidth >= 992) {
		if (document.querySelector("body").classList.contains("sidenav-toggled") && document.querySelector("body").classList.contains("horizontal")) {
			document.querySelector("body").classList.remove("sidenav-toggled")
		}
	}
}

// default layout
hovermenu();

// for Icon-text Menu
//icontext(); 

function hovermenu() {

	$(".app-sidebar").hover(function () {
		if ($('.app').hasClass('sidenav-toggled')) {
			$('.app').addClass('sidenav-toggled1');
		}
	}, function () {
		if ($('.app').hasClass('sidenav-toggled')) {
			$('.app').removeClass('sidenav-toggled1');
		}
	});
}

// ______________ICON-TEXT JS start
function icontext() {
	$(".app-sidebar").off("mouseenter mouseleave");

	$(document).on('click', ".app-sidebar", function (event) {
		if ($('body').hasClass('sidenav-toggled') == true) {
			$('body').addClass('sidenav-toggled1');
		}
	});

	$(document).on('click', ".main-content", function (event) {
		$('body').removeClass('sidenav-toggled1');
	});
}

//________________Horizontal js
jQuery(function () {
	'use strict';
	document.addEventListener("touchstart", function () { }, false);
	jQuery(function () {
		jQuery('body').wrapInner('<div class="horizontalMenucontainer" />');
	});
}());

function menuClick() {
	// clearing the clicking functions already present on the element
	$("[data-bs-toggle='slide']").off('click');
	$("[data-bs-toggle='sub-slide']").off('click');
	$("[data-bs-toggle='sub-slide2']").off('click');

	// initiating the click function
	$("[data-bs-toggle='slide']").on('click', function (e) {
		var $this = $(this);
		var checkElement = $this.next();
		var animationSpeed = 300,
			slideMenuSelector = '.slide-menu';
		if (checkElement.is(slideMenuSelector) && checkElement.is(':visible')) {
			checkElement.slideUp(animationSpeed, function () {
				checkElement.removeClass('open');
			});
			checkElement.parent("li").removeClass("is-expanded");
		}
		 else if ((checkElement.is(slideMenuSelector)) && (!checkElement.is(':visible'))) {
			var parent = $this.parents('ul').first();
			var ul = parent.find('ul:visible').slideUp(animationSpeed);
			ul.removeClass('open');
			var parent_li = $this.parent("li");
			checkElement.slideDown(animationSpeed, function () {
				checkElement.addClass('open');
				parent.find('li.is-expanded').addClass('is-expanded');
				parent_li.addClass('is-expanded');
			});
		}
		if (checkElement.is(slideMenuSelector)) {
			e.preventDefault();
		}
	});

	// Activate sidebar slide toggle
	$("[data-bs-toggle='sub-slide']").on('click', function (e) {
		var $this = $(this);
		var checkElement = $this.next();
		var animationSpeed = 300,
			slideMenuSelector = '.sub-slide-menu';
		if (checkElement.is(slideMenuSelector) && checkElement.is(':visible')) {
			checkElement.slideUp(animationSpeed, function () {
				checkElement.removeClass('open');
			});
			checkElement.parent("li").removeClass("is-expanded");
		} else if ((checkElement.is(slideMenuSelector)) && (!checkElement.is(':visible'))) {
			var parent = $this.parents('ul').first();
			var ul = parent.find('ul:visible').slideUp(animationSpeed);
			ul.removeClass('open');
			var parent_li = $this.parent("li");
			checkElement.slideDown(animationSpeed, function () {
				checkElement.addClass('open');
				parent.find('li.is-expanded').removeClass('is-expanded');
				parent_li.addClass('is-expanded');
			});
		}
		if (checkElement.is(slideMenuSelector)) {
			e.preventDefault();
		}
	});

	// Activate sidebar slide toggle
	$("[data-bs-toggle='sub-slide2']").on('click', function (e) {
		var $this = $(this);
		var checkElement = $this.next();
		var animationSpeed = 300,
			slideMenuSelector = '.sub-slide-menu2';
		if (checkElement.is(slideMenuSelector) && checkElement.is(':visible')) {
			checkElement.slideUp(animationSpeed, function () {
				checkElement.removeClass('open');
			});
			checkElement.parent("li").removeClass("is-expanded");
		} else if ((checkElement.is(slideMenuSelector)) && (!checkElement.is(':visible'))) {
			var parent = $this.parents('ul').first();
			var ul = parent.find('ul:visible').slideUp(animationSpeed);
			ul.removeClass('open');
			var parent_li = $this.parent("li");
			checkElement.slideDown(animationSpeed, function () {
				checkElement.addClass('open');
				parent.find('li.is-expanded').removeClass('is-expanded');
				parent_li.addClass('is-expanded');
			});
		}
		if (checkElement.is(slideMenuSelector)) {
			e.preventDefault();
		}
	});

	// To close the sub menu dropdown by clicking on inner content
	$('.hor-content').on('click', function () {
		$('.side-menu li').each(function () {
			$('.side-menu ul.open').slideUp(300)
			$(this).parent().removeClass("is-expanded");
			$(this).parent().parent().removeClass("open");
			$(this).parent().parent().prev().removeClass("is-expanded");
			$(this).parent().parent().parent().removeClass("is-expanded");
			$(this).parent().parent().parent().parent().removeClass("open");
			$(this).parent().parent().parent().parent().parent().removeClass("is-expanded");
		})
	})
}
function HorizontalHovermenu() {
	let value = document.querySelector('body').classList.contains('horizontal-hover')
	if (value && window.innerWidth >= 992) {
		$("[data-bs-toggle='slide']").off('click');
		$("[data-bs-toggle='sub-slide']").off('click');
		$("[data-bs-toggle='sub-slide2']").off('click');
		slideClick();
	} else {
		menuClick();
	}
}
HorizontalHovermenu();

let slideLeft = document.querySelector("#slide-left");
let slideRight = document.querySelector("#slide-right");
slideLeft?.addEventListener("click", () => { slideClick() }, true);
slideRight?.addEventListener("click", () => { slideClick() }, true);

// used to remove is-expanded class and remove class on clicking arrow buttons
function slideClick() {
	let slide = document.querySelectorAll(".slide");
	let slideMenu = document.querySelectorAll(".slide-menu");
	slide.forEach((element, index) => {
		if (element.classList.contains("is-expanded") == true) {
			element.classList.remove("is-expanded")
		}
	});
	slideMenu.forEach((element, index) => {
		if (element.classList.contains("open") == true) {
			element.classList.remove("open");
			element.style.display = "none";
		}
	});

	// to remove dropdown when clicking arrows in horizontal menu
	let subNavSub = document.querySelectorAll('.sub-nav-sub');
	subNavSub.forEach((e) => {
		e.style.display = '';
	})
	let subNav = document.querySelectorAll('.nav-sub')
	subNav.forEach((e) => {
		e.style.display = '';
	})
}

// horizontal arrows
var sideMenu = $(".side-menu");
var slide = "100px";

let menuWidth = document.querySelector('.horizontal-mainwrapper')
let menuItems = document.querySelector('.side-menu')
let prevWidth = [window.innerWidth]

$(window).resize(
	() => {
		let menuItems = document.querySelector('.side-menu')
		let sidebar = document.querySelector('.app-sidebar')
		let menuWidth = document.querySelector('.horizontal-mainwrapper')
		let marginLeftValue = Math.ceil(window.getComputedStyle(menuItems).marginLeft.split('px')[0]);
		let marginRightValue = Math.ceil(window.getComputedStyle(menuItems).marginRight.split('px')[0]);
		let check = menuItems.scrollWidth - menuWidth?.offsetWidth;
		if ($("body").hasClass('ltr')) {
			// console.log(menuItems.scrollWidth , menuWidth?.offsetWidth);
			if (menuItems.scrollWidth > menuWidth?.offsetWidth || marginLeftValue > 0) {
				sideMenu.stop(false, true).animate({
					marginLeft: 0
				}, {
					duration: 400
				})
			}
		}
		else {
			if (marginRightValue >= 0 || menuItems.scrollWidth > menuWidth?.offsetWidth) {
				sideMenu.stop(false, true).animate({
					marginRight: 0
				}, {
					duration: 400
				})
			}
		}
		// 
		checkHoriMenu();
		responsive();
		HorizontalHovermenu();
        prevWidth.push(window.innerWidth)
        if(prevWidth.length > 3){
            prevWidth.shift()
        }
        let prevValue = prevWidth[prevWidth.length-2];
		if (window.innerWidth >= 992 && prevValue < 992 ) {
			if (document.querySelector('body').classList.contains('horizontal')) {
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
			}
		}

		else {
			ActiveSubmenu();
		}
	}
)

function ActiveSubmenu() {
	var position = window.location.pathname.split('/');
	$(".app-sidebar li a").each(function () {
		var $this = $(this);
		var pageUrl = $this.attr("href");

		if (window.innerWidth < 992 || document.querySelector('body').classList.contains('horizontal') != true){
		if (pageUrl) {
			var animationSpeed = 300;
			if (position[position.length - 1] == pageUrl) {
				$(this).addClass("active");
				$(this).next().slideDown(animationSpeed);
				$(this).parent().addClass("is-expanded");
				$(this).parent().parent().prev().addClass("active");
				$(this).parent().parent().addClass("open");
				$(this).parent().parent().slideDown(animationSpeed);
				$(this).parent().parent().prev().addClass("is-expanded");
				$(this).parent().parent().parent().addClass("is-expanded");
				$(this).parent().parent().parent().parent().addClass("open");
				$(this).parent().parent().parent().parent().slideDown(animationSpeed);
				$(this).parent().parent().parent().parent().prev().addClass("active");
				$(this).parent().parent().parent().parent().parent().addClass("is-expanded");
				$(this).parent().parent().parent().parent().parent().parent().prev().addClass("active");
				$(this).parent().parent().parent().parent().parent().parent().parent().addClass("is-expanded");
				return false;
			}
		}
	}
	});
}


function checkHoriMenu() {
	let menuWidth = document.querySelector('.horizontal-mainwrapper')
	let menuItems = document.querySelector('.side-menu')
	let marginLeftValue = Math.ceil(window.getComputedStyle(menuItems).marginLeft.split('px')[0]);
	let marginRightValue = Math.ceil(window.getComputedStyle(menuItems).marginRight.split('px')[0]);
	let check = menuItems.getBoundingClientRect().width + (0 - menuWidth?.offsetWidth);
	let body = document.querySelector('body').classList.contains('ltr')

	if (body) {
		menuItems.style.marginRight = 0
	}
	else {
		menuItems.style.marginLeft = 0;
	}

	if (menuItems.scrollWidth - 2 < menuWidth?.offsetWidth) {
		$("#slide-right").addClass("d-none");
		$("#slide-left").addClass("d-none");
	}
	else if (marginLeftValue != 0) {
		$("#slide-left").removeClass("d-none");
	}
	else if (marginLeftValue != -check) {
		$("#slide-right").removeClass("d-none");
	}
	else if (marginRightValue != 0) {
		$("#slide-left").removeClass("d-none");
	}
	else if (marginRightValue != -check) {
		$("#slide-right").removeClass("d-none");
	}

	if (marginLeftValue == 0 && marginRightValue == 0) {
		$("#slide-left").addClass("d-none");
	}

}
checkHoriMenu();
$(document).on("click", ".ltr #slide-left", function () {
	let marginLeftValue = Math.ceil(window.getComputedStyle(menuItems).marginLeft.split('px')[0]);

	if (marginLeftValue < 0) {
		sideMenu.stop(false, true).animate({
			// marginRight : 0,
			marginLeft: "+=" + slide
		}, {
			duration: 400
		})
		$("#slide-right").removeClass("d-none");
	}
	// else{
	// 	$("#slide-left").addClass("d-none");
	// }

	if (marginLeftValue >= 0) {
		$("#slide-left").addClass("d-none");
		sideMenu.stop(false, true).animate({
			// marginRight : 0,
			marginLeft: 0
		}, {
			duration: 400
		})
	}
});
$(document).on("click", ".ltr #slide-right", function () {
	let menuItems = document.querySelector('.side-menu')
	let menuWidth = document.querySelector('.horizontal-mainwrapper')
	let marginLeftValue = Math.ceil(window.getComputedStyle(menuItems).marginLeft.split('px')[0]);
	let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth);
	if (marginLeftValue > -check) {
		sideMenu.stop(false, true).animate({
			// marginLeft : 0,
			marginLeft: "-=" + slide
		}, {
			duration: 400
		})
	}
	else {
		$("#slide-right").addClass("d-none");
	}

	if (marginLeftValue != 0) {
		$("#slide-left").removeClass("d-none");
	}
});

$(document).on("click", ".rtl #slide-left", function () {
	let marginRightValue = Math.ceil(window.getComputedStyle(menuItems).marginRight.split('px')[0]);

	if (marginRightValue < 0) {
		sideMenu.stop(false, true).animate({
			// marginRight : 0,
			marginLeft: 0,
			marginRight: "+=" + slide
		}, {
			duration: 400
		})
		$("#slide-right").removeClass("d-none");
	}
	// else {
	// 	$("#slide-left").addClass("d-none");
	// }

	if (marginRightValue >= 0) {
		$("#slide-left").addClass("d-none");
		sideMenu.stop(false, true).animate({
			// marginRight : 0,
			marginLeft: 0
		}, {
			duration: 400
		})
	}
});
$(document).on("click", ".rtl #slide-right", function () {
	let menuItems = document.querySelector('.side-menu')
	let menuWidth = document.querySelector('.horizontal-mainwrapper')
	let marginRightValue = Math.ceil(window.getComputedStyle(menuItems).marginRight.split('px')[0]);
	let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth);
	if (marginRightValue > -check) {
		sideMenu.stop(false, true).animate({
			// marginLeft : 0,
			marginLeft: 0,
			marginRight: "-=" + slide
		}, {
			duration: 400
		})

	}
	else {

		$("#slide-right").addClass("d-none");
	}

	if (marginRightValue != 0) {
		$("#slide-left").removeClass("d-none");
	}


	//

});
//sticky-header
$(window).on("scroll", function (e) {
	if ($(window).scrollTop() >= 70) {
		$('.app-header').addClass('fixed-header');
		$('.app-header').addClass('visible-title');
	} else {
		$('.app-header').removeClass('fixed-header');
		$('.app-header').removeClass('visible-title');
	}
});

$(window).on("scroll", function (e) {
	if ($(window).scrollTop() >= 70) {
		$('.horizontal-main').addClass('fixed-header');
		$('.horizontal-main').addClass('visible-title');
	} else {
		$('.horizontal-main').removeClass('fixed-header');
		$('.horizontal-main').removeClass('visible-title');
	}
});

// ______________Active Class
var position = window.location.pathname.split('/');
$(".app-sidebar li a").each(function () {
	var $this = $(this);
	var pageUrl = $this.attr("href");

	if (pageUrl) {
		if (position[position.length - 1] == pageUrl) {
			$(this).addClass("active");
			$(this).parent().addClass("is-expanded");
			$(this).parent().parent().prev().addClass("active");
			$(this).parent().parent().addClass("open");
			$(this).parent().parent().prev().addClass("is-expanded");
			$(this).parent().parent().parent().addClass("is-expanded");
			$(this).parent().parent().parent().parent().addClass("open");
			$(this).parent().parent().parent().parent().prev().addClass("active");
			$(this).parent().parent().parent().parent().parent().addClass("is-expanded");
			$(this).parent().parent().parent().parent().parent().parent().prev().addClass("active");
			$(this).parent().parent().parent().parent().parent().parent().parent().addClass("is-expanded");
			return false;
		}
	}
});

$('.app-sidebar__toggle').on('click', function (e) {
	e.preventDefault();
	$('body').addClass('main-navbar-show');
});

$('body').append('<div class="main-navbar-backdrop"></div>');
$('.main-navbar-backdrop').on('click touchstart', function () {
	$('body').removeClass('main-navbar-show');
});

$('body').append('<div class="main-navbar-backdrop"></div>');
$('.main-navbar-backdrop').on('click touchstart', function () {
	$('body').removeClass('sidenav-toggled');
});