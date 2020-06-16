$(document).ready(function () {
    $('input[type=tel]').mask('0(00) 000 00 00');
    $('select').styler();
    $('.calc_1 .ornage_btn').click(function (event) {
        event.preventDefault();
        $('.calc_1').removeClass('active_calc');
        $('.calc_2').addClass('active_calc');
    });
    $('.calc_2 .ornage_btn').click(function (event) {
        event.preventDefault();
        $('.calc_1').addClass('active_calc');
        $('.calc_2').removeClass('active_calc');
    });
    $('.menu_btn_wrap').click(function () {
        $('.menu').slideDown(400).css('display', 'flex');
        $('.menu_right > *').css('transform', 'translateX(0)')
        $('.menu li').addClass('li_transform')


    });
    $('.menu .close_btn').click(function () {
        $('.menu').slideUp(400);
        $('.menu_right > *').css('transform', 'translateX(100vw)');
        $('.menu li').removeClass('li_transform')
    });
    // sticky

    if ($('main').hasClass('home_page')) {
        (function () {
            // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
            var a = document.querySelector(".side_nav"),
                b = null; // селектор блока, который нужно закрепить
            window.addEventListener("scroll", Ascroll, false);
            document.body.addEventListener("scroll", Ascroll, false); // если у html и body высота равна 100%
            function Ascroll() {
                if (b == null) {
                    // добавить потомка-обёртку, чтобы убрать зависимость с соседями
                    var Sa = getComputedStyle(a, ""),
                        s = "";
                    for (var i = 0; i < Sa.length; i++) {
                        // перечислить стили CSS, которые нужно скопировать с родителя
                        if (
                            Sa[i].indexOf("overflow") == 0 ||
                            Sa[i].indexOf("padding") == 0 ||
                            Sa[i].indexOf("border") == 0 ||
                            Sa[i].indexOf("outline") == 0 ||
                            Sa[i].indexOf("box-shadow") == 0 ||
                            Sa[i].indexOf("background") == 0
                        ) {
                            s += Sa[i] + ": " + Sa.getPropertyValue(Sa[i]) + "; ";
                        }
                    }
                    b = document.createElement("div"); // создать потомка
                    b.style.cssText =
                        s + " box-sizing: border-box; width: " + a.offsetWidth + "px;";
                    a.insertBefore(b, a.firstChild); // поместить потомка в цепляющийся блок первым
                    var l = a.childNodes.length;
                    for (var i = 1; i < l; i++) {
                        // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
                        b.appendChild(a.childNodes[1]);
                    }
                    a.style.height = b.getBoundingClientRect().height + "px"; // если под скользящим элементом есть другие блоки, можно своё значение
                    a.style.padding = "0";
                    a.style.border = "0"; // если элементу присвоен padding или border
                }
                if (a.getBoundingClientRect().top <= 0) {
                    // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
                    b.className = "sticky";
                } else {
                    b.className = "";
                }
                window.addEventListener(
                    "resize",
                    function () {
                        a.children[0].style.width = getComputedStyle(a, "").width;
                    },
                    false
                ); // если изменить размер окна браузера, измениться ширина элемента
            }
        })();
        $(window).scroll(function () {
            if ($(this).scrollTop() >= $('#new_proj').offset().top - 50) {
                $(".side_nav li").removeClass('active');
                $(".side_nav li:nth-child(1)").addClass('active');
            }
            if ($(this).scrollTop() >= $('#services').offset().top - 50) {
                $(".side_nav li").removeClass('active');
                $(".side_nav li:nth-child(2)").addClass('active');
            }
            if ($(this).scrollTop() >= $('#calc').offset().top - 50) {
                $(".side_nav li").removeClass('active');
                $(".side_nav li:nth-child(3)").addClass('active');
            }
            if ($(this).scrollTop() >= $('#done_proj').offset().top - 50) {
                $(".side_nav li").removeClass('active');
                $(".side_nav li:nth-child(4)").addClass('active');
            }
            if ($(this).scrollTop() >= $('#home_news').offset().top - 50) {
                $(".side_nav li").removeClass('active');
                $(".side_nav li:nth-child(5)").addClass('active');
            }
            if ($(this).scrollTop() < $('#calc').offset().top - 200) {
                $(".side_nav li").removeClass('dark')
            }
            if ($(this).scrollTop() < $('#services').offset().top + 200) {
                $(".side_nav li").removeClass('one_dark')
            }
            if ($(this).scrollTop() >= $('#services').offset().top + 200) {
                $(".side_nav li").addClass('one_dark')
            }
            if ($(this).scrollTop() >= $('#calc').offset().top - 200) {
                $(".side_nav li").addClass('dark')
                $(".side_nav li").removeClass('one_dark')

            }
            if ($(this).scrollTop() >= $('#home_news').offset().top + 200) {
                $(".side_nav li").removeClass('dark')
            }
        });
    }

    var selects = $('.calc select');
    var inputs = $('.calc input')
    var btn1 = $('.calc_1 .ornage_btn');
    var btn2 = $('.calc_2 .ornage_btn');

    function calcBtn(btn, fills) {
        var check;
        $(fills).each(function (index, element) {
            if (element.value.length != 0 && element.validity.valid == true) {
                check = true;
            }
            else {
                check = false;
            }
            return check;
        });
        if (check) {
            btn.css('background-color', '#EFC94F');
            btn.removeAttr("disabled", true);

        }
        else {
            btn.attr("disabled", true);
            btn.css('background-color', '#4F4F4F');
        }
    }
    $(selects).change(function () {
        calcBtn(btn1, selects);
    });
    $(inputs).keyup(function () {
        calcBtn(btn2, inputs);
    });
    if ($(window).width() > 1199.9) {
        $(".seo_content").mCustomScrollbar({
            theme: "minimal"
        });
    }

    $(".side_nav li a").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr("href"),
            top = $(id).offset().top;

        $("body,html").animate({ scrollTop: top }, 1000);
    });
});

