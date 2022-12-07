$(function () {
  $('.header__slider-list').slick({
    fade: true,

    prevArrow: '<button class="slick-btn slick-prev"><svg class="slider-arrow" width="22px" height="22px"><use xlink:href="images/svg-sprite/sprite.svg#angle-left"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slider-arrow" width="22px" height="22px"><use xlink:href="images/svg-sprite/sprite.svg#angle-right"></use></svg></button>'
  });


  $('.advantage__slider').slick({
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,

    prevArrow: '<button class="slick-btn slick-prev"><svg class="slider-arrow" width="22px" height="22px"><use xlink:href="images/svg-sprite/sprite.svg#angle-left"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slider-arrow" width="22px" height="22px"><use xlink:href="images/svg-sprite/sprite.svg#angle-right"></use></svg></button>'
  });


  $('.terms__slider').slick({
    arrows: false,
    autoplay: true,
    dots: true
  });


  $(".accordion__content").css("display", "none");
  $(".accordion__title-box").click(function () {
    $(".accordion__title-box").not(this).removeClass("open");
    $(".accordion__title-box").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
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

  const youtubeLink = document.querySelector('.reviews__text-box'),
    result = youtubeLink.lastElementChild;

  console.log(result);
  // youtubeLink.style.cssText = 'display: none;';


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