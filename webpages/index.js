'use strict'

let estabs = [];
let estabId;

/**
* Runs when website is loaded, calls relevent functions, dependant on whjat page you are on
*/
async function boot() {
  if(window.location.pathname == "/review.html") {
    const id = window.location.search.substr(4);
    const reviews = await getReviews(id);
    displayReviews(reviews);
    addListenersReview();

    //change title
    const estab = await getEstablishment(id);
    const reviewTitle = document.getElementById("reviewTitle");
    reviewTitle.textContent += estab[0].Name;
  } else {
    await getCategories();
    addListenersMain();
  }
}
/**
* adds event listeners to submit button in reveiw page.
*/
function addListenersReview() {
  const submit = document.getElementById("Submit");
  submit.addEventListener("click", submitReview);
}

/**
* empties both containers
*/
function emptyContainers() {
  removeButtons(document.getElementById("dataContainer"));
  removeButtons(document.getElementById("estabContainer"));
}

/**
* extracts text from the textboxes and adds a review to the database
* @return {est_id, author, content, score} textbox values
*/
async function submitReview() {
  const est_id = window.location.search.substr(4);
  const author = document.getElementById("author").value;
  const content = document.getElementById("writeup").value;
  const score = parseInt(document.getElementById("score").value);

  //validation
  if(isNaN(score) || score < 0 || score > 10) {
    alert("Review must be between 0 and 10!");
  } else if(content == "" || author == "") {
    alert("Please fill in all fields");
  } else {
    //clear inputs
    document.getElementById("author").value = "";
    document.getElementById("writeup").value = "";
    document.getElementById("score").value = "";

    return await postReview(est_id, author, content, score);
  }
}

/**
* @param {est_id, author, content, score} values to be placed in url
* @return {status} Ststus of the url fetch
*/
async function postReview(id, author, content, score) {
  const url = `/api/review?establishment=${id}&author=${author}&content=${content}&score=${score}`;

  const response = await fetch(url, { method: 'POST' });
  if(response.ok) {
    const reviews = await getReviews(id);
    alert("Submitted Review");
    displayReviews(reviews);
  } else {
    console.error('error submitting review', response.status, response.statusText);
  }
  return response.status;
}

/**
* adds listeners to every category
*/
function addListenersMain() {
  const categories = document.querySelectorAll(".category");
  for(let cat of categories) {
    cat.addEventListener("click", selectCategory);
  }
}

/**
* @param {event} event of a catagory being clicked on
* collects where user clicked and passes this target to getCategory
*/
async function selectCategory(e) {
  await getCategory(e.target.textContent);
}

/**
* gets all reviews
* @return {reviews} all reviews
*/
async function getReviews(id) {
  const url = '/api/review?id=' + id; //estab id

  const response = await fetch(url);
  if(response.ok) {
    return await response.json();
  } else {
    console.error('error getting reviews', response.status, response.statusText);
  }
}

/**
* gets all categories
* @return {status} Ststus of the url fetch
*/
async function getCategories() {
  const url = '/api/categories';

  const response = await fetch(url);
  if(response.ok) {
    displayCategories(await response.json());
  } else {
    console.error('error getting categories', response.status, response.statusText);
    //document.querySelector('body > main').innerHTML = 'sorry, something went wrong...';
  }
  return response.status;
}

/**
* gets all establishments for one category
* @param {category} the selected catagory
* @return {status} Ststus of the url fetch
*/
async function getCategory(category) {
  //category as id
  const url = '/api/category?cat=' + category;

  const response = await fetch(url);
  if(response.ok) {
    displayCategory(await response.json());
  } else {
    console.error('error getting establishments', response.status, response.statusText);
    //document.querySelector('body > main').innerHTML = 'sorry, something went wrong...';
  }
  return response.status;
}

/**
*gets id of establishment and runs functions to display
* @param {event} event of a establishment being clicked on
*/
async function selectEstablishment(e) {
  let id;
  let parentText;

  for(let estab of estabs) {
    if(e.target.nodeName == "LI") {
      parentText = e.target.textContent;
    } else {
      parentText = e.target.parentNode.textContent;
    }
    if(parentText.includes(estab.Name) && parentText.includes(estab.Address)) {

      id = estab.Est_Id;
      break;
    }
  }
  const establishments = await getEstablishment(id);
  displayEstab(establishments);
  const reviews = await getReviews(id);
  displayReviews(reviews);
}

/**
*returns establishment given id
* @param {id} id of the establihsment
* @return {status} Ststus of the url fetch
*/

async function getEstablishment(id) {
  const url = '/api/establishment?id=' + id;

  const response = await fetch(url);
  if(response.ok) {
    return await response.json();
  } else {
    console.error('error getting establishment', response.status, response.statusText);
    //document.querySelector('body > main').innerHTML = 'sorry, something went wrong...';
  }
}

/**
* puts categories in header
* @param {categories} list of categories
*/
function displayCategories(categories) {
  const container = document.getElementById("categoryContainer");
  for (let cat of categories) {
    const el = document.createElement("li");
    el.textContent = cat.description;
    el.classList.add("category");
    container.appendChild(el);
  }
}

