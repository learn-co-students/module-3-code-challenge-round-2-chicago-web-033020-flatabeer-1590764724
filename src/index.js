const descForm = document.querySelector('.description')
const updateButton = descForm.getElementsByTagName('button')
const reviewForm = document.querySelector('.review-form')
const beerReviews = document.querySelector(".reviews")

console.log(reviewForm)

function fetchBeer() {
  fetch('http://localhost:3000/beers/1')
  .then(resp => resp.json())
  .then(beer => renderBeer(beer));
}

function renderBeer(beer){
  console.log(beer)
  const beerName = document.querySelector(".beer-details")
  beerName.getElementsByTagName("h2")[0].innerText = beer.name

  
  beerName.getElementsByTagName('img')[0].src = beer.image_url

  const beerDesc = document.querySelector(".description")
  beerDesc.getElementsByTagName('textarea')[0].innerHTML = beer.description

  const beerReviews = document.querySelector(".reviews")

  beerReviews.innerHTML = ""
  beer.reviews.forEach(review => {
    beerReviews.innerHTML += `<li> ${review} </li>`
  }) 
}

function addReviews(){
  reviewForm.addEventListener('submit', function(event){
    event.preventDefault();
    const newReview = event.target[0].value
    console.log(newReview)
    beerReviews.innerHTML += `<li> ${newReview} </li>`
  })
}


function updateBeer() {
  descForm.addEventListener("submit", function(event){
    // event.preventDefault();
    const newDesc = event.target[0].value
    
    const reqObj = {
      method: "PATCH",
      headers: 
      {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify ({
        "description": newDesc
      })
    }
      fetch('http://localhost:3000/beers/1', reqObj)
      .then(resp => resp.json())
    })
}


fetchBeer()
addReviews()
updateBeer()
