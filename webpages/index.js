'use strict'

let categoriesarray = ["bar", "nightclub", "Restaurant", "Univeristy", "shop", "Cafe", "gym"]


function boot() {
  useResponse();
  getCategory();
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

function changeCategory(e) {
  console.log(e.toElement.firstChild.data); // This is the catagory (if there is a more efficient way to fetch it, please replace)
  console.log("clicked");
  let category = e.toElement.firstChild.data
  getCategory(category)

  //Rob, what do you want happenning here?
}


async function getCategory(category) { // fetches establishments
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

async function getEstablishment() {
  let establishment = "nothing for now"
  const url = 'api/establishment?est=' + establishment
  const response = await fetch(url);
  if(response.ok) {
    displayEstablishment(await response.json())
  }
  else {
    console.error('error getting', response.status, response.statusText);
  }
}

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

  function displayEstablishment(estRecord){
    console.log(estRecord)

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