/**
* displays establishments in main page
* @param {establihsment} array containing establihsments
*/
async function displayCategory(establishments) {
  estabs = [];

  emptyContainers();

  const container = document.getElementById("dataContainer");
  for (let estab of establishments) {
    let open = checkOpen(estab);

    const li = document.createElement("li");
    const h = document.createElement("h1");
    const isOpen = document.createElement("h2");
    const p = document.createElement("p");

    if(open) {
      isOpen.textContent = "Open";
    } else {
      isOpen.textContent = "Closed";
    }

    h.textContent = estab.Name;
    p.textContent = estab.Address;

    li.appendChild(h);
    li.appendChild(isOpen);
    li.appendChild(p);

    container.appendChild(li);

    li.classList.add("estab");
    li.addEventListener("click", selectEstablishment);

    estabs.push(estab);
  }
}
/**
* checks to see if an establihsment is currently open
* @param {etstab} one establihsment
*/
function checkOpen(estab) {
  let open = false;

  const date = new Date();
  const day = date.getDay();
  const time = `${date.getHours()}:${date.getMinutes()}`;

  if(day == 0) {
    if(time >= estab.Mon_Open && time <= estab.Mon_Close) {
      open = true;
    }
  } else if(day == 1) {
    if(time >= estab.Tue_Open && time <= estab.Tue_Close) {
      open = true;
    }
  } else if(day == 3) {
    if(time >= estab.Wed_Open && time <= estab.Wed_Close) {
      open = true;
    }
  } else if(day == 4) {
    if(time >= estab.Thu_Open && time <= estab.Thu_Close) {
      open = true;
    }
  } else if(day == 5) {
    if(time >= estab.Fri_Open && time <= estab.Fri_Close) {
      open = true;
    }
  } else if(day == 6) {
    if(time >= estab.Sat_Open && time <= estab.Sat_Close) {
      open = true;
    }
  } else if(day == 7) {
    if(time >= estab.Sun_Open && time <= estab.Sun_Close) {
      open = true;
    }
  }
  return open;
}

/**
* displays one establihsment in main page
* @param {establishment}  one establishment
*/

function displayEstab(establishment) {
  estabs = [];

  emptyContainers();

  const data = document.getElementById("dataContainer");
  const container = document.getElementById("estabContainer");

  for(let detail of establishment) {
    const name = document.createElement("h1");
    const infoContainer = document.createElement("section");
    const Address = document.createElement("p");
    const Town = document.createElement("p");
    const Postcode = document.createElement("p");
    const reviewContainer = document.createElement("ul");
    const reviewTitle = document.createElement("h2");

    name.textContent = detail.Name;
    Address.textContent = detail.Address;
    Town.textContent = detail.Town;
    Postcode.textContent = detail.Postcode;

    reviewTitle.textContent = "Reviews";

    reviewContainer.id = "reviewContainer";
    infoContainer.id = "infoContainer";

    container.appendChild(name);

    infoContainer.appendChild(Address);
    infoContainer.appendChild(Town);
    infoContainer.appendChild(Postcode);

    reviewContainer.appendChild(reviewTitle);

    container.appendChild(infoContainer)
    container.appendChild(reviewContainer);

    estabs.push(detail);
  }

  //add buttons
  const buttonContainer = document.createElement("section");
  const review = document.createElement("button");
  const direction = document.createElement("button");
  const location = document.createElement("input");

  review.textContent = "Leave Review";
  direction.textContent = "Get Directions";
  review.addEventListener("click", leaveReview);
  direction.addEventListener("click", getDirections);

  location.type = "text";
  location.placeholder = "Your location";
  location.id = "location";

  buttonContainer.id = "buttonContainer";

  buttonContainer.appendChild(review);
  buttonContainer.appendChild(direction);
  buttonContainer.appendChild(location);
  container.appendChild(buttonContainer);
}

/**
* displays reviews in container
* works on both pages
* @param {reviews} array containing reviews
*/
function displayReviews(reviews) {
  const container = document.getElementById("reviewContainer");

  for(let review of reviews) {
    const li = document.createElement("li");
    const author = document.createElement("h1");
    const content = document.createElement("p");
    const score = document.createElement("p");

    author.textContent = review.Author;
    content.textContent = review.Content;
    score.textContent = review.Score;

    li.appendChild(author);
    li.appendChild(content);
    li.appendChild(score);

    container.appendChild(li);
  }
}

/**
* removes all elements in the dataContainer element
* @param {container} area where information is placed on the HTML document
*/
function removeButtons(container) {
  while (container.firstChild) { //deletes buttons currently onscreen
    container.removeChild(container.firstChild);
  }
}

/**
* opens a new window passing the review id in the URL
*/
async function leaveReview() {
  estabId = estabs[0].Est_Id;
  window.open('review.html?id=' + estabId);
}

/**
* takes the value of the location textbox and passes it to the google maps URL to give directions
*/
function getDirections() {
  const estab = estabs[0];

  let mapUrl = "https://maps.google.com/";
  const destination = `${estab.Address}+${estab.Town}+${estab.Postcode}`
  const origin = document.getElementById("location").value;
  if(origin) {
    mapUrl += `maps/dir/?api=1&origin=${origin}&destination=${destination}`;
  } else {
    mapUrl += `?q=${destination}`;
  }
  window.open(mapUrl);
}

window.addEventListener("load", boot);
