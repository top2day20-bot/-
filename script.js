let products = JSON.parse(localStorage.getItem("products")) || [];

let box = document.getElementById("products");

if(box){
  box.innerHTML = "";
  products.forEach(p=>{
    box.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button>شراء</button>
      </div>
    `;
  });
}
