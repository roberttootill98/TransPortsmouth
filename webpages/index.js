'use strict'

async function boot() {
  console.log("starting");
  await getCategories();
  //const categories = await getCategories();
  //displayCategories(categories);
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
  await getCategory(e.target.textContent);
}

//gets all categories
async function getCategories() {
  console.log("getting categories");
  const url = '/api/categories';

  const response = await fetch(url);
  if(response.ok) {
    //return await response.json();
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

async function getEstabDetails(e) {
  console.log(encodeURIComponent(e.target.textContent));
  const url = 'api/getOneEstab?name=' + encodeURIComponent(e.target.textContent)
  const response = await fetch(url);
  let estabDetails = await response.json();
  displayEstab(estabDetails);
}

function displayCategories(categories) {
  console.log(categories);
  const container = document.getElementById("categoryContainer");
  for (let cat of categories) {
    let el = document.createElement("li");
    el.textContent = cat.description;
    el.classList.add("category");
    container.appendChild(el);
  }
}

async function displayCategory(establishments) {
  console.log(establishments);
  const container = document.getElementById("dataContainer");

  removeButtons();

  for (let cat of establishments) {

    let el = document.createElement("li");
    let name = await getEstabName(cat.Est_Id);

    el.textContent = cat.Name + "\n" + cat.Address;
    el.classList.add("estab");
    container.appendChild(el);
    el.addEventListener("click", getEstabDetails);
  }
}

async function getEstabName(id){
  let temp
  const url = 'api/establishment?id=' + id;
  console.log(url);
  const response = await fetch(url);
  let names = await response.json();

  for (let name of names) {
    return name.Name;
  }
}

function displayEstab(estabDetails) {
  console.log(estabDetails + 'here');
  for (let detail of estabDetails){
    console.log(detail.Name);
    console.log(detail.Address);
    console.log(detail.Town);
    console.log(detail.Postcode);
  }
  removeButtons()
}



function removeButtons() {
  const container = document.getElementById("dataContainer");
  while (container.firstChild) { //deletes buttons currently onscreen
    container.removeChild(container.firstChild);
  }
}

function getDirections() {

}

//https://www.google.com/maps/?ll=longitude,latitude
//http://maps.google.com/?q=your+query (query as address in format "number-road-town")

window.addEventListener("load", boot)
