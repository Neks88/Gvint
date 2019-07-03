$(document).ready(function () {
    $(".nav-links").hide();
    $("#menu-btn").click(changeNav);

    function changeNav() {
        $(".nav-links").slideToggle(1000);
        $("#menu-btn").toggleClass("turn");
    }


    $(window).scroll(function () {

        let scroll = $(window).scrollTop();

        if (scroll >= 70) {
            $('nav').addClass("new-nav");
        } else {
            $('nav').removeClass("new-nav");
        }

    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    // $('nav a').click(function (link) {
    //     link.preventDefault();

    //     let target = $(this).attr('href');

    //     $('html, body').animate({
    //         scrollTop: $(target).offset().top
    //     }, "slow");
    // });


    // $('.banner-link').click(function (link) {
    //     link.preventDefault();

    //     let target = $(this).attr('href');

    //     $('html, body').animate({
    //         scrollTop: $(target).offset().top
    //     }, "slow");
    // });

});