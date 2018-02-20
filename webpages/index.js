'use strict'

let data = {
  "name":"max",
  "surname":"tune"
}

function boot(){

  let test = document.getElementById('test');
  let text = document.createElement("p");
  text.textContent = data.name;
  test.appendChild(text);


}


window.addEventListener("load", boot)
