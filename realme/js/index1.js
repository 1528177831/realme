define(['jquery'], function ($) {
  function index1() {
    $(function () {
      var oUser = $(".header").find(".nav-right")
      var oAccount = $(".header").find(".header-account")
      var oPanel = $(".header .header-account").find(".header-account-panel");
      var oHeader = $('.header');
      oUser.mouseenter(function () {
        oAccount.css("display", "block");
      });
      oPanel.mouseleave(function () {
        oAccount.css("display", "none");
      });

      $('.header .nav .nav-menu').on('mouseenter', '.active', function () {
        var index = $(this).index();
        if (index > 0 && index < 3) {
          $(this).find('.nav-submenu').addClass('visible').parent('.active').siblings('.active').find('.nav-submenu').removeClass('visible');
          $('.nav-submenu-panel').addClass('visible');
        } else {
          $('.active').find('.nav-submenu').removeClass('visible');
          $('.nav-submenu-panel').removeClass('visible');
        }
      })
      $('.header').mouseleave(function () {
        $('.nav-submenu').removeClass('visible');
        $('.nav-submenu-panel').removeClass('visible');
      })

      $(window).scroll(function () {
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 0) {
          oHeader.addClass('header-fixed');
        } else {
          oHeader.removeClass('header-fixed');
        }
      })
    })
  }
  return {
    index1
  }
})