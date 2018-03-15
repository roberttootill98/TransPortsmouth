'use strict'

//for index.html
async function test() {
  let validResult = []; //stores status of all requests that should be valid
  let invalidResult = []; //stores status of all requests that should be invalid
  let working = true;

  //valid cases
  let review = (await getReviews(32))[0];
  if(!(review.Author == "John Smith" && review.Content == "Food was cold, and waiters were rude when I asked for it to be returned to the kitchen" && review.Score == 1)) {
    working = false;
  }
  /*
  {Est_Id: 32
  Author: "John Smith"
  Content: "Food was cold, and waiters were rude when I asked for it to be returned to the kitchen"
  Score: 1}
  */
  //getCategories etc
  //getEstablishment etc

  //invalid cases
  //id doesn't exist
  invalidResult.push(await getReviews(99999));
  //type error
  invalidResult.push(await getReviews("visdfjidsf"));

  //if any results are obtained from the invalid tests then they are passing with incorrect params
  for(let result of invalidResult) {
    if(result.length != 0) {
      working = false;
      break;
    }
  }

  console.log(working);
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
