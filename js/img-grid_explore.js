// Create Product Box and Fetch from API
const endpoint3 = "https://dummyjson.com/products";

fetch(endpoint3)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    if (data && data.products) {
      // data.products.forEach(product => {
        for (let i = 0; i < Math.min(data.products.length, 4); i++){
          const product = data.products[i];

          // buat budaya box
          var budaya = document.createElement("a");
          budaya.classList.add("img-budaya");
          budaya.setAttribute("href", "detail.html");

          // buat isi image
          var image = document.createElement("img");
          image.setAttribute("src", product.thumbnail);

          // buat isi text
          var text = document.createElement("div");
          text.classList.add("overlay");  
          var isiText = document.createTextNode(product.title);;

          // append 
          budaya.appendChild(image);
          budaya.appendChild(text);

          text.appendChild(isiText)

        
        let paketBudaya = document.getElementById("img-grid");
        paketBudaya.appendChild(budaya);
      };
    } else {
      console.error("Data tidak sesuai", data);
    }
  })
  .catch(error => {
    console.log("Error", error);
  });
