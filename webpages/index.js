'use strict'

let categoriesarray = ["bar", "nightclub", "Restaurant", "Univeristy", "shop", "Cafe", "gym"]
let category = "University";

function boot() {
  useResponse();
  getCategory();
  addListeners();
}

function addListeners() {
  const categories = document.querySelectorAll(".category");
  console.log(categories);
  for(let cat of categories) {
    cat.addEventListener("onclick", changeCategory);
    console.log("added click")
  }
}

function changeCategory(e) {
  console.log(e.textContent);
  console.log("clicked");
}


async function getCategory() { // fetches establishments
  //const url = '/api/category?cat=' + category;
  //category = "University"
  const url = '/api/category?cat=' + category;
  //console.log("url =" url);
  console.log(url);

  const response = await fetch(url);
  if(response.ok) {
    displayCategory(await response.json());
  } else {
    console.error('error getting', response.status, response.statusText);
    //document.querySelector('body > main').innerHTML = 'sorry, something went wrong...';
  }
}

//getEstablishment()
//fetch on url = "/api/establishment?establishment=" + establishment

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

function useResponse(table) {
  const container = document.getElementById("categoryContainer");
  for (let cat of categoriesarray) {
    let el = document.createElement("button");
    el.textContent = cat;
    el.classList.add("category");
    container.appendChild(el);
  }
}


window.addEventListener("load", boot)
