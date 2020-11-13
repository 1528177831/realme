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

      oPrev.mouseenter(function () {
        clearInterval(timer);
      }).mouseleave(function () {
        autoSlide();
      });

      oNext.mouseenter(function () {
        clearInterval(timer);
      }).mouseleave(function () {
        autoSlide();
      });

      oBullet.mouseenter(function () {
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

      function antiShake(funcName, delay, immediate) {
        var timer = null;
        return function () {
          const content = this;
          const args = [...arguments];
          if (immediate) {
            if (!timer) {
              funcName.apply(content, args);
              timer = setTimeout(function () {
                clearTimeout(timer);
                timer = null;
              }, delay)
            }
          } else {
            clearTimeout(timer);
            timer = setTimeout(function () {
              funcName.apply(content, args);
            }, delay)
          }
        }
      }

      oBullet.click(function (e) {
        var e = e || window.event;
        iNow = $(this).index() + 1;
        isLight()
        changeImg();
        changeDots();
      });

      function PrevClick() {
        iNow--;
        isLight()
        changeImg();
        changeDots();
      }

      function NextClick() {
        iNow++;
        isLight()
        changeImg();
        changeDots();
      }

      PrevClick = antiShake(PrevClick, 2000, true);

      oPrev.click(PrevClick);

      NextClick = antiShake(NextClick, 2000, true);

      oNext.click(NextClick);
    })
  }

  function magnify() {
    $(function () {
      var oContainer = $('#app').find('#swiper-container-magnify');
      var oWrapper = $('#app').find('.swiper-wrapper');
      var oMark = $('#app').find('#mark');
      var oBigImg = $('#bigbox').find('.swiper-wrapper');
      var oBigbox = $('#bigbox');
      var iNow = 1;
      var oBar = $('#app').find('.swiper-bar');
      $('#app').on('click', '.swiper-thumb', function (e) {
        var e = e || window.event;
        iNow = $(this).index();
        console.log(iNow);
        changeImg();
      })

      moveMark();

      function changeImg() {
        oWrapper.stop(true).animate({
          left: -iNow * 540
        }, 800);
        oBar.stop(true).animate({
          left: iNow * 110 + 85
        }, 800);
        oBigImg.stop(true).animate({
          left: -iNow * 1080
        })
      }

      function moveMark(iNow) {
        oContainer.mouseenter(function () {
          oMark.show();
          oBigbox.show();
        }).mouseleave(function () {
          oMark.hide();
          oBigbox.hide();
        }).mousemove(function (ev) {
          console.log(ev.pageX);
          var l = ev.pageX - $(this).offset().left - 75;
          if (l <= 40+(iNow*540)) {
            l = 40;
          }
          if (l >= 350) {
            l = 350;
          }
          var t = ev.pageY - $(this).offset().top - 75;
          if (t <= 40) {
            t = 40;
          }
          if (t >= 350) {
            t = 350;
          }
          $("#mark").css({
            left: l,
            top: t
          })
          $("#imgbox").css({
            left: -2 * l,
            top: -2 * t
          })
        })
      }
    })

  }

  function scroll() {
    $(function () {
      $('.realme-phones-tabs .wrapper ul li').hover(function () {
        $('.realme-phones-tabs .wrapper ul').find('.active').eq($(this).index()).css('color', '#fbbd0f');
      }, function () {
        $('.realme-phones-tabs .wrapper ul').find('.active').eq($(this).index()).css('color', '#000');
      })
      $(window).scroll(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 524) {
          $('.realme-phones-tabs .wrapper ul').find('.active').eq(0).css('color', '#000').parents('.realme-phone-tabs-fixed').addClass('fixed');
          $('.realme-phones-tabs .wrapper ul').find('.active').eq(1).css('color', '#fbbd0f');
          if (scrollTop > 996) {
            $('.realme-phones-tabs .wrapper ul').find('.active').eq(2).css('color', '#fbbd0f');
            $('.realme-phones-tabs .wrapper ul').find('.active').eq(1).css('color', '#000')
          } else {
            $('.realme-phones-tabs .wrapper ul').find('.active').eq(2).css('color', '#000');
          }
        } else {
          $('.realme-phones-tabs .wrapper ul').find('.active').eq(0).css('color', '#fbbd0f').parents('.realme-phone-tabs-fixed').removeClass('fixed');
          $('.realme-phones-tabs .wrapper ul').find('.active').eq(1).css('color', '#000');
        }
      })
      $('.realme-phone-tabs-fixed .wrapper ul').on('click', 'li', function () {
        console.log($(this).index());
        if ($(this).index() == 0) {
          document.documentElement.scrollTop = 0;
        } else if ($(this).index() == 1) {
          document.documentElement.scrollTop = 525;
        } else if ($(this).index() == 2) {
          document.documentElement.scrollTop = 997;
        }
      })
    })
  }
  return {
    banner,
    magnify,
    scroll
  }
});