AOS.init({
    duration: 800,
    easing: "slide",
});

(function ($) {
    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: "scroll",
    });

    var fullHeight = function () {
        $(".js-fullheight").css("height", $(window).height());
        $(window).resize(function () {
            $(".js-fullheight").css("height", $(window).height());
        });
    };
    fullHeight();

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($("#ftco-loader").length > 0) {
                $("#ftco-loader").removeClass("show");
            }
        }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax();

    var carousel = function () {
        $(".carousel-testimony").owlCarousel({
            center: true,
            loop: true,
            items: 1,
            margin: 30,
            stagePadding: 0,
            nav: true,
            navText: [
                '<span class="ion-ios-arrow-back">',
                '<span class="ion-ios-arrow-forward">',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });
    };
    carousel();

    $(".home-slider").owlCarousel({
        center: true,
        autoplay: true,
        autoplayTimeout: 15000,
        dots: true,
        loop: true,
        arrows: true,
        responsive: {
            0: {
                items: 1,
            },
        },
    });

    $("nav .dropdown").hover(
        function () {
            var $this = $(this);
            $this.addClass("show");
            $this.find("> a").attr("aria-expanded", true);
            $this.find(".dropdown-menu").addClass("show");
        },
        function () {
            var $this = $(this);
            $this.removeClass("show");
            $this.find("> a").attr("aria-expanded", false);
            $this.find(".dropdown-menu").removeClass("show");
            // }, 100);
        }
    );

    $("#dropdown04").on("show.bs.dropdown", function () {
        console.log("show");
    });

    // scroll
    var scrollWindow = function () {
        $(window).scroll(function () {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $(".ftco_navbar"),
                sd = $(".js-scroll-wrap");

            if (st > 150) {
                if (!navbar.hasClass("scrolled")) {
                    navbar.addClass("scrolled");
                }
            }
            if (st < 150) {
                if (navbar.hasClass("scrolled")) {
                    navbar.removeClass("scrolled sleep");
                }
            }
            if (st > 350) {
                if (!navbar.hasClass("awake")) {
                    navbar.addClass("awake");
                }

                if (sd.length > 0) {
                    sd.addClass("sleep");
                }
            }
            if (st < 350) {
                if (navbar.hasClass("awake")) {
                    navbar.removeClass("awake");
                    navbar.addClass("sleep");
                }
                if (sd.length > 0) {
                    sd.removeClass("sleep");
                }
            }
        });
    };
    scrollWindow();

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };

    var counter = function () {
        $("#section-counter").waypoint(
            function (direction) {
                if (
                    direction === "down" &&
                    !$(this.element).hasClass("ftco-animated")
                ) {
                    var comma_separator_number_step =
                        $.animateNumber.numberStepFactories.separator(",");
                    $(".number").each(function () {
                        var $this = $(this),
                            num = $this.data("number");
                        console.log(num);
                        $this.animateNumber(
                            {
                                number: num,
                                numberStep: comma_separator_number_step,
                            },
                            7000
                        );
                    });
                }
            },
            { offset: "95%" }
        );
    };
    counter();

    var contentWayPoint = function () {
        var i = 0;
        $(".ftco-animate").waypoint(
            function (direction) {
                if (
                    direction === "down" &&
                    !$(this.element).hasClass("ftco-animated")
                ) {
                    i++;

                    $(this.element).addClass("item-animate");
                    setTimeout(function () {
                        $("body .ftco-animate.item-animate").each(function (k) {
                            var el = $(this);
                            setTimeout(
                                function () {
                                    var effect = el.data("animate-effect");
                                    if (effect === "fadeIn") {
                                        el.addClass("fadeIn ftco-animated");
                                    } else if (effect === "fadeInLeft") {
                                        el.addClass("fadeInLeft ftco-animated");
                                    } else if (effect === "fadeInRight") {
                                        el.addClass(
                                            "fadeInRight ftco-animated"
                                        );
                                    } else {
                                        el.addClass("fadeInUp ftco-animated");
                                    }
                                    el.removeClass("item-animate");
                                },
                                k * 50,
                                "easeInOutExpo"
                            );
                        });
                    }, 100);
                }
            },
            { offset: "95%" }
        );
    };
    contentWayPoint();

    // navigation
    var OnePageNav = function () {
        $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on(
            "click",
            function (e) {
                e.preventDefault();

                var hash = this.hash,
                    navToggler = $(".navbar-toggler");
                $("html, body").animate(
                    {
                        scrollTop: $(hash).offset().top,
                    },
                    700,
                    "easeInOutExpo",
                    function () {
                        window.location.hash = hash;
                    }
                );

                if (navToggler.is(":visible")) {
                    navToggler.click();
                }
            }
        );
        $("body").on("activate.bs.scrollspy", function () {
            console.log("nice");
        });
    };
    OnePageNav();

    // magnific popup
    $(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true,
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
    });

    $(".other-destination").hide();
    $("#other").click(function () {
        if ($(this).is(":checked")) {
            $(".other-destination").show(300);
        } else {
            $(".other-destination").hide(200);
        }
    });

    $("#kids-info").hide();
    $("#num-kids").on("input", function () {
        if ($(this).val() > 0) {
            $("#kids-info").show(300);
            $("#kids-info").prop("required", true);
        } else {
            $("#kids-info").hide(200);
            $("#kids-info").prop("required", false);
        }
    });

    $("#date-label").hide();
    $("#select-date").hide();
    $("#dates").change(function () {
        if ($("#yes").is(":selected")) {
            $("#date-label").show(400);
            $("#select-date").show(400);
            $("#select-date").prop("required", true);
        } else {
            $("#date-label").hide(400);
            $("#select-date").hide(400);
            $("#select-date").prop("required", false);
        }
    });

    $(function () {
        $('input[name="adventure-date-range"]').daterangepicker(
            {
                opens: "center",
                drops: "up",
            },
            function (start, end, label) {
                console.log(
                    "A new date selection was made: " +
                        start.format("YYYY-MM-DD") +
                        " to " +
                        end.format("YYYY-MM-DD")
                );
            }
        );
    });

    $(document).ready(function () {
        if ($(document).width() < 700) {
            $('input[name="adventure-date-range"]').daterangepicker(
                {
                    opens: "center",
                    drops: "up",
                    autoApply: true,
                },
                function (start, end, label) {
                    console.log(
                        "A new date selection was made: " +
                            start.format("YYYY-MM-DD") +
                            " to " +
                            end.format("YYYY-MM-DD")
                    );
                }
            );
        }
    });
})(jQuery);

