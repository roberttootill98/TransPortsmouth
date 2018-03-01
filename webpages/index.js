'use strict'

async function boot() {
  await getCategories();
  await addListeners();
}

function addListeners() {
  const categories = document.querySelectorAll(".category");
  for(let cat of categories) {
    cat.addEventListener("click", selectCategory);
  }
}

function selectCategory(e) {
  console.log(e.target.textContent);
  getCategory(e.target.textContent);
}

//gets all categories
async function getCategories() {
  const url = '/api/categories';

  const response = await fetch(url);
  if(response.ok) {
    displayCategories(await response.json());
  } else {
    console.error('error getting', response.status, response.statusText);
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

function displayCategories(categories) {
  const container = document.getElementById("categoryContainer");
  console.log(categories);
  for (let cat of categories) {
    let el = document.createElement("button");
    console.log(cat.type);
    el.textContent = cat.type;
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
  console.log(estRecord);
}

window.addEventListener("load", boot)
