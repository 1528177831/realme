define(['jquery'], function ($) {
  function phoneDetail() {
    $(function () {
      //获取url中的参数
      function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
      }
      //接收URL中的参数skuId
      var id = getUrlParam('skuId');
      $.ajax({
        type: 'get',
        url: 'data/accessories.json',
        dataType: 'json',
        success: function (arr) {
          var overviewUri = [];
          var webOverview = [];
          var productName;
          var attrVal;
          var skuName;
          var price;
          var backgroundcolor;
          var color;
          var configuration;
          for (var i = 0; i < arr[0].phone.length; i++) {
            if (id == arr[0].phone[i].skuId) {
              overviewUri = arr[0].phone[i].overviewUri;
              webOverview = arr[0].phone[i].webOverview;
              productName = arr[0].phone[i].productName;
              attrVal = arr[0].phone[i].attrVal;
              skuName = arr[0].phone[i].skuName;
              price = arr[0].phone[i].price;
              backgroundcolor = arr[0].phone[i].backgroundcolor;
              color = arr[0].phone[i].color;
              configuration = arr[0].phone[i].configuration;
            }
          }
          for (var i = 0; i < overviewUri.length; i++) {
            var node = $(`
                    <div class="swiper-slide">
                      <img src="${overviewUri[i]}" alt="">
                    </div>
              `);
            $('#swiper-container-magnify .swiper-wrapper').append(node);
          }
          for (var i = 0; i < overviewUri.length; i++) {
            var node = $(`
                    <div class="swiper-slide">
                      <img src="${overviewUri[i]}" alt="">
                    </div>
              `);
            $('.bigbox .swiper-wrapper').append(node);
          }
          for (var i = 0; i < overviewUri.length; i++) {
            var node = $(`
                    <div class="swiper-thumb">
                      <img src="${overviewUri[i]}" alt="">
                    </div>
              `);
            $('.swiper-thumbs').append(node);
          }
          for (var i = 0; i < webOverview.length; i++) {
            var node = $(`<img src="${webOverview[i]}" alt="">`);
            $('.goods-overview .wrapper').append(node);
          }
          $('.goods-product-name').html(productName);
          $('.goods-product-attrval').html(attrVal);
          $('.sticky-header').append($(`<div class="wrapper">
        <div class="sticky-container">
          <div class="category-left">
            <img src="${overviewUri[0]}" alt="">
            <div class="category-detail">
              <span class="main">${skuName}</span>
            </div>
          </div>
          <div class="category-right">
            <div class="category-detail">
              <span class="main">
                ¥${price}
                <span></span>
              </span>
              <span class="other">x 1</span>
            </div>
            <a href="javascript:;" class="btn btn-primary">立即购买</a>
          </div>
        </div>
      </div>`));
          $('.countdown-price').html($(`<p>
                    <span>¥</span>
                    <span>${price}</span>
                  </p>`));
          $('.goods-select-color .goods-select-item').html($(`<span class="goods-color"
                  style="background: ${backgroundcolor};"></span>
                <span>${color}</span>`));
          $('.goods-select-configuration .goods-select-item').html($(`<span>${configuration}</span>`));
          $('.goods-huabei-group').html($(`
          <div class="goods-huabei-item selected">
                <div class="goods-huabei-price">
                  ¥${parseFloat(price/3).toFixed(3)}&nbsp;x&nbsp;3期
                </div>
                <div class="goods-huabei-fee">
                  免手续费
                </div>
              </div>
              <div class="goods-huabei-item">
                <div class="goods-huabei-price">
                  ${parseFloat(price/6).toFixed(3)}&nbsp;x&nbsp;6期
                </div>
                <div class="goods-huabei-fee">
                  手续费¥${parseFloat(price*0.0045).toFixed(3)}/期
                </div>
              </div>
              <div class="goods-huabei-item">
                <div class="goods-huabei-price">
                  ${parseFloat(price/12).toFixed(3)}&nbsp;x&nbsp;12/期
                </div>
                <div class="goods-huabei-fee">
                  手续费¥${parseFloat(price*0.0075).toFixed(3)}/期
                </div>
              </div>`));
          $('.price').html(`${price}`);
        }
      })
    })
  }

  function otherDetail() {
    $(function () {
      //获取url中的参数
      function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
      }
      //接收URL中的参数skuId
      var id = getUrlParam('skuId');
      $.ajax({
        type: 'get',
        url: 'data/accessories.json',
        dataType: 'json',
        success: function (arr) {
          var overviewUri = [];
          var webOverview = [];
          var productName;
          var attrVal;
          var skuName;
          var price;
          var backgroundcolor;
          var color;
          var configuration;
          console.log(arr[1].other)
          for (var i = 0; i < arr[1].other.length; i++) {
            if (id == arr[1].other[i].skuId) {
              overviewUri = arr[1].other[i].overviewUri;
              webOverview = arr[1].other[i].webOverview;
              productName = arr[1].other[i].productName;
              attrVal = arr[1].other[i].attrVal;
              skuName = arr[1].other[i].skuName;
              price = arr[1].other[i].price;
              backgroundcolor = arr[1].other[i].backgroundcolor;
              color = arr[1].other[i].color;
              configuration = arr[1].other[i].configuration;
            }
          }
          for (var i = 0; i < overviewUri.length; i++) {
            var node = $(`
                    <div class="swiper-slide">
                      <img src="${overviewUri[i]}" alt="">
                    </div>
              `);
            $('#swiper-container-magnify .swiper-wrapper').append(node);
          }
          for (var i = 0; i < overviewUri.length; i++) {
            var node = $(`
                    <div class="swiper-slide">
                      <img src="${overviewUri[i]}" alt="">
                    </div>
              `);
            $('.bigbox .swiper-wrapper').append(node);
          }
          for (var i = 0; i < overviewUri.length; i++) {
            var node = $(`
                    <div class="swiper-thumb">
                      <img src="${overviewUri[i]}" alt="">
                    </div>
              `);
            $('.swiper-thumbs').append(node);
          }
          for (var i = 0; i < webOverview.length; i++) {
            var node = $(`<img src="${webOverview[i]}" alt="">`);
            $('.goods-overview .wrapper').append(node);
          }
          $('.goods-product-name').html(productName);
          $('.goods-product-attrval').html(attrVal);
          $('.sticky-header').append($(`<div class="wrapper">
        <div class="sticky-container">
          <div class="category-left">
            <img src="${overviewUri[0]}" alt="">
            <div class="category-detail">
              <span class="main">${skuName}</span>
            </div>
          </div>
          <div class="category-right">
            <div class="category-detail">
              <span class="main">
                ¥${price}
                <span></span>
              </span>
              <span class="other">x 1</span>
            </div>
            <a href="javascript:;" class="btn btn-primary">立即购买</a>
          </div>
        </div>
      </div>`));
          $('.countdown-price').html($(`<p>
                    <span>¥</span>
                    <span>${price}</span>
                  </p>`));
          $('.goods-select-color .goods-select-item').html($(`<span class="goods-color"
                  style="background: ${backgroundcolor};"></span>
                <span>${attrVal}</span>`));
          $('.goods-select-configuration .goods-select-item').html($(`<span>${configuration}</span>`));
          $('.goods-huabei-group').html($(`
          <div class="goods-huabei-item selected">
                <div class="goods-huabei-price">
                  ¥${parseFloat(price/3).toFixed(3)}&nbsp;x&nbsp;3期
                </div>
                <div class="goods-huabei-fee">
                  免手续费
                </div>
              </div>
              <div class="goods-huabei-item">
                <div class="goods-huabei-price">
                  ${parseFloat(price/6).toFixed(3)}&nbsp;x&nbsp;6期
                </div>
                <div class="goods-huabei-fee">
                  手续费¥${parseFloat(price*0.0045).toFixed(3)}/期
                </div>
              </div>
              <div class="goods-huabei-item">
                <div class="goods-huabei-price">
                  ${parseFloat(price/12).toFixed(3)}&nbsp;x&nbsp;12/期
                </div>
                <div class="goods-huabei-fee">
                  手续费¥${parseFloat(price*0.0075).toFixed(3)}/期
                </div>
              </div>`));
          $('.price').html(`${price}`);
        }
      })
    })
  }
  return {
    phoneDetail,
    otherDetail
  }
})