jQuery(document).ready(function () {
  "use script";
  /*Burger BTN*/
  var burger_btn = $(".burger__btn");
  burger_btn.on("click", function(){
    $(this).toggleClass("burger__btn--active");
  });
  /*Intro Slider*/
  var introSlider = $("#introSlider");
  introSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: false,
    swipe: false,
    touchMove: false,
    focusOnSelect: false,
    fade: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: true,
          swipe: true,
          touchMove: true,
        },
      },
    ],
  });
});