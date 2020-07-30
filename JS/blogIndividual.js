AOS.init();

let likeButton = document.querySelector(".heartLikeBtn");
let likeNumber = document.querySelector(".likeNumber");

let totalLike = 201;

let likeClicked = () => {
  likeNumber.innerHTML = totalLike++;
};

likeButton.addEventListener("click", likeClicked);
