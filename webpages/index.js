'use strict'

let estabs = [];
let estabId;

async function boot() {
  if(window.location.pathname == "/review.html") {
    const id = window.location.search.substr(4);
    const reviews = await getReviews(id);
    displayReviews(reviews);
    addListenersReview();
  } else {
    await getCategories();
    addListenersMain();
  }
}

function addListenersReview() {
  const submit = document.getElementById("Submit");
  submit.addEventListener("click", submitReview);
}

async function submitReview() {
  const est_id = window.location.search.substr(4);
  const author = document.getElementById("author").value;
  const content = document.getElementById("writeup").value;
  const score = document.getElementById("score").value;

  //validation

  const url = `/api/review?establishment=${est_id}&author=${author}&content=${content}&score=${score}`;

  const response = await fetch(url, { method: 'POST' });
  if(response.ok) {
    console.log("added review");
  } else {
    console.error('error adding review', response.status, response.statusText);
  }
}

function addListenersMain() {
  const categories = document.querySelectorAll(".category");
  for(let cat of categories) {
    cat.addEventListener("click", selectCategory);
  }
}

async function selectCategory(e) {
  console.log(e.target.textContent);
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
}

async function getEstablishment(e) {
  let id;
  for(let estab of estabs) {
    let parentText = e.target.parentNode.textContent;
    if(parentText.includes(estab.Name)) {
      id = estab.Est_Id;
      break;
    }
  }

  const url = '/api/establishment?id=' + id;
  const response = await fetch(url);

  if(response.ok) {
    displayEstab(await response.json());
    const reviews = await getReviews(id);
    displayReviews(reviews);
  } else {
    console.error('error getting establishment', response.status, response.statusText);
    //document.querySelector('body > main').innerHTML = 'sorry, something went wrong...';
  }
}

function displayCategories(categories) {
  const container = document.getElementById("categoryContainer");
  for (let cat of categories) {
    const el = document.createElement("li");
    el.textContent = cat.description;
    el.classList.add("category");
    container.appendChild(el);
  }
}

async function displayCategory(establishments) {
  estabs = [];
  removeButtons();

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
    li.addEventListener("click", getEstablishment);

    estabs.push(cat);
  }
}

function displayEstab(establishment) {
  estabs = [];

  removeButtons()

  let container = document.getElementById("dataContainer");
  const estabContainer = document.createElement("section");
  container.appendChild(estabContainer);
  container = estabContainer;

  for(let detail of establishment) {
    const name = document.createElement("h1");
    const infoContainer = document.createElement("section");
    const Address = document.createElement("p");
    const Town = document.createElement("p");
    const Postcode = document.createElement("p");
    const reviewContainer = document.createElement("ul");

    name.textContent = detail.Name;
    Address.textContent = detail.Address;
    Town.textContent = detail.Town;
    Postcode.textContent = detail.Postcode;

    reviewContainer.id = "reviewContainer";
    infoContainer.id = "infoContainer";

    container.appendChild(name);

    infoContainer.appendChild(Address);
    infoContainer.appendChild(Town);
    infoContainer.appendChild(Postcode);

    container.appendChild(infoContainer)
    container.appendChild(reviewContainer);

    estabs.push(detail);
  }

  //add buttons
  const review = document.createElement("button");
  const direction = document.createElement("button");
  const location = document.createElement("input");

  review.textContent = "Leave Review";
  direction.textContent = "Get Directions";
  review.addEventListener("click", leaveReview);
  direction.addEventListener("click", getDirections);

  location.type = "text";
  location.placeholder = "Location";
  location.id = "location";

  container.appendChild(review);
  container.appendChild(direction);
  container.appendChild(location);
}

function displayReviews(reviews) {
  const container = document.getElementBy("reviewContainer");

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

function removeButtons() {
  const container = document.getElementById("dataContainer");
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

  for(let data of estabs) {
    console.log(data);
  }


  const mapUrl = `http://maps.google.com/?q=${estab.Address} ${estab.Town} ${estab.Postcode}`;
  window.open(mapUrl);
}

//https://www.google.com/maps/?ll=longitude,latitude
//http://maps.google.com/?q=your+query (query as address in format "number-road-town")

window.addEventListener("load", boot)
