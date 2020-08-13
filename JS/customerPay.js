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

let editBtn = document.querySelector(".editBtn");
let inputBars = document.querySelectorAll(
  ".persDetailMain .editableFeild input"
);

let editClicked = () => {
  console.log("clicked");
  inputBars.forEach((inputBar) => {
    inputBar.removeAttribute("readonly");
  });
};

editBtn.addEventListener("click", editClicked);
