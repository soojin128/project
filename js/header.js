window.addEventListener("DOMContentLoaded", function () {
  // nav
  var navA = $('.h-1 nav a');
  var pro = $('.product');
  var proA = $('.product a');
  var proHide = $('.product-hover');
  var proOver = $('.product-hover div');

  pro.hide();
  proOver.hide();
  proHide.hide();

  navA.eq(0).on('mouseenter', function () {
    pro.slideDown();
  });

  proA.on('mouseenter', function () {
    var idx = proA.index($(this));
    proHide.hide();
    proOver.hide();
    proHide.slideDown();
    proOver.eq(idx).slideDown();
  });

  proOver.on('mouseleave', function () {
    proOver.slideUp();
    proHide.slideUp();
  });

  // tablet, mobile nav
  var menu = document.querySelector(".menu-trigger");
  var nav = document.querySelector("nav");
  var sign = document.querySelector(".sign");
  menu.addEventListener("click", function () {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    sign.classList.toggle("active");
  });
});