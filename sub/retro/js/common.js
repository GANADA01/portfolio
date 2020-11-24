$(document).ready(function(){
    $('.dep2').hide();
    
    $('.gnb>li').mouseover(function(){
        $('.dep2').stop().slideDown();
    });
    $('.gnb>li').mouseout(function(){
        $('.dep2').stop().slideUp();
    });
    
    $('.main_banner').bxSlider({
                auto: true
        });
            $('.main_visual').bxSlider({
                auto: true,
                maxSlides: 3,
                moveSlides: 1,
                slideWidth: 261,
                slideMargin: 200,
                pager:false
        });
    
    $('#all_box').hide();
            $('.all_menu').click(function(){
                $('#all_box').fadeIn();
            });
            $('.close').click(function(){
                $('#all_box').fadeOut();
            });
    
});