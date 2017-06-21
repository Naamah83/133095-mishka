var modal = document.querySelector(".modal");
var overlap = document.querySelector(".modal-overlap");
var link = document.querySelector(".featured__form");
var links = document.querySelector(".product__basket");

link.addEventListener("click", function (event) {
  event.preventDefault();

  overlap.classList.add("modal-overlap--show");
  modal.classList.add("modal--show");
});

links.addEventListener("click", function (event) {
  event.preventDefault();

  overlap.classList.add("modal-overlap--show");
  modal.classList.add("modal--show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
      overlap.classList.remove("modal-overlap--show");
    }
  }
});

var navMain = document.querySelector(".main-nav");
var navToggler = document.querySelector(".main-nav__toggler");

navMain.classList.remove("main-nav--nojs");

navToggler.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
