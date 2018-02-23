const express = require('express');
const app = express();
const fs = ('require');
const db = require('./ModelSQL.js');

app.get('/api/planner', updateTitle);
app.get('/api/category', getAll);

db.init();

async function updateTitle(req, res) {
  await db.newTitle(req.query.t)
}

async function getAll(req, res) {
  res.json(await db.showAll("University"));
}

app.listen(8080);

app.use('/', express.static('webpages', { extensions: ['html'] }));
