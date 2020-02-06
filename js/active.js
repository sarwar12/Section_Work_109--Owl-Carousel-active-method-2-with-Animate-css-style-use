$(document).ready(function($){
	// Carousel Active method 1
	/* $(".homepage-slides").owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		dots:true,
		nav:true
	}); */
	
	// Carousel Active method 2
	var mySlides = $(".homepage-slides");
	mySlides.owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		dots:true,
		nav:true,
	});
	
	mySlides.on('translated.owl.carousel', function(event) {
		$(".welcome-area-inner-text h4").addClass("animated bounceIn");
		$(".welcome-area-inner-text h1").addClass("animated jackInTheBox");
		$(".welcome-area-inner-text p").addClass("animated fadeIn");
		$(".welcome-area-inner-text h4").css('color' , 'teal');
		$(".welcome-area-inner-text h4").css('font-weight' , '700');
	});
	mySlides.on('translate.owl.carousel', function(event) {
		$(".welcome-area-inner-text h4").removeClass("animated bounceIn");
		$(".welcome-area-inner-text h1").removeClass("animated jackInTheBox");
		$(".welcome-area-inner-text p").removeClass("animated fade In");
	});
	
});