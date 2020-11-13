define(['jquery'], function ($) {
  function login() {
    $(function () {
      $('#app .header').find(".header_language").click(function () {
        $("#app .header").find('.checkbox').toggle();
      })
      $('#app .auth-code-login').click(function () {
        $('#app .voicelogin').find('.password').hide();
        $('#app .voicelogin').find('.codes').show();
        $('#app .voicelogin').find('.passlogin').hide();
        $('#app .voicelogin').find('.codelogin').show();
        $(this).find('p').addClass('on');
        $('#app .password-login').find('p').removeClass('on');

      })
      $('#app .password-login').click(function () {
        $('#app .voicelogin').find('.password').show();
        $('#app .voicelogin').find('.codes').hide();
        $('#app .voicelogin').find('.passlogin').show();
        $('#app .voicelogin').find('.codelogin').hide();
        $(this).find('p').addClass('on');
        $('#app .auth-code-login').find('p').removeClass('on');
      })
      $('#app').find('#passLogin').click(function () {
        loginPass();
      })

      $('#app').find('#register').click(function () {
        register();
      })

      function loginPass() {
        $(function () {
          var username = $("#app").find('#username').val();
          var password = $("#app").find('#password').val();
          if (username && password) {
            $.ajax({
              type: "post",
              url: "../data/login.php",
              data: {
                username: username,
                password: password
              },
              success: function (result) {
                switch (result) {
                  case '1':
                    window.open('index.html', '_self');
                    break;
                  case '0':
                    alert("登录失败");
                    break;
                }

              },
              error: function (msg) {
                console.log(msg);
              }
            })
          } else {
            alert("请重新输入");
          }
        })
      }

      function register() {
        $(function () {
          var username = $("#app").find('#username').val();
          var password = $("#app").find('#registerpass').val();
          if (username && password) {
            $.ajax({
              type: "post",
              url: "../data/register.php",
              data: {
                username: username,
                password: password
              },
              success: function (result) {
                console.log(result);
                switch (result) {
                  case '1':
                    alert("注册成功！");
                    break;
                  case '0':
                    alert("注册失败");
                    break;
                }
              },
              error: function (msg) {
                console.log(msg);
              }
            })
          } else {
            alert("您输入的有误");
          }

        })
      }
    })
  }
  return {
    login,
  }
})