function addProduct(){
let products=JSON.parse(localStorage.getItem("products"))||[];
products.push({name:name.value,price:price.value,img:img.value});
localStorage.setItem("products",JSON.stringify(products));
alert("تمت الإضافة");
}