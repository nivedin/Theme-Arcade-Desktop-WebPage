AOS.init();

let showMore = document.querySelector(".showMore");
let showMoreContent = document.querySelector(".showMrCont");

let showMrClicked = () => {
  showMoreContent.classList.remove("showMrDisp");
  showMore.innerHTML = "";
};

showMore.addEventListener("click", showMrClicked);

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
