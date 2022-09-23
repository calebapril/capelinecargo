$(document).ready(function () {

    // Hero Slider
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 7000,
        nav: true,
        items: 1,
        dots: false,
        smartSpeed: 900,
        navText: ['Prev', 'Next'],
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    });

    // Client Slider
    $('#client-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 2,
        dots: true,
        margin: 18,
        smartSpeed: 900,
        autoplay: true,
        autoplayTimeout: 7000,
        center: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                margin: 0,
            },
            768: {
                items: 2,
            },
            1140: {
                items: 2,
                center: true,
            }
        }
    });

    $('.review-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 900,
        autoplay: true,
        autoplayTimeout: 7000,
    })
});




