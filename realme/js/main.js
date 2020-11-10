console.log("加载成功")
//遵从AMD规范
require.config({
  paths: {
    jquery: 'jquery-1.10.1.min',
    'jquery-cookie': 'jquery.cookie',
    banner: 'banner',
    index1: 'index1',
    goods: 'goods'
  },
  //jquery-cookie是依赖于jquery开发
  shim: {
    //设置依赖关系
    'jquery-cookie': ["jquery"]
  }
})

require(['banner', 'index1', 'goods'], function (banner, index1, goods) {
  banner.banner();
  banner.magnify();
  index1.index1();
  goods.goods();
  banner.scroll();
})