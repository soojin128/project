window.addEventListener("DOMContentLoaded", function () {

  var data = new XMLHttpRequest();
  var response;
  var galEl = '';
  var galWrap = document.querySelector('.gallery');
  var gal1 = document.querySelector('.gal1');
  var gal2 = document.querySelector('.gal2');
  var gal3 = document.querySelector('.gal3');
  var gal4 = document.querySelector('.gal4');
  var modal = document.querySelector('.modal');
  var closer = document.querySelector('.closer');

  data.open('get', 'data.json', true);
  data.send(null);
  data.addEventListener('load', dataFun);

  function galleryCall(e) {
    galEl = "<li><a href='#'>"
    galEl += "<img src=" + e.thumb + " alt=''></a>"
    galEl += "<article><h3>" + e.name + "</h3>"
    galEl += "<p>" + e.subscript + "</p></article ></li>"
  }

  function dataFun() {
    response = JSON.parse(data.responseText);

    response.gal1.forEach(function (e, i) {
      galleryCall(e);
      gal1.innerHTML += galEl;
    });

    response.gal2.forEach(function (e, i) {
      galleryCall(e);
      gal2.innerHTML += galEl;
    });

    response.gal3.forEach(function (e, i) {
      galleryCall(e);
      gal3.innerHTML += galEl;
    });

    response.gal4.forEach(function (e, i) {
      galleryCall(e);
      gal4.innerHTML += galEl;
    });

    var gallery = document.querySelectorAll('.gal ul li');
    var article = document.getElementById('article');
    var img = document.getElementById('img');
    var imgs = galWrap.getElementsByTagName('img');
    var imgSrcs = [];
    var titles = galWrap.getElementsByTagName('h3');
    var titleTxt = [];
    var descriptions = galWrap.getElementsByTagName('p');
    var descriptionTxt = [];

    for (var i = 0; i < imgs.length; i++) {
      imgSrcs.push(imgs[i].src);
      titleTxt.push(titles[i]);
      descriptionTxt.push(descriptions[i]);

    }


    gallery.forEach(function (e, i) {
      e.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('active');
        img.setAttribute('src', imgSrcs[i]);
        article.innerHTML = "<h1>" + titleTxt[i].innerText + "</h1>";
        article.innerHTML += "<p>" + descriptionTxt[i].innerText + "</p>"
      });
    });
  }
  closer.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('active');
  });






});