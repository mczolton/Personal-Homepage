$(window).scroll(function(){
  $(".blurParallaxBg__image").css("opacity", 1 - $(window).scrollTop() / 500);
  $(".blurParallaxBg__image").css("top", 1 - $(window).scrollTop() / 4);
});