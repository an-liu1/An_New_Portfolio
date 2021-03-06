(() => {
  initStickyMenu = () => {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
        $(".sticky").addClass("nav-sticky");
      } else {
        $(".sticky").removeClass("nav-sticky");
      }
    });
  };

  initSmoothLink = () => {
    $(".navbar-nav a").on("click", function(event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 50
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
    $(".roo").on("click", function(event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 50
          },
          1500,
          "easeInOutExpo"
        );
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
      move: 1
    };
    $(".experience-history-list").flexslider(sliderCon);
    // $('.project').flexslider({
    //     animation: "slide",
    //     prevText: "<",
    //     nextText: ">"
    //   });
  };

  initSmartScroll = () => {
    if ($(window).width() > 420) {
      $.smartscroll({
        mode: "vp",
        autoHash: false,
        sectionScroll: true,
        initialScroll: true,
        keepHistory: false,
        sectionWrapperSelector: ".section-wrapper",
        sectionClass: "section",
        animationSpeed: 300,
        headerHash: "header",
        breakpoint: null,
        eventEmitter: null,
        dynamicHeight: false,
        ie8: true
      });

    //   var lethargy = new Lethargy();
    //   $(window).bind('mousewheel DOMMouseScroll wheel MozMousePixelScroll', function(e){
    //     e.preventDefault()
    //     e.stopPropagation();
    //     if(lethargy.check(e) !== false) {
    //         // Do something with the scroll event
    //     }
    // });
    }
  };

  closePortrait = () => {
    $(".closePortrait").on("click", () => {
      $(".my").addClass("hide");
    });
  };

  initBacktoTop = () => {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".back-to-top").fadeIn();
      } else {
        $(".back-to-top").fadeOut();
      }
    });
    $(".back-to-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });
  };

  (initContact = () => {
    $("#contact-form").submit(function() {
      var action = $(this).attr("action");

      $("#message").slideUp(750, function() {
        $("#message").hide();

        $("#submit")
          .before("")
          .attr("disabled", "disabled");

        $.post(
          action,
          {
            name: $("#name").val(),
            email: $("#email").val(),
            comments: $("#comments").val()
          },
          function(data) {
            document.getElementById("message").innerHTML = data;
            $("#message").slideDown("slow");
            $("#cform img.contact-loader").fadeOut("slow", function() {
              $(this).remove();
            });
            $("#submit").removeAttr("disabled");
            if (data.match("success") != null) $("#cform").slideUp("slow");
          }
        );
      });

      return false;
    });
  }),
    this.initStickyMenu();
  this.initSmoothLink();
  new WOW().init();
  this.sliderControll();
  this.initSmartScroll();
  this.closePortrait();
  this.initBacktoTop();
  this.initContact();
})();
