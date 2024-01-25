$(document).ready(function() {

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    $('.boxes > div').click(function () {
        if ($(this).parent().hasClass('boxesfirsttry')) {
            $('.boxes').removeClass('boxesfirsttry');
            $(this).addClass('openbox');
            $(this).find('.try').hide();
            $(this).find('.opentry').show();
            setTimeout(function () {
                $('.sweet-overlay').show();
                $('.sweet-alert').show();
            },500);
        } else if ($(this).parent().hasClass('boxeslasttry')) {
            if (!$(this).hasClass('openbox')) {
                $(this).find('.try').hide();
                $(this).find('.opentry').show();
                $(this).find('.boxtext').css('display','block');
                setTimeout(function () {
                    $('.spin-result-wrapper').show();
                    setTimeout(function () {
                        $('#boxesContainer').slideUp(250);
                        setTimeout(function () {
                            $('.order_block').slideDown(250);
                        },500)
                    },500)
                },500);
            }
        }

    });

    $('#update').click(function () {
        $('.sweet-overlay').hide();
        $('.sweet-alert').hide();
        $('.boxes').addClass('boxeslasttry');
    });

    $('.pop-up-button').click(function () {
        $('.spin-result-wrapper').hide();
        $('#countdown').timeTo(600);
    })
});
