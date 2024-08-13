$(function () {
  $(".menu a, .go-top").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="стрелка в лево"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="стрелка в право"</button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".menu__btn, .menu a").on("click", function () {
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });

  var mixer = mixitup(".portfolio__content");
});
