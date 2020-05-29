// Code here

const beersURL = "http://localhost:3000/beers/1"

fetchBeer(); 

function fetchBeer(){
    fetch(beersURL)
    .then(resp => resp.json())
    .then(beer => {
      renderBeer(beer);
    })
}

//const beerCollect = document.querySelector('#beerCollect')

function renderBeer(beer) { // don't forget ab backticks // add data-toy-id to make "likes" easier later
//const beerDetails = document.querySelector(".beer-details")
const beerName = document.querySelector("#beer-name")
beerName.innerHTML = beer.name

const beerImg= document.querySelector("#beer-image")
beerImg.src = beer.image_url

const beerDescription= document.querySelector("#beer-info")
beerDescription.innerHTML = beer.description

const beerReviews = document.querySelector("#beer-reviews")
beerReviews.innerHTML = beer.reviews
}



  
const descForm = document.querySelector("#description")
descForm.addEventListener('click', descriptionButton);

function descriptionButton(event){
    if (event.target.className === "desc-button"){
        event.preventDefault()
        handleUpdate(event)     
}

function handleUpdate(event) {
    //const descFormInput = document.querySelector("#beer-description")
    beerId = 1
    const descFormInput = event.target.previousElementSibling;
    //const newDesc = descFormInput.innerHTML
   // window.alert(descriptionForm)
    updateDescription(beerId, descFormInput);
  }

  function updateDescription(beerId, descFormInput){
    fetch(beersURL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ description: descFormInput }),
    })
      .then((resp) => resp.json())
      .catch((error) => console.error('Error posting update', error));
  }
  
}

function handleReviewForm(){
    const form = document.querySelector('#review-form')
    form.addEventListener('submit', function(event){
      event.preventDefault()
      const formReview = event.target.review.value
      form.reset()
      addReview(formReview)
    })
  }
  
  function addReview(review){
    const objReq = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        reviews: review
      })
    }
  
    fetch(beersURL, objReq)
    .then(resp => resp.json())
    .then(newReview => { fetchBeer() })
  }


  fetchBeer();