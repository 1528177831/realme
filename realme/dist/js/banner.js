define(['jquery'], function ($) {
  function banner() {
    $(function () {
      var oPrev = $('#bannerSwiper').find('.swiper-button-prev');
      var oNext = $('#bannerSwiper').find('.swiper-button-next');
      var oBullet = $('#bannerSwiper').find('.swiper-pagination-bullet');
      var oImg = $('#bannerSwiper').find('.swiper-slide');
      var size = oImg.length;
      var oWrapper = $('#bannerSwiper').find('.swiper-wrapper');
      var iNow = 1;
      var timer = null;

      autoSlide();

      oPrev.mouseover(function () {
        clearInterval(timer);
      }).mouseleave(function () {
        autoSlide();
      });

      oNext.mouseover(function () {
        clearInterval(timer);
      }).mouseleave(function () {
        autoSlide();
      });

      oWrapper.mouseleave();

      function isLight() {
        if (iNow == 1) {
          oPrev.addClass('swiper-button-light')
          oNext.addClass('swiper-button-light')
        } else if (iNow == 6) {
          oPrev.addClass('swiper-button-light')
          oNext.addClass('swiper-button-light')
        } else {
          oPrev.removeClass('swiper-button-light')
          oNext.removeClass('swiper-button-light')
        }
      }

      function autoSlide() {
        timer = setInterval(function () {
          iNow++;
          isLight();
          changeImg();
          changeDots();
        }, 2000);
      };

      function changeImg() {
        oWrapper.stop(true).animate({
          left: -(iNow * 100) + "%"
        }, 800);
        if (iNow >= size - 1) {
          oWrapper.animate({
            left: -100 + "%"
          }, 0)
          iNow = 1;
        }
        if (iNow < 1) {
          oWrapper.animate({
            left: -((size - 2) * 100) + "%"
          }, 0)
          iNow = size - 2;
        }
      }

      function changeDots() {
        oBullet.eq(iNow - 1).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active');
      }

      oBullet.click(function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        iNow = $(target).index() + 1;
        isLight()
        changeImg();
        changeDots();
      });

      oPrev.click(function () {
        iNow--;
        isLight()
        changeImg();
        changeDots();
      })

      oNext.click(function () {
        iNow++;
        isLight()
        changeImg();
        changeDots();
      })
    })
  }

  return {
    banner
  }
});