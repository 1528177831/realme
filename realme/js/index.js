define(['jquery'], function ($) {
  function indexList() {
    $(function () {
      $.ajax({
        type: "get",
        url: "data/list.json",
        dataType: "json",
        success: function (arr) {
          var phone = arr[0].phone;
          for (var i = 0; i < phone.length; i++) {
            var node = $(` <div class="plate-primary plate-hover">
        <a class="plate-primary-image" href="goods.html?id=${phone[i].id}&skuId=${phone[i].skuId}">
          <img src="${phone[i].indeximg}" alt="">
        </a>
        <div class="plate-content">
          <h3 class="plate-primary-title">
            <img src="${phone[i].title}" alt="${phone[i].productname} in SVG Format">
          </h3>
          <div class="plate-primary-subtitle ">${phone[i].introduce}
          </div>
          <div class="plate-primary-price">
            ¥${phone[i].nowPrice}<i>起</i><del>¥${phone[i].pastPrice}</del>
          </div>
        </div>
        <div class="plate-tag">
          <img src="https://r1.realme.net/general/20201012/1602504906321.svg" alt="${phone[i].productname} sale tag">
        </div>
      </div>`)
            $('.product .plate-wrapper').append(node);
          }
          var other = arr[1].other;
          for (var i = 0; i < other.length; i++) {
            var node = $(`<a class="plate-third-item plate-hover " href="goods.html?id=${other[i].id}&skuId=${other[i].skuId}" title="">
          <span class="pic-lazyloaded">
            <img src="${other[i].indeximg}" alt="${other[i].productname}">
          </span>
          <div class="plate-content">
            <h3 class="plate-third-title">${other[i].productname}</h3>
            <div class="plate-third-price ">
              ¥${other[i].nowPrice}
            </div>
          </div>
        </a>`);
            $(".accessory .plate-third").append(node);
          }
        },
        error: function () {
          alert(error)
        }
      });
    })
  }
  return {
    indexList
  }
})