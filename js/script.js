const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// profile menu
let subUntukMenu = document.getElementById("subMenu");

function toggleMenu() {
  subUntukMenu.classList.toggle("open-menu");
}
// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});

function newFunction() {
  return "subMenu";
}

// Detail Page
const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

document.addEventListener("DOMContentLoaded", function () {
  const orderComplete = document.querySelector(".order-complete");
  const overlay2 = document.querySelector(".overlay2");
  const showBtn = document.querySelector(".show-models");
  const closeBtn = document.querySelector(".close-btn2");
  const ocCode = document.getElementById("oc");

  showBtn.addEventListener("click", function () {
    overlay2.style.opacity = 1;
    overlay2.style.pointerEvents = "auto";

    
  setTimeout(function () {
    const generatedCode = generateCodeWithPrefix("WTTRVL", 100000000, 40000000);
    
    ocCode.textContent = generatedCode;
    orderComplete.classList.add("active");
  }, 1000);
});

function generateCodeWithPrefix(prefix, min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return prefix + randomNumber;
}

  // overlay2.addEventListener("click", function () {
  //   overlay2.style.opacity = 0;
  //   overlay2.style.pointerEvents = "none";
  //   orderComplete.classList.remove("active");
  // });

  // closeBtn.addEventListener("click", function () {
  //   overlay2.style.opacity = 0;
  //   overlay2.style.pointerEvents = "none";
  //   orderComplete.classList.remove("active");
  // });
});