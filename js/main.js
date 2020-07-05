$(document).ready(function (e) {
    $(window).on('load resize',function (e) {
        checkCollapseMenu();
    });

    $("#mainHeader li a").click(function (e) {
        $("a.active").removeClass("active");
        $('a[href="index.html#' + $(this).attr("href").replace("index.html#", "") + '"').addClass("active");
    });
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href').replace("index.html", "")).offset().top - 90
            }, 1500, 'easeInOutExpo');
        });
    });
    checkFlashBox();
    $(".preloader").fadeOut(1000); //hide preloader
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 10) {
        $('.nav-bar').css('background','#FFFFFF');
        $('.nav-bar').css('box-shadow','0px 1px 20px #313131');
    } else {
        $('.nav-bar').css('background','#FFFFFF00');
        $('.nav-bar').css('box-shadow','none');
    }
});
