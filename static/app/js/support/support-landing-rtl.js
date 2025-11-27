$(function(e){
	'use strict';

    // Testimonial-owl-carousel2
    var owl = $('.testimonial-owl-carousel');
	owl.owlCarousel({
		loop: true,
		rewind: false,
		margin: 25,
		autoplay: true,
		lazyLoad: true,
		dots: false,
		nav: true,
		rtl: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		}
	})

	// Accoradation
	$(document).ready(function () {
		$("#accordion").on('click', function () {
			$('.acc-header').toggleClass('active');
		});
	});

	// Wow Master
	new WOW().init();
	$('.reset').click(function(){
		new WOW().init();
	})

 });

 