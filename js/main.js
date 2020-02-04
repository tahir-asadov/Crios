$(function(){
    $('.s-s__menu').click(function(){
        $('.search-form').removeClass('show');
        $('.mobile-nav').toggleClass('show');
        if($('.mobile-nav').hasClass('show')){
            $('.mobile-overlay').addClass('fadeIn');
        }else {
            $('.mobile-overlay').removeClass('fadeIn');
        }
    });
    
    $('.s-s__search').click(function(){
        $('.mobile-nav').removeClass('show')
        $('.search-form').toggleClass('show');
        if($('.search-form').hasClass('show')){
            $('.mobile-overlay').addClass('fadeIn');
        }else {
            $('.mobile-overlay').removeClass('fadeIn');
        }
    });

    window.sr = ScrollReveal();
    sr.reveal('.offer', { duration: 300 }, 300);
});