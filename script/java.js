let myBtn = document.querySelector('.btn')
let mySection = document.querySelector('section')
myBtn.addEventListener('click',()=>{
   mySection.classList.toggle('main')
 })

fetch("data.json")
.then((res)=> res.json())
.then((data)=>{
   data.forEach((res)=>{
    if(res.id<=3){
      let myResult = `
      <div class="prouduct">
      <img src="${res.src}" width="300px" alt="not-found">
      <p class="name">${res.name}</p>
      <p class="price"> price : ${res.price}</p>
      <p class="color"> color : ${res.color}</p>
      <p class="model"> model : ${res.model}</p>
       </div>
      `
      document.querySelector('.first').innerHTML += myResult;
      let myColor = document.querySelectorAll('.prouduct')
        myColor.forEach((x)=>{
        x.style.color += res.color
        })
      }
   })
})
fetch("data.json")
.then((res)=> res.json())
.then((data)=>{
   data.forEach((res)=>{
    if(res.id>=4){
      let myResult = `
      <div class="prouduct2">
      <img src="${res.src}" width="300px" alt="not-found">
      <p class="name">${res.name}</p>
      <p class="price"> price : ${res.price}</p>
      <p class="color"> color : ${res.color}</p>
      <p class="model"> model : ${res.model}</p>
       </div>
      `
      document.querySelector('.second').innerHTML += myResult;
      let myColor = document.querySelectorAll('.prouduct2')
        myColor.forEach((x)=>{
        x.style.color += res.color
        })
   }
})
})


