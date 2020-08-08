AOS.init();

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

/////////////filter//////////////////
var filterized = $(".lftMain").filterizr({});

//////////////////////////////

let invoice1 = document.querySelectorAll(".card1");
let invoice2 = document.querySelectorAll(".card2");
let Displayinvoice = document.querySelector(".invoice2");
let Hideinvoice = document.querySelector(".invoice1");

invoice1.forEach((invoice) => {
  invoice.addEventListener("click", () => {
    Hideinvoice.style.display = "block";
    Displayinvoice.style.display = "none";
  });
});

invoice2.forEach((invoice) => {
  invoice.addEventListener("click", () => {
    Hideinvoice.style.display = "none";
    Displayinvoice.style.display = "block";
  });
});
