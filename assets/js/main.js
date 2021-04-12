function scrollToID(idName) {
    $("#" + idName).addClass('pulse');
    document.getElementById(idName).scrollIntoView({
        behavior: 'smooth'
    });
    
    setTimeout(function () {
        $("#" + idName).removeClass('pulse');
    }, 3000);
}

$(document).ready(function () {
    $(window).bind('load', function () {
        $('.overlay, body').addClass('loaded');
        setTimeout(function () {
            $('.overlay').css({
                'display': 'none'
            })
        }, 2000)
    });

    setTimeout(function () {
        $('.overlay, body').addClass('loaded');
    }, 50000);
})