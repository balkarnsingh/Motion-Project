//Scroll animation
$('body').ready(function() {
    $('body').scroll(function(){
        $('.animate-this-up').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+400) {
                    $(this).addClass("slideUp");
                }
        });
    });
    $('body').scroll(function(){
        $('.animate-this-zoom').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+400) {
                    $(this).addClass("zoomIn");
                }
        });
    });
    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $('body').scroll(function() {    
        if(isScrolledIntoView($('#Skills')))
        {
            $('.zoomIn').removeClass("zoomIn");
            $('.slideUp').removeClass("slideUp");

             // Counter
            $({counter: 0}).animate({counter: 15}, {
                duration: 3000,
                easing:'linear',
                step: function() {    
                $('.total1').text(Math.ceil(this.counter))
                },
            });
            $({counter: 0}).animate({counter: 938}, {
                duration: 3000,
                easing:'linear',
                step: function() {    
                $('.total2').text(Math.ceil(this.counter))
                },
            });
            $({counter: 0}).animate({counter: 138}, {
                duration: 3000,
                easing:'linear',
                step: function() {    
                $('.total3').text(Math.ceil(this.counter))
                },
            });
        }    
        if(isScrolledIntoView($('#Contact')))
        {
            $('.zoomIn').removeClass("zoomIn");
            $('.slideUp').removeClass("slideUp");
        }  
    });

    //scroll icon in home section
    $('.scroll-down').click(function() {
        $('html,body').animate({scrollTop:$('#About').offset().top}, 500);
    });

    //contact form
    $('input').focus(function(){
        $(this).parent().find(".label-txt").addClass('label-active');
      });
    
    $("input").focusout(function(){
    if ($(this).val() == '') {
        $(this).parent().find(".label-txt").removeClass('label-active');
    };
    });

});