(() => {

    initStickyMenu = () => {

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    };

    initSmoothLink = () => {
        $('.navbar-nav a').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        $('.roo').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    };

    sliderControll = () => {
        var sliderCon = {
            animation: "slide", 
            slideshow: true, 
            slideshowSpeed: 1000, 
            controlNav: false, 
            pauseOnHover: "ture",
            itemWidth: 253, 
            itemMargin: 31, 
            prevText: "<", 
            nextText: ">", 
            move: 1,
        }
        $(".experience-history-list").flexslider(sliderCon)
    }

    initSmartScroll = () => {
        if($(window).width() > 420){
            $.smartscroll({
                autoHash: true
            });
        }
    }

    closePortrait = () => {
        $('.closePortrait').on('click', ()=>{
            $('.my').addClass('hide')
        })
    }

    initBacktoTop = () => {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        }); 
        $('.back-to-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    },

    this.initStickyMenu();
    this.initSmoothLink();
    new WOW().init();
    this.sliderControll();
    this.initSmartScroll();
    this.closePortrait();
    this.initBacktoTop();
})();