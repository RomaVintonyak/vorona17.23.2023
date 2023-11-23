jQuery(document).ready(function () {
  "use script";
  /*Burger BTN*/
  var burger_btn = $(".burger__btn");
  burger_btn.on("click", function(){
    $(this).toggleClass("burger__btn--active");
  });

});