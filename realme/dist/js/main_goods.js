console.log("加载成功")
//遵从AMD规范
require.config({
  paths: {
    jquery: 'jquery-1.11.3',
    'jquery-cookie': 'jquery.cookie',
    banner: 'banner',
    index1: 'index1',
    goods: 'goods',
    goodLists: 'goodLists',
    goodList: 'goodList',
    cart:'cart',
  },
  //jquery-cookie是依赖于jquery开发
  shim: {
    //设置依赖关系
    'jquery-cookie': ["jquery"]
  }
})

require(['banner', 'index1', 'goods', 'goodLists', 'goodList', 'cart'], function ( banner, index1, goods, goodLists, goodList ,cart) {
  banner.banner();
  banner.magnify();
  index1.index1();
  index1.navList();
  goods.goods();
  goodLists.goodLists();
  goodList.Detail();
  cart.showCartNum();
  cart.goShop();
})