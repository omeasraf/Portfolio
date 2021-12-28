function scrollToID(idName) {
    $("#" + idName).addClass('pulse');
    document.getElementById(idName).scrollIntoView({
        behavior: 'smooth'
    });
    
    setTimeout(function () {
        $("#" + idName).removeClass('pulse');
    }, 3000);
}
