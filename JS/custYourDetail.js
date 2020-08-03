AOS.init();

let showMore = document.querySelector(".showMore");
let showMoreContent = document.querySelector(".showMrCont");

let showMrClicked = () => {
  showMoreContent.classList.remove("showMrDisp");
  showMore.innerHTML = "";
};

showMore.addEventListener("click", showMrClicked);

let editBtn = document.querySelector(".editBtn");
let inputBars = document.querySelectorAll(".formContent input");

let editClicked = () => {
  console.log("clicked");
  inputBars.forEach((inputBar) => {
    inputBar.removeAttribute("readonly");
  });
};

editBtn.addEventListener("click", editClicked);

let editBtn2 = document.querySelector(".editBtn2");
let inputBars2 = document.querySelectorAll(".editChangable input");

let editClicked2 = () => {
  console.log("clicked");
  inputBars2.forEach((inputBar2) => {
    inputBar2.removeAttribute("readonly");
  });
};

editBtn2.addEventListener("click", editClicked2);

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
