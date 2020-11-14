define(['jquery'], function ($) {
  function goodLists() {
    $.ajax({
      type: "get",
      url: "data/list.json",
      dataType: "json",
      success: function (arr) {
        var phone = arr[0].phone;
        for (var i = 0; i < phone.length; i++) {
          var node = $(`<li>
              <a href="goods.html?id=${phone[i].id}&skuId=${phone[i].skuId}" title="Buy ${phone[i].productname}">
                <div class="realme-phones-image">
                  <img src="${phone[i].img}" class="pic-lazyload"
                    alt="${phone[i].productname} shopwindow">
                </div>
                <div class="realme-phones-name"><label for="name">${phone[i].productname}</label></div>
                <div class="realme-phones-price opensans-semibold">${phone[i].currencySymbol} <label for="price"
                    id="default_sku_644">${phone[i].nowPrice}</label></div>
              </a>
            </li>`);
          $("#phones ul").append(node);
        }
        var other = arr[1].other;
        for (var i = 0; i < other.length; i++) {
          var node = $(`<li>
              <a href="goods.html?id=${other[i].id}&skuId=${other[i].skuId}" title="Buy ${other[i].productname}">
                <div class="realme-phones-image">
                  <img src="${other[i].img}" class="pic-lazyload"
                    alt="${other[i].productname} shopwindow">
                </div>
                <div class="realme-phones-name"><label for="name">${other[i].productname}</label></div>
                <div class="realme-phones-price opensans-semibold">${other[i].currencySymbol} <label for="price"
                    id="default_sku_644">${other[i].nowPrice}</label></div>
              </a>
            </li>`);
          $("#others ul").append(node);
        }
      },
      error: function (error) {
        alert(error)
      }
    });
  }
  return {
    goodLists
  }
})