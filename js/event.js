window.addEventListener("DOMContentLoaded", function () {

  //mobile-burgermenu
  const menu = document.querySelector(".menu-trigger");
  const nav = document.querySelector("nav");
  menu.addEventListener("click", function () {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // login 
  $('.sign a').eq(3).on('click', function (e) {
    e.preventDefault();
    $('.popup').addClass('active');
  });
  $('.popup .closer').on('click', function () {
    $('.popup').removeClass('active');
  });

  // search
  $('.sign p').on('click', function (e) {
    e.preventDefault();
    $('.search').toggleClass('active');
  });

  // nav
  var navA = $('.h-1 nav a'),
    pro = $('.product'),
    proA = $('.product a'),
    proOver = $('.product-hover div'),
    eventSpan = $('.event span');

  pro.hide();
  proOver.hide();

  navA.eq(0).on('mouseenter', function () {
    pro.slideDown();
    eventSpan.hide();
  });

  // navA.eq(0).on('mouseleave', function () {
  //   pro.slideUp();
  //   eventSpan.show();
  // });

  proA.on('mouseenter', function (e) {
    var idx = proA.index($(this));
    proOver.hide();
    proOver.eq(idx).slideDown();
  });

  proOver.on('mouseleave', function () {
    proOver.slideUp();
  });

});