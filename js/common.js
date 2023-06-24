const header = $("#header");
const gnbMenu = $("#header .gnb_main ul li");
const mainmenu = $("#header .gnb .depth02");
//헤더고정
$(window).scroll(function () {
  var s = $(window).scrollTop();
  if (s > 0) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
});

//메뉴바
$(document).ready(function () {
  gnbMenu.on("mouseenter", function () {
    header.addClass("on");
    mainmenu.addClass("on");
  });
  header.on("mouseleave", function () {
    header.removeClass("on");
    mainmenu.removeClass("on");
  });
});

//햄버거메뉴
$(document).ready(function () {
  if ($(window).width() < 1000) {
    $("#header .gnb .all_menu").on("click", function () {
      $("#header .mobile-menu").addClass("open");
      $("body").addClass("non-scroll");
    });
    $("#header .btn-close").on("click", function () {
      $("#header .mobile-menu").removeClass("open");
      $("body").removeClass("non-scroll");
    });
    $("#header .mobile-bg").on("click", function () {
      $("#header .mobile-menu").removeClass("open");
      $("body").removeClass("non-scroll");
    });
    const depth01 = $("header .mobile-menulist .main-menu");
    const depth02 = $("#header .mobile-menulist .depth02");
    $.each(depth01, function (index, item) {
      const siblings = $(this).next();
      const openmenu = $(this).parent().siblings().find(depth01);
      const openul = $(this).parent().siblings().find(depth02);
      $(this).on("click", function (e) {
        $(this).toggleClass("on");
        openmenu.removeClass("on");
        openul.slideUp();
        if (siblings.length > 0) {
          e.preventDefault();
          siblings.stop().slideToggle();
        }
      });
    });
  }
});

// const depth_tit = $("#header .ham-menu .h-menulist .depth01 .depth01_tit");
// const hammenu = $("#header .ham-menu .h-menulist ul");
// $(document).ready(function () {
//   if ($(window).width() < 989) {
//     $("#header .gnb .all_menu").on("click", function () {
//       $(".ham-menu").addClass("act");
//       $("body").addClass("overflow");
//     });
//     $("#header .close-btn").on("click", function () {
//       $(".ham-menu").removeClass("act");
//       $("body").removeClass("overflow");
//     });
//     $("#header .ham-back").on("click", function () {
//       $(".ham-menu").removeClass("act");
//       $("body").removeClass("overflow");
//     });

//     $.each(depth_tit, function (index, item) {
//       const siblings = $(this).next();
//       const openmenu = $(this).parent().siblings().find(".depth01_tit");
//       const openul = $(this).parent().siblings().find("ul");
//       $(this).on("click", function (e) {
//         $(this).toggleClass("act");
//         openmenu.removeClass("act");
//         openul.slideUp();
//         if (siblings.length > 0) {
//           e.preventDefault();
//           siblings.stop().slideToggle();
//         }
//       });
//     });
//   }
// });

// footer
// $("#footer .family_site").on("click", function () { });
