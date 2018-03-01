'use strict'

let categoriesarray = ["bar", "nightclub", "Restaurant", "Univeristy", "shop", "Cafe", "gym"]


function boot() {
  useResponse();
  getCategories();
  addListeners();
}

function addListeners() {
  const categories = document.querySelectorAll(".category");
  console.log(categories);
  for(let cat of categories) {
    console.log(cat)
    cat.addEventListener("click", changeCategory);
    console.log("added click")
  }
}

/*
function changeCategory(e) {
  console.log(e.toElement.firstChild.data); // This is the catagory (if there is a more efficient way to fetch it, please replace)
  console.log("clicked");
  let category = e.toElement.firstChild.data
  getCategory(category);

  //Rob, what do you want happenning here?
}
*/

//gets all categories
async function getCategories() {
  const url = '/api/categories';

  const response = await fetch(url);
  if(response.ok) {
    displayCategory(await response.json());
  } else {
    console.error('error getting', response.status, response.statusText);
    //document.querySelector('body > main').innerHTML = 'sorry, something went wrong...';
  }
}

//gets all establishments for one category
async function getCategory(category) {
  const url = '/api/category?cat=' + category;
  console.log(url);

  const response = await fetch(url);
  if(response.ok) {
    displayCategory(await response.json());
  } else {
    console.error('error getting', response.status, response.statusText);
    //document.querySelector('body > main').innerHTML = 'sorry, something went wrong...';
  }
}

//gets one establishment
async function getEstablishment() {
  let establishment = 1;
  const url = 'api/establishment?est=' + establishment;
  const response = await fetch(url);
  if(response.ok) {
    displayEstablishment(await response.json())
  }
  else {
    console.error('error getting', response.status, response.statusText);
  }
}

function displayCategories(table) {
  const container = document.getElementById("categoryContainer");
  for (let cat of categoriesarray) {
    let el = document.createElement("button");
    el.textContent = cat;
    el.classList.add("category");
    container.appendChild(el);
  }
}

function displayCategory(table) {
  console.log(table);
  const container = document.getElementById("categoryContainer");
  for (let cat of table) {
    let el = document.createElement("button");
    el.textContent = cat;
    el.classList.add("category");
    container.appendChild(el);
  }
}

function displayEstablishment(estRecord){
  console.log(estRecord)
}

window.addEventListener("load", boot)
