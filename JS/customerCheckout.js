AOS.init();

let cartItems = document.querySelectorAll(".product");
let removeItemButtons = document.querySelectorAll(".removeCloseBtn");
let viewMrContent = document.querySelector(".viewMrClicked");
let viewMrBtn = document.querySelector(".viewMr");

//Close Clicked
for (var i = 0; i < removeItemButtons.length; i++) {
  var removeButton = removeItemButtons[i];
  removeButton.addEventListener("click", function (event) {
    var removeBtnClicked = event.target;
    removeBtnClicked.parentElement.parentElement.style.animation =
      "itemAnim .5s ease";

    removeBtnClicked.parentElement.parentElement.addEventListener(
      "animationend",
      function () {
        removeBtnClicked.parentElement.parentElement.remove();
      }
    );
    cartItems.length--;
  });
}

viewMrBtn.addEventListener("click", () => {
  viewMrContent.style.display = "block";
  viewMrBtn.remove();
});
