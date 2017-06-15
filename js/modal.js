var link = document.querySelector(".featured__form");
var popup = document.querySelector(".modal");
var overlap = document.querySelector(".modal-overlap");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal--show");
  overlap.classList.add("modal--show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      overlap.classList.remove("modal-overlap--show");
    }
  }
});
