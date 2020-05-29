// Code here
const API = ('http://localhost:3000/beers/1')


function fetchBeers() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        renderBeers(data)
    })
    
}
const collection = document.querySelector('.beer-details')


function renderBeers(beer) {
    const li = `<div class="description" id=${beer.id}>
             <h2>${beer.name}</h2>
             <img src=${beer.image_url}>
    
           <form class="description">
           <textarea>${beer.description}</textarea>
            <button>Update Beer</button>
            </form>
    
             <h3>Leave a Review</h3>
             <form class="review-form">
               <textarea></textarea>
               <input type="submit" value="Submit">
             </form>
    
             <h3>Customer Reviews</h3>
             <ul class="reviews">
               <li>${beer.reviews}</li>
               <li>From the server</li>
             </ul>
           </div>`

    collection.innerHTML = li
}




// description.addEventListener('click', function(event){
    

// })







// function renderBeers(data) {
    
//         const li = `<div class="description" id=${beer.id}>
//         <h2>${beer.name}</h2>
//         <img src=${beer.image_url}>

//         <form class="description">
//           <textarea>${beer.description}</textarea>
//           <button>Update Beer</button>
//         </form>

//         <h3>Leave a Review</h3>
//         <form class="review-form">
//           <textarea></textarea>
//           <input type="submit" value="Submit">
//         </form>

//         <h3>Customer Reviews</h3>
//         <ul class="reviews">
//           <li>${beer.reviews}</li>
//           <li>From the server</li>
//         </ul>
//       </div>`
//         collection.innerHTML = li

// }



// const submitBtn = document.querySelector('.review-form')
// // console.log(submitBtn)
// submitBtn.addEventListener('submit', function(event){
//     // event.preventDefault()
//     console.log(submitBtn.innerHTML)
// })

fetchBeers()