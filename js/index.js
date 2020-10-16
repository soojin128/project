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

  // main tab
  var categ = document.querySelectorAll(".tab_head a");
  var cont = document.querySelectorAll(".tab_body ul");

  categ.forEach(function (a, b) {
    a.addEventListener("mouseenter", hideFun);

    function hideFun() {
      cont.forEach(function (c) {
        c.classList.remove("active");
      });
      cont.forEach(function (el, idx) {
        if (b == idx) {
          el.classList.add("active");
        }
      });
    }
  });


  // main spot
  $(".spot figure").not(":first").hide();
  var idx = 0;
  var loop;

  function fade(p) {
    $(".spot figure").eq(idx).fadeOut(500);
    if (p == ">") {
      idx--;
    } else {
      idx++;
    }
    update();
    $(".spot figure").eq(idx).fadeIn(500);
    $('.indi span').eq(0).html((idx + 1) + '/4');
  }

  function update() {
    var len = $(".spot figure").length;
    if (idx >= len) idx = 0;
    if (idx == -1) idx = len - 1;
  }

  function clearFun() {
    clearInterval(loop);
  }

  function interFun() {
    loop = setInterval(fade, 5000);
  }

  function btn() {
    if ($(this).index() == 0) {
      fade(">");
    } else {
      fade("<");
    }
  }
  $(".spot span").on("click", btn);
  interFun();


  var clicks = 0;
  $(".indi p").on("click", function () {
    if (clicks == 0) {
      clearFun();
      $(this).addClass('active');
      $('.indi span').eq(1).css('opacity', '1');
      clicks++;
    } else {
      interFun();
      $(this).removeClass('active');
      $('.indi span').eq(1).css('opacity', '0');
      clicks--;
    }
  });

});