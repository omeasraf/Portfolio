function scrollToID(idName){
    document.getElementById(idName).scrollIntoView({
        behavior: 'smooth'
      });
}

$(document).ready(function() {
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)
	});
	
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 50000);
})