  document.addEventListener("DOMContentLoaded", function () {

  const productTitle = document.querySelector(".product-title");
   productPrice = document.querySelector(".productPrice"),
   productDesc = document.querySelector(".productDesc"),
   productBenefits1 = document.querySelector(".productBenefits1"),
   productBenefits2 = document.querySelector(".productBenefits2"),
   productBenefits3 = document.querySelector(".productBenefits3"),
   productBenefits4 = document.querySelector(".productBenefits4"),
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
        // Buat img-grid
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
              // Fungsi untuk memformat angka harga
              function formatPrice(price) {
                return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price);
              }
              var formattedPrice = formatPrice(product.price);

              productPrice.textContent = formattedPrice;
              productBenefits1.textContent = product.benefits[0];
              productBenefits2.textContent = product.benefits[1];
              productBenefits3.textContent = product.benefits[2];
              productBenefits4.textContent = product.benefits[3];
              
              imgSelect1.src= product.thumbnail;
              imgSelect2.src= product.images[0];
              imgSelect3.src= product.images[1];
              imgSelect4.src= product.images[2];
              
              imgShowcase1.src= product.thumbnail;
              imgShowcase2.src= product.images[0];
              imgShowcase3.src= product.images[1];
              imgShowcase4.src= product.images[2];
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



const formPopup2= document.querySelector(".form-popup2");
const signupLoginLink2 = formPopup.querySelectorAll(".bottom-link2 a");

showPopupBtn2.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

hidePopupBtn2.addEventListener("click", () => showPopupBtn2.click());

signupLoginLink2.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup2.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});