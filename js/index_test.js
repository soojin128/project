window.addEventListener("DOMContentLoaded", function () {

  // login 
  $('.sign a').eq(0).on('click', function (e) {
    e.preventDefault();
    $('.popup').addClass('active');
  });
  $('.popup .closer').on('click', function () {
    $('.popup').removeClass('active');
  });


  // main tab
  var categ = document.querySelectorAll(".tab_head a");
  var cont = document.querySelectorAll(".tab_body ul");

  categ.forEach(function (a, b) {
    if (document.documentElement.offsetWidth >= 1440) {
      a.addEventListener("mouseenter", hideFun);
    } else {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        hideFun();
      });
    }


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
  $(".mobile_indi a").eq(0).addClass('active');
  var idx = 0;
  var loop;

  function fade(p) {
    if (document.documentElement.offsetWidth >= 768) {
      $(".spot figure").eq(idx).fadeOut(500);
      if (p == ">") {
        idx--;
      } else {
        idx++;
      }
      update();
      $(".spot figure").eq(idx).fadeIn(500);
      $('.indi span').eq(0).html((idx + 1) + '/4');
    } else {
      // mobile indi
      $(".spot figure").eq(idx).fadeOut(500);
      idx++;
      update();
      $(".spot figure").eq(idx).fadeIn(500);
      $('.mobile_indi a').removeClass('active');
      $('.mobile_indi a').eq(idx).addClass('active');
    }
  }
  // mobile indi click
  $('.mobile_indi a').each(function (i) {
    $('.mobile_indi a').eq(i).on('click', function (e) {
      e.preventDefault();
      $(".spot figure").fadeOut(500);
      clearFun();
      $(".spot figure").eq(i).fadeIn(500);
      idx = i;
      interFun();
      $('.mobile_indi a').removeClass('active');
      $('.mobile_indi a').eq(i).addClass('active');
    });
  });


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
      $(this).css('font-size', '0');
      $('.indi span').eq(1).css('display', 'block');
      clicks++;
    } else {
      interFun();
    }
  });

  $('.indi span').eq(1).on("click", function () {
    $(this).css('display', 'none');
    $(".indi p").css('font-size', '1.1rem');
    clicks--;
  });

  //mobile gallery

  $('.gallery ul').on('click', function () {
    location.href = 'gallery.html';
  });

});