"use strict"

let pets = [{
    name: "Parrot",
    petImg: "../img/9.jpg",
    price:20,

},

{
    name: "Cat",
    petImg: "../img/2.jpg",
    price:20,
    
},

{
    name: "Love Puppies",
    petImg: "../img/3.jpg",
    price:20,
    
},

{
    name: "Bird",
    petImg: "../img/4.jpg",
    price:20,
    
},

{
    name: "Puppy",
    petImg: "../img/5.jpg",
    price:20,
    
},
{
    name: "Dog",
    petImg: "../img/6.jpg",
    price:20,
    
},
{
    name: "Puppy",
    petImg: "../img/7.jpg",
    price:20,
    
},
{
    name: "Rabbit",
    petImg: "../img/8.jpg",
    price:20,
    
},
{
    name: "Dog",
    petImg: "../img/15.jpg",
    price:20,
    
},
{
    name: "Cat",
    petImg: "../img/11.jpg",
    price:20,
    
},
{
    name: "Dog",
    petImg: "../img/12.jpg",
    price:20,
    
},

{
    name: "Dog",
    petImg: "../img/16.jpg",
    price:20,
    
}]



let gallery = document.getElementById("gallery");
let html = "";
pets.forEach(i => {
    html += `
    
    <div class="col">
    <div class="card shadow-sm rounded-3">
      <img src="${i.petImg}" class="card-img-top" alt="pet image">

      <div class="card-body">
        <p class="card-text text-primary h1"> ${i.name}</p>
        <p class="card-text pricing-card-title text-success h1"> ${"$" + i.price}</p>
        <button type="button" class="btn btn-lg btn-outline-info">View</button>
        <button type="button" class="btn btn-lg btn-outline-success">Add to Cart</button>
          
        </div>
      </div>
    </div>
  </div>
  
  `
  console.log(i)
  gallery.innerHTML  =html
});

