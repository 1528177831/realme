define(['jquery'], function ($) {
  function index1() {
    $(function () {
      var oUser = $(".header").find(".nav-right")
      var oAccount = $(".header").find(".header-account")
      var oPanel = $(".header .header-account").find(".header-account-panel");
      var oLi = $(".header .nav .nav-menu").find(".active");
      console.log(oLi.length);
      var oSubmenu = $(".header .nav .nav-menu").find(".nav-submenu");
      oUser.mouseover(function () {
        oAccount.css("display", "block");
      });
      oPanel.mouseleave(function () {
        oAccount.css("display", "none");
      });

      oLi.mouseover(function () {
        oSubmenu.removeClass('visible')
          .eq(oLi.index(this))
          .addClass('visible');
      })
    })
  }
  return {
    index1
  }
})