$(document).ready(function () {
    //輪播
    let mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 4000,
        },
        effect: "slide",

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
    })
});