import "./import/modules";
import "./import/slick.min";
import "./import/jquery.formstyler.min";
import "./import/jQuery.Brazzers-Carousel.min";
$(document).ready(function() {

    $('.slider-top').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 576,
            settings: {
                settings: "unslick"
            }
        }]
    });

    $('.slider-news').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true,
        infinite: false,
        swipeToSlide: true,
        arrows: false,
        responsive: [{
                breakpoint: 1751,
                settings: {
                    infinite: true,
                    centerMode: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    settings: "unslick"
                }
            }
        ]
    });

    $('.auto-in-stock__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        variableWidth: true,
        arrows: true,
        responsive: [{
                breakpoint: 1751,
                settings: {
                    infinite: true,
                    centerMode: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    settings: "unslick"
                }
            }
        ]
    });

    $('.auto-description__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });

    $('.slider-car-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: false,
        arrows: false,
        fade: true,
        swipe: false,
        arrows: false,
        asNavFor: '.slider-car-thumbs'
    });

    $('.slider-car-thumbs').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-car-big',
        dots: false,
        vertical: true,
        infinite: true,
        verticalSwiping: true,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1441,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    swipe: true
                }
            },
            {
                breakpoint: 676,
                settings: {
                    infinite: true,
                    vertical: true,
                    dots: true,
                    rows: 2,
                    slidesPerRow: 3,
                    verticalSwiping: false,
                    swipeToSlide: true,
                    swipe: true,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    touchMove: false
                }
            }
        ]
    });

    $('.hamburger').click(function() {
        $(this).toggleClass('hamburger_active');
        $('body, html').addClass('ov_h');
        if ($(this).hasClass('hamburger_active')) {
            $('.top-menu').addClass('top_menu_active');
            $('.top-menu > li > a').each(function(index, el) {
                setTimeout(function() {
                    $(el).addClass('showed');
                }, index * 70);
            });
        } else {
            var time = 0;
            $($('.top-menu > li > a').get().reverse()).each(function(index, el) {
                time = index * 70;
                setTimeout(function() {
                    $(el).removeClass('showed');
                }, time);
            });
            setTimeout(function() {
                $('body, html').removeClass('ov_h');
                $('.top-menu').removeClass('top_menu_active');
                $('.top-menu').find('.showed').removeClass('showed');
            }, $('.top-menu > li > a').length * 70);
        }
    });

    $(".auto-run-card__item--img").brazzersCarousel();

    $('.btn-popup').click(function() {
        $('#popup').addClass('popup_active');
        $('#popup').find('.popup').addClass('popup_active');
    });

    $('.close-popup').click(function() {
        $('#popup').removeClass('popup_active');
        $('#popup').find('.popup').removeClass('popup_active');
    });


    $(document).mouseup(function(e) {
        var container = $('.popup');
        if (container.hasClass('popup_active')) {
            if (container.has(e.target).length === 0) {
                $('#popup').removeClass('popup_active');
                $('#popup').find('.popup').removeClass('popup_active');
            }
        }
    });


    // $('.tmb-wrap-table').mouseout(function() {
    //     $(this).children('div').removeClass('active');
    //     $(this).children('div:first-child').addClass('active');
    //     $('.image-wrap img').hide();
    //     $('.image-wrap img:first-child').show();
    // })

    $('input[type=tel]').bind("change keyup input click", function() {
        if (this.value.match(/[^\+0-9]/g)) {
            this.value = this.value.replace(/[^\+0-9]/g, '');
        }
    });

    $('input[type=tel]').on('focus', function() {
        if ($(this).val() == '') $(this).val('+7');
    });

    $('input[type=tel]').on('blur', function() {
        if ($(this).val() == '+7') $(this).val('');
    });



    setTimeout(function() {
        $('.select-sidebar, .checkbox').styler();

    }, 100)

    $('.button-sort').click(function() {
        if ($(this).hasClass('sort-up-to-down')) {
            $(this).removeClass('sort-up-to-down');
            $(this).addClass('sort-down-to-up');
        } else if ($(this).hasClass('sort-down-to-up')) {
            $(this).removeClass('sort-down-to-up');
            $(this).addClass('sort-up-to-down');
        }

    });




    $(window).on('load resize orientationchange', function() {
        var width = $(window).width();

        if (width > '740') {
            $('.equipments-tabs a').click(function() {
                $('.equipments-tabs').find('.active').removeClass('active');
                $(this).addClass('active');
                $('.modifications-box').find('.modifications-box__item').hide();
                $('#' + $(this).data('switch')).show();
            });
        }

        if (width <= '740') {
            $("div.modifications-box").remove();

            $('.equipments-tabs a').click(function() {
                $('.equipments-tabs').find('.active').removeClass('active');
                $(this).addClass('active');
                $('.modifications-box__mobile').find('.modifications-box__item-mobile').hide();
                $('#' + $(this).data('switch')).show();
            });

            $('.table-tabs a').click(function() {
                $(this).parents('.table-tabs').find('.active').removeClass('active');
                $(this).addClass('active');
                $(this).parents('.table-tabs').parents('.modifications-box__item-mobile').find('.modifications-table__mobile').hide();
                $('#' + $(this).data('switch')).show();
            });
        }

        if (width < '1000') {
            $('.header nav li i').click(function() {
                $(this).parents('li').toggleClass('active-drop');
            });

            $('.footer nav li i').click(function() {
                $(this).parents('li').toggleClass('active-drop');
            });
        }

        if (width < '676') {
            $('.slider-car-big').slick('unslick');
            $('.slider-car-thumbs').slick('unslick');

            $('.slider-car-thumbs--mobile .slider-car-thumbs--item--mobile').click(function() {
                $('.slider-car-thumbs--mobile').find('.active').removeClass('active');
                $(this).addClass('active');
                $('.slider-car-big--mobile').find('.slider-car-big--item--mobile').hide();
                $('#' + $(this).data('switch')).show();
            });
        }



        // if (width > '575' && width < '1750') {
        //     $(".slider-news").slick('reinit');
        //     $(".auto-in-stock__slider").slick('reinit');
        // }

        if (width < '576') {
            $('.slider-news').slick('unslick');
            $('.auto-in-stock__slider').slick('unslick');

            $("div.auto-credit-table").remove();
            $("div.slider-top").remove();
            $("div.color-box-desctop").remove();

            $('.auto-sale-sort').prependTo($(".filter"));
            $('.auto-run-sort').prependTo($(".filter"));
        }
    });




});