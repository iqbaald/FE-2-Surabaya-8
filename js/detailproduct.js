  document.addEventListener("DOMContentLoaded", function () {

  const productTitle = document.querySelector(".product-title");
   productPrice = document.querySelector(".productPrice"),
   productDesc = document.querySelector(".productDesc"),
   productBenefits1 = document.querySelector(".productBenefits1"),
   productBenefits2 = document.querySelector(".productBenefits2"),
   productBenefits3 = document.querySelector(".productBenefits3"),
   productBenefits4 = document.querySelector(".productBenefits4"),
   productBenefits5 = document.querySelector(".productBenefits5"),
   imgShowcase1 = document.querySelector(".imgShowcase1"),
   imgShowcase2 = document.querySelector(".imgShowcase2"),
   imgShowcase3 = document.querySelector(".imgShowcase3"),
   imgShowcase4 = document.querySelector(".imgShowcase4"),
   imgSelect1 = document.querySelector(".imgSelect1"),
   imgSelect2 = document.querySelector(".imgSelect2"),
   imgSelect3 = document.querySelector(".imgSelect3"),
   imgSelect4 = document.querySelector(".imgSelect4");
  
  // Mendapatkan data-product-index dari localStorage,
  const  productIndex= localStorage.getItem(
          "selectedProductIndex"
        );
        // Buat img-grid paket budaya
        const endpoint = "https://lively-cape-toad.cyclic.app/products";

        fetch(endpoint)
          .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            if (data && data.products) {

              const product = data.products[productIndex-1];
              
              productTitle.textContent = product.title;
              productDesc.textContent = product.description;
              productPrice.textContent = "Rp." + product.price;
              productBenefits1.textContent = product.images[0];
              productBenefits2.textContent = product.images[1];
              productBenefits3.textContent = product.images[2];
              productBenefits4.textContent = product.images[3];
              productBenefits5.textContent = product.images[0];
              
              imgSelect1.src= product.images[0];
              imgSelect2.src= product.images[1];
              imgSelect3.src= product.images[2];
              imgSelect4.src= product.images[3];
              
              imgShowcase1.src= product.images[0];
              imgShowcase2.src= product.images[1];
              imgShowcase3.src= product.images[2];
              imgShowcase4.src= product.images[3];
            }
          })
          .catch((error) => {
            console.log("Error", error);
          });
      });

// order complete popup    
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


// Detail Page image slider
const imgs2 = document.querySelectorAll(".img-select a");
const imgBtns2 = [...imgs2];
let imgId2 = 1;

imgBtns2.forEach((imgItem) => {
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
