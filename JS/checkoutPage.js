let scrollToTop = document.querySelector(".scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

scrollToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

$(".countrypicker").countrypicker();

let offerBtn = document.querySelector(".offerBtn");
let couponPara = document.querySelector(".couponPara");

offerBtn.addEventListener("click", () => {
  offerBtn.remove();
  couponPara.remove();
});
