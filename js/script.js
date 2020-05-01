// $(function() {
//     // Burger menu
//     let burgerMenu = $('.burger-menu');
//     burgerMenu.on('click', function() {
//         burgerMenu.toggleClass('active')
//         $('.nav').toggleClass('nav-active')
//         $(window).resize(function() {
//             $('.nav').removeClass('nav-active')
//             burgerMenu.removeClass('active')
//         })
//     })
//     // Slider
//     $('.main__slider').slick({
//         arrows: false,
//         dots: true,
//         dotsClass: "slick-dots",
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1
//     })
//     /* Modal window */
//     let btnModal = $('.header__menu-serviz-text'),
//     modalBackground = $('.modal__background'),
//     modal = $('.modal'),
//     closeModal = $('.modal-close-img');
//     btnModal.on('click', function (event) {
//         event.preventDefault()
//         modalBackground.addClass('show')

//         modalBackground.on('click', function (e) {
//             if( !modal.is(e.target) && modalBackground.has(e.target).length === 0 
//             || e.target === closeModal[0]{
//                 modalBackground.removeClass('show');
//             } 
//         });
//     });
//     // Move out main__content
//     $('.main__content-arrow').on('click', function() {
//         let mainContent = $('.main__content');
//         let heightWrapper = $('.main__content-wrapper').height();
//         let top = mainContent.css('top');
//         $('.main__content-arrow__left-close').toggleClass('main__content-arrow__left-active')
//         $('.main__content-arrow__right-close').toggleClass('main__content-arrow__right-active')
//         if (top === '-30px') {
//             mainContent.css('top', `${-heightWrapper - 29}px`)
//         } else {
//             mainContent.css('top', "-30px")
//         }
//         $(window).resize(function() {
//             top = mainContent.css('top')
//             if ( top !== '-30px' ) {
//                 let heightWrapperResize =  $('.main__content-wrapper').height(); 
//                 if ( heightWrapper !== heightWrapperResize) {
//                     mainContent.css('top', `${-heightWrapperResize - 29}px`)
//                     heightWrapper = $('.main__content-wrapper').height();
//                 } else {}
//             }
//         })
//     })
// })
"use strict";
$(function () {
  // Burger menu
  var burgerMenu = $('.burger-menu');
  burgerMenu.on('click', function () {
    burgerMenu.toggleClass('active');
    $('.nav').toggleClass('nav-active');
    $(window).resize(function () {
      if ( $(window).width() > 779) {
        $('.nav').removeClass('nav-active');
        burgerMenu.removeClass('active');
      }
    });
  }); // Slider

  $('.main__slider').slick({
    arrows: false,
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1
  });
  /* Modal window */

  var btnModal = $('.header__menu-serviz-text'),
      modalBackground = $('.modal__background'),
      modal = $('.modal'),
      closeModal = $('.modal-close-img');
  btnModal.on('click', function (event) {
    event.preventDefault();
    modalBackground.addClass('show');
    modalBackground.on('click', function (e) {
      if (!modal.is(e.target) && modalBackground.has(e.target).length === 0 || e.target === closeModal[0] || e.target === $('.modal-close')[0]) {
        modalBackground.removeClass('show');
      }
    });
  }); // Move out main__content

  $('.main__content-arrow').on('click', function () {
    var mainContent = $('.main__content');
    var heightWrapper = $('.main__content-wrapper').height();
    var top = mainContent.css('top');
    $('.main__content-arrow__left-close').toggleClass('main__content-arrow__left-active');
    $('.main__content-arrow__right-close').toggleClass('main__content-arrow__right-active');

    if (top === '-30px') {
      mainContent.css('top', "".concat(-heightWrapper - 29, "px"));
    } else {
      mainContent.css('top', "-30px");
    }

    $(window).resize(function () {
      top = mainContent.css('top');

      if (top !== '-30px') {
        var heightWrapperResize = $('.main__content-wrapper').height();

        if (heightWrapper !== heightWrapperResize) {
          mainContent.css('top', "".concat(-heightWrapperResize - 29, "px"));
          heightWrapper = $('.main__content-wrapper').height();
        } else {}
      }
    });
  });
});