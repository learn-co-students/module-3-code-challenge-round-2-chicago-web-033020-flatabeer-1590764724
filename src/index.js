// Code here


const beerDescription = document.querySelector(".description")

const beerReviews = document.querySelector(".reviews")

const renderBeer = () => {
  
  fetch(`http://localhost:3000/beers/1`)
  .then(resp =>resp.json())
  .then(beer => {
    const beerName = document.getElementById("beer-name")
    beerName.innerHTML = `${beer.name}`

    const beerImage = document.getElementById("beer-image")
    beerImage.src = beer.image_url

    beerDescription.children[0].innerHTML = beer.description

    beer.reviews.forEach(beer => {
      const reviewText = `<li>${beer}</li>`
      beerReviews.innerHTML += reviewText
    })
  })
}

const changeDescription = () => {
  beerDescription.addEventListener("submit", (event) => {
    event.preventDefault()
    const newDescription = event.target[0].value
    beerDescription.children[0].innerHTML = newDescription
    const reqObj = {
      method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"description": newDescription})
    }
    fetch(`http://localhost:3000/beers/1`, reqObj)
    .then(resp => resp.json())
    .then(info => console.log("hello"))
  })
}

const addReview = () => {
  const reviewForm = document.querySelector(".review-form")
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const newReview = event.target[0].value
    event.target.reset()
    beerReviews.innerHTML += `<li>${newReview}</li>`
  }) 
}


renderBeer()
changeDescription()
addReview()


