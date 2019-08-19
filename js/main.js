document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    responsiveThreshold: 100,
  });

  var elemsa = document.querySelectorAll('.fixed-action-btn');
  var instancesa = M.FloatingActionButton.init(elemsa, {
    toolbarEnabled: true,
  });

  var elemsb = document.querySelectorAll('.carousel');
  var instancesb = M.Carousel.init(elemsb, {
    duration: 200,
    numVisible: 3,
    //fullWidth: true,
    indicators: true,
    shift: 5,
  });

  // carousel magicks???
  var instanceb = M.Carousel.getInstance(elemsb);
  window.setInterval(function () { $('.carousel').carousel('next') }, 7000)
  // magicks end

  var elemsc = document.querySelectorAll('.scrollspy');
  var instancesc = M.ScrollSpy.init(elemsc, {
    scrollOffset: 100,
  });

  var elemsd = document.querySelectorAll('.parallax');
  var instancesd = M.Parallax.init(elemsd, {
    responsiveThreshold: 0,
  });

  var elemse = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elemse, {
    inDuration: 200,
    outDuration: 100,
  });

});
