console.log("加载成功")
//遵从AMD规范
require.config({
  paths: {
    jquery: 'jquery-1.11.3',
    'jquery-cookie': 'jquery.cookie',
    login:'login'
  },
  //jquery-cookie是依赖于jquery开发
  shim: {
    //设置依赖关系
    'jquery-cookie': ["jquery"]
  }
})

require(['login'], function (login) {
  login.login();
  login.register();
})