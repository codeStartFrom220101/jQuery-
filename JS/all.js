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
    //燈箱
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'positionFromTop': 400,
    })
    //移動到頁面頂部滑動效果
    $('.top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    $(".dropdownMenu a").click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(".course").offset().top
        }, 700);
    });

});