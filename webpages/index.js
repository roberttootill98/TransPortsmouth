'use strict'

let categories = ["bar", "nightclub"]

function boot() {
  console.log("getting contact");
  getCategory();
}

async function getCategory() {
  //const url = '/api/category?cat=' + category;
  const url = '/api/category';

  const response = await fetch(url);
  if(response.ok) {
    useResponse(await response.json());
  } else {
    console.error('error getting', response.status, response.statusText);
    //document.querySelector('body > main').innerHTML = 'sorry, something went wrong...';
  }
}

function useResponse(table) {
  console.log(table);
  console.log("using resp");
  const container = document.getElementById("categoryContainer");
  for (let cat of categories) {
    let el = document.createElement("li");
    el.textContext = cat;

    container.appendChild(el);

  }
}


window.addEventListener("load", boot)
