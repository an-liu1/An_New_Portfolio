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
        // $(window).on('mousewheel', function (event) {
        //     var $anchor = $(this);
        //     $('html, body').stop().animate({
        //         scrollTop: $($anchor.attr('href')).offset().top - 50
        //     }, 1500, 'easeInOutExpo');
        //     event.preventDefault();
        // });
    };

    initScrollspy = () => {
        $("#navbarCollapse").scrollspy({
            offset: 50
        });
    };

    initBacktoTop = () => {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        $('.back-to-top').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    };

     // lightbox
     $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    //project shadow
    $('div.awSlider .carousel').carousel({
        pause: 'hover',
        interval: 2000
    });
    var startImage = $('div.awSlider .carousel-item.active > img').attr('src');
    $('div.awSlider').append('<img src="' + startImage + '">');
    $('div.awSlider .carousel').on('slid.bs.carousel', function () {
        var bscn = $(this).find('.carousel-item.active > img').attr('src');
        $('div.awSlider > img').attr('src', bscn);
    });

    initFixedInfoDisplay = () => {
        if(window.location.hash == '#home' || window.location.hash == '#' || window.location.hash == ''){
            $('.portrait').addClass('hide')
        }else{
            $('.portrait').removeClass('hide')
        }
    }


    this.initStickyMenu();
    this.initSmoothLink();
    this.initScrollspy();
    this.initBacktoTop();
    this.initFixedInfoDisplay();
})();