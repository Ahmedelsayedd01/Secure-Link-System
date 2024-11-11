$(document).ready(function () {
  /* Splide Liberary */

  var splideCctv = new Splide(".cctv .splide", {
    autoplay: true,
    pagination: false,

    perPage: "auto",
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });
  var splideAcs = new Splide(".acs .splide", {
    autoplay: true,
    pagination: false,

    perPage: "auto",
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });
  var splideGsc = new Splide(".gsc .splide", {
    autoplay: true,
    pagination: false,

    perPage: "auto",
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });
  var splideEod = new Splide(".eod .splide", {
    autoplay: true,
    pagination: false,

    perPage: "auto",
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });
  var splideFass = new Splide(".fass .splide", {
    autoplay: true,
    pagination: false,

    perPage: "auto",
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });
  var splidePi = new Splide(".pi .splide", {
    autoplay: true,
    pagination: false,

    perPage: "auto",
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });
  var splideLi = new Splide(".li .splide", {
    autoplay: true,
    pagination: false,

    perPage: "auto",
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });
  var splideVis = new Splide(".vis .splide", {
    autoplay: true,
    pagination: false,

    perPage: "auto",
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });


  var splideReviews = new Splide(".rightReviewSec .splide", {
    autoplay: true,
    arrows: false,
    interval: 2000,
    speed: 2000,
    type: "loop",
    perPage: 3,
    breakpoints: {
      990: {
        perPage: 1,
      },
      1200: {
        perPage: 3,
      },
      // 1024: {
      //   perPage: 3,
      // },
    },
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });

  splideCctv.mount();
  splideAcs.mount();
  splideGsc.mount();
  splideEod.mount();
  splideFass.mount();
  splidePi.mount();
  splideLi.mount();
  splideVis.mount();


  splideReviews.mount();
  $(".showMenu").click(function () {
    $(this).addClass("d-none");
    $(".hideMenu").removeClass("d-none");
    $(".menuMobil").css("right", "0%");
  });
  /* ######### */
  $(".hideMenu").click(function () {
    $(this).addClass("d-none");
    $(".showMenu").removeClass("d-none");
    $(".menuMobil").css("right", "100%");
  });
  /* INITIALIZE AOS */
  AOS.init({
    duration: 900,
  });
});
