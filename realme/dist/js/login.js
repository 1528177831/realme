define(['jquery'], function ($) {
  function loginStyle() {
    $(function () {
      $('#app .header').find(".header_language").click(function () {
        $("#app .header").find('.checkbox').toggle();
      })
      $('#app .auth-code-login').click(function(){
        $('#app .voicelogin').find('.password').hide();
        $('#app .voicelogin').find('.codes').show();
        $('#app .voicelogin').find('.passlogin').hide();
        $('#app .voicelogin').find('.codelogin').show();
        $(this).find('p').addClass('on');
        $('#app .password-login').find('p').removeClass('on');

      })
      $('#app .password-login').click(function(){
        $('#app .voicelogin').find('.password').show();
        $('#app .voicelogin').find('.codes').hide();
        $('#app .voicelogin').find('.passlogin').show();
        $('#app .voicelogin').find('.codelogin').hide();
        $(this).find('p').addClass('on');
        $('#app .auth-code-login').find('p').removeClass('on');
      })
    })
  }
  function login(){
    $(function(){
      $.ajax({
        type:"post",
        url:"data/login.php",
        
      })
    })
  }
  return {
    loginStyle,
  }
})