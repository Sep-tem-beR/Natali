import './NataliProgect.scss'
import './owl/owl.carousel.css'
import './owl/owl.theme.default.css'
import './js/owl.carousel'
import './css/all.css'
import './js/all'
import './css/animate.css'

$(document).ready(function(){
    var owl=$(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        margin: 2,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 10000,
        navigation : true,
        singleItem : true,
        animateIn: 'fadeIn',
        nav: true,
        navText: ['','']
    });

    $(".next").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".prev").click(function(){
		owl.trigger("prev.owl.carousel");
	});
}); 