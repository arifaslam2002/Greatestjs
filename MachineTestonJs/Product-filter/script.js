const products = ["Laptop", "Mobile", "Headphone", "Keyboard", "Mouse"];
document.getElementById("search").addEventListener(("input"),()=>{
   const  search = document.getElementById("search").value;
   const filtered = products.filter((product)=>{
    return product.toLowerCase().includes(search.toLowerCase())
   })
   let list = document.getElementById("list")
   list.innerHTML=""
   if(filtered.length === 0){
    list.innerHTML = "<li>No products found</li>"
    return
   }
   filtered.forEach((product)=>{
    const li = document.createElement("li");
    li.textContent =product;
    list.appendChild(li);
   })
   });