console.log("加载成功")
//遵从AMD规范
require.config({
  paths: {
    jquery: 'jquery-1.11.3',
    'jquery-cookie': 'jquery.cookie',
    index1: 'index1',
    cart: 'cart',
  },
  //jquery-cookie是依赖于jquery开发
  shim: {
    //设置依赖关系
    'jquery-cookie': ["jquery"]
  }
})

require(['cart','index1'], function (cart,index1) {
  cart.goShop();
  cart.isCartNum();
  cart.showGoods();
  cart.addGood();
  cart.reduceGood();
  cart.removeGood();
  cart.checkAll();
  cart.checkRadio();
  cart.showNum();
  cart.showCartNum();
  index1.index1();
  index1.navList();
})