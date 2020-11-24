 $(document).ready(function(){
            
            
            $(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$("#gotop").fadeIn();
	} else {
		$("#gotop").fadeOut();
	}
});

$("#gotop").click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
	return false;
});
            
            

            $('.gest_slider').bxSlider({
                auto: true,
                maxSlides: 2,
                minSlides: 2,
                moveSlides: 1,
                slideWidth: 900,
                slideMargin: 5,
                pager:false
        });
            
     
            $('.mgnb_wrap').hide();
            $('.mgnb').click(function(){
                $('.mgnb_wrap').fadeIn();
            });
            $('.close').click(function(){
                $('.mgnb_wrap').fadeOut();
            });
            
            
            
            
            
        });