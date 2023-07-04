$(document).ready(function () {
  // section01 슬라이드
  var main_slide = new Swiper(".section01 .swiper-container", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".section01 .swiper-pagination",
      clickable: true,
    },
  });

  // section02 슬라이드
  var best_slide = new Swiper(".section02 .swiper-container", {
    direction: "horizontal",
    loop: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 4,
    breakpoints: {
      580: {
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
      },
      730: {
        slidesPerView: 2,
        spaceBetween: 0,
        simulateTouch: true,
      },
      920: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 0,
        simulateTouch: true,
      },
    },
    navigation: {
      nextEl: ".section02 .swiper-button-next",
      prevEl: ".section02 .swiper-button-prev",
      clickable: true,
    },
  });

  // section03 슬라이드
  var slideNav = $(".section03 .menu-cate li");
  $.each(slideNav, function (index, item) {
    $(this).click(function () {
      menu_slide.slideToLoop(index);
      slideNav.removeClass("on");
      $(this).addClass("on");
    });
  });
  var menu_slide = new Swiper(".section03 .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    on: {
      slideChange: function (index, item) {
        $(".section03 .menu-cate li").removeClass("on");
        $(".section03 .menu-cate li").eq(this.realIndex).addClass("on");
      },
    },
    breakpoints: {
      450: {
        slidesPerView: 1,
        spaceBetween: 0,
        simulateTouch: true,
      },
    },
    navigation: {
      nextEl: ".section03 .swiper-button-next",
      prevEl: ".section03 .swiper-button-prev",
      clickable: true,
    },
  });
});
// section025
var slideNav = $(".section025 .menu-cate li");
$.each(slideNav, function (index, item) {
  $(this).click(function () {
    swiperH.slideToLoop(index);
    slideNav.removeClass("on");
    $(this).addClass("on");
  });
});
var swiperH = new Swiper(".section025 .swiper-container-h", {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination-h",
    clickable: true,
  },
  on: {
    slideChange: function (index, item) {
      $(".section025 .menu-cate li").removeClass("on");
      $(".section025 .menu-cate li").eq(this.realIndex).addClass("on");
    },
  },
});
var swiperV = new Swiper(".section025 .swiper-container-v", {
  slidesPerView: 4,
  loop: true,
  nested: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination-v",
  //   clickable: true,
  // },
  breakpoints: {
    580: {
      slidesPerView: 1,
      spaceBetween: 0,
      simulateTouch: true,
    },
    730: {
      slidesPerView: 2,
      spaceBetween: 0,
      simulateTouch: true,
    },
    920: {
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 0,
      simulateTouch: true,
    },
  },
});

// section04
if ($(window).width() < 870) {
  $(".section04 .notice-wrapper").addClass("swiper-container");
  $(".section04 .notice-list").addClass("swiper-wrapper");
  $(".section04 .notice-list li").addClass("swiper-slide");
  var mobile = new Swiper(".section04 .notice-wrapper", {
    speed: 1000,
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      767: {
        // centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 0,
        simulateTouch: true,
      },
      600: {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 10,
        simulateTouch: true,
      },
    },
    pagination: {
      el: ".section04 .swiper-pagination",
      clickable: true,
      type: "progressbar",
    },
  });
}
