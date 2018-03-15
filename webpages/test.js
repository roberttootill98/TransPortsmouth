'use strict'

//for index.html
async function test() {

}

//for review.html
async function reviewTest() {
  let validResult = []; //stores status of all requests that should be valid
  let invalidResult = []; //stores status of all requests that should be invalid
  let working = true;

  //valid case
  validResult.push(await submitReviewTest("Me", "It's a Restaurant", 5));



  //invalid cases

  //type errors
  invalidResult.push(await submitReviewTest("Me", "It's a Restaurant", "difjsdjif"));

  //boundary cases
  //inside boundary
  validResult.push(await submitReviewTest("Me", "It's a Restaurant", 0));
  validResult.push(await submitReviewTest("Me", "It's a Restaurant", 10));
  //outside boundary
  invalidResult.push(await submitReviewTest("Me", "It's a Restaurant", -1));
  invalidResult.push(await submitReviewTest("Me", "It's a Restaurant", 11));

  //checks all results are valid
  for(let result of validResult) {
    if(result != 200) {
      working = false;
      break;
    }
  }

  //checks all results are invalid
  for(let result of invalidResult) {
    if(!(result === undefined)) {
      working = false;
      break;
    }
  }

  console.log(working);
}

//creates a review of an establishment
async function submitReviewTest(auth, cont, scr) {
  const author = document.getElementById("author");
  const content = document.getElementById("writeup");
  const score = document.getElementById("score");

  author.value = auth;
  content.value = cont;
  score.value = scr;

  return await submitReview();
}
