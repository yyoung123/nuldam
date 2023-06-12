// section01
$(document).ready(function () {
  var main_slide = new Swiper(".section01 .swiper-container", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    //자동 스크를링
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".section01 .swiper-pagination",
      clickable: true,
    },
  });
  // //section02 슬라이드
  var slideNav = $(".section02 .menu-cate li");
  $.each(slideNav, function (index, item) {
    $(this).click(function () {
      menu_slide.slideToLoop(index);
      slideNav.removeClass("on");
      $(this).addClass("on");
    });
  });

  var menu_slide = new Swiper(".section02 .swiper-container", {
    direction: "horizontal",
    slidesPerView: 1,
    // observer: true,
    // observeParents: true,
    speed: 1000,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    on: {
      slideChange: function (index, item) {
        $(".section02 .menu-cate li").removeClass("on");
        $(".section02 .menu-cate li").eq(this.realIndex).addClass("on");
      },
    },
    breakpoints: {
      450: {
        slidesPerView: 1,
        spaceBetween: 0,
        simulateTouch: true,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10,
        simulateTouch: true,
      },
    },
    navigation: {
      nextEl: ".section02 .swiper-button-next",
      prevEl: ".section02 .swiper-button-prev",
    },

    // pagination: {
    //   el: ".section02 .menu .swiper-pagination",
    //   clickable: true,
    // },
  });

  // // section03
  // var notice_slide = new Swiper(".section03 .swiper-container", {
  //   direction: "horizontal",
  //   // slidesPerView: 1,
  //   loop: true,
  //   spaceBetween: 20,
  //   centeredSlides: true,
  //   loop: true,
  //   // autoplay: {
  //   //   delay: 3000,
  //   //   disableOnInteraction: false,
  //   // },
  //   navigation: {
  //     nextEl: ".section03 .swiper-button-next",
  //     prevEl: ".section03 .swiper-button-prev",
  //   },
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //     },
  //   },
  //   // pagination: {
  //   //   el: ".section02 .menu .swiper-pagination",
  //   //   clickable: true,
  //   // },
  // });
  // $("#wrap .section03").waypoint(
  //   function () {
  //     $("#wrap #section03 .line_wrap").addClass("on");
  //   },
  //   { offset: "10%" }
  // );

  // const slideLis = $(".section03 .line_wrap li");
  // $.each(slideLis, function (index, item) {
  //   slideLis.mouseenter(function () {
  //     slideLis.removeClass("act");
  //     $(this).addClass("act");
  //   });
  // });
  // const moveLis = $(".section03 .line_wrap li");
  // const moveDiv = $(".section03 .smt_box");
  // $.each(moveLis, function (index, item) {
  //   $(this).mouseenter(function () {
  //     let idx = $(this).index();
  //     $(".section03 .contents-wrap").css({ background: "url(./images/main/sec02_bg_" + idx + ".png)", "background-repeat": "no-repeat", "background-position": "center center" });
  //     moveDiv.removeClass("on");
  //     moveDiv.eq(index).addClass("on");
  //   });
  // });
  // // section03 mobile
  // const tabList = $(".section03 .m_slide li");
  // const contList = $(".section03 .m_slide .tab_wrap");
  // $.each(tabList, function (index, item) {
  //   $(this).click(function () {
  //     tabList.removeClass("on");
  //     $(this).addClass("on");
  //     contList.removeClass("on");
  //     contList.eq(index).addClass("on");
  //   });
  // });

  // // section04
  // window.onload = function () {
  //   var Controller = new ScrollMagic.Controller();

  //   const wH = $(window).height() / 2;
  //   const imgH = $(".section04 .sec-cat").innerHeight();
  //   const imgBxHeigt = $(".section04").innerHeight() - imgH;
  //   var scene = new ScrollMagic.Scene({ triggerElement: ".section04", offset: wH, duration: imgBxHeigt }).setPin(".section04 .sec-cat").addTo(Controller);
  // };
});
