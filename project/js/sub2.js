window.addEventListener('DOMContentLoaded', function () {

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
  var navA = $('.h-1 nav a');
  var pro = $('.product');
  var proA = $('.product a');
  var proOver = $('.product-hover div');

  pro.hide();
  proOver.hide();

  navA.eq(0).on('mouseenter', function () {
    pro.slideDown();
  });

  proA.on('mouseenter', function (e) {
    var idx = proA.index($(this));
    proOver.hide();
    proOver.eq(idx).slideDown();
  });

  proOver.on('mouseleave', function () {
    proOver.slideUp();
  });

  //sub nav
  var navEl = document.querySelectorAll('.sub_navi nav a');
  var secEl = document.querySelectorAll('section');
  var secArr = [];

  secEl.forEach(function (sl, idx) {
    secArr.push(sl.offsetTop);
  });
  console.log(secArr);

  navEl.forEach(function (sl, idx) {
    sl.addEventListener('click', function (e) {
      e.preventDefault();

      navEl.forEach(function (a) {
        a.classList.remove('active');
      });
      sl.classList.add('active');

      secArr[idx-1]
      window.scrollTo(0, secArr[idx-1]);
    });
  });

  var winH = window.innerHeight / 2;
  window.addEventListener('scroll', function () {
    secArr.forEach(function (el, idx) {
      if (window.scrollY >= secArr[idx] - winH) {
        navEl.forEach(function (a) {
          a.classList.remove('active');
        });
        navEl[idx+1].classList.add('active');
      }
    });
  });



});