define(['jquery'], function ($) {
  function goods() {
    var scrollTop
    $(window).scroll(function () {
      scrollTop = document.documentElement.scrollTop || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        $('#app').find('.goods-navbar').addClass('fixed');
        $('#app .goods-display').find('.goods-swiper-container').addClass('fixed');
        if (scrollTop > 500) {
          $('#app .goods-display').find('.goods-swiper-container').addClass('absolute');
          if (scrollTop > 1347) {
            $('#app').find('.sticky-header').css('display', 'block');
            $('.back-top').css('display', 'block');
          } else {
            $('#app').find('.sticky-header').css('display', 'none');
            $('.back-top').css('display', 'none');
          }
        } else {
          $('#app .goods-display').find('.goods-swiper-container').removeClass('absolute');
        }
      } else {
        $('#app').find('.goods-navbar').removeClass('fixed');
        $('#app .goods-display').find('.goods-swiper-container').removeClass('fixed');
      }
    })
    $('.back-top').click(function () {
      dsq = setInterval(function () {
        var speed = Math.ceil(scrollTop / 10);
        if (scrollTop <= 0) {
          clearInterval(dsq)
        }
        document.documentElement.scrollTop = scrollTop - speed
      }, 50)
    })
  }
  return {
    goods
  }
})