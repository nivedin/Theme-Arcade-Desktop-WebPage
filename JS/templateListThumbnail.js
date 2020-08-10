AOS.init();

let viewList = document.querySelector(".viewList");
let viewGallery = document.querySelector(".viewGallery");

let viewListContent = document.querySelector(".itemListView");
let viewGalleryContent = document.querySelector(".itemViewGallery");

viewList.addEventListener("click", () => {
  viewListContent.classList.remove("noDisplay");
  viewGalleryContent.classList.add("noDisplay");
  viewList.children[0].classList.add("activeList");
  viewGallery.children[0].classList.remove("activeList");
});

viewGallery.addEventListener("click", () => {
  viewGalleryContent.classList.remove("noDisplay");
  viewListContent.classList.add("noDisplay");
  viewList.children[0].classList.remove("activeList");
  viewGallery.children[0].classList.add("activeList");
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

/////////////filter//////////////////
var filterized = $(".itemListView").filterizr({});
//////////////////////////////
