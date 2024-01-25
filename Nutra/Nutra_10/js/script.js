$(document).ready(function () {
    $("a, .bottom-btn").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $('.toscroll').offset().top - 10}, 400);
    });

});