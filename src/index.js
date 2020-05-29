// // Code here
// # FlataBeer

// Today you'll be building an app for viewing and editing beers. You will be using a local API and building out the frontend for our app, FlataBeer.

// ## Demo

// Use this gif as an example of how the app should work.

// ![demo gif](assets/demo.gif)

// ## Setup


// Your base URL for your API will be: http://localhost:3000

// - GET `/beers/[:id]` (start with /beers/1)
// - PATCH `/beers/[:id]`
// - GET `/beers` (for Advanced Deliverables only)



function start(){
fetch("http://localhost:3000/beers/1")
    .then(res => res.json())
    .then(data => addFirstBeerImage(data))
}

function addFirstBeerImage(data){
    //let html = ''
    document.querySelectorAll('div')
    document.querySelector('h2').innerHTML = `${data.name}`
    //the first h2 is beer name
    document.getElementById("home_image").src = `${data.image_url}`
    document.getElementsByTagName("form")[0][0].innerText = `${data.description}`
    console.log(data.reviews)
    //data.reviews.forEach(review => {
    //     html += `<li>${review}</li>`
    // })     <---- The previous commented code is what I *would* do, but I broke the database and somehow replaced the array with "THIS IS A TEST" while I was testing other functions.

    document.querySelectorAll("ul")[1].innerHTML = data.reviews
    //is it bad form to put an identifier on the HTML? I'll come back to this if I gotta later, I can find it with a selector but my battery is low and I'm panicking
}
start()

const reviewBox = document.getElementsByTagName("form")[1][0]
const reviewButton = document.querySelectorAll("form")[1].querySelector("input")
let reviewsUl = document.querySelectorAll("ul")[1]

reviewButton.addEventListener("click", function(e){
    e.preventDefault()
    addReview(reviewBox.value)
})
function addReview(value){
    document.querySelectorAll("ul")[1].innerHTML += `<li>${value}</li>`
}

const descriptionBox = document.querySelector("form")[0]
const updateDescriptionButton = document.querySelector("button")
updateDescriptionButton.addEventListener('click', function(e){
    e.preventDefault()
    fetch("http://localhost:3000/beers/1", {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({description: descriptionBox.value})
    })
})





// reviewButton.addEventListener('click', function(e){
//     e.preventDefault()
//     fetch("http://localhost:3000/beers/1", {
//             method: 'PATCH',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ reviews: reviewBox.value })
//           })
        
// Oh my god not only did I just completely break the data it but I just realized how much simpler this was supposed to be.
// the object's reviews attribute no longer is an array of reviews, but a string saying "THIS IS A TEST", due to my code.

// })
