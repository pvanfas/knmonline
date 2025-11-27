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
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		}
	})
	owlRtl()

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

 function owlRtl(){
	var carousel = $('.rtl .owl-carousel');
			$.each(carousel ,function( index, element)  {
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = true; //don't know if both are necessary
			carouselData.options.rtl = true;
			$(element).trigger('refresh.owl.carousel');
			});
}
 