//BOTÓN CONTACTO

setInterval(function () {
    if ($("#contact").hasClass("btn")) {
        $("#contact").removeClass("btn");
        $("#contact").addClass("btn-yellow");
    } else if ($("#contact").hasClass("btn-yellow")) {
        $("#contact").removeClass("btn-yellow");
        $("#contact").addClass("btn-blue");
    } else {
        $("#contact").removeClass("btn-blue");
        $("#contact").addClass("btn");
    }
}, 5000);

function getSubject() {
    let email = document.getElementById("customer-email").value;
    let subject = document.getElementById("email-subject");
    subject.setAttribute("value", "New Adventure Recieved - " + email);
}

function validateForm() {
    const regex = /^[^<>;]+$/;
    let validFields = false;
    let name = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("customer-email").value;
    let phone = document.getElementById("customer-phone").value;
    let info = document.getElementById("adv-info").value;
    let response = grecaptcha.getResponse();

    if (
        name === "" ||
        lastName === "" ||
        email === "" ||
        phone === "" ||
        info === ""
    ) {
        validFields = true;
    } else if (
        !regex.test(name) ||
        !regex.test(lastName) ||
        !regex.test(email) ||
        !regex.test(phone) ||
        !regex.test(info)
    ) {
        validFields = true;
    }

    if (response.length == 0) {
        alert("Please verify the reCaptcha.");
        return false;
    } else if (validFields) {
        alert(
            "Please provide all the information needed or some information is not valid."
        );
        return false;
    } else {
        return true;
    }
}
