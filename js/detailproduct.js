document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan elemen-elemen di halaman detail.html
  const showcaseProductImg = document.querySelector(".productImgShowcase");
  const selectedProductImg = document.querySelector(".productImgSelect");
  const productTitle = document.querySelector(".product-title");
  const productDesc = document.querySelector(".product-desc");
  const productPrice = document.querySelector(".product-price");
  const productBenefits = document.querySelector(".product-benefits");

  // Mendapatkan elemen dengan class detailProduct
  const detailProduct = document.querySelector(".detailProduct");

  // Mendapatkan nilai data-product-index dari elemen detailProduct
  const productIndex = parseInt(detailProduct.getAttribute('data-product-index'));

  // Debugging: Check if productIndex is correctly obtained
  console.log("Product Index:", productIndex);

  // Jika nilai data-product-index valid, perbarui elemen-elemen di halaman detail.html
  if (!isNaN(productIndex) && productIndex >= 0) {
    // Debugging: Check if endpoint is correctly populated
    console.log("Endpoint:", endpoint);

    // Mendapatkan produk dari array endpoint berdasarkan productIndex
    const choosenProduct = endpoint[productIndex];

    // Debugging: Check if choosenProduct is correctly assigned
    console.log("Chosen Product:", choosenProduct);

    // Memperbarui elemen-elemen di halaman detail.html
    showcaseProductImg.src = choosenProduct.images[0].img;
    selectedProductImg.src = choosenProduct.images[0].img;
    productTitle.textContent = choosenProduct.title;
    productDesc.textContent = choosenProduct.description;
    productPrice.textContent = choosenProduct.price;
    productBenefits.textContent = choosenProduct.images[0].description;
  }
});