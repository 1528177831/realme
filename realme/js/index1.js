define(['jquery'], function ($) {
  function index1() {
    var oUser = $(".header").find(".nav-right")
    var oAccount = $(".header").find(".header-account")
    var oPanel = $(".header .header-account").find(".header-account-panel");
    var oHeader = $('.header');
    oUser.mouseenter(function () {
      oAccount.css("display", "block");
    });
    oPanel.mouseleave(function () {
      oAccount.css("display", "none");
    });

    $('.header .nav .nav-menu').on('mouseenter', '.active', function () {
      var index = $(this).index();
      if (index > 0 && index < 3) {
        $(this).find('.nav-submenu').addClass('visible').parent('.active').siblings('.active').find('.nav-submenu').removeClass('visible');
        $('.nav-submenu-panel').addClass('visible');
      } else {
        $('.active').find('.nav-submenu').removeClass('visible');
        $('.nav-submenu-panel').removeClass('visible');
      }
    })
    $('.header').mouseleave(function () {
      $('.nav-submenu').removeClass('visible');
      $('.nav-submenu-panel').removeClass('visible');
    })

    $(window).scroll(function () {
      var scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 0) {
        oHeader.addClass('header-fixed');
      } else {
        oHeader.removeClass('header-fixed');
      }
    })
  }

  function navList() {
    $.ajax({
      type: "get",
      url: "data/list.json",
      dataType: "json",
      success: function (arr) {
        var phone = arr[0].phone;
        for (var i = 0; i < phone.length; i++) {
          var node = $(`<li>
                    <a href="goods.html?id=${phone[i].id}&skuId=${phone[i].skuId}" title="${phone[i].productname}">
                      <div class="nav-submenu-img">
                        <label for="">${phone[i].type}</label>
                        <img src="${phone[i].img}" alt="${phone[i].productname}">
                      </div>
                      <div class="nav-submenu-info">
                        <span class="nav-submenu-type">${phone[i].type}</span>
                        <span class="nav-submenu-title">${phone[i].productname}</span>
                        <span class="nav-submenu-price">
                          ${phone[i].nowPrice}
                          <i>起</i>
                        </span>
                      </div>
                    </a>
                  </li>`);
          $(".nav-menu .phones ul").prepend(node);
        }
        var other = arr[1].other;
        for (var i = 0; i < other.length; i++) {
          var node = $(`<li>
                    <a href="goods.html?id=${other[i].id}&skuId=${other[i].skuId}" title="${other[i].productname}">
                      <div class="nav-submenu-img">
                        <label for="">${other[i].type}</label>
                        <img src="${other[i].img}" alt="${other[i].productname}">
                      </div>
                      <div class="nav-submenu-info">
                        <span class="nav-submenu-type">${other[i].type}</span>
                        <span class="nav-submenu-title">${other[i].productname}</span>
                        <span class="nav-submenu-price">
                          ${other[i].nowPrice}
                          <i>起</i>
                        </span>
                      </div>
                    </a>
                  </li>`);
          $(".nav-menu .others ul").prepend(node);
        }
      },
      error: function () {
        alert(error)
      }
    });
  }
  return {
    index1,
    navList
  }
})