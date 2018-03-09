'use strict'

let estabs = [];

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
  let name;
  for(let estab of estabs) {
    if(e.target.textContent.includes(estab)) {
      name = estab;
    }
  }

  const url = '/api/getOneEstab?name=' + name;
  const response = await fetch(url);

  if(response.ok) {
    displayEstab(response.json());
  } else {
    console.error('error getting', response.status, response.statusText);
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
  removeButtons();

  const container = document.getElementById("dataContainer");
  for (let cat of establishments) {
    const li = document.createElement("li");
    const h = document.createElement("h1");
    h.textContent = cat.Name;
    li.appendChild(h);
    const p = document.createElement("p");]
    p.textContent = cat.Address;
    li.appendChild(p);

    //el.textContent = cat.Name + "\n" + cat.Address;
    li.classList.add("estab");
    container.appendChild(li);
    li.addEventListener("click", getEstabDetails);

    estabs.push(cat.Name);
  }
}

async function getEstabName(id){
  const url = 'api/establishment?id=' + id;

  const response = await fetch(url);
  let names = await response.json();

  for (let name of names) {
    return name.Name;
  }
}

function displayEstab(estabDetails) {
  console.log(estabDetails);
  removeButtons()
  for (let detail of estabDetails){
    console.log(detail.Name);
    console.log(detail.Address);
    console.log(detail.Town);
    console.log(detail.Postcode);

    let name = document.createElement("h1");
    let Address = document.createElement("p");
    let Town = document.createElement("p");
    let Postcode = document.createElement("p");

    const container = document.getElementById("dataContainer");

    name.textContent = detail.Name;
    Address.textContent = detail.address;
    Town.textContent = detail.Town;
    Postcode.textContent = detail.Postcode;

    container.appendChild(name);
    container.appendChild(Address);
    container.appendChild(Town);
    container.appendChild(Postcode);
  }
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
