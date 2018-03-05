const express = require('express');
const app = express();
const fs = ('require');
const db = require('./ModelSQL.js');

app.get('/api/categories', getCategories);
app.get('/api/category', getCategory);
app.get('/api/establishment', getEstablishment);
app.get('/api/review', getReview);
app.post('/api/review', postReview);

db.init();

//static list of categories
async function getCategories(req, res) {
  console.log("sending categories");
  console.log(categories);
  res.json(categories);
}

//list of establishments of type category
async function getCategory(req, res) {
  res.json(await db.showAll(req.query.cat));
}

//one category with full details and DIRECTIONS
async function getEstablishment(req, res) {
  res.json(await db.whereAll("Establishment", req.query.id));
}

//list of reviews
async function getReview(req, res) {
  res.json(await db.showAll("review"));
}

//add one new review
async function postReview(req, res) {
  try {
    await db.addReview(req.query.establishment, req.query.title, req.query.content, req.query.score);
    res.sendStatus(200);
  } catch(e) {
    console.error(e);
    res.sendStatus(404);
  }
}

app.listen(8080);

app.use('/', express.static('webpages', { extensions: ['html'] }));

//in-memory

//@rob, should this be i ModelSQL.js file?
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
