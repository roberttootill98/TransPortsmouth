const express = require('express');
const app = express();
const db = require('./ModelSQL.js');

app.get('/api/categories', getCategories);
app.get('/api/category', getCategory);
app.get('/api/establishment', getEstablishment);
app.get('/api/review', getReview);
app.post('/api/review', postReview);

db.init();

/**
* responds with static list of categories
* @param {req} request object
* @param {res} response object
*/
async function getCategories(req, res) {
  res.json(categories);
}

/**
* responds with list of establishments of type category with opening and closing times
* @param {req} request object
* @param {res} response object
*/
async function getCategory(req, res) {
  res.json(await db.showCategory(req.query.cat));
}

/**
* responds with one establishment
* @param {req} request object
* @param {res} response object
*/
async function getEstablishment(req, res) {
  res.json(await db.whereAll("Establishment", req.query.id, 'Est_Id'));
}

/**
* responds with list of reviews
* @param {req} request object
* @param {res} response object
*/
async function getReview(req, res) {
  res.json(await db.whereAll("Review", req.query.id, "Est_Id"));
}

/**
* add one new review
* @param {req} request object
* @param {res} response object
*/
async function postReview(req, res) {
  try {
    await db.addReview(req.query.establishment, req.query.author, req.query.content, req.query.score);
    res.sendStatus(200);
  } catch(e) {
    console.error(e);
    res.sendStatus(404);
  }
}

app.listen(8080);

app.use('/', express.static('webpages', { extensions: ['html'] }));

//in-memory
let categories = [
  {
    "id": "1",
    "description": "Bar"
  },
  {
    "id": "2",
    "description": "NightClub"
  },
  {
    "id": "3",
    "description": "Restaurant"
  },
  {
    "id": "4",
    "description": "University"
  },
  {
    "id": "5",
    "description": "Shop"
  },
  {
    "id": "6",
    "description": "Cafe"
  },
  {
    "id": "7",
    "description": "Gym"
  }
]
