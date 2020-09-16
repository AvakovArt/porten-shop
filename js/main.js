$(document).ready(function () {
  var slider = new Swiper(".season__items", {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    autoHover: true,

    // Navigation arrows
    navigation: {
      nextEl: ".season__items-button--next",
      prevEl: ".season__items-button--prev",
    },
  });
});
