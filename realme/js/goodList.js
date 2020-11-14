define(['jquery'], function ($) {
  function Detail() {
    //获取url中的参数
    function getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg); //匹配目标参数
      if (r != null) return unescape(r[2]);
      return null; //返回参数值
    }
    //接收URL中的参数skuId
    var id = getUrlParam('id');
    var skuId = getUrlParam('skuId');
    if (id == 1) {
      phoneDetail(skuId)
    } else if (id == 2) {
      otherDetail(skuId)
    }

    function phoneDetail(skuId) {
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
          var timeEnd;
          for (var i = 0; i < arr[0].phone.length; i++) {
            if (skuId == arr[0].phone[i].skuId) {
              overviewUri = arr[0].phone[i].overviewUri;
              webOverview = arr[0].phone[i].webOverview;
              productName = arr[0].phone[i].productName;
              attrVal = arr[0].phone[i].attrVal;
              skuName = arr[0].phone[i].skuName;
              price = arr[0].phone[i].price;
              backgroundcolor = arr[0].phone[i].backgroundcolor;
              color = arr[0].phone[i].color;
              configuration = arr[0].phone[i].configuration;
              timeEnd = arr[0].phone[i].timeEnd;
            }
          }
          timer(timeEnd);
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
            $('#bigbox .swiper-wrapper').append(node);
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
          var node = $(`<span class="goods-product-name">${productName}</span>`);
          $('.nav-title').append(node);
          var node = $(`<div class="goods-basic">
            <h1 class="goods-title">
              <span class="goods-product-name">${productName}</span>
              <span class="brackets">（</span>
              <span>${attrVal}</span>
              <span>）</span>
            </h1>
            <div class="limit-notice opensans">
              <div class="notice-content countdown">
                <div class="countdown-price opensans-semiblod">
                  <p>
                    <span>¥</span>
                    <span>${price}</span>
                  </p>
                </div>
                <div class="countdown-time">
                  <span>距离结束还剩:</span>
                  <div class="countdown-detail">
                    <span class="countdown-day">5 天</span>
                    <div class="countdown-hms">
                      <span class="opensans-semibold">07</span>
                      :
                    </div>
                    <div class="countdown-hms">
                      <span class="opensans-semibold">02</span>
                      :
                    </div>
                    <div class="countdown-hms">
                      <span class="opensans-semibold">49</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="goods-activity">
            <ul>
              <li>
                <div>
                  <div class="label">
                    优惠
                    <span></span>
                  </div>
                  <span class="desc" style="color: rgb(208,2,27);">
                    双11狂欢新品抢购直降251
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <div class="label">
                    发货
                    <span></span>
                  </div>
                  <span class="desc">
                    订单支付成功后48小时内发货，顺丰包邮
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <div class=" label">
                    回收
                    <span></span>
                  </div>
                  <span class="desc">
                    旧机换新机，享最高额外返现 500 元
                  </span>
                </div>
                <a href="https://www.realme.com/legal/warranty-terms" class="link">
                  立即参与
                  <span class="icon icon-arrow-r"></span>
                </a>
              </li>
              <li>
                <div>
                  <div class=" label">
                    价保
                    <span></span>
                  </div>
                  <span class="desc">
                    王炸11.11，全程价保，买贵补差价！
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <a href="javascript:;" class="goods-service">
            <span class="icon icon-delivery-free"></span>
            <label for="">7天无理由退换</label>
            <span class="icon icon-safe-payment"></span>
            <label for="">安全支付</label>
            <span class="icon icon-huabei-black"></span>
            <label for="">花呗分期</label>
          </a>
          <div class="goods-select">
            <h2 class="goods-select-title">颜色</h2>
            <div class="goods-select-group">
              <a href="javascript:;" class="goods-select-item selected">
                <span class="goods-color"
                  style="background: ${backgroundcolor};"></span>
                <span>${color}</span>
              </a>
            </div>
            <h2 class="goods-select-title">版本</h2>
            <div class="goods-select-group">
              <a href="javascript:;" class="goods-select-item selected">
                <span>${configuration}</span>
              </a>
            </div>
            <h2 class="goods-select-title">数量</h2>
            <div class="goods-select-group">
              <div class="goods-select-count">
                <a href="javascript:;" class="disabled">
                  <span class="icon icon-less-s"></span>
                </a>
                <span>1</span>
                <a href="javascript:;" class="disabled">
                  <span class="icon icon-plus-s"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="goods-accessory">
            <h2 class="goods-accessory-title">
              优惠购
              <div class="goods-accessory-arrows">
                <a href="javascript:;" class="disabled">
                  <span class="icon icon-arrow-l"></span>
                </a>
                <a href="javascript:;">
                  <span class="icon icon-arrow-r"></span>
                </a>
              </div>
            </h2>
          </div>
          <div class="goods-huabei">
            <h2 class="goods-huabei-title">
              花呗分期
              <i class="icon icon-huabei"></i>
              <span>该商品最高可享3期分期</span>
              <a href="" target="_blank">什么是花呗分期?</a>
            </h2>
            <div class="goods-huabei-group">
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
              </div>
            </div>
            </div>
          </div>
          <div class="goods-summary">
            <div class="goods-summary-list">
              <ul>
                <li>
                  <label for="">${attrVal}</label>
                  <span class="number">x 1</span>
                  <span class="price">¥${price}</span>
                </li>
              </ul>
            </div>
            <div class="goods-summary-bar btn-groups-new">
              <div class="goods-summary-count">
                <div>
                  <label for="">总计:</label>
                </div>
                <div>
                  <span class="currency">¥</span>
                  <span class="price">${price}</span>
                </div>
              </div>
              <div class="goods-summary-btns between">
                <a id="${skuId}" href="cart.html" class="btn btn-black">加入购物车</a>
                <a href="cart.html" class="btn btn-primary">立即购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>`)
          $('.goods-detail').append(node);
          var node = $(`<div class="wrapper">
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
            <a href="cart.html" class="btn btn-primary">立即购买</a>
          </div>
        </div>
      </div>`);
          $('.sticky-header').append(node);
        }
      })
    }

    function otherDetail(skuId) {
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
          var timeEnd;
          for (var i = 0; i < arr[1].other.length; i++) {
            if (skuId == arr[1].other[i].skuId) {
              overviewUri = arr[1].other[i].overviewUri;
              webOverview = arr[1].other[i].webOverview;
              productName = arr[1].other[i].productName;
              attrVal = arr[1].other[i].attrVal;
              skuName = arr[1].other[i].skuName;
              price = arr[1].other[i].price;
              backgroundcolor = arr[1].other[i].backgroundcolor;
              timeEnd = arr[1].other[i].timeEnd;
            }
          }
          timer(timeEnd);
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
            $('#bigbox .swiper-wrapper').append(node);
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
          var node = $(`<span class="goods-product-name">${productName}</span>`);
          $('.nav-title').append(node);
          var node = $(`<div class="goods-basic">
            <h1 class="goods-title">
              <span class="goods-product-name">${productName}</span>
              <span class="brackets">（</span>
              <span>${attrVal}</span>
              <span>）</span>
            </h1>
            <div class="limit-notice opensans">
              <div class="notice-content countdown">
                <div class="countdown-price opensans-semiblod">
                  <p>
                    <span>¥</span>
                    <span>${price}</span>
                  </p>
                </div>
                <div class="countdown-time">
                  <span>距离结束还剩:</span>
                  <div class="countdown-detail">
                    <span class="countdown-day">0 天</span>
                    <div class="countdown-hms">
                      <span class="opensans-semibold">00</span>
                      :
                    </div>
                    <div class="countdown-hms">
                      <span class="opensans-semibold">00</span>
                      :
                    </div>
                    <div class="countdown-hms">
                      <span class="opensans-semibold">00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="goods-activity">
            <ul>
              <li>
                <div>
                  <div class="label">
                    优惠
                    <span></span>
                  </div>
                  <span class="desc" style="color: rgb(208,2,27);">
                    双11狂欢新品抢购直降251
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <div class="label">
                    发货
                    <span></span>
                  </div>
                  <span class="desc">
                    订单支付成功后48小时内发货，顺丰包邮
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <div class=" label">
                    回收
                    <span></span>
                  </div>
                  <span class="desc">
                    旧机换新机，享最高额外返现 500 元
                  </span>
                </div>
                <a href="https://www.realme.com/legal/warranty-terms" class="link">
                  立即参与
                  <span class="icon icon-arrow-r"></span>
                </a>
              </li>
              <li>
                <div>
                  <div class=" label">
                    价保
                    <span></span>
                  </div>
                  <span class="desc">
                    王炸11.11，全程价保，买贵补差价！
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <a href="javascript:;" class="goods-service">
            <span class="icon icon-delivery-free"></span>
            <label for="">7天无理由退换</label>
            <span class="icon icon-safe-payment"></span>
            <label for="">安全支付</label>
            <span class="icon icon-huabei-black"></span>
            <label for="">花呗分期</label>
          </a>
          <div class="goods-select">
            <h2 class="goods-select-title">颜色</h2>
            <div class="goods-select-group">
              <a href="javascript:;" class="goods-select-item selected">
                <span class="goods-color"
                  style="background: ${backgroundcolor};"></span>
                <span>${attrVal}</span>
              </a>
            </div>
            <h2 class="goods-select-title">数量</h2>
            <div class="goods-select-group">
              <div class="goods-select-count">
                <a href="javascript:;" class="disabled">
                  <span class="icon icon-less-s"></span>
                </a>
                <span>1</span>
                <a href="javascript:;" class="disabled">
                  <span class="icon icon-plus-s"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="goods-accessory">
            <h2 class="goods-accessory-title">
              优惠购
              <div class="goods-accessory-arrows">
                <a href="javascript:;" class="disabled">
                  <span class="icon icon-arrow-l"></span>
                </a>
                <a href="javascript:;">
                  <span class="icon icon-arrow-r"></span>
                </a>
              </div>
            </h2>
          </div>
          <div class="goods-huabei">
            <h2 class="goods-huabei-title">
              花呗分期
              <i class="icon icon-huabei"></i>
              <span>该商品最高可享3期分期</span>
              <a href="" target="_blank">什么是花呗分期?</a>
            </h2>
            <div class="goods-huabei-group">
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
              </div>
            </div>
            </div>
          </div>
          <div class="goods-summary">
            <div class="goods-summary-list">
              <ul>
                <li>
                  <label for="">${attrVal}</label>
                  <span class="number">x 1</span>
                  <span class="price">¥${price}</span>
                </li>
              </ul>
            </div>
            <div class="goods-summary-bar btn-groups-new">
              <div class="goods-summary-count">
                <div>
                  <label for="">总计:</label>
                </div>
                <div>
                  <span class="currency">¥</span>
                  <span class="price">${price}</span>
                </div>
              </div>
              <div class="goods-summary-btns between">
                <a id="${skuId}" href="cart.html" class="btn btn-black">加入购物车</a>
                <a href="cart.html" class="btn btn-primary">立即购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>`)
          $('.goods-detail').append(node);
          var node = $(`<div class="wrapper">
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
            <a href="cart.html" class="btn btn-primary">立即购买</a>
          </div>
        </div>
      </div>`);
          $('.sticky-header').append(node);
        }
      })
    }

    //倒计时
    function timer(intDiff) {
      window.setInterval(function () {
        var date = new Date();
        if (intDiff < date.getTime()) {
          var days = 0;
          var hours = 0;
          hours = '0' + hours;
          var minutes = 0;
          minutes = '0' + minutes;
          var seconds = 0;
          seconds = '0' + seconds;
        } else {
          var da = Math.floor((intDiff - date) / 1000);
          if (da <= 0) {
            clearInterval(dsq);
          }
          var days = Math.floor(da / (60 * 60 * 24));
          var hours = Math.floor(da / (60 * 60)) - (days * 24);
          if (hours < 10) {
            hours = '0' + hours;
          }
          var minutes = Math.floor(da / 60) - (days * 24 * 60) - (hours * 60);
          if (minutes < 10) {
            minutes = '0' + minutes;
          }
          var seconds = Math.floor(da) - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
          if (seconds < 10) {
            seconds = '0' + seconds;
          }
        }
        $('.countdown-detail').html($(`<span class="countdown-day">${days} 天</span>
                    <div class="countdown-hms">
                      <span class="opensans-semibold">${hours}</span>
                      :
                    </div>
                    <div class="countdown-hms">
                      <span class="opensans-semibold">${minutes}</span>
                      :
                    </div>
                    <div class="countdown-hms">
                      <span class="opensans-semibold">${seconds}</span>
                    </div>`))
        intDiff--;
      }, 1000);
    }
  }
  return {
    Detail
  }
})