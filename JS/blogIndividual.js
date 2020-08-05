AOS.init();

let likeButton = document.querySelector(".heartLikeBtn");
let likeButtonIcon = document.querySelector(".heartLikeBtn .fa-heart");
let likeNumber = document.querySelector(".likeNumber");

let totalLike = 201;

likeButton.addEventListener("click", function () {
  likeNumber.innerHTML = totalLike++;
  this.children[0].classList.remove("far");
  this.children[0].classList.add("fas");
  this.children[0].style.color = "red";
  this.firstElementChild.style.transition = "all 1s ease 0.3s";
});

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
