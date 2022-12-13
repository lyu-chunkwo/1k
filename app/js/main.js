$(function () {
  $('.header__slider-list').slick({
    fade: true,

    responsive: [
      {
        breakpoint: 1123,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ],

    prevArrow: '<button class="slick-btn slick-prev"><svg class="slider-arrow" width="22px" height="22px"><use xlink:href="images/svg-sprite/sprite.svg#angle-left"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slider-arrow" width="22px" height="22px"><use xlink:href="images/svg-sprite/sprite.svg#angle-right"></use></svg></button>'
  });


  $('.advantage__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1123,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 867,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 589,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ],

    prevArrow: '<button class="slick-btn slick-prev"><svg class="slider-arrow" width="15px" height="15px"><use xlink:href="images/svg-sprite/sprite.svg#angle-left"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slider-arrow" width="15px" height="15px"><use xlink:href="images/svg-sprite/sprite.svg#angle-right"></use></svg></button>'
  });


  $('.terms__slider').slick({
    arrows: false,
    autoplay: true,
    dots: true
  });


  $('.partners__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 478,
        settings: {
          slidesToShow: 1,
        }
      }
    ],

    prevArrow: '<button class="slick-btn slick-prev"><svg class="slider-arrow" width="15px" height="15px"><use xlink:href="images/svg-sprite/sprite.svg#angle-left"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slider-arrow" width="15px" height="15px"><use xlink:href="images/svg-sprite/sprite.svg#angle-right"></use></svg></button>'
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
    if (scrollTop >= 50) {
      $('.header__nav-wrapper').addClass("fixed");
    }
    else {
      $('.header__nav-wrapper').removeClass("fixed");
    }
  });


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 750) {
      $('.scroll').addClass("active");
    }
    else {
      $('.scroll').removeClass("active");
    }
  });


  $('.header__mobile-btn').on('click', function () {
    $('.header__menu-list, .header__mobile-btn').toggleClass('active');
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