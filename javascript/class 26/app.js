// var obj = {
//     id: "01",
//     name1: "Smit"
// }

// for(var key in obj){
//     document.write(key + " : " + obj[key] + "<br>")
// }

// console.log("name" in obj)

// var arr = [
//   {
//     id: "01",
//     name: "Ali",
//   },
//   {
//     id: "02",
//     name: "kashan",
//   },
//   {
//     id: "03",
//     name: "Rehman",
//   },
// ];

// for(var i =0; i < arr.length; i++){
//     for(var key in arr[i]){
//         document.write(arr[i][key] + " ")
//     }
//     document.write("<hr>")
// }

var products = [
  {
    p_id: "mb-01",
    p_name: "iphone 17",
    p_color: "orange",
    p_price: "400 pkr",
    p_img: "https://shandarmobile.com/wp-content/uploads/2025/10/iphone-17-pro-witb-cosmicorange-202509_FMT_WHH.jpeg"
  },
  {
    p_id: "mb-02",
    p_name: "samsung s25 ultra",
    p_color: "black",
    p_price: "4000 pkr",
    p_img: "https://bnwcollections.com/uploads/products/1737794667S25-ultra-bnw_11zon.webp"
  },
  {
    p_id: "lp-01",
    p_name: "Asus",
    p_color: "silver",
    p_price: "50 pkr",
    p_img: "https://static.webx.pk/files/4012/Images/11-4012-2300166-200125011147591.jpg"
  },
];


var getProducts = document.querySelector("#products")

for(var i=0; i < products.length; i++){
    
    var shortCut = products[i]
    
    getProducts.innerHTML += `<div class="abc"> 
        <img src=${shortCut.p_img} />
        <p> ${shortCut.p_id} </p>
        <p> ${shortCut.p_name} </p>
        <p> ${shortCut.p_color} </p>
        <p> ${shortCut.p_price} </p>
    </div>`
}



