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
    //特定高度才顯示top標籤淡入淡出
    function showBtnCondition() {
        if ($(this).scrollTop() > 500) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    }
    $(window).scroll(showBtnCondition);
    //下拉式選單點擊
    $(".dropdown").click(function (e) {
        e.preventDefault();
        $(".dropdownMenu").slideToggle();
    });
});