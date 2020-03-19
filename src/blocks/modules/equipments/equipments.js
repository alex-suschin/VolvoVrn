$(window).on('load resize', function() {
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
});