function addProduct(){
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let nameInput = document.getElementById("name").value;
  let priceInput = document.getElementById("price").value;
  let imgInput = document.getElementById("img").value;

  if(nameInput && priceInput && imgInput){
    products.push({name:nameInput, price:priceInput, img:imgInput});
    localStorage.setItem("products", JSON.stringify(products));
    alert("تمت الإضافة بنجاح");
    location.reload();
  } else {
    alert("من فضلك اكمل كل الحقول");
  }
}
