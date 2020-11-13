define(['jquery', 'jquery-cookie'], function ($) {
  function goShop() {
    $(function () {
      isCartNum();
      showGoods();
      addGood();
      reduceGood();
      removeGood();
      checkAll();
      checkRadio();
      showNum();
      $('.goods-detail').on('click', '.btn-black', function () {
        var id = this.id;
        console.log(id);
        var first = $.cookie("goods") === null ? true : false;
        if (first) {
          var cookieArr = [{
            id: id,
            num: 1
          }];
          $.cookie('goods', JSON.stringify(cookieArr), {
            expires: 7,
          })
        } else {
          var cookieArr = JSON.parse($.cookie('goods'));
          var same = false;
          for (var i = 0; i < cookieArr.length; i++) {
            if (id == cookieArr[i].id) {
              same = true;
              break;
            }
          }
          if (same) {
            cookieArr[i].num++;
          } else {
            let obj = {
              id: id,
              num: 1,
            }
            cookieArr.push(obj);
          }
          $.cookie('goods', JSON.stringify(cookieArr), {
            expires: 7
          })
        }
        isCartNum();
        showGoods();
      })
      //判读购物车是否有商品
      function isCartNum() {
        var frag = $.cookie('goods') === null ? true : false;
        if (frag) {
          $('.cart .empty-cart').css('display', 'block');
          $('.cart .have-cart').css('display', 'none');
        } else {
          $('.cart .empty-cart').css('display', 'none');
          $('.cart .have-cart').css('display', 'block');
        }
      }

      function showGoods() {
        $('.cart-body ul').empty();
        $.ajax({
          type: 'get',
          url: 'data/cart.json',
          success: function (arr) {
            var cookieArr = JSON.parse($.cookie('goods'));
            var newArr = [];
            if (cookieArr) {
              for (var i = 0; i < cookieArr.length; i++) {
                for (var j = 0; j < arr.length; j++) {
                  if (cookieArr[i].id == arr[j].skuId) {
                    arr[j].num = cookieArr[i].num;
                    newArr.push(arr[j]);
                  }
                }
              }
              for (var i = 0; i < newArr.length; i++) {
                var node = $(`<li>
              <div class="cart-goods-item">
                <div class="cart-header-left">
                  <div class="cart-checkbox">
                    <input class="radio" type="checkbox" id="${newArr[i].skuId}">
                    <label class="icon icon-option cart-checkbox" for="${newArr[i].skuId}"></label>
                  </div>
                  <div class="cart-product">
                    <a href="goods.html?id=${newArr[i].id}&skuId=${newArr[i].skuId}">
                      <img src="${newArr[i].img}" alt="${newArr[i].productname}">
                    </a>
                    <div class="product-info">
                      <a href="goods.html?id=${newArr[i].id}&skuId=${newArr[i].skuId}">
                        <span class="product-name">${newArr[i].productname}</span>
                      </a>
                      <span>${newArr[i].configuration}</span>
                    </div>
                  </div>
                </div>
                <div class="cart-header-right">
                  <div class="cart-price">${newArr[i].currencySymbol+' '+newArr[i].nowPrice}</div>
                  <div class="cart-count">
                    <div class="cart-count-box">
                      <span index="${newArr[i].skuId}" class="icon icon-less left"></span>
                      <label for="">${newArr[i].num}</label>
                      <span index='${newArr[i].skuId}' class="icon icon-plus right"></span>
                    </div>
                  </div>
                  <div class="cart-amount opensans-semibold">
                    <span>${newArr[i].currencySymbol+' '+(newArr[i].nowPrice * newArr[i].num)}</span>
                  </div>
                  <div class="cart-action">
                    <a href="javascript:;">
                      <span index="${newArr[i].skuId}" class="icon icon-close"></span>
                    </a>
                  </div>
                </div>
            </li>`);
                $('.cart-body ul').append(node);
              }
            }
          },
          error: function (error) {
            console.log(error);
          }
        })
      }

      function showNum() {
        var sum = 0;
        var total = 0;
        $(".radio").each(function () {
          var isChecked = $(this).prop("checked");
          if (isChecked == true) {
            var text = $(this).closest('li').find('.cart-amount span').text().substr(2);
            console.log(text);
            total += Number(text);
            var num = $(this).closest('li').find('.cart-count-box label').text();
            sum += Number(num);
          }
        });
        $('.cart .cart-footer .cart-summary-count').find('span').html(`${sum}`)
        $('.cart .cart-footer .cart-summary-amount').find('i').html(`${total}`);
      }

      function addGood() {
        $('.cart-body ul').on('click', '.icon-plus', function () {
          var id = $(this).attr('index');
          var subtotal = subtotalSum(id);
          var cookieArr = JSON.parse($.cookie('goods'));
          var index = cookieArr.findIndex(function (item) {
            return item.id === id;
          })
          cookieArr[index].num++;
          if (cookieArr[index].num > 1) {
            $(this).siblings().eq(0).removeClass('disabled');
          }
          $(this).closest('li').find('.cart-count-box label').html(cookieArr[index].num);
          $(this).closest('li').find('.cart-amount').html(`${subtotal.currencySymbol +' '+(subtotal.nowPrice * cookieArr[index].num)}`);
          $.cookie('goods', JSON.stringify(cookieArr), {
            expires: 7,
          })
        })
      }

      function reduceGood() {
        $('.cart-body ul').on('click', '.icon-less', function () {
          var id = $(this).attr('index');
          var subtotal = subtotalSum(id);
          var cookieArr = JSON.parse($.cookie('goods'));
          var index = cookieArr.findIndex(item => item.id == id);
          cookieArr[index].num == 1 ? $('.icon-less').addClass('disabled') : cookieArr[index].num--;
          $(this).closest('li').find('.cart-count-box label').html(cookieArr[index].num);
          $(this).closest('li').find('.cart-amount').html(`${subtotal.currencySymbol +' '+(subtotal.nowPrice * cookieArr[index].num)}`);
          $.cookie('goods', JSON.stringify(cookieArr), {
            expires: 7,
          })
        })
      }

      function removeGood() {
        $('.cart-body ul').on('click', '.icon-close', function () {
          var id = $(this).closest('li').remove().attr('index');
          console.log(id);
          var cookieArr = JSON.parse($.cookie('goods'));
          var index = cookieArr.findIndex(item => item.id == id);
          cookieArr.splice(index, 1);
          cookieArr.length === 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(
            cookieArr), {
            expires: 7
          })
          isCartNum();
        })
      }
      //全选
      function checkAll() {
        $('.cart-header .cart-header-left').on('click', '#checkall', function () {
          if (this.checked) {
            $('.cart-body').find('.radio').prop("checked", true);
            $('.cart-summary-submit').find('.btn').removeClass('disabled')
            showNum();
          } else {
            $('.cart-body').find('.radio').prop("checked", false);
            $('.cart-summary-submit').find('.btn').addClass('disabled');
            showNum();
          }
        })
      }

      function checkRadio() {
        $('.cart-body').on('click', '.radio', function () {
          //遍历所有复选框，然后取值进行 !非操作
          var len = $('.radio').length;
          var length = $('.radio:checked').length;
          if (len == length) {
            $('#checkall').prop('checked', true);
          } else {
            $('#checkall').prop('checked', false);
          }
          if(this.checked){
            $('.cart-summary-submit').find('.btn').removeClass('disabled')
          }else if(this.checked == false){
            $('.cart-summary-submit').find('.btn').removeClass('disabled')
          }
          if(length==0){
            $('.cart-summary-submit').find('.btn').addClass('disabled')
          }
          showNum();
        })
      }
      //获得当前的小计
      function subtotalSum(id) {
        var result = {};
        $.ajax({
          type: 'get',
          url: 'data/cart.json',
          async: false,
          success: function (arr) {
            var frag = false;
            let obj = {};
            for (var i = 0; i < arr.length; i++) {
              if (id == arr[i].skuId) {
                frag = true;
                obj.nowPrice = arr[i].nowPrice;
                obj.currencySymbol = arr[i].currencySymbol;
              }
            }
            if (frag) {
              result = obj;
            }
          }
        })
        return result;
      }
    })
  }
  return {
    goShop,
  }
})