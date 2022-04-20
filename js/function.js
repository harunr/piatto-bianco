/**
 * $.disablescroll
 * Author: Josh Harrison - aloofdesign.com
 *
 * Disables scroll events from mousewheels, touchmoves and keypresses.
 * Use while jQuery is animating the scroll position for a guaranteed super-smooth ride!
 */
 (function(e){"use strict";function i(t,n){this.opts=e.extend({handleKeys:!0,scrollEventKeys:[32,33,34,35,36,37,38,39,40]},n);this.$container=t;this.$document=e(document);this.disable()}var t,n=function(e){for(var t=0;t<this.opts.scrollEventKeys.length;t++)if(e.keyCode===this.opts.scrollEventKeys[t]){e.preventDefault();return}},r=function(e){e.preventDefault()};i.prototype={disable:function(){var e=this;e.$container.on("mousewheel.UserScrollDisabler DOMMouseScroll.UserScrollDisabler touchmove.UserScrollDisabler",r);e.opts.handleKeys&&e.$document.on("keydown.UserScrollDisabler",function(t){n.call(e,t)})},undo:function(){var e=this;e.$container.off(".UserScrollDisabler");e.opts.handleKeys&&e.$document.off(".UserScrollDisabler")}};e.fn.disablescroll=function(e){!t&&(typeof e=="object"||!e)?t=new i(this,e):t&&t[e]?t[e].call(t):t&&t.disable.call(t)}})(jQuery);



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

            

            $(window).on("scroll", function(){
                var elemntPosition = $(window).outerHeight() + 1
                var windowScrollAmount = $(window).scrollTop()

                if ( windowScrollAmount >= elemntPosition) {
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
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1

                        }
                    },
                ]
            });
        }
        
        
        
        //$(document).on( eventName, selector, function(){} );
//        $('body').on('mouseenter', '#feature-slider .slick-prev',  function(){
//            $(".slick-prev").addClass("mouse-enter");
//            $(".slick-prev").removeClass("mouse-leave");
//        });
//        $('body').on('mouseleave', '#feature-slider .slick-prev', function(){ 
//            $(".slick-prev").addClass("mouse-leave");
//            $(".slick-prev").removeClass("mouse-enter");
//        }); 
//        $('body').on('mouseenter', '#feature-slider .slick-next', function(){
//            $(".slick-next").addClass("mouse-enter");
//            $(".slick-next").removeClass("mouse-leave");
//        });
//        $('body').on('mouseleave', '#feature-slider .slick-next', function(){   
//            $(".slick-next").addClass("mouse-leave");
//            $(".slick-next").removeClass("mouse-enter");
//        }); 
         
        
        
        
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
        
		
	})// End ready function.



   if ( $(window).width() > 1024 ) {

    window.addEventListener('scroll', function(event) {
      var depth, i, layer, layers, len, movement, topDistance, translate3d;
      topDistance = this.pageYOffset;
      layers = document.querySelectorAll("[data-type='parallax']");
      layers2 = document.querySelectorAll("[data='parallax2']");
      layers3 = document.querySelectorAll("[data='parallax3']");

      for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        movement = -(topDistance * depth);
        translate3d = 'translate3d( 0 , ' + movement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;

      }

      for (i = 0, len = layers2.length; i < len; i++) {
        layer = layers2[i];
        depth = layer.getAttribute('data-depth');
        movement = -(topDistance * depth);
        translate3d = 'translate3d( ' + movement + 'px , ' + movement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;

      }

      for (i = 0, len = layers3.length; i < len; i++) {
        layer = layers3[i];
        depth = layer.getAttribute('data-depth');
        movement = (topDistance * depth);
        translate3d = 'translate3d( ' + movement + 'px , ' + (- movement) + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;

      }




    });

    // generated by coffee-script 1.9.2

   }  
        
    
  

})(jQuery)

