let products=JSON.parse(localStorage.getItem("products"))||[
{name:"هاتف سامسونج",price:"5000 جنيه",img:"https://via.placeholder.com/200"},
{name:"سماعة بلوتوث",price:"350 جنيه",img:"https://via.placeholder.com/200"}
];
let box=document.getElementById("products");
if(box){
box.innerHTML="";
products.forEach(p=>{
box.innerHTML+=`
<div class="product">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>${p.price}</p>
<button>شراء</button>
</div>`
})
}