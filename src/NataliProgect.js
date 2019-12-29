import './NataliProgect.scss'
import './owl/owl.carousel.css'
import './owl/owl.theme.default.css'
import './js/owl.carousel'
import './css/all.css'
import './js/all'
import './css/animate.css'
import './js/jquery.colorbox-min'
import './css/colorbox.css'

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

    jQuery(".group1").colorbox({ 
        rel:'group1',
        width: '80%',
        height: '80%',
        scalePhotos: true,
    });

    jQuery(".group2").colorbox({ 
        rel:'group2',
        width: '80%',
        height: '80%',
        scalePhotos: true,
    });

    jQuery(".group3").colorbox({ 
        rel:'group3',
        width: '80%',
        height: '80%',
        scalePhotos: true,
    });
}); 