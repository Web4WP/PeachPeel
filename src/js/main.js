'use strict'

document.addEventListener('DOMContentLoaded', function () {


  let urlCal = window.location.pathname;

  if(urlCal == '/calendar.html') {
    const select1 = document.querySelector('#way');
    const select2 = document.querySelector('#city');
    const select3 = document.querySelector('#person');

    const choices1 = new Choices(select1, {
      searchEnabled: false,
      removeItems: true,
      itemSelectText: ''
    });

    const choices2 = new Choices(select2, {
      searchEnabled: false,
      removeItems: true,
      itemSelectText: ''
    });

    const choices3 = new Choices(select3, {
      searchEnabled: false,
      removeItems: true,
      itemSelectText: ''
    });
  }

    /*$(".contact__form-input").focus(function() {
      $(this).parent().siblings('label').addClass('has-value');
    }).blur(function() {
      let text_val = $(this).val();
      if(text_val === "") {
        $(this).parent().siblings('label').removeClass('has-value');
      }
    });*/

  $(".contact__form-input").focus(function() {
    $(this).siblings('label').addClass('has-value');
  }).blur(function() {
    let text_val = $(this).val();
    if(text_val === "") {
      $(this).siblings('label').removeClass('has-value');
    }
  });

  $('.procedure__animation-text').paroller();
  $('.innovation__animation-text').paroller();
  /*$('.key__animation').paroller();*/


  document.querySelector('.header__mob-burger').addEventListener('click', function (el) {
    el.currentTarget.classList.toggle('open');
    document.querySelector('.header').classList.toggle('open');
    document.querySelector('.header__mob-menu').classList.toggle('open');
    document.querySelector('main').classList.toggle('open');
    document.querySelector('.footer').classList.toggle('open');
  })

  window.addEventListener("scroll", function() {
    if( window.scrollY > 50 ) {
      document.querySelector('.header').classList.add('scroll');
      //document.querySelector('.header__nav-logo').classList.add('fixed');
      /*document.querySelector('.header__nav-logo.fixed img').addEventListener('mouseover', function () {
        document.querySelectorAll('.header__nav ul li').forEach(function (e) {
          e.classList.add('visible');
          document.querySelector('.header').classList.remove('scroll');
        });
      })*/
      document.querySelector('.header').addEventListener('mouseout', function () {
        document.querySelectorAll('.header__nav ul li').forEach(function (e) {
          e.classList.remove('visible');
          document.querySelector('.header').classList.add('scroll');
        });
      })
    } else {
      document.querySelector('.header').classList.remove('scroll');
      /*document.querySelector('.header__nav-logo').classList.remove('fixed');*/
    }
  });

  const innovation = new Swiper('.innovation__slider', {
    spaceBetween: 20,
    /*autoplay: {
      delay: 5000,
    },*/
    /*speed: 600,*/
    /*freeMode: true,*/
    loop: true,
    height: 627,
    navigation: {
      nextEl: '.innovation__nav-btn_next',
      prevEl: '.innovation__nav-btn_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
      },
      768: {
        slidesPerView: 2
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const old = new Swiper('.old__slider', {
    spaceBetween: 20,
    /*autoplay: {
      delay: 5000,
    },*/
    /*speed: 600,*/
    freeMode: true,
    loop: true,
    height: 627,
    navigation: {
      nextEl: '.old__nav-btn_next',
      prevEl: '.old__nav-btn_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
      },
      768: {
        slidesPerView: 2
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const comment = new Swiper('.comment__slider', {
    /*autoplay: {
      delay: 5000,
    },*/
    speed: 600,
    /*effect: "cube",
    grabCursor: true,
    autoHeight: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },*/
    freeMode: true,
    loop: true,
    navigation: {
      nextEl: '.comment__slider-btn_next',
      prevEl: '.comment__slider-btn_prev',
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

  let aniamtionText = new Swiper(".hero__animation", {
    direction: "vertical",
    autoplay: {
      delay: 1000,
    },
    speed: 600,
    loop: true
  });

  let aniamtionChoiceText = new Swiper(".choice__animation", {
    direction: "vertical",
    autoplay: {
      delay: 2000,
    },
    speed: 600,
    loop: true
  });



  new WOW().init();





})


