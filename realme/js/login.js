define(['jquery'], function ($) {
  function login() {
    $(function () {
      $('#app .header').find(".header_language").click(function () {
        $("#app .header").find('.checkbox').toggle();
      })
    })
  }
  return {
    login
  }
})