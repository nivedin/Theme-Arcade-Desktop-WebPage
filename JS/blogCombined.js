AOS.init();

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 5,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
