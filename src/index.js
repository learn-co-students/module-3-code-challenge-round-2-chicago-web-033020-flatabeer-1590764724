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

    beer.reviews.forEach(review => {
      const reviewText = `<li>${review}</li>`
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
  })
}

const addReview = () => {
  const reviewForm = document.querySelector(".review-form")
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const newReview = event.target[0].value
    event.target.reset()
    beerReviews.innerHTML += `<li>${newReview}</li>`

    //*******ADVANCED...NOT COMPLETE */
    // const reqObj = {
    //   method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({"reviews": newReview})
    // }
    // fetch(`http://localhost:3000/beers/1`, reqObj)
    // .then(resp => resp.json())

  }) 
}

//*****ADVANCED, DIDN'T GET TO MAKING THE LINKS WORK */
const renderBeerMenu = () => {

  fetch(`http://localhost:3000/beers`)
  .then(resp =>resp.json())
  .then(beers => {
    const beerMenu = document.getElementById("beer-menu")
    beers.forEach(beer => {
      const menuItem = `<li><a href="http://localhost:3000/beers/${beer.id}">${beer.name}</a></li>`
      beerMenu.innerHTML += menuItem
    })
  })
}



renderBeer()
changeDescription()
addReview()
renderBeerMenu()






// *******BACK-UP***************
// const beerDescription = document.querySelector(".description")

// const beerReviews = document.querySelector(".reviews")

// const renderBeer = () => {
  
//   fetch(`http://localhost:3000/beers/1`)
//   .then(resp =>resp.json())
//   .then(beer => {
//     const beerName = document.getElementById("beer-name")
//     beerName.innerHTML = `${beer.name}`

//     const beerImage = document.getElementById("beer-image")
//     beerImage.src = beer.image_url

//     beerDescription.children[0].innerHTML = beer.description

//     beer.reviews.forEach(beer => {
//       const reviewText = `<li>${beer}</li>`
//       beerReviews.innerHTML += reviewText
//     })
//   })
// }

// const changeDescription = () => {
//   beerDescription.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const newDescription = event.target[0].value
//     beerDescription.children[0].innerHTML = newDescription
//     const reqObj = {
//       method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({"description": newDescription})
//     }
//     fetch(`http://localhost:3000/beers/1`, reqObj)
//     .then(resp => resp.json())
//   })
// }

// const addReview = () => {
//   const reviewForm = document.querySelector(".review-form")
//   reviewForm.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const newReview = event.target[0].value
//     event.target.reset()
//     beerReviews.innerHTML += `<li>${newReview}</li>`

//     // const reqObj = {
//     //   method: 'PATCH',
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify({"reviews": newReview})
//     // }
//     // fetch(`http://localhost:3000/beers/1`, reqObj)
//     // .then(resp => resp.json())

//   }) 
// }



