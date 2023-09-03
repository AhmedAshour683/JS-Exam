$("#searchwords").click(function(){
$(".side-menu").animate({left:"-176px"},500)
$(".store").html(`<input class="form-control bg-black border border-primary search text-white searchmeal" type="text" placeholder="Search By Meal">
<input class="form-control bg-black border border-primary search text-white searchletter" type="text" placeholder="Search By Letter">`)



let e
$(".searchmeal").keydown(async function(){
console.log($(".forsearch"))
    let byMeal = $(".searchmeal").val()
    console.log(byMeal)
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${byMeal}`)
  
  e= await data.json()
  console.log(e)

  let cartonaSearch =`<input class="form-control bg-black border border-primary search text-white searchmeal" type="text" placeholder="Search By Meal">
  <input class="form-control bg-black border border-primary search text-white searchletter" type="text" placeholder="Search By Letter">`
  
 
  for( let i = 0 ;i<= e.meals.length-1;i++){

   cartonaSearch +=  `<div class="col-md-3">
    <div class="border border-black rounded-3 position-relative backs" id="overlaycon">
      <img class="w-100" src="${e.meals[i].strMealThumb}" alt="">
        <div class="w-100 h-100 position-absolute start-0 top-100 rounded-3 opacity-0" id="overlay"> <p class="mt-5">${e.meals[i].strCategory}</p>
        </div>
    </div>
    </div>`

    }
 
     $(".store").html(cartonaSearch)
     
     
    

})




let f
$(".searchletter").keydown(async function(){
    let byletter = $(".searchletter").val()
    console.log(byletter)
  let data3 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${byletter}`)

  f= await data3.json()
 

  let cartonaSearch2 =`<input class="form-control bg-black border border-primary search text-white searchmeal" type="text" placeholder="Search By Meal">
  <input class="form-control bg-black border border-primary search text-white searchletter" type="text" placeholder="Search By Letter">`
  
 
  for( let i = 0 ;i<= f.meals.length-1;i++){

   cartonaSearch2 +=  `<div class="col-md-3">
    <div class="border border-black rounded-3 position-relative backs" id="overlaycon">
      <img class="w-100" src="${f.meals[i].strMealThumb}" alt="">
        <div class="w-100 h-100 position-absolute start-0 top-100 rounded-3 opacity-0" id="overlay"> <p class="mt-5">${f.meals[i].strCategory}</p>
        </div>
    </div>
    </div>`

    }
 
     $(".store").html(cartonaSearch2)
     
     
    

})

})





let byLetter = $(".searchletter").val()


let b
$("#categories").click(async function getData(){
  let data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  b= await data.json()
  let cat = b.categories
  let cartona =`<div class="col-md-3">
  <div class="border border-black rounded-3 position-relative backs" id="overlaycon">
    <img class="w-100" src="${cat[0].strCategoryThumb}" alt="">
      <div class="w-100 h-100 position-absolute start-0 top-100 rounded-3 opacity-0" id="overlay"> <p class="mt-5">${cat[0].strCategory}</p>
      <p>${cat[0].strCategoryDescription}</p>
      </div>
  </div>
   </div>`
  
//  console.log(cat)
 
  for( let i = 1 ;i<= cat.length-1;i++){
    // console.log(cat[i].strCategoryThumb)
   cartona +=  `<div class="col-md-3">
    <div class="border border-black rounded-3 position-relative backs" id="overlaycon">
      <img class="w-100" src="${cat[i].strCategoryThumb}" alt="">
        <div class="w-100 h-100 position-absolute start-0 top-100 rounded-3 opacity-0" id="overlay"> <p class="mt-5">${cat[i].strCategory}</p>
        <p>${cat[i].strCategoryDescription}</p>
        </div>
    </div>
    </div>`

    }
    // console.log(cartona)
     $(".store").html(cartona)
     $(".side-menu").animate({left:"-176px"},500)
    

})



