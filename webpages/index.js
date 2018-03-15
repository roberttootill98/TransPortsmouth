'use strict'

let estabs = [];
let estabId;

//startup function checks for html in use
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

function addListenersReview() {
  const submit = document.getElementById("Submit");
  submit.addEventListener("click", submitReview);
}

//empties both containers
function emptyContainers() {
  removeButtons(document.getElementById("dataContainer"));
  removeButtons(document.getElementById("estabContainer"));
}

//adds a review to the database
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

//adds listeners to every category
function addListenersMain() {
  const categories = document.querySelectorAll(".category");
  for(let cat of categories) {
    cat.addEventListener("click", selectCategory);
  }
}

async function selectCategory(e) {
  await getCategory(e.target.textContent);
}

//gets all reviews
async function getReviews(id) {
  const url = '/api/review?id=' + id; //estab id

  const response = await fetch(url);
  if(response.ok) {
    return await response.json();
  } else {
    console.error('error getting reviews', response.status, response.statusText);
  }
  return response.status;
}

//gets all categories
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

//gets all establishments for one category
async function getCategory(category) {
  //category as id
  const url = '/api/category?cat=' + category;
  console.log(url);

  const response = await fetch(url);
  if(response.ok) {
    displayCategory(await response.json());
  } else {
    console.error('error getting establishments', response.status, response.statusText);
    //document.querySelector('body > main').innerHTML = 'sorry, something went wrong...';
  }
  return response.status;
}

//gets id of establishment and runs functions to display
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

//returns establishment given id
async function getEstablishment(id) {
  const url = '/api/establishment?id=' + id;

  const response = await fetch(url);
  if(response.ok) {
    return await response.json();
  } else {
    console.error('error getting establishment', response.status, response.statusText);
    //document.querySelector('body > main').innerHTML = 'sorry, something went wrong...';
  }
  return response.status;
}

//puts categories in header
function displayCategories(categories) {
  const container = document.getElementById("categoryContainer");
  for (let cat of categories) {
    const el = document.createElement("li");
    el.textContent = cat.description;
    el.classList.add("category");
    container.appendChild(el);
  }
}

//displays establishments in main page
async function displayCategory(establishments) {
  estabs = [];

  emptyContainers();

  const container = document.getElementById("dataContainer");
  for (let cat of establishments) {
    const li = document.createElement("li");
    const h = document.createElement("h1");
    h.textContent = cat.Name;
    li.appendChild(h);
    const p = document.createElement("p");
    p.textContent = cat.Address;
    li.appendChild(p);

    li.classList.add("estab");
    container.appendChild(li);
    li.addEventListener("click", selectEstablishment);

    estabs.push(cat);
  }
}

//displays establihsment in main page
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

//displays reviews in container
//works on both pages
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

function removeButtons(container) {
  while (container.firstChild) { //deletes buttons currently onscreen
    container.removeChild(container.firstChild);
  }
}

async function leaveReview() {
  estabId = estabs[0].Est_Id;
  window.open('review.html?id=' + estabId);
}

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

//https://www.google.com/maps/?ll=longitude,latitude
//http://maps.google.com/?q=your+query (query as address in format "number-road-town")
//https://maps.google.com/maps/dir/?api=1&origin=place1&destination=place2

window.addEventListener("load", boot);
