$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){ //долбавляем класс
        $('.product__item').addClass('list');
        $('.icon-th-large').removeClass('active');
        $('.icon-th-list').addClass('active');
    });
    $('.icon-th-large').on('click', function(){
        $('.product__item').removeClass('list');
        $('.icon-th-list').removeClass('active');
        $('.icon-th-large').addClass('active');
    });

    
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
    });


    $('.products-one__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.products-one__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.products-one__tabsr .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
    

    var mixer = mixitup('.products__inner-box');


    
});