$(document).ready(function () {
    if ($(window).width() < 1200) {
        $('.bonuses_wrap').addClass('swiper-wrapper');
        $('.bonus_item_wrap').addClass('swiper-slide');
        {
            var SliderSwiper = new Swiper('.swiper-container', {
                speed: 400,
                spaceBetween: 0,
                slidesPerView: 1,
                centeredSlides: true,
                initialSlide: 1,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },
                //loopedSlides: 15,
                loop: false,
                breakpoints: {
                    991.9: {
                        slidesPerView: 3,
                        centeredSlides: true,

                    },
                    767.8: {
                        slidesPerView: 2,
                        centeredSlides: false,
                    },
                }
            });
        }
    }

});
