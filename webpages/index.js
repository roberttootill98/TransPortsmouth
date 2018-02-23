'use strict'

let data = {
  "name":"max",
  "surname":"tune"
}

function boot() {

  //let test = document.getElementById('test');
  //let text = document.createElement("p");
  //text.textContent = data.name;
  //test.appendChild(text);
  console.log("getting contact");
  getContact();
}

async function getContact() {
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
}


window.addEventListener("load", boot)
