AOS.init();

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 3,
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

const prdPrice = 150;

let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let quantyPrice = document.querySelector(".priceCont");
let quantityNumber = document.querySelector(".quantityNum");

let defQuan = 1;
let quantyItemPrice = 150;

let plusClick = () => {
  quantityNumber.innerHTML = defQuan++ + 1;
  quantyPrice.innerHTML = "₹" + quantyItemPrice * defQuan;
};
let minusClick = () => {
  quantityNumber.innerHTML = defQuan-- - 1;
  quantyPrice.innerHTML = "₹" + quantyItemPrice / defQuan;
};

plusBtn.addEventListener("click", plusClick);
minusBtn.addEventListener("click", minusClick);
