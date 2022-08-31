const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //soldOut onSale
  //grab the template
  const template = document.querySelector("#smallProductTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(".subtle").textContent =
    `${product.articletype} | ${product.brandname}`¨;
  copy.querySelector("h3").textContent = product.productDisplayname;
  
  //from class
  copy.querySelector()
  //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
