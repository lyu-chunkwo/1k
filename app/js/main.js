$(function () {
  $('.header__slider-list').slick({
    fade: true,

    prevArrow: '<button class="slick-btn slick-prev"><svg class="slider-arrow" width="22px" height="22px"><use xlink:href="images/svg-sprite/sprite.svg#angle-left"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slider-arrow" width="22px" height="22px"><use xlink:href="images/svg-sprite/sprite.svg#angle-right"></use></svg></button>'
  });


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 450) {
      $('.scroll').addClass("active");
    }
    else {
      $('.scroll').removeClass("active");
    }
  });


  $('.menu__btn').on('click', function () {
    $('.menu__list, .menu__btn').toggleClass('active');
    $('body').toggleClass('lock'); // ! No scroll
  });

  $('.header__search-toggle').on('click', function () {
    $('.header__form').toggleClass('active');
  });


  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true,        // default
      delay: 5000
    }
  );

  wow.init();
});