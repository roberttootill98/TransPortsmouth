'use strict'

//for index.html
async function test() {

}

//for review.html
async function reviewTest() {
  let result = [];
  console.log("starting test");

  //valid case
  result[0] = await submitReviewTest("Me", "It's a Restaurant", 5);
  //invalid cases

  //boundary cases

  console.log("results:");
  console.log(result);
}

async function submitReviewTest(auth, cont, scr) {
  const author = document.getElementById("author");
  const content = document.getElementById("writeup");
  const score = document.getElementById("score");

  author.value = auth;
  content.value = cont;
  score.value = scr;

  return await submitReview();
}
