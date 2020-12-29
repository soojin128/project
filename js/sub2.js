window.addEventListener('DOMContentLoaded', function () {

  var navEl = document.querySelectorAll('.sub_navi div a');
  var secEl = document.querySelectorAll('section');
  var secArr = [];

  secEl.forEach(function (sl, idx) {
    secArr.push(sl.offsetTop);
  });

  navEl.forEach(function (sl, idx) {
    sl.addEventListener('click', function (e) {
      e.preventDefault();

      navEl.forEach(function (a) {
        a.classList.remove('active');
      });
      sl.classList.add('active');

      secArr[idx - 1]
      window.scrollTo(0, secArr[idx - 1]);
    });
  });

  var winH = window.innerHeight / 2;
  window.addEventListener('scroll', function () {
    secArr.forEach(function (el, idx) {
      if (window.scrollY >= secArr[idx] - winH) {
        navEl.forEach(function (a) {
          a.classList.remove('active');
        });
        navEl[idx + 1].classList.add('active');
      }
    });
  });

  //scroll event
  var conEl = document.querySelectorAll('.contents li');

  window.addEventListener('scroll', function () {
    conEl.forEach(function (e) {
      if (scrollY+300 >= e.offsetTop) {
        e.classList.add('active');
      }
    });

  });

});