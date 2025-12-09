/************************************
 *  CUSTOM MOBILE MENU TOGGLE
 ************************************/
function initMobileMenu() {
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  if (!mobileNavToggleBtn) return;

  function mobileNavToogle() {
    document.body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  document.querySelectorAll('#navmenu a').forEach(nav => {
    nav.addEventListener('click', () => {
      if (document.body.classList.contains('mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });
}



/************************************
 *  INIT HEADER SCRIPTS (after load)
 ************************************/
function initHeaderScripts() {

  console.log("Header Scripts Initialized");

  // MEAN MENU
  if ($('.main-menu').length) {
    $('.main-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "992"
    });
  }

  // CUSTOM MOBILE NAV
  initMobileMenu();
}



/************************************
 *  DOCUMENT READY
 ************************************/
(function ($) {
  "use strict";

  $(document).ready(function () {

    /*********************
     * TESTIMONIAL SLIDER
     *********************/
    $(".testimonial-sliders").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      responsive: {
        0: { items: 1, nav: false },
        600: { items: 1, nav: false },
        1000: { items: 1, nav: false, loop: true }
      }
    });


    /*********************
     * HOMEPAGE SLIDER
     *********************/
    $(".homepage-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: false,
      dots: true,
      responsive: {
        0: { items: 1, nav: false, loop: true },
        600: { items: 1, nav: true, loop: true },
        1000: { items: 1, nav: true, loop: true }
      }
    });


    /*********************
     * LOGO SLIDER
     *********************/
    $(".logo-carousel-inner").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      margin: 30,
      responsive: {
        0: { items: 1, nav: false },
        600: { items: 3, nav: false },
        1000: { items: 4, nav: false, loop: true }
      }
    });


    /*********************
     * ISOTOPE
     *********************/
    $(".product-filters li").on('click', function () {
      $(".product-filters li").removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr('data-filter');
      $(".product-lists").isotope({ filter: selector });
    });

    $(".product-lists").isotope();


    /*********************
     * POPUPS
     *********************/
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: { verticalFit: true }
    });


    /*********************
     * STICKY HEADER
     *********************/
    $("#sticker").sticky({ topSpacing: 0 });


    /*********************
     * SEARCH
     *********************/
    $(".search-bar-icon").on("click", function () {
      $(".search-area").addClass("search-active");
    });

    $(".close-btn").on("click", function () {
      $(".search-area").removeClass("search-active");
    });

  });


  /*********************
   * PAGE LOADER
   *********************/
  $(window).on("load", function () {
    $(".loader").fadeOut(1000);
  });

})(jQuery);
