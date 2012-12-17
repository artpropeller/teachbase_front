$(function () {
    var expand = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 71) {
            if (!expand) {
                $('#menu').addClass('fix');
                $('#menu .login').fadeIn(200);
                $('#menu .mlogo').animate({'margin-left':'0px', 'opacity':'1'}, 250);
                expand = true;
            }
        }


        else if ($(this).scrollTop() <= 71) {
            if (expand) {
                $('#menu').removeClass('fix');
                $('#menu .login').fadeOut(100);
                $('#menu .mlogo').css({'opacity':1}).animate({'margin-left':'-51px', 'opacity':'0'}, 200);
                expand = false;
            }
        }
    });

    $(window).trigger('scroll');

    $('.respondes ul.nav li').click(function () {
        if (!$(this).is('.active')) {
            $('.respondes ul.nav li').removeClass('active');
            $(this).addClass('active');
            var pos = $('.respondes ul.nav li').index($(this));
            $('.respondes .voice li').removeClass('active');
            $('.respondes .voice li:eq(' + pos + ')').addClass('active');
        }
    });

    $('.respondes ul.voice li').click(function () {
        var pos = $('.respondes ul.voice li').index($(this));
        pos = pos + 1;
        if (pos + 1 > $('.respondes ul.voice li').size()) {
            pos = 0;
        }
        $('.respondes .voice li').removeClass('active');
        $('.respondes .voice li:eq(' + pos + ')').addClass('active');
        $('.respondes ul.nav li').removeClass('active');
        $('.respondes ul.nav li:eq(' + pos + ')').addClass('active');
    });


    $('.form input[type=checkbox]').change(function () {
        $(this).next().toggleClass('active');
    });

    $('#fiz_adres').change(function () {
        if ($(this).attr('checked')) {
            $('#address').hide(0);
        }
        else {
            $('#address').show(0);
            $('#address').focus();
        }
    });

    $('#havepromo').click(function () {
        $(this).fadeOut(300, function () {
            $('#promo').fadeIn(300);
        });
        return false;
    });


    $('#period li a').click(function () {
        $('#period li').removeClass('active');
        $(this).parent().addClass('active');
        if ($(this).html() == '12') {
            $('#twoyear').css('opacity', 0);
        }
        else {
            $('#twoyear').css('opacity', 1);
        }
        return false;
    });

    $('.code a').click(function () {
        $('.code .popup').fadeIn(300);
        return false;
    });

    $('.code a.clozed').click(function () {
        $('.code .popup').fadeOut(300);
        return false;
    });

    $('.check input[type=radio]').change(function () {
        $('.check label').removeClass('active');
        $(this).prev().addClass('active');
    });

    $('#login .form input[type=checkbox]').change(function () {
        $(this).prev().toggleClass('active');


    });

    $('a.change').click(function () {
        $('#changetarif').fadeIn(300);
        return false;
    });

    $('#changetarif tr').click(function () {
        $('.plan').text($(this).find('.zag').text());
        $('.tarif strong').text($(this).find('td:eq(1)').text());
        $('.volume').text($(this).find('em').text());
        $('.dashed em').html($(this).find('.small').html());
        $('#changetarif').fadeOut(300);
        return false;
    });

    $('.lang').click(function () {
        $(this).find('.unvisible').toggle(0);
        return false;
    });

    $('.scroll').jScrollPane();

    $('.pop_up .close').click(function () {
        $('.pop_up').fadeOut(500)

    });

    $('#zapros').submit(function () {
        var c = 0;
        var f = true;
        var t = '<div class="box"><div class="left_part"></div><div class="center_part">Обязательное поле для заполнения</div>   <div class="right_part"></div><div class="clr"></div></div>';
        $(this).find('input').each(function () {
            c++;
            if (c < 5) {
                if (!$(this).val()) {
                    f = false;
                    $(this).addClass('err');
                    if ($(this).parent().find('.box').size() > 0) {
                        $(this).parent().find('.box .center_part').text('Обязательное поле для заполнения');
                    }
                    else {
                        $(this).parent().append(t);
                    }
                }

                else {
                    $(this).removeClass('err');
                    $(this).parent().find('.box').remove();
                }
            }

        });
        return f;
    });

    $('#request').click(function () {
        $('#tab').find('.pop_up').fadeIn(500);
        return false
    });

    $('.b-hover').live('click', function () {
        $("#month, #year").selectbox('close');
    });


    var card = false;
    $('#card').keyup(function (e) {
        var i = $(this);
        var types = {
            'mastercard':'.mastercard',
            'maestro':'.maestro',
            'visa':'.visa'
        };
        var v = i.val();
        if (v.trim().length > 3) {
//                получаем тип карты

            card = get_cart();
            $('.form_oplata .cards div').removeClass('active').show(0);
            $(types[card]).addClass('active');
            $('.form_oplata .cards div:not(.active)').hide(0);
        }
        if (v.trim().length < 4) {
            card = false;
            $('.form_oplata .cards div').removeClass('active').show(0);
        }
    });
    $('#card').click(function () {
        $(this).blur();
        setCaretPosition('card', $(this).val().trim().length);
    });
    $('#cod').click(function () {
        $(this).blur();
        setCaretPosition('cod', $(this).val().trim().length);
    });
    $('.ybat.continue').click(function () {
        $('#card,#dergat,#cod,#bank').each(function () {
            if (!$(this).val().trim() || !$(this).val()) {
                $(this).addClass('error');
                $(this).after('<div class="er_mes">Не заполнено поле</div>');
            }
            else {
                $(this).removeClass('error');
                $(this).parent().find('.er_mes').remove();
            }
            if ($(this).is('#card')) {
                if ($(this).val().trim().length < 19 && $(this).val().trim().length > 0)
                {
                    $(this).addClass('error');
                    $(this).after('<div class="er_mes big">Кол-во знаков введено некорректно</div>');
                }
                else {
                    $(this).parent().find('.er_mes.big').remove();
                }
            }
            if ($(this).is('#cod')) {
                if ($(this).val().trim().length < 3 && $(this).val().trim().length > 0)
                {
                    $(this).addClass('error');
                    $(this).after('<div class="er_mes big">Кол-во знаков введено некорректно</div>');
                }
                else {
                    $(this).parent().find('.er_mes.big').remove();
                }
            }


        });
    });
    /* Placeholder for IE */
    if ($.browser.msie) { // Условие для вызова только в IE
        $(".form, .search").find("input[type='text']").each(function () {
            var tp = $(this).attr("placeholder");
            $(this).attr('value', tp).css('color', '#000');
        }).focusin(function () {
                var val = $(this).attr('placeholder');
                if ($(this).val() == val) {
                    $(this).attr('value', '').css('color', '#000');
                }
            }).focusout(function () {
                var val = $(this).attr('placeholder');
                if ($(this).val() == "") {
                    $(this).attr('value', val).css('color', '#000');
                }
            });

        /* Protected send form */
        $("form").submit(function () {
            $(this).find("input[type='text']").each(function () {
                var val = $(this).attr('placeholder');
                if ($(this).val() == val) {
                    $(this).attr('value', '');
                }
            })
        });
    }

});

function get_cart() {
    var types = {
        1:'visa',
        2:'mastercard',
        3:'maestro'
    };
    return types[parseInt($('#card').val().trim()[0])];
}


function setCaretPosition(elemId, caretPos) {
    var el = document.getElementById(elemId);
    el.value = el.value;
    // ^ this is used to not only get "focus", but
    // to make sure we don't have it everything -selected-
    // (it causes an issue in chrome, and having it doesn't hurt any other browser)

    if (el !== null) {

        if (el.createTextRange) {
            var range = el.createTextRange();
            range.move('character', caretPos);
            range.select();
            return true;
        }

        else {
            // (el.selectionStart === 0 added for Firefox bug)
            if (el.selectionStart || el.selectionStart === 0) {
                el.focus();
                el.setSelectionRange(caretPos, caretPos);
                return true;
            }

            else { // fail city, fortunately this never happens (as far as I've tested) :)
                el.focus();
                return false;
            }
        }
    }
}

$(".fancybox").fancybox({
    helpers : {
        overlay : {
            css : {

            }
        }
    },
    scrollOutside: false,
    fitToView: false
});





