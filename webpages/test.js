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
  //type errors
  result[1] = await submitReviewTest("Me", "It's a Restaurant", "difjsdjif");

  //boundary cases
  //inside boundary
  result[2] = await submitReviewTest("Me", "It's a Restaurant", 0);
  result[3] = await submitReviewTest("Me", "It's a Restaurant", 10);
  //outside boundary
  result[4] = await submitReviewTest("Me", "It's a Restaurant", -1);
  result[5] = await submitReviewTest("Me", "It's a Restaurant", 11);

  console.log("results:");
  console.log(result);

  /*
  for(let res of results) {
    if(res == )
  }
  */
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
