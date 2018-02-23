'use strict'



function boot() {
  console.log("getting contact");
  getContact();
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
}


window.addEventListener("load", boot)
