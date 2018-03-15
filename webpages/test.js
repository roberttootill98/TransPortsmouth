'use strict'

//for index.html
function test() {

}

//for review.html
function reviewTest() {
  let result = [];
  console.log("starting test");

  result[0] = submitReviewTest("Me", "It's a Restaurant", 5);

  console.log(result);
}

function submitReviewTest(auth, cont, scr) {
  const author = document.getElementById("author");
  const content = document.getElementById("writeup");
  const score = document.getElementById("score");

  author.value = auth;
  content.value = cont;
  score.value = scr;

  submitReview();
}
