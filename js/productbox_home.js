// Buat product box paket nasional
const endpoint2 = "https://dummyjson.com/products";

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
        var harga = document.createTextNode("Harga mulai dari:");

        var span = document.createElement("span");
        var price = document.createTextNode("Rp. " + product.price);

        // buat lokasi icon dan alamat
        var location = document.createElement("div");
        location.classList.add("location");

        // buat isi div location
        var div_icon = document.createElement("div");
        var icon = document.createElement("img");
        icon.classList.add("icon")
        icon.setAttribute("src", "/Source/Img/Icon/location.png");

        var div_alamat = document.createElement("div");
        var alamat = document.createTextNode(product.brand);

        // buat link untuk button cart
        var cart = document.createElement("a");
        cart.setAttribute("href","detail.html")
        cart.classList.add("cart");

        var cart_icon = document.createElement("img");
        cart_icon.setAttribute("src", "/Source/Img/Icon/cart.png");

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

  // buat produk box Paket Internasional
const endpoint = "https://dummyjson.com/products";

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
        var harga = document.createTextNode("Harga mulai dari:");

        var span = document.createElement("span");
        var price = document.createTextNode("Rp. " + product.price);

        // buat lokasi icon dan alamat
        var location = document.createElement("div");
        location.classList.add("location");

        // buat isi div location
        var div_icon = document.createElement("div");
        var icon = document.createElement("img");
        icon.classList.add("icon")
        icon.setAttribute("src", "/Source/Img/Icon/location.png");

        var div_alamat = document.createElement("div");
        var alamat = document.createTextNode(product.brand);

        // buat link untuk button cart
        var cart = document.createElement("a");
        cart.setAttribute("href","detail.html")
        cart.classList.add("cart");

        var cart_icon = document.createElement("img");
        cart_icon.setAttribute("src", "/Source/Img/Icon/cart.png");

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
