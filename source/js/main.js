(function ($) {
    "use strict";

/*
    All Pluggins Information
    ______________________________

    *Jquery jquery-1.12.1 minified version used
    *Owl carousel 2.0.0-beta.2.4 Latest Version
    *Elevate zoom 3.00 Latest version
    *Counter Up Latest Version
    *Camera slider Latest Version if Need any further info please http://www.pixedelic.com/plugins/camera/
    *Jquery ui Latest version used
    *Uikit 2.26.2  Latest Version 

           ==Thank you==
*/

    //preloader
    var preloaderBody = $('.home-multipage1, .home-multipage2, .home-multipage3, .one-page1, .one-page2');
    preloaderBody.addClass('no-overflow');
    jQuery(window).load(function() {
        preloaderBody.removeClass('no-overflow');
        jQuery('.preloader-area').fadeOut('slow');

        // Block item full width before image
        var Winwidth = jQuery(window).width();
        Winwidth /= 2;
        jQuery('head').append('<style>.work-experience-content::before,.freelance-work::before{width:'+ Winwidth +'px;}</style>');
    });

    //Banner height defining
    var heightX = $('.banner-type4').height();
    $('.banner-height').css('height', heightX + 'px');

    var windowHeight = $(window).height();
    if (windowHeight >= 900) {
        $('body').addClass('extralarge');
    }


    //Mean menu Installing for Mobile Menu
    $('nav#dropdown').meanmenu();

    //Add or Remove your Navigation Item
    $('.navigation-cart-close').on('click', function(){
        $(this).parent('.single-shopping-cart-row').hide();
    });

    //Banner Installing Respectively
    $('.banner-type1').camera({
        loader: 'bar',
        height: '900px',
        time: 7000,
        transPeriod: 2000,
        navigation: false,
        playPause: false
    });

    $('.banner-type2').camera({
        loader: 'bar',
        height: '602px',
        time: 7000,
        transPeriod: 2000,
        navigation: false,
        playPause: false
    });
    $('.banner-type5').camera({
        loader: 'bar',
        height: '602px',
        time: 7000,
        transPeriod: 2000,
        navigation: true,
        playPause: false
    });

    //Skill bar Installation
    $('.thermometer-noconfig').waypoint(function(direction) {
        $(this).thermometer();
    },{
      offset:'90%'
    });


    // Counter Up Installing
    $('.counter').counterUp({
        delay: 100,
        time: 2000
    });

    //Contdown Page Installing 
    $('#getting-started').countdown('2017/04/25', function(event) {
        $(this).html(event.strftime('<ul><li>%D<span>Days</span></li><li>%H<span>Hours</span></li><li>%M<span>Minutes</span></li><li>%S<span>Seconds</span></li><ul>'));
    });

    //Elevate zoom for Details Item
    $('#zoom-box1').elevateZoom({ zoomType : 'lens', lensShape : 'round', lensSize : 200 });
    $('#zoom-box2').elevateZoom({ zoomType : 'lens', lensShape : 'round', lensSize : 200 });
    $('#zoom-box3').elevateZoom({ zoomType : 'lens', lensShape : 'round', lensSize : 200 });

    //Showcase Carousel
    $('.showcase-carousel-type1').owlCarousel({
        loop:true,
        margin: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nav:true,
        fluidSpeed: 1000,
        navSpeed: 2000,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            379:{
                items:2
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    //This week carousel
    $('.thisWeekCarousel').owlCarousel({
        loop:true,
        margin: 30,
        autoplay: false,
        autoplaySpeed: 2000,
        nav:true,
        fluidSpeed: 1000,
        navSpeed: 2000,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    //Start Price range slider
    $( '#slider-range' ).slider({
        range: true,
        min: 0,
        max: 1500,
        values: [ 20, 1000 ],
        slide: function( event, ui ) {
            $( '#amount' ).val( '$' + ui.values[ 0 ] );
            $( '#amountx' ).val('  $' + ui.values[ 1 ] );
        }
    });
    $( '#amount' ).val( '$' + $( '#slider-range' ).slider( 'values', 0 ) );
    $( '#amountx' ).val( '$' + $( '#slider-range' ).slider( 'values', 1 ) );

    //Post Slider
    $('.post-slider').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        autoplay: false,
        autoplaySpeed: 4000,
        dotsSpeed: 500,
        autoplayHoverPause:true,
        loop: true,
        margin: 10,
        nav: true,
        items: 1
    });

    //Window width resizing
    var windowSize = $(window).width();

    //Blog post Parallax
    if( windowSize > 991){  
        $('.post2').parallax('50%', 0.4);
        $('.post4').parallax('50%', 0.2);
    }

    //Video carousel    
    $('.video-carousel').owlCarousel({
        loop:true,
        center: true,
        dots: false,
        autoplayHoverPause:true,
        nav:false,
        autoplay:false,
        autoplaySpeed: 4000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            970:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    //Partners carousel
    $('.partners-carousel').owlCarousel({
        loop:true,
        center: true,
        dots: false,
        autoplayHoverPause:true,
        margin: 30,
        nav:false,
        autoplay:true,
        autoplaySpeed: 4000,
        dotsSpeed: 500,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:3,
                margin:9
            },
            600:{
                items:5
            },
            1000:{
                items:5
            }
        }
    });

    //Testimonial Carousel
    $('.testimonials-carousel-type2').owlCarousel({
        loop:true,
        center: false,
        dots: false,
        autoplayHoverPause:true,
        nav:false,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            970:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //Testimonials carousel 
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        center: true,
        dots: true,
        animateOut: 'slideOutDown',
         animateIn: 'flipInX',
        autoplayHoverPause:true,
        nav:false,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            970:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //Header Features causel
    $('.heder-features-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        loop: true,
        margin: 10,
        nav: true,
        items: 1
    });

    //Scroll Down    
    $('.go-down').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutCirc');
        event.preventDefault();
    });

    // Scroll Top
    $(window).scroll(function() {
    	if ($(this).scrollTop() > 500) {
    		$('.go-top').fadeIn();
    	}else {
            $('.go-top').fadeOut();
        }
    });

    // Animate the scroll to top
    $('.go-top').on('click', function(event) {
    	event.preventDefault();
    	$('html, body').animate({scrollTop: 0}, 2000);
    });

    // On mouse hover Display None   
    $('.portfolio figure').on('mouseover', function(){
        $(this).find('.portfolio-large-hover-bar,.large-lens-icon,.small-lens-icon').removeClass('no-visibility');  
    }).on('mouseleave', function(){
        $(this).find('.portfolio-large-hover-bar,.large-lens-icon,.small-lens-icon').addClass('no-visibility');  
    });

	
})(jQuery);