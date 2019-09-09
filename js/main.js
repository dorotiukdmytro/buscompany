$(function () {

    var $doc = $(document);
    var $headerMain = $('.header-main');

    $doc.scroll(function () {

        const scrollPosition = $doc.scrollTop();
        const headerMainHeight = $headerMain.outerHeight();

        if (scrollPosition > headerMainHeight * 0.5) {
            $('.arrow-box').addClass('visible');
        } else {
            $('.arrow-box').removeClass('visible');
        }
    });

    $doc.on('click', 'a.link', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 800);
    });

    $('.menu-icon').on('click', function () {
        $('.nav-main').toggleClass('show');
    });

    $('.menu-btn').on('click', function () {
        $(this).toggleClass('menu-btn-active');
    });

    $('.arrow-box').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
});