// Area page
let c
$("#area").click(async function(){
  let dataArea = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
  c = await dataArea.json()
  // console.log(c.meals)
  let cartonaArea = `<div class="col-md-3">
  <div class="border border-black rounded-3" id="areaIcon">
    <i class="fa-solid fa-house-laptop fa-2xl mt-5" style="color: #ffffff;"></i>
    <h2 class="text-white mt-5 ms-3">${c.meals[0].strArea}</h2>
  </div>
</div>`

for (let i = 1; i < c.meals.length-1; i++) {
  cartonaArea += `<div class="col-md-3">
  <div class="border border-black rounded-3" id="areaIcon">
    <i class="fa-solid fa-house-laptop fa-2xl mt-5" style="color: #ffffff;"></i>
    <h2 class="text-white mt-5 ms-3">${c.meals[i].strArea}</h2>
  </div>
</div>`
  
}
$(".store").html(cartonaArea)
$(".side-menu").animate({left:"-176px"},500)
})




// Ingredients view

let d
$("#ingr").click(async function(){
  let dataIngr = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
  d = await dataIngr.json()
  // console.log(d)
  let cartonaArea = `<div class="col-md-3">
  <div class="border border-black rounded-3" id="ingicon">
    <i class="fa-solid fa-utensils fa-2xl d-block text-center" style="color: #ffffff;"></i>
    <h2 class="text-white mt-5 ms-3 text-center">${d.meals[0].strIngredient}</h2>
    <p class="text-white ms-3 text-center">${d.meals[0].strDescription.slice(0,200)}</p>
  </div>
</div>`

for (let i = 1; i < 20; i++) {
  cartonaArea += `<div class="col-md-3">
  <div class="border border-black rounded-3" id="ingicon">
    <i class="fa-solid fa-utensils fa-2xl d-block text-center" style="color: #ffffff;"></i>
    <h2 class="text-white mt-5 ms-3 text-center">${d.meals[i].strIngredient}</h2>
    <p class="text-white ms-3 text-center">${d.meals[i].strDescription.slice(0,200)}</p>
  </div>
</div>`
  
}
$(".store").html(cartonaArea)
$(".side-menu").animate({left:"-176px"},500)
})
  


// Search viewer











let s
async function getData(){
  let data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  s= await data.json()
  let cat = s.categories
  let cartona =`<div class="col-md-3">
  <div class="border border-black rounded-3 position-relative backs" id="overlaycon">
    <img class="w-100" src="${cat[0].strCategoryThumb}" alt="">
      <div class="w-100 h-100 position-absolute start-0 top-100 rounded-3 opacity-0" id="overlay"> <p class="mt-5">${cat[0].strCategory}</p>
      <p>${cat[0].strCategoryDescription}</p>
      </div>
  </div>
   </div>`
  
//  console.log(cat)
 
  for( let i = 1 ;i<= cat.length-1;i++){
    // console.log(cat[i].strCategoryThumb)
   cartona +=  `<div class="col-md-3">
    <div class="border border-black rounded-3 position-relative backs" id="overlaycon">
      <img class="w-100" src="${cat[i].strCategoryThumb}" alt="">
        <div class="w-100 h-100 position-absolute start-0 top-100 rounded-3 opacity-0" id="overlay"> <p class="mt-5">${cat[i].strCategory}</p>
        <p>${cat[i].strCategoryDescription}</p>
        </div>
    </div>
    </div>`

    }
    // console.log(cartona)
     $(".store").html(cartona)

  }
  getData()






  $("#conn").click(function(){
    $(".contact").html(`<div class="w-50 d-flex m-auto mt-5 ">
    <input class="w-50 form-control bg-body-secondary me-3" type="text" placeholder="Enter Your Name">
    <input class="w-50 form-control bg-body-secondary" type="email" placeholder="Enter Your Email">
  </div>

  <div class="w-50 d-flex m-auto mt-5 ">
    <input class="w-50 form-control bg-body-secondary me-3" type="tel" placeholder="Enter Your Phone">
    <input class="w-50 form-control bg-body-secondary" type="number" placeholder="Enter Your Age">
  </div>


  <div class="w-50 d-flex m-auto mt-5 ">
    <input class="w-50 form-control bg-body-secondary me-3" type="password" placeholder="Enter Your Password">
    <input class="w-50 form-control bg-body-secondary" type="password" placeholder="reEnter Your Password">
  </div>

  <button class="disabled btn btn-danger w-25 d-block m-auto mt-4">Submit</button>`)

  $(".side-menu").animate({left:"-176px"},500)
  $(".store").html("")

  })




$(".open").click(function(){
    $(".side-menu").animate({left:"0px"},500)
    // $(".slide1").animate({marginTop:"0px"},3000)

})

$(".close").click(function(){
    $(".side-menu").animate({left:"-176px"},500)
})










