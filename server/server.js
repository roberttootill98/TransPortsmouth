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
  res.json(categories);
}

//list of establishments of type category
async function getCategory(req, res) {
  res.json(await db.showAll(req.query.cat));
}

//one category with full details and DIRECTIONS
async function getEstablishment(req, res) {
  res.json(await db.whereAll(req.query.establishment));
}

//list of reviews
async function getReview(req, res) {
  res.json(await db.showAll("review"));
}

//add one new review
async function postReview(req, res) {
  try {
    await db.addReview(req.establishment, req.title, req.desc, req.author);
    res.sendStatus(200);
  } catch(e) {
    console.error(e);
    res.sendStatus(404);
  }
}

app.listen(8080);

app.use('/', express.static('webpages', { extensions: ['html'] }));

//in-memory
let categories = ["bar", "nightclub", "Restaurant", "Univeristy", "shop", "Cafe", "gym"]
