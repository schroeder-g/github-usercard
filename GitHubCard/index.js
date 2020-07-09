/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
// const me = axios.get('https://api.github.com/users/schroeder-g')
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
function getUsers(userName){
let newUser = `https://api.github.com/users/${userName}`
axios.get(newUser)
.then(function(response){
  debugger
  const newCard = gitProfileCreator(response.data)
 
  const cardEntry = document.querySelector(".cards")
  cardEntry.appendChild(newCard)
})
.catch(error => {
  console.log(error)
})
}
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [  'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'schroeder-g'];

followersArray.forEach(user => {
  getUsers(user)
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
*/
function gitProfileCreator (gitUser){

  //instantiating elements with classes and innertext
  const card = document.createElement("div")
  card.classList.add("card")
  const profPic = document.createElement("img")
  profPic.src = gitUser.avatar_url
  const cardInfo = document.createElement("div")
  cardInfo.classList.add("card-info")
  const name = document.createElement("h3")
  name.classList.add("name")
  name.innerText = gitUser.name
  const userName = document.createElement("p")
  userName.classList.add("username")
  userName.innerText = gitUser.login
  const location = document.createElement("p")
  location.innerText = gitUser.location
  const profile = document.createElement("p")
  profile.innerText = `Profile: `
  const profileAddress = document.createElement("a")
  profileAddress.href = gitUser.html_url
  profileAddress.innerText = `${gitUser.html_url}`
  const followers = document.createElement("p")
  followers.innerText = `Followers: ${gitUser.followers}`
  const following = document.createElement("p")
  following.innerText = `Following:  ${gitUser.following}`
  const bio = document.createElement("p")
  bio.innerText = `Bio: ${gitUser.bio}`

  const cardBtn = document.createElement("button")
  cardBtn.classList.add("card-btn")
  cardBtn.innerText = "See More"
  cardBtn.addEventListener("click", () => {
    cardInfo.classList.toggle("visible")
  })

  //creating element hierarchy
card.appendChild(profPic)
card.appendChild(cardBtn)
card.appendChild(cardInfo)
cardInfo.appendChild(name)
cardInfo.appendChild(userName)
cardInfo.appendChild(location)
cardInfo.appendChild(profile)
profile.appendChild(profileAddress)
cardInfo.appendChild(followers)
cardInfo.appendChild(following)
cardInfo.appendChild(bio)

console.log(card)

return card
}

/*
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
