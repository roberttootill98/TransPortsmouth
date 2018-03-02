'use strict'

async function boot() {
  const categories = await getCategories();
  displayCategories(categories);
  await addListeners();
}

function addListeners() {
  const categories = document.querySelectorAll(".category");
  for(let cat of categories) {
    cat.addEventListener("click", selectCategory);
  }
}

async function selectCategory(e) {
  console.log(e.target.textContent);
  const categories = await getCategories();
  console.log(categories);
  let search = 1;
  /*
  for(let cat of categories) {
    console.log(cat.type);
    console.log(cat.id);
    if(cat.type == e.target.textContent) {
      let search = cat.id;
    }
  }
  */
  await getCategory(search);
}

//gets all categories
async function getCategories() {
  const url = '/api/categories';

  const response = await fetch(url);
  if(response.ok) {
    return await response.json();
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
  } else {
    console.error('error getting', response.status, response.statusText);
  }
}

function displayCategories(categories) {
  const container = document.getElementById("categoryContainer");
  for (let cat of categories) {
    let el = document.createElement("li");
    el.textContent = cat.type;
    el.classList.add("category");
    container.appendChild(el);
  }
}

function displayCategory(establishments) {
  console.log(establishments);
  const container = document.getElementById("dataContainer");
  for (let cat of establishments) {
    let el = document.createElement("button");
    el.textContent = cat;
    el.classList.add("category");
    container.appendChild(el);
  }
}

function displayEstablishment(estRecord){
  console.log(estRecord);
}

function getDirections() {

}

//https://www.google.com/maps/?ll=longitude,latitude
//http://maps.google.com/?q=your+query (query as address in format "number-road-town")

window.addEventListener("load", boot)
