
;(function($){
	$(function(){

        // Begin input common focus and blur for value.
        var input = $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea');

        $(input).each(function(){
            var inputText = $(this).attr('placeholder')
            $(this).focus(function(){
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', '');
                     $('.input-wrap').removeClass('value-added')
                }
            }).blur(function(){
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', inputText);
                    $(this).parent().removeClass('active');
                } else if ($(this).val().length > 0) {
                    $(this).parent().addClass('active');
                }
            })
        });

          $('div.input-wrap input').keyup(function(){
            $(this).parents(".input-wrap").addClass('value-added')
        })




        // Phone nav click function
        
        var lastScrollTopPos = 0;
        
        $('.menu-bar h6').click(function(){
            lastScrollTopPos = $(window).scrollTop()
            $("body").addClass("navShown");
             
        }); 
        
         $('.close-icon').click(function(){
            $("body").removeClass("navShown");
             $(window).scrollTop(lastScrollTopPos)
        }); 
        
        
        if ($(window).width() > 767) {

            var offsetTopPosition = $('#main-menu-btm').offset().top;
            var windowScrollAmount = $(window).scrollTop() +83

            $(window).on("scroll", function(){
                windowScrollAmount = $(window).scrollTop()
                if ( windowScrollAmount >= offsetTopPosition) {
                    $('#main-menu').addClass('sticky');
                }

                else {
                    $('#main-menu').removeClass('sticky');
                }

            });
        }

        
        
        
        
        // feature slider
        if ($("#feature-slider").length) {
            $('#feature-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                loop:true,
                speed: 800,
                controlNav: false,
                directionNav: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1

                        }
                    }
                ]
            });
        }
        
        
        
        //$(document).on( eventName, selector, function(){} );
        $('body').on('mouseenter', '#feature-slider .slick-prev',  function(){
            $(".slick-prev").addClass("mouse-enter");
            $(".slick-prev").removeClass("mouse-leave");
        });
        $('body').on('mouseleave', '#feature-slider .slick-prev', function(){ 
            $(".slick-prev").addClass("mouse-leave");
            $(".slick-prev").removeClass("mouse-enter");
        }); 
        $('body').on('mouseenter', '#feature-slider .slick-next', function(){
            $(".slick-next").addClass("mouse-enter");
            $(".slick-next").removeClass("mouse-leave");
        });
        $('body').on('mouseleave', '#feature-slider .slick-next', function(){   
            $(".slick-next").addClass("mouse-leave");
            $(".slick-next").removeClass("mouse-enter");
        }); 
         
        
        
        
         if($("#thum-slider").length){          
            var thumSlider = $("#thum-slider");

            //console.log(lastItemIndex);            
            thumSlider.slick({
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                arrows: false,
                waitForAnimate: true,
                asNavFor: '#content-slider',
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false
                        }
                    }

                ]
            });


            var contentSlider =  $("#content-slider");

            var totalSlide = contentSlider.find(".slider-item-content").length;
            var lastItemIndex = totalSlide -1;

            contentSlider.on("init", function(event, slick, currentSlide, nextSlide){
                var lastSlideActiveFigure = $("#content-slider .slick-slide").eq(lastItemIndex).hasClass("slick-current");
                var firstSlideActiveFigure = $("#content-slider .slick-slide").eq(0).hasClass("slick-current");
            });

            contentSlider.slick({
                dots: false,
                vertical: false,
                asNavFor: '#thum-slider',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1300,
                fade: true,
                arrows: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            dots: true
                        }
                    }

                ]
            })  


        }
        
        
        if ( $(window).width() < 767 ) {
                $('.whats-on-item-wrap').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoPlay: true
                });

            }
        
        // For inview
        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        
        
        
        
        $('#down-trigger').click(function(){
            $('body').addClass('motionStarted')
            $('html,body').animate({ scrollTop: $(window).height()-200 }, 1500)
            
        })
        $('#up-trigger').click(function(){
            $('body').removeClass('motionStarted')
            $('html,body').animate({scrollTop: 0 }, 1500 , function(){})
            
        })
        
		
	})// End ready function.
   
    
    $(window).on('load', function(){
        
        var lastScrollTop = 0;
        $(window).on('scroll', function() {
            
            st = $(this).scrollTop();
            if(st < lastScrollTop) {
                
                if( $(window).scrollTop() > $(window).height() + 0 ){
                     //event.preventDefault();
                    //$('#up-trigger').click()
                    //$(window).off('scroll')
                    //$('html,body').animate({scrollTop: 0 }, 1500 , function(){})
                }
                
                //
                
                console.log('up 1');
            }
            else {
                
                if( $(window).scrollTop() > 0 ){
                    //event.preventDefault();
                    //$('#down-trigger').click()
                    //$('html,body').animate({scrollTop: $(window).height()-200 }, 1500, function(){})
                    //$(window).off('scroll')
                }
                
                 
                console.log('down 1');
                
            }
            lastScrollTop = st;
        });
        
        
        
        
       
        
    })
    
    

	/*$(window).on("scroll", function(){
            
            
            
            if($(window).scrollTop() >= 50 ){
                $('#leaf1').animate({ 'margin-top': '-600px' }, 1500)
                $('#leaf2').animate({ 'margin-top': '-400px' }, 1500)

                $('#middle-leaf1').animate({ 'margin-top': '-80px' }, 1500)
                $('#middle-leaf2').animate({ 'margin-top': '-80px' }, 1500)

                $('#main-hero-bg').animate({ 'margin-top': '-300px' }, 1500)
                $('#btm-leaf').animate({ 'margin-top': '-80px' }, 1500)

                $('body,html').animate({
                    scrollTop: $(window).height() - 300
                }, 1500);
                //return false;
            }
            
            else{
                return false
            }
            
            
            
        })*/

})(jQuery)

