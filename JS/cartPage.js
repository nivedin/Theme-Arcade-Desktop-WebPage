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

/////////// Cart Functions ////////////////////

let plusBtn = document.querySelectorAll(".plus");
let minusBtn = document.querySelectorAll(".minus");
let quantyPrice = document.querySelector(".priceCont");
let quantityNumber = document.querySelector(".quantityNum");
let removeItemButtons = document.querySelectorAll(".removeCloseBtn");
let minusBtnIcons = document.querySelector(".minus");
let totalAmount = document.getElementById("totalAmount");
let totalAmountPlusTax = document.getElementById("totalAmountPlusTax");
let discountCode = document.getElementById("discountCode");

//Close Clicked
for (var i = 0; i < removeItemButtons.length; i++) {
  var removeButton = removeItemButtons[i];
  removeButton.addEventListener("click", function (event) {
    var removeBtnClicked = event.target;
    removeBtnClicked.parentElement.parentElement.parentElement.style.animation =
      "itemAnim 5s ease-in-out forwards";
    removeBtnClicked.parentElement.parentElement.parentElement.remove();
  });
}

const decreaseItem = (incdec, itemPrice) => {
  var itemVal = document.getElementById(incdec);
  var itemPrice = document.getElementById(itemPrice);
  var minusBtnIcons = itemVal.parentElement.querySelector(".minus");
  // if (itemVal.innerHTML <= 0) {
  //   itemVal.innerHTML = 0;
  //   itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 150;
  //   minusBtnIcons.parentElement.parentElement.parentElement.parentElement.remove();
  // }
  if (itemVal.innerHTML <= 1) {
    minusBtnIcons.children[0].classList.remove("fa-minus-circle");
    minusBtnIcons.children[0].classList.add("fa-trash");
    itemVal.innerHTML = parseInt(itemVal.innerHTML) - 1;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 150;
    totalAmount.innerHTML = parseInt(totalAmount.innerHTML) - 150;
    totalAmountPlusTax.innerHTML = parseInt(totalAmountPlusTax.innerHTML) - 150;
    minusBtnIcons.parentElement.parentElement.parentElement.parentElement.remove();
    itemVal.innerHTML = 0;
  }
  if (itemVal.innerHTML <= 2) {
    minusBtnIcons.children[0].classList.remove("fa-minus-circle");
    minusBtnIcons.children[0].classList.add("fa-trash");
    itemVal.innerHTML = parseInt(itemVal.innerHTML) - 1;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 150;
    totalAmount.innerHTML = parseInt(totalAmount.innerHTML) - 150;
    totalAmountPlusTax.innerHTML = parseInt(totalAmountPlusTax.innerHTML) - 150;
    itemVal.innerHTML = 1;
  } else {
    itemVal.innerHTML = parseInt(itemVal.innerHTML) - 1;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 150;
    totalAmount.innerHTML = parseInt(totalAmount.innerHTML) - 150;
    totalAmountPlusTax.innerHTML = parseInt(totalAmountPlusTax.innerHTML) - 150;
  }
};

const increaseItem = (incdec, itemPrice) => {
  var itemVal = document.getElementById(incdec);
  var itemPrice = document.getElementById(itemPrice);
  var minusBtnIcons = itemVal.parentElement.querySelector(".minus");
  // console.log(itemVal.innerHTML);
  if (itemVal.innerHTML >= 0) {
    itemVal.innerHTML = parseInt(itemVal.innerHTML) + 1;
    minusBtnIcons.children[0].classList.remove("fa-trash");
    minusBtnIcons.children[0].classList.add("fa-minus-circle");
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 150;
    totalAmount.innerHTML = parseInt(totalAmount.innerHTML) + 150;
    totalAmountPlusTax.innerHTML = parseInt(totalAmountPlusTax.innerHTML) + 150;
  } else {
    itemVal.innerHTML = parseInt(itemVal.innerHTML) + 1;
  }
};

const applyCoupon = () => {
  let totalAmtTax = parseInt(totalAmountPlusTax.innerHTML);
  if (discountCode.value === "anthony") {
    newTotalAmt = totalAmtTax - 100;
    totalAmountPlusTax.innerHTML = newTotalAmt;
  } else {
    alert("wrong coupon code");
  }
};

/////////// //Cart Functions// ////////////////////

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
