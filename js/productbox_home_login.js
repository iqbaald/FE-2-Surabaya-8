// Buat product box paket internasional
const endpoint2 = "https://dummyjson.com/products/category/smartphones";


fetch(endpoint2)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    if (data && data.products) {
      // data.products.forEach(product => {
        for (let i = 0; i < Math.min(data.products.length, 6); i++){
          const product = data.products[i];

        // buat product-box
        var productBox = document.createElement("div");
        productBox.classList.add("product-box");

        // buat img dan url
        var img = document.createElement("img");
        img.setAttribute("src", product.thumbnail);

        // buat h2, p, span
        var h2 = document.createElement("h2");
        var title = document.createTextNode(product.title);

        var p = document.createElement("p");
        var harga = document.createTextNode("Harga Paket Wisata:");

         // Fungsi untuk memformat angka harga
         function formatPrice(price) {
          return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price);
        }
        var formattedPrice = formatPrice(product.price);

        var span = document.createElement("span");
        var price = document.createTextNode(formattedPrice);

        // buat lokasi icon dan alamat
        var location = document.createElement("div");
        location.classList.add("location");

        // buat isi div location
        var div_icon = document.createElement("div");
        var icon = document.createElement("img");
        icon.classList.add("icon")
        icon.setAttribute("src", "Source/Img/Icon/location.png");

        var div_alamat = document.createElement("div");
        var alamat = document.createTextNode(product.location);

        // buat link untuk button cart
        var cart = document.createElement("a");
        cart.setAttribute("href","login-detail.html")
        cart.classList.add("cart", "detailProduct");
        cart.setAttribute("data-product-index", product.id);
        cart.onclick = function() {
          storeProductIndex(this);
        };

        var cart_icon = document.createElement("img");
        cart_icon.setAttribute("src", "Source/Img/Icon/cart.png");

        // append child
        productBox.appendChild(img);
        productBox.appendChild(h2);
        productBox.appendChild(p);
        productBox.appendChild(span);
        productBox.appendChild(location);
        productBox.appendChild(cart);

        h2.appendChild(title);
        p.appendChild(harga);
        span.appendChild(price);
        location.appendChild(div_icon)
        div_icon.appendChild(icon)
        div_icon.appendChild(alamat)
        cart.appendChild(cart_icon)

        let productContainer = document.getElementById("productContainer2");
        productContainer.appendChild(productBox);
      };
    } else {
      console.error("Data tidak sesuai", data);
    }
  })
  .catch(error => {
    console.log("Error", error);
  });

  // buat produk box Paket nasional
  const endpoint = "https://dummyjson.com/products/category/laptops";

fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    if (data && data.products) {
      // data.products.forEach(product => {
        for (let i = 0; i < Math.min(data.products.length, 6); i++){
          const product = data.products[i];

        // buat product-box
        var productBox = document.createElement("div");
        productBox.classList.add("product-box");

        // buat img dan url
        var img = document.createElement("img");
        img.setAttribute("src", product.thumbnail);

        // buat h2, p, span
        var h2 = document.createElement("h2");
        var title = document.createTextNode(product.title);

        var p = document.createElement("p");
        var harga = document.createTextNode("Harga paket trip:");

        // Fungsi untuk memformat angka harga
        function formatPrice(price) {
          return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price);
        }
        var formattedPrice = formatPrice(product.price);

        var span = document.createElement("span");
        var price = document.createTextNode(formattedPrice);

        // buat lokasi icon dan alamat
        var location = document.createElement("div");
        location.classList.add("location");

        // buat isi div location
        var div_icon = document.createElement("div");
        var icon = document.createElement("img");
        icon.classList.add("icon")
        icon.setAttribute("src", "Source/Img/Icon/location.png");

        var div_alamat = document.createElement("div");
        var alamat = document.createTextNode(product.location);

        // buat link untuk button cart
        var cart = document.createElement("a");
        cart.setAttribute("href","login-detail.html");
        cart.classList.add("cart", "detailProduct");
        cart.setAttribute("data-product-index", product.id);
        cart.onclick = function() {
          storeProductIndex(this);
        };

        var cart_icon = document.createElement("img");
        cart_icon.setAttribute("src", "Source/Img/Icon/cart.png");

        // append child
        productBox.appendChild(img);
        productBox.appendChild(h2);
        productBox.appendChild(p);
        productBox.appendChild(span);
        productBox.appendChild(location);
        productBox.appendChild(cart);

        h2.appendChild(title);
        p.appendChild(harga);
        span.appendChild(price);
        location.appendChild(div_icon)
        div_icon.appendChild(icon)
        div_icon.appendChild(alamat)
        cart.appendChild(cart_icon)

        let productContainer = document.getElementById("productContainer");
        productContainer.appendChild(productBox);
      };
    } else {
      console.error("Data tidak sesuai", data);
    }
  })
  .catch(error => {
    console.log("Error", error);
  });

  // menyimpan ke storage product index
function storeProductIndex(element) {
  const productIndex = element.getAttribute('data-product-index');
  localStorage.setItem('selectedProductIndex', productIndex);
}