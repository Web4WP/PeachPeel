'use strict'

document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener("scroll", function() {
    if( window.scrollY > 50 ) {
      document.querySelector('.header').classList.add('scroll');
      document.querySelector('.header__nav-logo').classList.add('fixed');
    } else {
      document.querySelector('.header').classList.remove('scroll');
      document.querySelector('.header__nav-logo').classList.remove('fixed');
    }
  });


  /* Owl Carousel */
  /*$('.slider__owl').owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  $(".slider__nav-btn--next").click(function () {
    $(".slider__owl").trigger("next.owl.carousel");
  });
  $(".slider__nav-btn--prev").click(function () {
    $(".slider__owl").trigger("prev.owl.carousel");
  });*/

})


