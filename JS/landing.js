var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,

  slidesPerView: "3",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

AOS.init();

jQuery(document).ready(function ($) {
  $(".topChoiceContent .contentCards .card-title").counterUp({
    delay: 10,
    time: 1000,
  });
});
