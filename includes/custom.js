$(document).ready(function () {
    $("html").niceScroll();
});

$("#modal-info").modal({
    fadeDuration: 100
});

$(document).ready(function () {
    $('.images-class').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});
